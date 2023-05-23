import { render } from "preact";
import {
  Button,
  NaSchedule,
  NaBadge,
  Card,
  message,
  Input,
  Select,
  Radio,
  Tooltip,
  RadioGroup,
} from "./plugin/index";
// import { createRequire } from "module";
import Logo from "./logo";
// perspective
import Perspective from "./components/perspective/index";

function clickFn(type = "error") {
  if (typeof type == "object") type = "error";
  message(type, "这是一个消息");
}
let App = () => {
  return (
    <div class={"text-center"}>
      <div class="text-center">
        <h1
          style={`font-weight:600`}
          class=" f-Source from-fuchsia-500 text-fuchsia-600 mt-20  text-4xl p-1  "
        >
          holle！Nanometer UI
        </h1>
        {/* <Perspective></Perspective> */}
      </div>
      <Card
        width="500px"
        title="按钮"
        isShowTopBar={false}
        isShowBottomBar={true}
      >
        <div>Various buttons</div>
        Button: <Button value="默认按钮" />
        Button negative: <Button value="默认按钮" />
        <Button disabled>禁用状态</Button>
        <Button
          negative="success"
          onClick={() => {
            clickFn("success");
          }}
          value="1212"
        ></Button>
        <span class={`ml-2`}></span>
        <Button negative="warning" value="2323"></Button>
        <span class={`ml-2`}></span>
        <Button negative="danger" value="4545"></Button>
      </Card>
      <div class={"m-5"}>
        <NaBadge value="hot">
          <span> 角标 </span>
        </NaBadge>
        <NaBadge value="1">
          <span> 角标 </span>
        </NaBadge>

        <Button onClick={clickFn}>
          <NaBadge size="large" value="cool">
            <span> 按钮角标</span>
          </NaBadge>
        </Button>
      </div>

      <div class={"mt-5"}>
        Message <Button onClick={clickFn}>click</Button>
      </div>

      <div class={"mt-5"}>
        <Card>
          NaInput <Input value="1212" />
          <div>
            <Input value="1212" disabled />
          </div>
        </Card>
      </div>
      <div class={"mt-5"}>
        Select: <Select />
      </div>
      <div class={"mt-5"}>
        radio: <Radio value={1}> A</Radio>
        <Radio value={2}>B</Radio>
      </div>
      <div class={"mt-5"}>
        tooltip: <Tooltip value={"我是提示"}>1212</Tooltip>
      </div>
      {/* style="margin-top:800px" */}
      <div class={`mt-10`}>
        RadioGroup:{" "}
        <RadioGroup>
          <Radio value={2}>B</Radio>
          <Radio value={1}>A</Radio>
          <Radio value={3}>C</Radio>
        </RadioGroup>
      </div>
    </div>
  );
};
render(App(), document.getElementById("app"));
