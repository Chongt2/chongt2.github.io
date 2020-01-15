// remove text from message when clicking
var clearFlag = new Boolean(true);
window.alert(clearFlag);
function removeText(clearFlag) {
  if (clearFlag == false){
    document.getElementById("message").innerHTML = "";
    clearFlag = true;
    window.alert(1,clearFlag);
  }
  else {
    document.getElementById("message").innerHTML = "Hello World!";
    clearFlag = false;
    window.alert(2,clearFlag);
  }
  return;
}
