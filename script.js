const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener(
  "click",
  (open = () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
      link.classList.toggle("fade");
    });
  })
);

$("#switch").on("click", () => {
  if ($("#switch").prop("checked")) {
    $(".wrapper").addClass("dark");
  } else {
    $(".wrapper").removeClass("dark");
  }
});
links.forEach(link => {
  link.addEventListener("click", () => {
    open();
  });
});
