export interface optionType {
    type: string;
    center?:boolean
    durationTime?: number; //ms
    class?: string;
    content: string;
    postEvent?: null;
    schedule?:boolean=false
  }
  export interface resultType {
    node: HTMLElement;
    id: String;
    domID: String;
    source: any;
    [propName: string]: any;
  }