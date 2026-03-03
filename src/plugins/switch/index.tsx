import "./style.scss";
import { useState, useEffect } from "preact/hooks";
import classNames from "classnames";

interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: 'small' | 'default';
  className?: string;
  children?: any;
}

export default function Switch({
  checked: propsChecked,
  defaultChecked = false,
  onChange,
  disabled = false,
  size = 'default',
  className = "",
  children
}: SwitchProps) {
  const [checked, setChecked] = useState(
    propsChecked !== undefined ? propsChecked : defaultChecked
  );

  useEffect(() => {
    if (propsChecked !== undefined) {
      setChecked(propsChecked);
    }
  }, [propsChecked]);

  const handleClick = () => {
    if (disabled) return;
    
    const newChecked = !checked;
    if (propsChecked === undefined) {
      setChecked(newChecked);
    }
    onChange && onChange(newChecked);
  };

  const btnClass = classNames(
    "na-switch",
    className,
    {
      "na-switch--checked": checked,
      "na-switch--disabled": disabled,
      "na-switch--small": size === 'small',
    }
  );

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-disabled={disabled}
      class={btnClass}
      onClick={handleClick}
      disabled={disabled}
    >
      <span class="na-switch__handle">
        {checked && size === 'default' && (
          <span class="na-switch__handle-inner">✓</span>
        )}
      </span>
      {children && <span class="na-switch__label">{children}</span>}
    </button>
  );
}

export type { SwitchProps };
