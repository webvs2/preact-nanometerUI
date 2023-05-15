import "./src/style.scss";
import { sizeProps, typeProps } from "@toolkit/baseType";
// import {classEsm} from "@toolkit/helper";
import classNames from "classNames";

interface buttonProps extends sizeProps {
  value?: string;
  negative?: typeProps;
  onClick?: any;
  children?: any;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  form?: string;
}

function buttonComponent(props: buttonProps) {
  let btnClass = classNames({
    "na-button": true,
    "hover:bg-gray-300": !props.negative,
    "na-button--disabled": props.disabled,
    [`na-button--${props.negative}`]: props.negative,
    [`na-button__${props.size||'normal'}`]: true,
  });
  return (
    <button
      disabled={props.disabled}
      type={props.type || "button"}
      onClick={props.onClick}
      class={btnClass}
      name='button'
    >
      {props.value || props.children}
    </button>
  );
}
export default buttonComponent;
export type { buttonProps };
