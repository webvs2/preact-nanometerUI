import "./style.scss";
import {
  Component,
  ComponentChild,
  createContext,
} from "preact";
import {bemStr} from "@toolkit/bem";
import {useContext,useEffect} from "preact/hooks";
let bem = bemStr("radio");
// import { useContext,useMemo } from "preact/hooks";
import {RadioGroupContext} from "./radioGroup";

import classNames from "classNames";
interface radioProps {
  autoFocus?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  value?: any;
  click?: Function;
  change?: Function;
  gatherChangeValue?: Function;
  // setActiveState:boolean;
}


class radio extends Component<radioProps> {
  state  = {
    checked: false,
    token:null
  };
  constructor(props: radioProps) {
    super(props);
    this.state.checked = props.checked || props.defaultChecked || false;
  }
  componentDidMount(){
    // let { props, state} = this;


  }
  click(e) {
    let { props, state} = this;
    if(state.token&&state.token.GroupToken){
    this.setState({ checked: props.checked });
    }else{
      this.setState({ checked: e.target.checked });
    }
    props.click && props.click(state.checked, e);
  }
  change(e) {
    let { props, state } = this;
    // props.gatherChangeValue && props.gatherChangeValue(props.value);
    props.gatherChangeValue && props.gatherChangeValue(props.value);
    props.change && props.change(state.checked, e);
  }
  getToken(){
    // const theme = useContext(RadioGroupContext);
    return this.state.token
  }
  // ComponentChild
  render(props, state?: Readonly<{checked:false}> ) {
    const btnClass = classNames(
      "na-radio",
      {
        "na-radio--checked": state.checked,
      }
    )
    // console.log('getToken',this.getToken());
    this.state.token = useContext(RadioGroupContext);
    useEffect(() => { 
      this.setState({ checked: props.checked })

    },[props.checked])
    return (
      <label class={btnClass} 
      role="radio"
      
      aria-checked={props.checked}
      >
        <span class={bem('input')}>
          <input
            onChange={this.change.bind(this)}
            type="radio"
            name="drone"
            onClick={this.click.bind(this)}
            disabled={props.disabled}
            autoFocus={props.autoFocus}
            value={props.value}
           
          ></input>
    
          <span class={`na-radio__inner `}></span>
        </span>
        <div class={`na-radio__label`}>
          {props.children}   
          {props.checked}  
        </div>
      </label>
    );
  }
}

export default radio;
export type { radioProps };
