import "./src/styles/index.scss";
import { optionType,state } from "./type";
import { storeSteward } from "../../public/store";
import {  h, render } from "preact";
let $store = new storeSteward({
  store: {
    seed: 0,
    timingPile: {},
  },
  mutations: {
    seed(state: any) {
      state.seed++;
    },
    push(store,register:{ id: string, data: any }) {
      let { timingPile} = store;
      timingPile[register.id] =  setTimeout(() => {
        let node = document.getElementById(register.id) as HTMLElement;
        console.log('node',node.className)
        node.className = "out " + node.className;
        node.addEventListener(
          "animationend",
          function () {
            store.seed--;
            register.data.postEvent?.();
            document.body.removeChild(node);
          },
          false
        );
        
        clearTimeout(timingPile[register.id]);
        timingPile[register.id] = null;
      }, register.data.durationTime);

    
    },
  },
});
//	Exposure to message objects is not recommended, and is postEvented for more powerful boxes
class Message {
  state = {
    type: "info",
    durationTime: 30000, //ms
    postEvent: null,
    class: "",
    center: true,
    schedule: true,
    content: "",
  };
  // seed: number = 0;
  alteration(option: optionType) {
    this.state = Object.assign({}, this.state, option);
    this.establish();
  }

  establish() {
    let { state } = this;
    console.log(state);
    let seed = $store.store.seed;
    // $store.store.seed++;
    $store.commit('seed');

    if (!state.content) {
      throw '[message] If you use the object argument form, be aware!"content" is required';
    }
    let id = "message_" + seed;
    render(
      h(
        "div",
        {
          id: id,
          class: `na-message__${state.type} na-message__box enter ${
            state.class
          }  ${state.center ? "center" : ""}`,
          style: { zIndex: 100 + seed },
        },

        [
          h("div", { class: "content" }, [
            h("i", { class: `iconfont icon icon-${state.type}` }),
            h("span", {}, state.content),
          ]),
          h("div", { class: "bottom" }, []),
        ]
      ),

      document.body,
      document.getElementById("app")!.lastChild as Element
    );
    $store.commit('push', ({id:id,data:state}));
  }
}

let MessageBox = new Message();
// state|optionType,string
let message: any = (...data :[state|optionType,string]) => {
  console.log("data",data);
  if (typeof data[0] === "object") {
    MessageBox.alteration(data[0]);
  } else {
    MessageBox.alteration({
      content: data[1],
      type: data[0],
    });
  }
};
new Array("success", "warning", "info", "error").map((item) => {
  message[item] = (value: any) => {
    MessageBox.alteration({ type: item as state , content: value });
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
