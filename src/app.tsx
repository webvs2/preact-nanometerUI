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
  Menu,
  MenuItem,
} from "./plugins/index";

if (process.env.NODE_ENV === "development") {
  // Must use require here as import statements are only allowed
  // to exist at top-level.
  import("preact/debug");
}
// import { createRequire } from "module";
import Logo from "./logo";
// perspective
import Perspective from "./components/perspective/index";

function clickFn(type = "error") {
  if (typeof type == "object") type = "error";
  message(type, "这是一个消息");
}
let shijei = "";
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
        width="600px"
        title="按钮"
        isShowTopBar={false}
        isShowBottomBar={true}
      >
        <div>Various buttons</div>
        <div>
          Button: <Button>Button</Button>
          <Button disabled>禁用状态</Button>
        </div>

        {/* Button type: <Button value="默认按钮" /> */}
        <div class={"mt-2"}>
          Button type:{" "}
          <Button
            type="success"
            onClick={() => {
              clickFn("success");
            }}
          >
            成功
          </Button>
          <Button type="warning">警告</Button>
          <Button type="danger">危险</Button>
          <Button type="info">文本</Button>
          <Button type="primary">普通</Button>
        </div>
        <div class={"mt-2"}>
          Button plain : <span class={"ml-2"}></span>
          <Button type="success" plain>
            成功
          </Button>
          <Button type="warning" plain>
            警告
          </Button>
          <Button type="info" plain>
            文本
          </Button>
          <Button type="danger" plain>
            危险
          </Button>
        </div>
        <div class={`mt-2`}>
          Button type disabled : <span class={"ml-2"}></span>
          <Button type="primary" disabled>
            禁用
          </Button>
          <Button type="danger" disabled>
            禁用
          </Button>
        </div>
        <div class={`mt-2`}>
          Button type size : <span class={"ml-2"}></span>
          <Button type="primary" size="large">
            大的
          </Button>
          <Button type="primary" size="normal">
            中的
          </Button>
          <Button type="primary" size="small">
            小的
          </Button>
        </div>
        <div class={`mt-2`}>
          Button type round: <span class={"ml-2"}></span>
          <Button type="primary" round>
            普通
          </Button>
          <Button type="danger" round>
            危险
          </Button>
          <Button type="success" round>
            成功
          </Button>
          <Button type="warning" round>
            警告
          </Button>
        </div>
        <div class={`mt-2`}>
          button loading : <span class={"ml-2"}></span>
          <Button type="primary" loading>
            loading
          </Button>
        </div>
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
        RadioGroup:
        <RadioGroup value={shijei}>
          <Radio value={2}>B</Radio>
          <Radio value={1}>A</Radio>
          <Radio value={3}>C</Radio>
        </RadioGroup>
        <label>{shijei}</label>
      </div>
      <div>
        <Menu label="Edit">
          {/* 1111 */}
          <MenuItem label="Undo" onClick={() => console.log("Undo")} />
          <MenuItem label="Redo" disabled />
          <MenuItem label="Cut" />
          <Menu label="Copy as">
            <MenuItem label="Text" />
            <MenuItem label="Video" />
            <Menu label="Image">
              <MenuItem label=".png" />
              <MenuItem label=".jpg" />
              <MenuItem label=".svg" />
              <MenuItem label=".gif" />
            </Menu>
            <MenuItem label="Audio" />
          </Menu>
          <Menu label="Share">
            <MenuItem label="Mail" />
            <MenuItem label="Instagram" />
          </Menu>
        </Menu>
      </div>
      <div class={"mt-10 bg-cyan-50 p-2 to-red-500"}>footer</div>
    </div>
  );
};
render(App(), document.getElementById("app"));

// {
// c:1,
// b(){
// this.c=2
// },
// a(){
// console.log(this.c)
// }

// }

