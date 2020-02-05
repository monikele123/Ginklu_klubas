const burgerIcon =  document.getElementById("burger-icon");
burgerIcon.addEventListener("click", function(){
  const burger =  document.getElementById("burger");
  if (burger.style.display === 'block') {
    burger.style = 'display: none;';
  } else {
    burger.style = 'display: block;';
  }
});