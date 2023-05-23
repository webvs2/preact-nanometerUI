// add annotation give bem function
/**
 * 
 * @param block  block
 * @returns  function  

 */
let classes = {
  $elementSeparator: "__",
  $modifierSeparator: "--",
  $statePrefix: "-",
  $namespace: "na"
};

 const bemStr = (block: string) => {
  return (element?: string, modifier?: string, state?: string):string => {
    let className =classes.$namespace+classes. $statePrefix+ block;
    if (element) {
      className += `${classes.$elementSeparator}${element}`;
    }
    if (modifier) {
      className += `${classes.$modifierSeparator}${modifier}`;
    }
    if (state) {
      className += `${classes.$statePrefix}${state}`;
    }
    return className;
  };
};
export {bemStr }

