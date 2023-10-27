window.addEventListener("wheel", function (event) {
  if (event.deltaY > 0) {
    // Scorrimento verso il basso
    console.log("Scorrimento verso il basso");
  } else if (event.deltaY < 0) {
    // Scorrimento verso l'alto
    console.log("Scorrimento verso l'alto");
  }
});
