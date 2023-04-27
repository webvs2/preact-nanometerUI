

interface buttonProps {
  value: string;
  negative?: boolean;
  onClick?: () => void;
}

function buttonComponent(props: buttonProps) {
  console.log(props);
  return (
    <button
      onClick={props.onClick}
      class={`py-2 px-3 antialiased  text-gray-700 transition text-xs  duration-500 rounded-lg   ${
        !props.negative ? "hover:bg-gray-300" : "bg-gray-300"
      }  hover:text-current `}
    >
      {props.value}
    </button>
  );
} 
export default buttonComponent;
export type {buttonProps}
