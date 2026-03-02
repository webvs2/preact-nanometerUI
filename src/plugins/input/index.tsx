import { Component } from "preact";
import { h } from "preact/hooks";
import classNames from "classnames";

interface InputProps {
  id?: string;
  value: string | number | undefined;
  autocomplete?: string;
  onChange?: (value: string | number | undefined, e: any) => void;
  disabled?: boolean;
  max?: number;
  maxlength?: number;
  min?: number;
  minlength?: number;
  pattern?: string;
  type?: buttonType;
  placeholder?: string;
  isPrefix?: boolean;
}

class Input extends Component<InputProps, any> {
  state = {
    value: undefined,
    type: "text",
  };
  constructor(props: InputProps) {
    super();
    this.state.value = props.value;
  }
  onChange = (e) => {
    this.setState({ value: e.target.value });
    this.props.onChange && this.props.onChange(e.target.value, e);
  };

  render(props, state) {

    let btnClass = classNames({
      "na-input": true,
      "na-input__disabled": props.disabled,
      "na-input-error": props.type == "error",
    });

    return (
      <>
      <div class={`na-input-box`}>
        <input
          id={props.id}
          ref={props.ref}
          class={btnClass}
          type="text"
          placeholder={props.placeholder}
          disabled={props.disabled}
          autocomplete={props.autocomplete}
          value={state.value}
          onChange={this.onChange}
        />
      </div>
 
      </>
    );
  }
}

export default Input;
export type { InputProps };
