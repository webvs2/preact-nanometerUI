import card from "./card/index";
import message from "./message/index";
import schedule from "./schedule/index";
import button from "./button/index";
import badge from "./badge/index";
import input from "./input/index";

// const modules = import.meta.glob("./*/index.tsx", { import: 'default'});
// const components: any = {};
// Object.keys(modules).map((item: string) => {
//     modules[item]().then((module: any) => {
//         components[module.name] = module;
//     })

// });

export {
  button as NaButton,
  schedule as NaSchedule,
  badge as NaBadge,
  card as NaCard,
  message as NaMessage,
  input as NaInput,
};
