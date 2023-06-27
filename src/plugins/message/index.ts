import "./src/styles/index.scss";
import { optionType,state } from "./type";
import { storeSteward } from "@toolkit/store";
import  render  from "@toolkit/render";


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
    durationTime: 3000, //ms
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
    let seed = $store.store.seed;
    $store.commit('seed');

    if (!state.content) {
      throw '[message] If you use the object argument form, be aware!"content" is required';
    }
    let id = "message_" + seed;
    const elem = render({
      tag: "div",
      children: [
        {
          tag: "div",
          attr: {
            class: "content",
          },
          children:[
            {
              tag: "i",
              attr: {
                class:`iconfont icon icon-${state.type}` ,
              },
            },
            {
              tag: "span",
              children: state.content,
            },

          ]
        },
    
      ],
      attr: {
        class: `na-message__${state.type} na-message__box enter ${
          state.class
        }  ${state.center ? "center" : ""}` ,
        id: id,
        style: { zIndex: 100 + seed},
      },
    });
    document.body.appendChild(elem);
    $store.commit('push', ({id:id,data:state}));
  }
}

let MessageBox = new Message();
// state|optionType,string
let message: any = (...data :[state|optionType,string|null]) => {
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
export default message;
