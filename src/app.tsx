import { render } from "preact";
import {
  Button,
  // NaSchedule,
  // NaBadge,
  // Card,
  // message,
  // Input,
  // Select,
  // Radio,
  // Tooltip,
  // RadioGroup,
  // Menu,
  // MenuItem,
} from "./plugins/index";


// import { createRequire } from "module";
// import Logo from "./logo";
// perspective
// import Perspective from "./components/perspective/index";

function clickFn(type = "error") {
  if (typeof type == "object") type = "error";
  // message(type, "这是一个消息");
}

let App = () => {
  return (
    <div class={"text-center"}>
      hello world
      <Button onClick={() => clickFn("success")} type="success">
        success
      </Button>
      <Button onClick={() => clickFn("warning")} type="warning">
        warning
      </Button>
      <Button onClick={() => clickFn("error")} type="error">
        error
      </Button>

      </div>
  );
};
render(App(), document.getElementById("app"));

