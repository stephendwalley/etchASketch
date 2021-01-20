let container = document.querySelector("#container");
let newGrid = document.querySelectorAll(".grid-uncoloured");

for (i = 0; i < 256; i++) {
	let newGrid = document.createElement("div");
	newGrid.classList.add("grid-uncoloured");
	container.appendChild(newGrid);
	newGrid.addEventListener("mouseover", adjustGridColor);
	console.log("new grid made");
}

function adjustGridColor(e) {
	let newGrid = document.querySelectorAll(".grid-uncoloured");
	this.className = "grid-coloured";
	console.log("adjustGrid Color!");
}

let button = document.querySelector(".reset");
button.addEventListener("click", resetGridColor);

function resetGridColor(e) {
	console.log("reset");
	newGrid.className = "grid-uncoloured";
}
