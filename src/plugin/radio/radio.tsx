import "./style.scss";
import {
  Component,
  ComponentChild,
  createContext,
} from "preact";
import {bemStr} from "@toolkit/bem";
let bem = bemStr("radio");
// import { useContext,useMemo } from "preact/hooks";
import {radioGroupContext} from "./radioGroup";

import classNames from "classNames";
interface radioProps {
  autoFocus?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  value?: any;
  click?: Function;
  change?: Function;
}


class radio extends Component<radioProps> {
  state  = {
    checked: false,
  };
  constructor(props: radioProps) {
    super(props);
    this.state.checked = props.checked || props.defaultChecked || false;
  }
  click(e) {
    let { props, state } = this;
    this.setState({ checked: e.target.checked });
    props.click && props.click(state.checked, e);
  }
  change(e) {
    let { props, state } = this;
    props.change && props.change(state.checked, e);
  }

  render(props, state ): ComponentChild {
    const btnClass = classNames(
      "na-radio",
      {
        "na-radio--checked": state.checked,
      }
    )
// console.log(radioGroupContext);
    return (
      <label class={btnClass} >
        <span class={bem('input')}>
          <input
            onChange={this.change.bind(this)}
            id={props.value}
            onClick={this.click.bind(this)}
            type="radio"
            name={props.value}
            disabled={props.disabled}
            autoFocus={props.autoFocus}
            checked={state.checked}
            value={props.value}
          ></input>
    
          <span class={`na-radio__inner `}></span>
        </span>
        <div class={`na-radio__label`}>
          {props.children}      
        </div>
      </label>
    );
  }
}

export default radio;
export type { radioProps };
