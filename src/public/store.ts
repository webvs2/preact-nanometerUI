interface initStoreType {
  store?: { [key: string]: any };
  mutations?: { [key: string]: Function };
}
export class storeSteward {
  store = {};
  mutations: { [key: string]: Function } = {}
  pastDue: any[] = [];
  constructor(initStore: initStoreType) {
    this.store = initStore.store!;

    this.mutations = initStore.mutations!;
  }
  commit(name: string, ...args: any[]) {
    if (this.mutations[name]) {
      this.mutations[name]?.(this.store,...args);
    } else {
      console.error(`mutations ${name} is not defined`);
    }
  }
  getStore(key: string) {
    return this.store[key];
  }
  set(key, value) {
    this.store[key] = value;
  }
}
