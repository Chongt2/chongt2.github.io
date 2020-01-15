// remove text from message when clicking
var x = document.getElementById("message").innerHTML;
function removeText(x) {
  if (x == "Hello World!"){
    document.getElementById("message").innerHTML = "";
  }
  else {
    document.getElementById("message").innerHTML = "Hello World!";
  }
  return;
}
