let cells = [];
const container = document.getElementById('container');
let size = 16;



for(let i = 0; i < size*size; i++){
    cells[i] = document.createElement('div');
    cells[i].classList.add('cell');
    container.appendChild(cells[i]);
}

cells.forEach((cell) => {
    cell.addEventListener('mousemove', () => {
        cell.classList.replace('cell' ,'cell-hovered');
    });
});





