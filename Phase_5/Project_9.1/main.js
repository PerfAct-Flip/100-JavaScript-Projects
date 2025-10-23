// Drawing App (Canvas API): Allow users to draw simple lines or shapes on an HTML canvas.
const canvas = document.querySelector('#drawCanvas');
const ctx = canvas.getContext('2d');
const controls = document.getElementById('controls');
const thicknessSlider = document.getElementById('thickness');
const thicknessValueSpan = document.getElementById('thicknessValue');
const lineColor = document.getElementById('colorPicker');
const clearBtn = document.getElementById('clearBtn');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;


//variables 
let isDrawing = false;
let lastX = 0;
let lastY = 0;


let lineColorValue = document.getElementById('colorPicker').value;
let lineWidth = parseInt(document.getElementById('thickness').value);

lineColor.addEventListener('input', (e) => {
    lineColorValue = e.target.value;
});

thicknessSlider.addEventListener('input', (e) => {
    lineWidth = parseInt(e.target.value);
    thicknessValueSpan.textContent = lineWidth;
});

clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});


function draw(e) {

    if(!isDrawing) return
    ctx.strokeStyle = lineColorValue;
    ctx.lineWidth = lineWidth;
    ctx.lineJoin='round';
    
    ctx.lineCap='round';
    

    ctx.beginPath();
    

    let currentX, currentY;

    //touch and mouse events
    if (e.touches && e.touches.length > 0) {
        currentX = e.touches[0].clientX - canvas.offsetLeft;
        currentY = e.touches[0].clientY - canvas.offsetTop;
    } else {
        currentX = e.offsetX;
        currentY = e.offsetY;
    }
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(currentX,currentY);
    ctx.stroke();

    [lastX, lastY] = [currentX, currentY];
}

// --- Event Handlers ---

function startDrawing(e) {
    isDrawing = true;


    if (e.touches && e.touches.length > 0) {
        lastX = e.touches[0].clientX - canvas.offsetLeft;
        lastY = e.touches[0].clientY - canvas.offsetTop;
    } else {
        [lastX, lastY] = [e.offsetX, e.offsetY];
    }

    draw(e);
}

function stopDrawing() {
    isDrawing = false;
}

// Desktop/Mouse Events
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

// Mobile/Touch Events
canvas.addEventListener('touchstart', (e) => {
    e.preventDefault(); 
    startDrawing(e);
});
canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    draw(e);
});
canvas.addEventListener('touchend', stopDrawing);


function resizeCanvas() {

    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    
  
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    ctx.putImageData(imgData, 0, 0);

    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
}

window.addEventListener('resize', resizeCanvas);

resizeCanvas();