import "./src/style.scss";
import { Component } from "preact";
interface ScheduleProps {
  duration: number;
  onEnd?: () => void;
}

class Schedule extends Component<ScheduleProps> {
  timer = null;
  state = {
    duration: 0,
  }
  constructor(props) {
    super(props);
    this.state = {
      duration: props.duration,
    };
  }
  componentDidMount() {
    let timer = this.timer;
    if (!!this.props.onEnd) {
      timer = setTimeout(() => {
        this.props?.onEnd();
        timer = null;
      }, this.state!.duration);
    }
  }
  render() {
    return (
      <div
        class="schedule h-1 rounded-full  px-2 bg-gray-600"
        style={{ animationDuration: `${this.state!.duration}ms` }}
      ></div>
    );
  }
}
export default Schedule;
export type { ScheduleProps };
