import logoimg from "../l.png";
import  "./css/logo.scss"
function logo() {
  return (
    <>
      <div class={`img-bg-box`}>
        <div class={`img-bg`}></div>
        <img src={logoimg} class={"w-60 p-0  "}></img>
      </div>
    </>
  );
}
export default logo;