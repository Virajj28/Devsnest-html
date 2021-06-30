//displaytime
document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("date").innerHTML = Date();
}


// dbl click
function dblclick() {
  document.getElementById("2clicks").innerHTML = "Please check someone double clicked me!";
}

//Drag events
/* Events fired on the drag target */
function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
}

function dragging(event) {
  document.getElementById("drbp").innerHTML = "The element is being dragged";
}


/* Events fired on the drop target */
function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
  document.getElementById("drbp").innerHTML = "The element was dropped";
}