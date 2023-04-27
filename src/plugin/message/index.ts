import "./src/styles/index.scss";
// import render from "./src/render";
import render from "@/public/render";
import schedule from "../schedule";
import { optionType, resultType } from "./type";
import { storeSteward } from "../../public/store";
import  Badge  from "../badge";

import { className } from "../../public/util";
let $store = new storeSteward({
  store: {
    seed: 0,
  },
  mutations:{
    seed(state:any){
      state.seed++;
    }
  }
});
console.log($store.store);
//	Exposure to message objects is not recommended, and is postEvented for more powerful boxes

class MessageClass {
  defaultOption = {
    type: "info",
    durationTime: 1000, //ms
    postEvent: null,
    class: "",
    center: true,
    schedule:true
  };
  option = {} as optionType;
  seed: number = 0;
  isContainer: boolean = false;
  //   containerDom: <HTMLElement>=null;
  constructor() {}

  //class function🚩
  alteration(option: optionType) {
    this.option = Object.assign({}, this.defaultOption, option);
    this.establish();
  }
 


  establish() {
    let {  option,seed } = this;
    this.seed++;
    if (!option.content) {
      throw '[message] If you use the object argument form, be aware!"content" is required';
    }
    let id = "message_" + seed;
    function MessageConstructor(data: {}): resultType {
      const elem = render({
        tag: "div",
        children: [
          (new Badge( seed).create()!.element),
          {
            tag: "div",
            attr: { class: "content" },
            children: [
              {
                tag: "i",
                attr: {
                  class: `iconfont icon icon-${option.type}`,
                },
              },
              {
                tag: "span",
                children: option.content,
              },
            ],
          },
          {
            tag: "div",
            attr: {
              class: "bottom",
            },
            children: option.schedule?[ new schedule(option.durationTime! +seed * 100 ).create()!.element]:''
            
          },
        ],
        attr: {
          class: className(
            `na-message__${option.type} na-message__box enter ${option.class}  ${
              option.center ? "center" : ""
            }`
          ),
          id: id,
          style: { zIndex: 100 + seed },
        },
      });

      return {
        node: elem,
        id: id,
        domID: `#${id}`,
        source: data,
      } as resultType;
    }
    //	 Generate and add to the body🐱‍🏍...
    let messageBox = MessageConstructor(option);
    let { source, node } = messageBox;
    source.durationTime =
      source.durationTime +seed * 100 +100;
      $store.push(messageBox);
    document.body.appendChild(node);
  }
}

let MessageBox = new MessageClass();

let message: any = (...data: any[]) => {
  MessageBox.alteration(
    data.length < 2
      ? data[0]
      : {
          type: data[0],
          content: data[1],
        }
  );
};
new Array("success", "warning", "info", "error").map((item) => {
  message[item] = (value: any) => {
    MessageBox.alteration({type:item, content: value });
  };
});
// export function info() {
//   return {
//     name: "message",
//     install(app: any) {
//       if (app) {
//         app.config.globalProperties.$message = message;
//       } else {
//         return message;
//       }
//     },
//   };
// }
export default message;
