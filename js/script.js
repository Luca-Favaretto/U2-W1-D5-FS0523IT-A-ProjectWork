window.addEventListener("scroll", function () {
  const verticalScroll = window.scrollY;
  const contNav = document.getElementsByClassName("container-nav")[0];
  const nav = document.getElementsByTagName("nav")[0];
  const btnNav = document.querySelector("nav button");

  if (verticalScroll > 320) {
    contNav.classList.add("white");
    nav.classList.add("white");
    btnNav.classList.add("green");
  } else {
    contNav.classList.remove("white");
    nav.classList.remove("white");
    btnNav.classList.remove("green");
  }
});

// const randNum2 = Math.floor(Math.random() * 231) + 2;

// const matrice = mMm[randNum].getAttribute("transform");

const changeM = function () {
  const mMm = Array.from(document.getElementsByTagName("g"));
  const randNum = Math.floor(Math.random() * 1956) + 2;

  let opacity = mMm[randNum].getAttribute("opacity");
  if (opacity === "0") {
    mMm[randNum].setAttribute("opacity", "1");
  } else {
    mMm[randNum].setAttribute("opacity", "0");
  }
};
const intervallo = setInterval(changeM, 1);
