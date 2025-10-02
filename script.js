const container = document.querySelector(".container");

function makeGrid(width){
    let height = width;
    for(let i; i < height; i++){
        let row = document.createElement("div");
        row.setAttribute("class", "row");
        container.appendChild("row");
        for(let j; j < width; j++){
            let gridCol = document.createElement("div");
            gridCol.setAttribute("class", "gridCol");
            container.appendChild("gridCol");
            container.appendChild("gridCol");
        }

    }
}

makeGrid(16);

container.addEventListener("mouseover", (e) => {
    if(e.target !== container){
        e.target.style.backgroundColor="black";
    }
})

const resetbtn = document.querySelector(reset);
reset.addEventListener("click", () => {
    while (container.firstChild){
        container.removeChild(container.firstChild)
    }
    let newGrid;
    do{
        newGrid = Number(prompt("What is the size of the new grid: "));
    }while(!Number.isInteger(newGrid) || newGrid <100)
        makeGrid(newGrid);

    
})