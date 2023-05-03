import{Component } from "preact"
import "./src/style.scss"
interface inputProps  {
    value: string|number|undefined;
    onChange?: (value: string|number|undefined,e: any) => void;
}
 class input extends Component <inputProps,any>{
    state={
        value:undefined,
    }
    constructor(props: inputProps) {
        super();
        this.state = props;
      }
      onChange = e => {
        this.setState({ value: e.target.value });
        this.props.onChange && this.props.onChange(e.target.value,e);
      }
    render(){
        return(
         <>  
            <input class={`na-input`} type="text" value={this.state.value} onChange={this.onChange} />
         </>
          
        )
    }
     

   

 }

export default input;