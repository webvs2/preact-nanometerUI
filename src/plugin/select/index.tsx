import "./styles.scss";
// import * as preact from "preact";
import { useState, useRef } from "preact/hooks";
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

const options = [
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Cyan",
  "Blue",
  "Purple",
  "Pink",
  "Maroon",
  "Black",
  "White",
];

export default function select() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const { refs, floatingStyles, context } = useFloating({
    placement: "bottom-start",
    open: isOpen,
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
  const listContentRef = useRef(options);
  const isTypingRef = useRef(false);

  const click = useClick(context, { event: "mousedown" });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "listbox" });
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    selectedIndex,
    onNavigate: setActiveIndex,
    // This is a large list, allow looping.
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
    setSelectedIndex(index);
    setIsOpen(false);
  };

  const selectedItemLabel =
    selectedIndex !== null ? options[selectedIndex] : undefined;

  return (
    <>
      {/* <h1>Floating UI — Select</h1>
      <label id="select-label">Select balloon color</label> */}
      <div
        class={`selectBox`}
        tabIndex={0}
        ref={refs.setReference}
        aria-labelledby="select-label"
        aria-autocomplete="none"
        {...getReferenceProps()}
      >
        <input type="text" value={selectedItemLabel} />
        {/* {selectedItemLabel || "Select..."} */}
      </div>
      {isOpen && (
        <FloatingPortal>
          <FloatingFocusManager context={context} modal={false}>
            <div
              ref={refs.setFloating}
              class={`optionBox`}
              style={{
                ...floatingStyles,
              }}
              {...getFloatingProps()}
            >
              {options.map((value, i) => (
                <div
                  key={value}
                  ref={(node) => {
                    listRef.current[i] = node;
                  }}
                  role="option"
                  tabIndex={i === activeIndex ? 0 : -1}
                  aria-selected={i === selectedIndex && i === activeIndex}
            
                  
                  class={ `${i === activeIndex?'present': ""} usual` }
                  {...getItemProps({
                    // Handle pointer select.
                    onClick() {
                      handleSelect(i);
                    },
                    // Handle keyboard select.
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
                  {value}
                  <span
                    aria-hidden
                    style={{
                      position: "absolute",
                      right: 10,
                    }}
                  >
                    {i === selectedIndex ? " ✓" : ""}
                  </span>
                </div>
              ))}
            </div>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </>
  );
}
