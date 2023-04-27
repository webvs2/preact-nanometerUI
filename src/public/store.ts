import { resultType } from "../plugin/message/type";

interface initStoreType {
  store?: { [key: string]: any };
  mutations?: { [key: string]: Function };
}

export class storeSteward {
  store = {};
  mutations: { [key: string]: Function } = {};
  pastDue: any[] = [];
  constructor(initStore: initStoreType) {
    this.store = initStore.store!;
    this.mutations = initStore.mutations!;
  }
  commit(name: string, ...args: any[]) {
    if (this.mutations[name]) {
      this.mutations[name]?.(...args);
    } else {
      console.error(`mutations ${name} is not defined`);
    }
  }
  push(value: any) {
    let index = this.pastDue.length;
    this.pastDue.push(this.timebomb(value, index));
  }
  timebomb(data: resultType, index: number) {
    let { source, node } = data;
    return setTimeout(() => {
      let { pastDue } = this;

      node.className = "out " + node.className;
      node.addEventListener(
        "animationend",
        function () {
          source.postEvent?.();
          document.body.removeChild(node);
        },
        false
      );
      clearTimeout(pastDue[index]);
      pastDue[index] = null;
    }, source.durationTime);
  }
  closeAll() {
    let { pastDue } = this;
    pastDue.map((item) => {
      clearTimeout(item);
      item = null;
    });
    pastDue = [];
    return new Promise((resolve, reject) => {
      if (!pastDue.length) {
        resolve(true);
      } else {
        reject(false);
      }
    });
  }
}
