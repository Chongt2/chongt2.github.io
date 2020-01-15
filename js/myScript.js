// remove text from message when clicking
var x = document.getElementById("message").innerHTML;
function removeText(x) {
  if (x == "Hello World!"){
    x = "";
  }
  else {
    x = "Hello World!";
  }
  return;
}
