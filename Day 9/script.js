let seats = 0;
const rectangles = document.querySelectorAll(".square");
Array.from(rectangles).forEach((square) => {
  square.addEventListener("click", (x) => {
    let result = square.classList.toggle("active");
    console.log(result)
    if (result) seats++;
    else seats--;
    document.querySelector(".he").innerHTML = "Booked Seats : " + seats;
    const remaining = (document.querySelector(".she").innerHTML =
      "Remaining Seats : " + (36 - seats));
  });
});