import { createContext } from "preact";
import type { ComponentChild } from "preact";
import { useState, useEffect } from "preact/hooks";

interface RadioGroupContextType {
  GroupToken: boolean;
  activityValue: any;
  gatherChangeValue?: (value: any) => void;
  name?: string;
}

let RadioGroupContext = createContext<RadioGroupContextType | null>(null);

interface RadioGroupProps {
  value?: any;
  onChange?: (value: any) => void;
  name?: string;
  className?: string;
  direction?: 'horizontal' | 'vertical';
  children?: ComponentChild;
}

export default function RadioGroup({
  value: propsValue,
  onChange,
  name,
  className = "",
  direction = 'horizontal',
  children
}: RadioGroupProps) {
  const [value, setValue] = useState(propsValue !== undefined ? propsValue : null);

  // 当 props.value 变化时更新状态
  useEffect(() => {
    if (propsValue !== undefined) {
      setValue(propsValue);
    }
  }, [propsValue]);

  const handleChange = (newValue: any) => {
    setValue(newValue);
    onChange && onChange(newValue);
  };

  const contextValue: RadioGroupContextType = {
    GroupToken: true,
    activityValue: value,
    gatherChangeValue: handleChange,
    name
  };

  return (
    <RadioGroupContext.Provider value={contextValue}>
      <div className={`na-radio-group na-radio-group--${direction} ${className}`}>
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
}

export { RadioGroupContext };
