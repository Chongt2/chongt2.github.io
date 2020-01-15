// remove text from message when clicking
// var x = document.getElementById("message").innerHTML;
// function removeText(x) {
function removeText(){
  if(document.getElementById("message").innerHTML == ""){
    document.getElementById("message").innerHTML = "Hello World!";
  }
  else{
    document.getElementById("message").innerHTML = "";
  }
  alert(document.getElementById("message").innerHTML == "");
  // if (x == "Hello World!"){
  //   x = "";
  // }
  // else {
  //   x = "Hello World!";
  // }
  return;
}
