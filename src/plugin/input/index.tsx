import { Component } from "preact";
import "./src/style.scss";
interface inputProps {
  id?: string;
  value: string | number | undefined;
  onChange?: (value: string | number | undefined, e: any) => void;
}
class input extends Component<inputProps, any> {
  state = {
    value: undefined,
    type: "text",
  };
  constructor(props: inputProps) {
    super();
    this.state = props as HTMLInputElement;
  }
  onChange = (e) => {
    this.setState({ value: e.target.value });
    this.props.onChange && this.props.onChange(e.target.value, e);
  };
  render() {
    return (
      <>
        <input
          id={this.props.id}
          ref={this.props.ref}
          class={`na-input`}
          type="text"
          value={this.state.value}
          {...this.props}
          onChange={this.onChange}
        />
      </>
    );
  }
}

export default input;
