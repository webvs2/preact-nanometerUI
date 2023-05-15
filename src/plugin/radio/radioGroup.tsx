import { compact } from "lodash-es";
import {
  Attributes,
  Component,
  ComponentChild,
  ComponentChildren,
  Ref,
} from "preact";

class radioGroup extends Component {
  render(
    props?: Readonly<
      Attributes & { children?: ComponentChildren; ref?: Ref<any> }
    >,
    state?: Readonly<{}>,
    context?: any
  ): ComponentChild {
    return <div class="na-radio-group">{props.children}</div>;
  }
}
export default radioGroup;
