"strict mode"
// **Basic Button Click Counter:** A button and a display area; each click increments a displayed counter.
let counter = document.getElementById('counter');
let incrementer = document.getElementById('incrementer');
let decrementer = document.getElementById('decrementer');
let count = 0;

counter.textContent = 0;


if (counter && incrementer) {
    incrementer.addEventListener('click', ()=> {
        count++;
        counter.textContent = count;
    })


    decrementer.addEventListener('click', () => {
        count--;
        counter.textContent = count;
    })
}