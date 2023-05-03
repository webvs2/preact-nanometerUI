import "./src/style.scss";
import { sizeProps } from "toolkit/type";
interface buttonProps extends sizeProps {
  value?: string;
  negative?: boolean;
  onClick?: () => void;
  children?: any;
}

function buttonComponent(props: buttonProps) {
  return (
    <button
      onClick={props.onClick}
      class={`na-button  na-button__${props.size || "normal"}
        ${
        !props.negative ? "hover:bg-gray-300" : "bg-gray-200"
      }  `}
    >
      {props.value || props.children}
    </button>
  );
} 
export default buttonComponent;
export type {buttonProps}
