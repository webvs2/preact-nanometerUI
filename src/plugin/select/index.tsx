import { Component, createRef } from "preact";
import "./style.scss";
import { Input } from "../index";
import { createPopper } from "@popperjs/core";
class select extends Component {
  // button = createRef<HTMLAnchorElement>();
  tooltip = createRef<HTMLAnchorElement>();

  // Popper.createPopper(button, tooltip, {
  //   placement: 'right',
  // });
  componentDidMount() {
    const button = document.querySelector("#input");
    console.log('button',button);
    const tooltip = this.tooltip.current;
    createPopper(button, tooltip, {
      placement: "right",
    });
  }
  render() {
    return (
      <>
        <div>
          <Input id="input" />
          {/* <select class={`na-select`}>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select> */}
        </div>
        <div id="tooltip" ref={this.tooltip} role="tooltip">
          I'm a tooltip
        </div>
      </>
    );
  }
}

export default select;
