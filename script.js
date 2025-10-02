const container = document.querySelector(".container");
const resetBtn = document.querySelector("button");

function makeGrid(size) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < size; j++) {
      const gridCol = document.createElement("div");
      gridCol.classList.add("gridCol");

      gridCol.addEventListener("mouseover", () => {
        gridCol.style.backgroundColor = "black";
      });
      row.appendChild(gridCol);
    }
    container.appendChild(row);
  }
}

function clearGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

makeGrid(16);

resetBtn.addEventListener("click", () => {
  clearGrid();
  let newGrid;
  do {
    newGrid = Number(prompt("What is the size of the new grid? (1-100): "));
  } while (!Number.isInteger(newGrid) || newGrid < 1 || newGrid > 100);
  makeGrid(newGrid);
});
