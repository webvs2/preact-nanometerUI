import render from "@/Public/render";
import "./src/style.scss"
class Badge{
  target?: Element;
  value: number = 0;
  constructor(value: number, target?: Element) {
    this.target = target;
    this.value = value;
  }

  create() {
    let element = {
      tag: "div",
      attr: {
        class: "badge   bg-red-500  text-white flex items-center justify-center  w-5 h-5 rounded-full",
        // style: { animationDuration: `${this.duration}ms` },
      },
      children: this.value,
    };
    if (this.target) {
      this.target.appendChild(render(element) as HTMLElement);
      return;
    } else {
      return { element };
    }
  }
}

export default Badge;
