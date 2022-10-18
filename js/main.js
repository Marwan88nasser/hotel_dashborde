// Click tog-show
if (document.querySelector(".tog-active")) {
  const togglesShow = document.querySelectorAll(".tog-active");
  togglesShow.forEach((e) => {
    e.addEventListener("click", () => {
      let divActive = document.querySelector(e.getAttribute("data-active"));
      divActive.classList.toggle("active");
    });
  });
}
