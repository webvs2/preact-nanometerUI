// import { compact } from "lodash-es";
import {
  Attributes,
  Component,
  ComponentChild,
  ComponentChildren,
  Ref,
  createContext,
} from "preact";

let radioGroupContext = createContext(null);
interface radioGroupProps {
  value?: any;
  change?: Function;
}
class radioGroup extends Component<radioGroupProps> {
  state={
    value: this.props.value || null,
  }
  // shouldComponentUpdate() {
  //   return false;
  // }
//   props?: Readonly<
//   Attributes & { children?: ComponentChildren; ref?: Ref<any> }
// >,
  render(
    props,
    state?: Readonly<{}>,
    context?: any
  ) {
    // console.log(props.children);
    // props.children.map(item=>{
    //       item.props.value = state.value
    // })
    return (
      <radioGroupContext.Provider value={{groupToken:true}}>
       <label class="na-radio-group">
       {props.children }
       </label>
      </radioGroupContext.Provider>
    );
  }
}
export { radioGroupContext };
export default radioGroup;
