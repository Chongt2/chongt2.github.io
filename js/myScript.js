// remove text from message when clicking
var clearFlag = new Boolean(true);
function removeText(clearFlag) {
  if (clearFlag == false){
    document.getElementById("message").innerHTML = "";
    clearFlag = true;
    window.alert(clearFlag);
  }
  else {
    document.getElementById("message").innerHTML = "Hello World!";
    clearFlag = false;
    window.alert(clearFlag);
  }
  return;
}
