//displaytime
document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("date").innerHTML = Date();
}