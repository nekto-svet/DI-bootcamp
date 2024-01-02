// colors that will be in the palette
 let allColors = ['rgb(2, 2, 73)', 'rgb(28, 28, 137)', 'rgb(66, 66, 237)', 'rgb(84, 9, 60)','rgb(140, 13, 132)', 'rgb(196, 43, 243)', 'rgb(88, 0, 0)', 'rgb(228, 13, 13)','rgb(255, 97, 150)', 'rgb(7, 80, 0)', 'rgb(30, 133, 32)', 'rgb(117, 245, 106)', 'rgb(101, 96, 2)', 'rgb(224, 224, 0)', 'rgb(249, 253, 130)', 'rgb(1, 83, 85)', 'rgb(6, 235, 251)', 'rgb(121, 251, 255)', 'rgb(0, 0, 0)', 'rgb(134, 134, 134)', 'rgb(255, 255, 255)'];


//make all items of the palette and set the event listener  on click(chooseColor())
let palette = document.getElementById('colors');
let cr = 0;//counter for index colors in the array allColors
for (let r=1; r<=7; r++){ //rows
    for (let c=1; c<=3; c++){ //columns
        let paletteItem = document.createElement('div');//create one item in the palette
        paletteItem.style = `grid-column: ${c}; grid-row: ${r}; background-color: ${allColors[cr]}`; //give a place and a color to the item
        palette.appendChild(paletteItem);
        paletteItem.addEventListener ('click', chooseColor);
        cr++; //increase color counter
    }
}
//function for choose the current color
let currColor;
function chooseColor(e){
    currColor = e.target.style.backgroundColor;
}

// make all cells in canvase greed and set event listener on mouseover (setColor)
let canvas = document.getElementById('canvas');
for (let r=1; r<=30; r++) { //rows
    for (let c=1; c<=80; c++){ //columns
        let cell = document.createElement('div'); //create a cell
        cell.style = `grid-column:${c}; grid-row:${r}; background-color: rgb(255, 255, 255);` //give to the cell a place and default color
        canvas.appendChild(cell);
        cell.addEventListener('mouseover', setColor);
    }
}

// chekers of mouse position (switch mousedown or mouseup)
let isMouseDown = false
canvas.addEventListener('mousedown', mouseDown )
canvas.addEventListener('mouseup', mouseUp)

function mouseDown(){
    isMouseDown = true
}

function mouseUp(){
    isMouseDown = false
}

//function to set new colot to the cell of canvas if mouse down
function setColor(e){
    if(isMouseDown === true){
        e.target.style.backgroundColor = currColor;
    }
}

// get button 'Clear' from document and set event listener with function, that returns default color to every cell of the canvase
let btnClear = document.getElementById('clear');
btnClear.onclick = function (){
    for (let child of canvas.children){
        child.style.backgroundColor = 'rgb(255, 255, 255)';
    }
}
