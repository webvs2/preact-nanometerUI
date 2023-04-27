import render from "@/Public/render";
import "./src/style.scss"

class Schedule {
  target?: Element;
  duration: number = 0;
  constructor(duration: number,target?: Element) {
    this.target = target;
    this.duration = duration;
  }

  create() {
    let element = {
      tag: "div",
      attr: {
        class: "schedule h-1 rounded-full  px-2 bg-gray-600",
        style: { animationDuration: `${this.duration}ms` },
      },
    };
    if (this.target) {
      this.target.appendChild(render(element) as HTMLElement);
      return ;
    } else {
      return { element };
    }
    // this.target?.appendChild(elem);
  }
}
// export default {
//   name: "schedule",
//   install() {
//     return new Schedule();
//   },
// };
export default Schedule;
