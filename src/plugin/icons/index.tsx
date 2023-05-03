import{Component } from "preact"
import "./src/style.scss"
// import("//at.alicdn.com/t/c/font_4047379_vxnsq8f9w3.js")

interface iconProps  {
    name: string;
}
class icon extends Component <iconProps >{
    constructor() {
        super();
      }
    render(){
        return(
            <svg class="icon" aria-hidden="true">
            <use xlinkHref={this.props.name}></use>
           </svg>
        )
    }
}