let currentMode = 'color';
let currentColor = '#333333';
const grid = document.getElementById('grid');
const colorPicker = document.getElementById('colorPicker');
const colorBtn = document.getElementById('colorBtn');
const eraseBtn = document.getElementById('eraseBtn');
const clearBtn = document.getElementById('clearBtn');

grid.style.gridTemplateColumns = `repeat(16, 1fr)`;
grid.style.gridTemplateRows = `repeat(16, 1fr)`;

for (let i = 0; i < 16 * 16; i++) {
    const gridElement = document.createElement('div');
    gridElement.classList.add("grid-element");
    gridElement.addEventListener('mouseover', changeColor);
    gridElement.addEventListener('mousedown', changeColor);
    grid.appendChild(gridElement);
};

colorPicker.onchange = (e) => setCurrentColor(e.target.value);

function setCurrentColor(newColor) {
    currentColor = newColor;
};

colorBtn.onclick = () => setCurrentMode('color');
eraseBtn.onclick = () => setCurrentMode('erase');
clearBtn.onclick = () => reloadGrid();

function setCurrentMode(newMode) {
    currentMode = newMode;
};

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    if (currentMode === 'color') {
        e.target.style.backgroundColor = currentColor;
    } else if (currentMode === 'erase') {
        e.target.style.backgroundColor = '#fefefe';
    }
};

function reloadGrid() {
    grid.innerHTML = ''
    grid.style.gridTemplateColumns = `repeat(16, 1fr)`;
    grid.style.gridTemplateRows = `repeat(16, 1fr)`;

    for (let i = 0; i < 16 * 16; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add("grid-element");
        gridElement.addEventListener('mouseover', changeColor);
        gridElement.addEventListener('mousedown', changeColor);
        grid.appendChild(gridElement);
    };
};