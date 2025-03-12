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
  