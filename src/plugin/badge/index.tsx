import "./src/style.scss";
import { sizeProps } from "@toolkit/baseType";
interface BadgeProps extends sizeProps {
  value?: string | number;
  children?: any;
}

const Badge = (props: BadgeProps) => {
  return (
    <div class={`na-badge  na-badge__${props.size || "normal" }`}>
      <div class={`after `} >{props.value}</div>
      {props.children}
    </div>
  );
};

export default Badge;
export type { BadgeProps };
