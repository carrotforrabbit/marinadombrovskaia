// let modal = document.querySelector(".modal");
let btn = document.querySelectorAll(".open-modal");
let closeBtn = document.querySelectorAll(".modal__cross");

// btn.addEventListener ("click", (e) => {
//     modal.style.display = "block";
// })

// workBtn.addEventListener ("click", (e) => {
//     modal.style.display = "block";
// })

// close.addEventListener ("click", (e) => {
//     modal.style.display = "none";
// })

//up button
let upBtn = document.querySelector(".up-button");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    upBtn.style.display = "block";
  } else {
    upBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//modals
Array.from(closeBtn, (closeButton) => {
  closeButton.addEventListener(
    "click",
    (e) => (e.target.parentNode.parentNode.style.display = "none")
  );
});
Array.from(btn, (openButton) => {
  openButton.addEventListener("click", (e) => {
    let modalId = e.target.getAttribute("data-id");
    document.getElementById(modalId).style.display = "flex";
  });
});
