import "./src/style.scss";

const card = (props) => {
  return (
    <div class={`na-card`}>

      <div class={`na-card__head`} name="head">
        <span>{props.title}</span>
        <div class={`postfix`}>{props.postfix}</div>
      </div>
      <div class={`na-card__body`}>{props.children}</div>
      <div class={`na-card__bottom`}></div>
    </div>
  );
};

export default card;
