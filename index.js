let container = document.querySelector("#container");
defaultGrid();

function defaultGrid() {
	for (i = 0; i < 256; i++) {
		let newGrid = document.createElement("div");
		newGrid.classList.add("grid-uncolored");
		container.appendChild(newGrid);
		newGrid.addEventListener("mouseover", adjustGridColor);
	}
}

function adjustGridColor(e) {
	this.className = "grid-colored";
}

let button = document.querySelector(".reset");
button.addEventListener("click", chooseGridSize);

function chooseGridSize() {
	let choiceSize = prompt(
		"How big do you want to the grid?",
		"1 - 100 squares width/length"
	);

	if (choiceSize <= 100 && choiceSize > 0) {
		createGrid(choiceSize);
	} else {
		alert("ERROR. Please choose a valid value between 1 - 100.");
	}
}

function createGrid(choiceSize) {
	//finds all elements with colored or non colored classes and removes the divs so new grid can be made
	let grid = document.querySelectorAll(".grid-uncolored, .grid-colored");
	grid.forEach((element) => {
		element.remove();
	});

	// creates the correct number of divs

	for (i = 0; i < choiceSize * choiceSize; i++) {
		let newGrid = document.createElement("div");
		newGrid.classList.add("grid-uncolored");
		container.appendChild(newGrid);
		newGrid.addEventListener("mouseover", adjustGridColor);
	}

	// gets the class variables from css and adjusts them to the correct width and height to make the grid
	let r = document.querySelector(":root");
	r.style.setProperty("--grid-height", choiceSize);
	r.style.setProperty("--grid-width", choiceSize);
}
