// function textarea_default(imports, register) {
//   register({
//     "default": imports["textarea"]
//   });
// }
// Path: src\plugin\input\textarea.tsx
// Compare this snippet from src\app.tsx:
function textarea() {
  return (
    <>
      <textarea rows={10} cols={30}></textarea>
    </>
  );
}
export default textarea;
