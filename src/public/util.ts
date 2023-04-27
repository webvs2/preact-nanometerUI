
/**
 * 
 * @param source str is a string
 * @returns 
 */
export  let  className=(source:string):string=>{
    return source.replace(/^\s+|\s+$/g,"")
}
/**
 * 
 * @param source  str is a string
 * @returns string 
 */
export let cssAttrSymbolTransition=(source:string):string=>{
    let text= source.replace(/[A-Z]/g,function(con){
        return `-${con.toLowerCase()}`
    })
    return text
}
/**
 * 
 * @param source  source is a dom
 * @returns boolean
 */
export let isDom=(source:any):boolean=>{
    return source instanceof HTMLElement
}