import "./Model.css";
function Model(prop) {
  function disable() {
    if (prop.city !== "none") {
      prop.setmodelvisible(false);
      prop.setcityvisible(false);
      document.getElementById("menu-bar").style.right = "-30%";
    }
  }
  return <div id="back-model" onClick={disable}></div>;
}
export default Model;
