let btn = document.querySelectorAll(".open-modal");
let closeBtn = document.querySelectorAll(".modal__cross");
const modalExperience = document.querySelector(".modal2");
const modalEducation = document.querySelector(".modalEducation");

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
const experience = document.getElementById("experience");
const education = document.getElementById("education");
const closeEdu = document.querySelector(".closeModalEdu");
const closeWork = document.querySelector(".closeModalWork");

const showModalExperience = () => {
  modalExperience.style.display = "block";
  document.body.classList.add("stop-scrolling");
};

const showModalEducation = () => {
  modalEducation.style.display = "block";
  document.body.classList.add("stop-scrolling");

  new Swiper(".modal-slider", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

experience.addEventListener("click", showModalExperience);
education.addEventListener("click", showModalEducation);

closeEdu.addEventListener("click", (e) => {
  modalEducation.style.display = "none";
  document.body.classList.remove("stop-scrolling");
});

closeWork.addEventListener("click", (e) => {
  modalExperience.style.display = "none";
  document.body.classList.remove("stop-scrolling");
});
