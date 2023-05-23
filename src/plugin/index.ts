import card from "./card/index";
import message from "./message/index";
import schedule from "./schedule/index";
import button from "./button/index";
import badge from "./badge/index";
import input from "./input/index";
import select from "./select/index";
import radio from "./radio/radio";
import Tooltip from "./tooltip/index";
import radioGroup from "./radio/radioGroup";
// const modules = import.meta.glob("./*/index.tsx", { import: 'default'});
// const components: any = {};
// Object.keys(modules).map((item: string) => {
//     modules[item]().then((module: any) => {
//         components[module.name] = module;
//     })

// });

export {
  button as Button,
  badge as NaBadge,
  card as Card,
  Tooltip,
  message ,
  schedule as NaSchedule,
  radio as Radio,
  input as Input,
  select as Select,
  radioGroup as RadioGroup
};
