// remove text from message when clicking clear
var clearFlag = false;
function removeText(clearFlag) {
  if (clearFlag){
    document.getElementById("message").innerHTML = "";
    clearFlag = true;
  }
  else {
    document.getElementById("message").innerHTML = "Hello World!";
    clearFlag = false;
  }
  return;
}
