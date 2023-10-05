//HTML kobling
const counter = document.querySelector ("#counterID");
console.log (counter);

const plus_button = document.querySelector ("#plus_buttonID");
console.log (plus_button);

const minus_button = document.querySelector ("#minus_buttonID");
console.log (minus_button);

const reset_button = document.querySelector ("#reset_buttonID");
console.log (reset_button);

//tellevariabel
let count = 0;

// Pluss-knapp
function increment (plus_button) {
    count = count + 1;
    console.log (count);
    counter.textContent = count;
}

// Minus-knapp
function decrement (minus_button) {
    count = count - 1;
    console.log (count);
    counter.textContent = count;
}

// Reset-knapp
function reset (reset_button) {
    count = 0;
    console.log (count);
}

//Eventlistener med klikkfunksjon
plus_button.addEventListener ("click", increment);
minus_button.addEventListener ("click", decrement);
reset_button.addEventListener ("click", reset);