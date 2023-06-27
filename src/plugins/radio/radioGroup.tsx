import {
  Attributes,
  Component,
  ComponentChild,
  // ComponentChildren,
  Ref,
  createContext,
} from "preact";

let RadioGroupContext = createContext(null);
interface radioGroupProps {
  value?: any;
  change?: Function;
}
class radioGroup extends Component<
  radioGroupProps &
    Readonly<Attributes & { children?: Array<ComponentChild>; ref?: Ref<any> }>
> {
  state = {
    value: this.props.value || null,
  };
  alteration(value) {
    this.setState({ value });
    if (!this.props.children) return;
    this.props.children.map((item) => {
      (item as any).props.checked =
        (item as any).props.value === value ? true : false;
    });
  }

  render(props, state?: Readonly<{}>, context?: any) {
    let { value } = this.state;
    props.children.map((item) => {
      item.props.gatherChangeValue = this.alteration.bind(this);
    });

    return (
      <RadioGroupContext.Provider
        value={{ GroupToken: true, activityValue: value }}
      >
        {props.children}
      </RadioGroupContext.Provider>
    );
  }
}
export { RadioGroupContext };
export default radioGroup;
