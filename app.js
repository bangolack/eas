/*
PixArt
create pixel art in your browser
on click and on hover

change color

grid size slider

quick color options




*/
//global variables

let reset = document.querySelector("#reset")
console.log(reset)
let choiceSlider = document.querySelector("input")
let color = "white"
document.addEventListener("DOMContentLoaded", function(){
    createBoard(16)
})

function createBoard(boardSize){
    const gridContainer = document.getElementById('grid-container')

    gridContainer.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${boardSize}, 1fr)`;

    let numOfDivs = boardSize * boardSize;

    for(let i = 0; i < numOfDivs; i++){
        let div = document.createElement("div")
        div.addEventListener("mouseover", function(){
            div.style.backgroundColor = "black"
        })
        div.className = "grid-el"
        div.style.border = ("1px solid black")
        gridContainer.appendChild(div)
    }

}

function getGridSize(){
    let choice = choiceSlider.value
    let del = document.querySelectorAll(".grid-el")
    del.forEach(function(e){
        e.remove()
    })
    createBoard(choice, color)
}

choiceSlider.addEventListener("change", getGridSize)

reset.addEventListener("click", function(){
    getGridSize()
} )