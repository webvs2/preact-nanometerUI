import { Component } from "preact";
import './style.scss'
class select extends Component {
  render() {
    return (
      <>
        <select class={`na-select`}>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </>
    );
  }
}

export default select;
