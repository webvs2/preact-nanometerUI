// import "./public/assets/icon/iconfont.scss";

import "./css/index.scss";
// const modules = import.meta.glob("./plugin/*/*.ts", { import: 'default'});
// const components: any = {};
// Object.keys(modules).map((item: string) => {
//   modules[item]().then((module: any) => {
//     console.log('module',module.name)
//     components[module.name] = module.install();
//   });
// });
import message from "./plugin/message/index";
import schedule from "./plugin/schedule/index";
import "./app.tsx"

export { schedule, message };
