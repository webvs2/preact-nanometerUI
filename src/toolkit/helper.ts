/**
 *
 * @param source str is a string
 * @returns
 */
export let className = (source: string): string => {
  return source.replace(/^\s+|\s+$/g, "");
};
/**
 *
 * @param source  str is a string
 * @returns string
 */
export let cssAttrSymbolTransition = (source: string): string => {
  let text = source.replace(/[A-Z]/g, function (con) {
    return `-${con.toLowerCase()}`;
  });
  return text;
};
/**
 *
 * @param source  source is a dom
 * @returns boolean
 */
export let isDom = (source: any): boolean => {
  return source instanceof HTMLElement;
};
/**
 * @param b  block
 * @param e  element
 * @param m  modifier
 * @returns  string
 */
// export let classEsm = (b:string, e:string='', m:string=''): string => {
//   let namespace = "na";
//   let block =[b].flat(Infinity).map((item) => `${namespace}-${item}`).join(' ');
  
//   // `${namespace}-${b}`
//   let element =!!e? `__${e}`:'';
//   let modifier =!!m? `--${m}`:'';



//   let text =block+ element+modifier;
//   return text;
// };

export let classEsm = (esms:Array<{b:string,e?:string,m?:string}>)=>{
  let classCon =''
  let namespace = "na";
  esms.map((item)=>{
 
    let block =[item.b].flat(Infinity).map((item) => `${namespace}-${item}`).join(' ');
    // let element =!!item.e? `__${item.e}`:'';
    // let modifier =!!item.m? `--${item.m}`:'';
    // classCon+=block+ element+modifier+' '

  })
  return classCon

}
