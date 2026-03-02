import "./style.scss";
import { useContext, useEffect, useState } from "preact/hooks";
import { RadioGroupContext } from "./radioGroup";
import classNames from "classnames";

interface RadioProps {
  autoFocus?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  value?: any;
  name?: string;
  onClick?: (checked: boolean, event: Event) => void;
  onChange?: (checked: boolean, event: Event) => void;
  className?: string;
  children?: any;
}

export default function Radio({
  autoFocus = false,
  checked: propsChecked,
  defaultChecked = false,
  disabled = false,
  value,
  name,
  onClick,
  onChange,
  className = "",
  children
}: RadioProps) {
  const radioGroupContext = useContext(RadioGroupContext);
  const [checked, setChecked] = useState(propsChecked !== undefined ? propsChecked : defaultChecked);

  // 当 props.checked 变化时更新状态
  useEffect(() => {
    if (propsChecked !== undefined) {
      setChecked(propsChecked);
    }
  }, [propsChecked]);

  // 当 radioGroup 的值变化时更新状态
  useEffect(() => {
    if (radioGroupContext && radioGroupContext.GroupToken) {
      setChecked(radioGroupContext.activityValue === value);
    }
  }, [radioGroupContext, value]);

  const handleChange = (event: Event) => {
    const newChecked = !checked;
    setChecked(newChecked);
    
    // 通知 radioGroup
    if (radioGroupContext && radioGroupContext.GroupToken) {
      radioGroupContext.gatherChangeValue && radioGroupContext.gatherChangeValue(value);
    }
    
    // 调用回调
    onChange && onChange(newChecked, event);
    onClick && onClick(newChecked, event);
  };

  const btnClass = classNames(
    "na-radio",
    className,
    {
      "na-radio--checked": checked,
      "na-radio--disabled": disabled,
    }
  );

  const inputName = radioGroupContext && radioGroupContext.GroupToken ? radioGroupContext.name : name;

  return (
    <label className={btnClass} role="radio" aria-checked={checked} aria-disabled={disabled}>
      <span className="na-radio__input">
        <input
          type="radio"
          name={inputName}
          checked={checked}
          onChange={handleChange}
          onClick={handleChange}
          disabled={disabled}
          autoFocus={autoFocus}
          value={value}
        />
        <span className="na-radio__inner"></span>
      </span>
      {children && (
        <span className="na-radio__label">
          {children}
        </span>
      )}
    </label>
  );
}

export type { RadioProps };
