let currentMode = 'color';
let currentColor = '#333333';
let currentSize = 16;
const grid = document.getElementById('grid');
const colorPicker = document.getElementById('colorPicker');
const colorBtn = document.getElementById('colorBtn');
const eraseBtn = document.getElementById('eraseBtn');
const clearBtn = document.getElementById('clearBtn');

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

function reloadGrid(size) {
    grid.innerHTML = ''
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add("grid-element");
        gridElement.addEventListener('mouseover', changeColor);
        gridElement.addEventListener('mousedown', changeColor);
        grid.appendChild(gridElement);
    };
};

reloadGrid(currentSize);

const sizeValue = document.getElementById('sizeValue');
const sizeSlider = document.getElementById('sizeSlider');

sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);

function changeSize(value) {
    currentSize = value;
    sizeValue.innerHTML = `${value} x ${value}`;
    reloadGrid(currentSize);
};