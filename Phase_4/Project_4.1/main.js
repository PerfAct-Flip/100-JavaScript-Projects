// "use strict"
// Background Color Changer: A button that changes the body's background color randomly on each click.


const btn = document.getElementById('btn');
const bodyElement = document.body;


//function for randomcolor
function randomColor () {
    const number = Math.floor(Math.random()*16777215).toString(16);
    return '#'+ (0 + number).slice(-6);
    
}

console.log(randomColor());

//event listener
if(btn) {
    btn.addEventListener('click', () => {
    if (bodyElement){
        selectedColor = randomColor();
        console.log(selectedColor);
        bodyElement.style.backgroundColor = selectedColor;
    }
})
}