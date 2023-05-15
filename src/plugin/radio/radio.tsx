import "./style.scss";
import {
  Attributes,
  Component,
  ComponentChild,
  ComponentChildren,
  createContext,
  Ref,
} from "preact";  
import { useContext } from 'preact/hooks'
import classNames from "classNames";
const Username = createContext(null)
interface radioProps {
  autoFocus?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  value?: any;
}
let btnClass = classNames({
  "na-radio": true,
  "checked:bg-blue-500": true,
});
class radio extends Component<radioProps> {
  render(props): ComponentChild {
    return (
      <span class={`na-radio`}>
        <input
          id={props.value}
          class={btnClass}
          type="radio"
          name={props.value}
          autoFocus={props.autoFocus}
          checked={props.checked || props.defaultChecked}
          value={props.value}
        />
        <label for={props.value} class={`na-radio__label `}></label>
        <span>{props.children}</span>
      </span>
    );
  }
}

export default radio;
export type { radioProps };
