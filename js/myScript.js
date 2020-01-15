// remove text from message when clicking
function removeText(){
  if(document.getElementById("message").innerHTML == ""){
    document.getElementById("message").innerHTML = "Hello World!";
  }
  else{
    document.getElementById("message").innerHTML = "";
  }
  return;
}
