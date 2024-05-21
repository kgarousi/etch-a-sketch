function random(number) {
    return Math.floor(Math.random() * number + 1);
}

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
            row.addEventListener("mouseover", function bgChange(){
                const rndCol = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
                row.style.backgroundColor = rndCol;
            })
        }
    }
}

const newGridBtn = document.querySelector("button");

newGridBtn.addEventListener("click", ()=>{
    createGrid();
});