function sendwhatsapp(){
  var phonenumber = "+201006355381";

  var name = document.querySelector(".name").value;
  var email = document.querySelector(".email").value;
  var message = document.querySelector(".message").value;

  var url = "https://wa.me/" + phonenumber + "?text="
  +"*Name :* "+name+"%0a"
  +"*Email :* "+email+"%0a"
  +"*Message :* "+message
  +"%0a%0a";

  window.open(url, '_blank').focus();
}

let menu = document.querySelector("#menu-bar");
let navber = document.querySelector(".navber");
let scrollTop = document.querySelector("#scroll-top");



function loader () {
  document.querySelector(".loader-container").classList.add("fade-out")
}
function fadeOut(){
  setInterval(loader , 3000)
}
window.onload = fadeOut ();