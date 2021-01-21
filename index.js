let container = document.querySelector("#container");

for (i = 0; i < 256; i++) {
	let newGrid = document.createElement("div");
	newGrid.classList.add("grid-uncolored");
	container.appendChild(newGrid);
	newGrid.addEventListener("mouseover", adjustGridColor);
	console.log("new grid made");
}

function adjustGridColor(e) {
	this.className = "grid-colored";
	console.log("adjustGrid Color!");
}

let button = document.querySelector(".reset");
button.addEventListener("click", resetGridColor);

function resetGridColor(e) {
	let coloredGrid = document.querySelectorAll(".grid-colored");
	coloredGrid.forEach(element => {
		element.className = "grid-uncolored";
		console.log("reset");
	});
	
}
