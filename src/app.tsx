import { render } from "preact";
import {
  NaButton,
  NaSchedule,
  NaBadge,
  NaCard,
  message,
  Input,
  Select,
  NaRadio,
  Tooltip,
} from "./plugin/index";


function clickFn(type='error') {
  if(typeof type =='object') type ='error'
  message(type, "这是一个消息")
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
        <div>Various buttons</div>
        Button: <NaButton value="默认按钮"  />
        Button negative: <NaButton value="默认按钮"  />
        <NaButton disabled value="1212"></NaButton>
        <NaButton negative="success" onClick={()=>{clickFn('success')}} value="1212"></NaButton>
        <span class={`ml-2`}></span>
        <NaButton negative="warning" value="2323"></NaButton>
        <span class={`ml-2`}></span>
        <NaButton negative="danger" value="4545"></NaButton>
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
        Message <NaButton onClick={clickFn}>click</NaButton>
      </div>

      <div class={"mt-5"}>
        NaInput <Input value="1212" />
      </div>
      <div class={"mt-5"}>
        Select: <Select />
      </div>
      <div class={"mt-5"}>
        radio: <NaRadio value={1}> A</NaRadio>
        <NaRadio value={2}>B</NaRadio>
      </div>
      <div class={"mt-5"}>
      tooltip: <Tooltip value={"我是提示"}>1212</Tooltip>
      </div>
      <div class={`mt-10`} style="margin-top:800px">
        12
      </div>
    </div>
  );
};

render(App(), document.getElementById("app"));
