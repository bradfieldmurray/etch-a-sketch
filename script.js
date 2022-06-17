const container = document.getElementById('container');
const boardSize = document.querySelector('.btnBoardSize');
const normalOption = document.getElementById('normal');
const gradientOption = document.getElementById('gradient');

const initialSize = 16;




//create initial 16x16 white grid
populateBoard(initialSize);

//removes all children from parent container so that it can be refilled with a new sie
function clearBoard(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


//populates the board based on size parameter
function populateBoard(size) {

    //array for holding the cells to be later looped through to create listeners
    let cells = [];

    //loop for creating the elements,applying css styling and adding them to container
    for(let i = 0; i < size*size; i++){
        cells[i] = document.createElement('div');
        cells[i].classList.add('cell');
        container.appendChild(cells[i]);
    }

    ///set layout based on new size
    container.style.gridTemplateColumns = `repeat(${size}, ${960/size}px)`;


    cells.forEach((cell) => {

        //initialize rgb values for first time through
        let redValue = 255;
        let greenValue = 255;
        let blueValue = 255; 

        //create listener for cells and cause them to change color on hover
        cell.addEventListener('mouseenter', () => {

            //if structure to determine which color to fill cell with
            if(normalOption.checked) {
                cell.style.background = `rgb(${0}, ${0}, ${0})`;

            } else if(gradientOption.checked){

                //if cell color is not yet black
                if(redValue != 0) {

                    //reduce rgb values by 10 percent of original until square is black
                    cell.style.background = `rgb(${redValue -= 255/10}, ${greenValue -= 255/10}, ${blueValue -= 255/10})`;
                }
            } else {
                cell.style.background = `rgb(${makeRandomColor(255)}, ${makeRandomColor(255)}, ${makeRandomColor(255)})`;
            }
        });
    });
}


function makeRandomColor(max) {
    return Math.floor(Math.random() * max);
}

//event listener for resize button
boardSize.addEventListener(('click'), () => {
    let size = prompt("Enter a size (1-100)");
    if((size < 1 || size > 100) || Number.isInteger(Number(size)) == false) {
        alert("Please enter a valid number (1-100)");
    } else {
        clearBoard(container);
        populateBoard(size);
    }
});





