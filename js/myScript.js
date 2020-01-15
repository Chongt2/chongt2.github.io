// remove text from message when clicking
// var x = document.getElementById("message").innerHTML;
// function removeText(x) {
function removeText(){
  var x = document.getElementById("message").innerHTML;
  if(x == ""){
    x = "Hello World!";
  }
  else{
    x = "";
  }
  alert(x == "");
  // if (x == "Hello World!"){
  //   x = "";
  // }
  // else {
  //   x = "Hello World!";
  // }
  return;
}
