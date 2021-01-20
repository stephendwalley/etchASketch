let container = document.querySelector("#container");

for (i = 0; i < 256; i++) {
	let newGrid = document.createElement("div");
	newGrid.classList.add("grid");
	container.appendChild(newGrid);
	newGrid.addEventListener("mouseover", adjustGridColor);
	console.log("new grid made");
}


function adjustGridColor(e) {
	let newGrid = document.querySelectorAll(".grid");
    this.removeAttribute("class");
    
    // checks what class is applied and applys a different class to change the suitable color

	console.log("adjustGrid Color!");
}
