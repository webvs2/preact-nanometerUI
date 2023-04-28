type state = 'success' | 'warning' | 'info' | 'error'; 
export {state}
export interface optionType {
    type: state;
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