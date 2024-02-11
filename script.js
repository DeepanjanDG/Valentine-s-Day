const greeting = document.getElementById("greeting");
const changeButton = document.getElementById("changeButton");

changeButton.addEventListener("click", function() {
	greeting.textContent = "Hello, Dynamic Website!";
	greeting.style.color = "red";
});