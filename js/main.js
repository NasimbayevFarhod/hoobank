var elModalOpenButton = document.querySelector(".btn-meny");
var elnav = document.querySelector(".navbar");


elModalOpenButton.addEventListener("click", function(){
  elnav.classList.toggle("mobile_navbar");
})

elModalOpenButton.addEventListener("click", function(){
  elModalOpenButton.classList.toggle("btn-meny__close");
})