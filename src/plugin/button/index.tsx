import "./style.scss";
import { sizeProps, typeProps } from "@toolkit/baseType";
// import {classEsm} from "@toolkit/helper";
import classNames from "classNames";
import { bemStr } from "@/toolkit/bem";
let bem = bemStr("button");

interface buttonProps extends sizeProps {
  type?: typeProps;
  onClick?: any;
  children?: any;
  disabled?: boolean;
  form?: string;
  icon?: string;
  plain?: boolean;
  round?: boolean;
  loading?: boolean;
  text?: string;
}

function buttonComponent(props: buttonProps) {
  let btnClass = classNames({
    "na-button ": true,
    [bem("","text")]: !props.type,
    [bem("", "disabled")]: props.disabled,
    [bem("", props.type)]: props.type,
    [bem(props.size || "normal")]: true,
    [bem("plain")]: props.plain,
    [bem("round")]: props.round,
    [bem("loading")]: props.loading,
    after: props.type,
  });

  return (
    <button
      disabled={props.disabled}
      type={props.type || "button"}
      onClick={props.onClick}
      class={btnClass}
      name="button"
    >
      {props.children}
      {props.icon && <i class={`iconfont ${props.icon}`}></i>}
    </button>
  );
}
export default buttonComponent;
export type { buttonProps };
