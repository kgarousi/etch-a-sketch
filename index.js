function random(number) {
    return Math.floor(Math.random() * number + 1);
}
let numRows = window.prompt("How many rows?");
let numCols = window.prompt("How many columns?");
const container = document.querySelector(".container");

if(numRows * numCols <= 10000){
    createGrid(numRows, numCols, container);
}
else{
    alert("Cannot create grid larger than 100 x 100");
} 

function createGrid(numRows, numCols, container){

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

const button = document.querySelector("button");

button.addEventListener("click", function changeSize(size) {
    rows = window.prompt("Enter number of rows");
    columns = window.prompt("Enter number of columns");
    container.innerHTML = "";
    if(rows * columns <= 10000){
        createGrid(rows, columns, container);
        console.log(rows * columns)
    }
    else{
        alert("Cannot create grid larger than 100 x 100");
    }    
});