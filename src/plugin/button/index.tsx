import "./style.scss";
import { sizeProps, typeProps } from "@toolkit/baseType";
// import {classEsm} from "@toolkit/helper";
import classNames from "classNames";
import { bemStr } from "@/toolkit/bem";
let  bem = bemStr("button");

interface buttonProps extends sizeProps {
  value?: string;
  negative?: typeProps;
  onClick?: any;
  children?: any;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  form?: string;
  icon?: string;
}

function buttonComponent(props: buttonProps) {
  console.log("bem('disabled')",bem('',props.negative))
  let btnClass = classNames({
    'na-button': true,
    "hover:bg-gray-300": !props.negative,
    [bem('','disabled')]: props.disabled,
    [bem('',props.negative)]: true,
    [bem(props.size||'normal')]: true,
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
      {props.icon && <i class={`iconfont ${props.icon}`}></i>}
    </button>
  );
}
export default buttonComponent;
export type { buttonProps };
