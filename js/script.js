window.addEventListener("scroll", function () {
  const verticalScroll = window.scrollY;
  const contNav = document.getElementsByClassName("container-nav")[0];
  const nav = document.getElementsByTagName("nav")[0];
  const btnNav = document.querySelector("nav button");

  if (verticalScroll > 350) {
    contNav.classList.add("white");
    nav.classList.add("white");
    btnNav.classList.add("green");
  } else {
    contNav.classList.remove("white");
    nav.classList.remove("white");
    btnNav.classList.remove("green");
  }
});
