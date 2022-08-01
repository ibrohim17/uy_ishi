var elForm = document.querySelector(".site-form");
var elInput1 = elForm.querySelector(".site-input1");

var elP = document.querySelector(".xabar");

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  if (elInput1.value <= 5) {
    elP.textContent = "Sizga tekin :)"
  } else if (elInput1.value >= 50) {
    elP.textContent = "Sizga tekin :)"
  } else {
    elP.textContent = "Siz 1.400 so'm to'laysiz"
  }
})