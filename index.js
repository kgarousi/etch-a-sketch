
function createGrid(){
    let numRows = window.prompt("How many rows?");
    let numCols = window.prompt("How many columns?");
    const container = document.querySelector(".container");

    for(let i = 0; i < numCols; i++){
        const column = document.createElement("div");
        column.classList.add("column");
        container.appendChild(column);
        for (let j = 0; j < numRows; j++){
            const row = document.createElement("div");
            row.classList.add("row");
            column.appendChild(row);
        }
    }
}

const newGridBtn = document.querySelector("button");

newGridBtn.addEventListener("click", ()=>{
    createGrid();
});