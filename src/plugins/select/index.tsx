import "./styles.scss";
import { useState, useRef, useEffect } from "preact/hooks";
import {
  useFloating,
  useClick,
  useDismiss,
  useRole,
  useListNavigation,
  useInteractions,
  FloatingFocusManager,
  useTypeahead,
  offset,
  flip,
  size,
  autoUpdate,
  FloatingPortal,
} from "@floating-ui/react";

interface Option {
  value: string | number;
  label: string;
}

interface SelectProps {
  options?: (string | Option)[];
  value?: string | number;
  onChange?: (value: string | number) => void;
  placeholder?: string;
  disabled?: boolean;
  size?: 'small' | 'middle' | 'large';
  className?: string;
}

export default function Select({ 
  options = [], 
  value, 
  onChange, 
  placeholder = "请选择", 
  disabled = false, 
  size = 'middle',
  className = ""
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // 处理 options 格式
  const processedOptions = options.map(option => 
    typeof option === 'string' ? { value: option, label: option } : option
  );

  // 根据 value 找到选中的索引
  useEffect(() => {
    if (value !== undefined) {
      const index = processedOptions.findIndex(opt => opt.value === value);
      setSelectedIndex(index >= 0 ? index : null);
    }
  }, [value, processedOptions]);

  const { refs, floatingStyles, context } = useFloating({
    placement: "bottom-start",
    open: isOpen && !disabled,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({ padding: 10 }),
      size({
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${availableHeight}px`,
            minWidth: `${rects.reference.width}px`,
          });
        },
        padding: 10,
      }),
    ],
  });

  const listRef = useRef<Array<HTMLElement | null>>([]);
  const listContentRef = useRef(processedOptions.map(opt => opt.label));
  const isTypingRef = useRef(false);

  const click = useClick(context, { event: "mousedown" });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "listbox" });
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    selectedIndex,
    onNavigate: setActiveIndex,
    loop: true,
  });
  const typeahead = useTypeahead(context, {
    listRef: listContentRef,
    activeIndex,
    selectedIndex,
    onMatch: isOpen ? setActiveIndex : setSelectedIndex,
    onTypingChange(isTyping) {
      isTypingRef.current = isTyping;
    },
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [dismiss, role, listNav, typeahead, click]
  );

  const handleSelect = (index: number) => {
    const selectedOption = processedOptions[index];
    setSelectedIndex(index);
    setIsOpen(false);
    onChange && onChange(selectedOption.value);
  };

  const selectedItem = selectedIndex !== null ? processedOptions[selectedIndex] : null;
  const selectedItemLabel = selectedItem ? selectedItem.label : '';

  return (
    <div className={`na-select ${className} ${disabled ? 'na-select--disabled' : ''} ${size && size !== 'middle' ? `na-select--${size}` : ''}`}>
      <div
        className="na-select__trigger"
        tabIndex={disabled ? -1 : 0}
        ref={refs.setReference}
        aria-label="选择"
        aria-autocomplete="none"
        aria-disabled={disabled}
        {...getReferenceProps()}
      >
        <span className={`na-select__value ${!selectedItemLabel ? 'na-select__value-placeholder' : ''}`}>
          {selectedItemLabel || placeholder}
        </span>
        <span className={`na-select__arrow ${isOpen ? 'na-select__arrow--open' : ''}`}>
          <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
            <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
          </svg>
        </span>
      </div>
      {isOpen && (
        <FloatingPortal>
          <FloatingFocusManager context={context} modal={false}>
            <div
              ref={refs.setFloating}
              className="na-select__options"
              style={{
                ...floatingStyles,
              }}
              {...getFloatingProps()}
            >
              {processedOptions.map((option, i) => (
                <div
                  key={option.value}
                  ref={(node) => {
                    listRef.current[i] = node;
                  }}
                  role="option"
                  tabIndex={i === activeIndex ? 0 : -1}
                  aria-selected={i === selectedIndex}
                  className={`na-select__option ${i === activeIndex ? 'na-select__option--active' : ''} ${i === selectedIndex ? 'na-select__option--selected' : ''}`}
                  {...getItemProps({
                    onClick() {
                      handleSelect(i);
                    },
                    onKeyDown(event) {
                      if (event.key === "Enter") {
                        event.preventDefault();
                        handleSelect(i);
                      }

                      if (event.key === " " && !isTypingRef.current) {
                        event.preventDefault();
                        handleSelect(i);
                      }
                    },
                  })}
                >
                  {option.label}
                  {i === selectedIndex && (
                    <span className="na-select__option-check">
                      <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
                        <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
                      </svg>
                    </span>
                  )}
                </div>
              ))}
            </div>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </div>
  );
}
