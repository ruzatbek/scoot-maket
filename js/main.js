var elButton = document.querySelector(".button");
var elContent = document.querySelector(".menu");

elButton.addEventListener("click", function(){
    elContent.classList.toggle("menu--open");
})