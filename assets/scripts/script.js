let modal = document.querySelector(".modal");
let btn = document.querySelector(".education-btn");
let close = document.querySelector(".modal__cross");

btn.addEventListener ("click", (e) => {
    modal.style.display = "block";
})

close.addEventListener ("click", (e) => {
    modal.style.display = "none";
})




//up button
let upBtn = document.querySelector('.up-button');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    upBtn.style.display = "block";
  } else {
    upBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}