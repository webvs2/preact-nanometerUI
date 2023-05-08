import { h, render } from "preact";
// import logo from "public/logo.png";
import {
  NaButton,
  NaSchedule,
  NaBadge,
  NaCard,
  message ,
  Input,
  NaSelect,
  NaRadio
} from "./plugin/index";

function clickFn() {
  console.log("click",  message("error", "1212"));

}
let App = () => {
  return (
    <div class={"text-center"}>
      <div class="text-center">
        {/* <img src={logo} class={"w-60 p-0  " }></img> */}
        <h1 class=" f-Source text-cyan-600 mt-20  text-4xl p-1 ">
          holle！Nanometer UI
        </h1>
      </div>
      <NaCard title="按钮" isShowTopBar={false} isShowBottomBar={true}>
       <div>各种按钮</div>
        Button: <NaButton value="默认按钮" onClick={clickFn} />
        Button negative:{" "}
        <NaButton  value="默认按钮" onClick={clickFn} />

            <NaButton disabled value="1212"></NaButton>
            <NaButton negative='success' value="1212"></NaButton>
      </NaCard>

      <div class={"m-5"}>
        <NaBadge value="hot">
          <span> 角标 </span>
        </NaBadge>
        <NaBadge value="1">
          <span> 角标 </span>
        </NaBadge>

        <NaButton onClick={clickFn}>
          <NaBadge size="large" value="cool">
            <span> 按钮角标</span>
          </NaBadge>
        </NaButton>
      </div>
      {/* <div class={"m-5"}>
        NaSchedule: <NaSchedule duration={10000} />
      </div> */}
      <div class={"mt-5"}>
        NaMessage <NaButton onClick={clickFn}>click</NaButton>
      </div>

      <div class={"mt-5"}>
        NaInput <Input value="1212" />
      </div>
      <div class={'mt-5'}>
      NaSelect: <NaSelect />
      </div>
      <div class={'mt-5'}>
      radio: <NaRadio value={1}>  A</NaRadio>
      <NaRadio value={2}>B</NaRadio>
      </div>
    </div>
  );
};

render(App(), document.getElementById("app"));
