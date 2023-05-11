import "./src/style.scss";
import { sizeProps, typeProps } from "@toolkit/baseType";
// import {classEsm} from "@toolkit/helper";
interface buttonProps extends sizeProps {
  value?: string;
  negative?: typeProps;
  onClick?: any;
  children?: any;
  disabled?: boolean;
  nativeType?: "button" | "submit" | "reset";
}

// let baseClass = classEsm([])
function buttonComponent(props: buttonProps) {
  return (
    <button
      disabled={props.disabled}
      type={props.nativeType || "button"}
      onClick={props.onClick}
      class={` na-button na-button__${props.size || "normal"}
        ${!props.negative ? "hover:bg-gray-300" : `na-button--${props.negative}` } 
         ${props.disabled ? "na-button--disabled" : ""} `}
       

    >
      {props.value || props.children}
    </button>
  );
}
export default buttonComponent;
export type { buttonProps };
