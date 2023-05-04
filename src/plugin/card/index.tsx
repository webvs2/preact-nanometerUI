import "./src/style.scss";

const TopBar = (props) => {
  return (
    <div class={`na-card__head`} name="head">
      <span>{props.title}</span>
      <div class={`postfix`}>{props.postfix}</div>
    </div>
  );
};
let BottomBar = function (props) {
  return <div class={`na-card__bottom-bar`}>
    {props.children}
  </div>;
};
const card = (props) => {
  let { isShowBottomBar, isShowTopBar, title } = props;
  console.log(props);
  return (
    <div class={`na-card`}>
      {isShowTopBar && <TopBar title={title} />}
      <div class={`na-card__body`}>{props.children}</div>
      {isShowBottomBar && <BottomBar></BottomBar>}
    </div>
  );
};

export default card;
