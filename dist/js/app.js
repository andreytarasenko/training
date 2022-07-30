var acc = document.getElementsByClassName("clients-dropdown__but");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");

		var panel = this.nextElementSibling;
		if (panel.style.display === "flex") {
			panel.style.display = "none";
		} else {
			panel.style.display = "flex";
		}
	});
}
let cdLink = document.querySelectorAll(".clients-dropdown__link");
for (i = 0; i < cdLink.length; i++) {
	cdLink[i].addEventListener("click", function () {
		console.log("sanya fashist");
		cdLink.classList.toggle("clients-dropdown__link--active");
	});
}
