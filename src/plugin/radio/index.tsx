import "./style.scss";
import {
  Attributes,
  Component,
  ComponentChild,
  ComponentChildren,
  Ref,
} from "preact";

interface radioProps {
  autoFocus?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  value?: any;
}
class radio extends Component<radioProps> {
  render(props): ComponentChild {
    return (
      <span class={`na-radio`}>
        <input
          id={props.value}
          class="peer/published"
          type="radio"
          name="radio"
          autoFocus={props.autoFocus}
          checked={props.checked || props.defaultChecked}
          value={props.value}
        />
        <label for={props.value} class={`peer-checked/published:text-sky-500`}>
        </label>
        <span>
        {props.children}
        </span>
      </span>
    );
  }
}

export default radio;
export type { radioProps };
