import "./index.scss";
function perspective() {
  return (
    <>
      <div class={`perspectiveBox`}>
        <div class="left"></div>
        <div class="right"></div>
        <div id="stage">
          <div class="piece seven_vertical">
            <div class="shape"></div>
          </div>
          <div class="piece seven_top"></div>
          <div class="piece seven_middle"></div>
          <div class="piece first_zero_top"></div>
          <div class="piece first_zero_left"></div>
          <div class="piece first_zero_right"></div>
          <div class="piece first_zero_bottom"></div>
          <div class="shadow"></div>
        </div>
      </div>
    </>
  );
}
export default perspective;
