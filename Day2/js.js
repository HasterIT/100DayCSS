document.querySelectorAll(".menu").forEach(function (menu) {
  menu.addEventListener("click", function () {
    this.classList.toggle("active");
    this.querySelectorAll("div").forEach(function (div) {
      div.classList.remove("no-animation");
    });
  });
});
