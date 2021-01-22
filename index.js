let container = document.querySelector("#container");
defaultGrid();

function defaultGrid() {
	for (i = 0; i < 256; i++) {
		let newGrid = document.createElement("div");
		newGrid.classList.add("grid-uncolored");
		container.appendChild(newGrid);
		newGrid.addEventListener("mouseover", adjustGridColor);
		console.log("new grid made");
	}
}

function chooseGridSize() {
	let choiceSize = prompt(
		"How big do you want to the grid?",
		"1 - 100 squares width/length"
	);

	if (choiceSize <= 100 && choiceSize > 0) {
		createGrid(choiceSize);
		console.log("success");
	} else {
		alert("ERROR. Please choose a valid value between 1 - 100.");
	}
}

function createGrid(choiceSize) {
	//finds all elements with colored or non colored classes and removes the divs so new grid can be made
	let grid = document.querySelectorAll(".grid-uncolored, .grid-colored");
	grid.forEach((element) => {
		element.remove();
		console.log("removed div");
	});

	// creates the correct number of divs

	for (i = 0; i < choiceSize * choiceSize; i++) {
		let newGrid = document.createElement("div");
		newGrid.classList.add("grid-uncolored");
		container.appendChild(newGrid);
		newGrid.addEventListener("mouseover", adjustGridColor);
		console.log("new grid made");
	}

	// gets the class variables from css and adjusts them to the correct width and height to make the grid
	let r = document.querySelector(":root");
	r.style.setProperty("--grid-height", choiceSize);
	r.style.setProperty("--grid-width", choiceSize);
}

function adjustGridColor(e) {
	this.className = "grid-colored";
	console.log("adjustGrid Color!");
}

let button = document.querySelector(".reset");
button.addEventListener("click", resetGridColor);

function resetGridColor(e) {
	let coloredGrid = document.querySelectorAll(".grid-colored");
	coloredGrid.forEach((element) => {
		element.className = "grid-uncolored";
		console.log("reset");
	});
	chooseGridSize();
}
