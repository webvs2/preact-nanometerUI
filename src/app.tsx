import { h, render } from "preact";
// import { message } from "./main";
// const logo = import("./public/logo.png");
import logo from './public/logo.png'
import Button from "./plugin/button/index";
function clickFn() {
  console.log("clickFn");
}
console.log(logo);
let App = () => {
  return (
    <div class={"text-center"}>
      <div class="text-center">
        {/* <img src={logo} class={"w-60 p-0  " }></img> */}
        <h1 class="text-gray-900 mt-20 dark:text-white text-4xl p-1 ">
        holle  nanometer
        </h1>
      </div>
     按钮： <Button value="默认按钮" onClick={clickFn}></Button>
    </div>
  );
};

render(App(), document.getElementById("app"));
