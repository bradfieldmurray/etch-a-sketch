const container = document.getElementById('container');
const boardSize = document.querySelector('.btnBoardSize');
const initialSize = 16;

let cells = [];



populateBoard(initialSize);

function clearBoard(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



function populateBoard(size) {
    for(let i = 0; i < size*size; i++){
        cells[i] = document.createElement('div');
        cells[i].classList.add('cell');
        container.appendChild(cells[i]);
    }

    ///set layout based on new size
    container.style.gridTemplateColumns = `repeat(${size}, ${960/size}px)`;

    //create listener for cells and cause them to change color on hover
    cells.forEach((cell) => {
        cell.addEventListener('mousemove', () => {
            cell.classList.replace('cell' ,'cell-hovered');
        });
    });
}





boardSize.addEventListener(('click'), () => {
    let size = prompt("Enter a size (1-100)");
    if(size < 1 || size > 100) {
        alert("Please enter a valid number (1-100)");
    } else {
        clearBoard(container);
        populateBoard(size);
    }
});





