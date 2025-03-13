document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('.nav-link');

  links.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
  });
});

let slideIndex = 0;
autoSlide();

function autoSlide() {
  let slides = document.getElementsByClassName("banner-slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(autoSlide, 5000); // Ganti gambar setiap 5 detik
}

function changeSlide(n) {
  slideIndex += n - 1;
  let slides = document.getElementsByClassName("banner-slide");
  if (slideIndex >= slides.length) { slideIndex = 0; }
  if (slideIndex < 0) { slideIndex = slides.length - 1; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modalTestStifin");
  const btn = document.querySelector(".button");
  const close = document.querySelector(".close");

  btn.addEventListener("click", function (event) {
    event.preventDefault();
    modal.style.display = "block";
  });

  close.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
