const plus_button = document.querySelector ("plus_button");
console.log (plus_button);

const minus_button = document.querySelector ("minus_button");
console.log (minus_button);

const reset_button = document.querySelector ("reset_button")

let count = 0;

// Pluss-knapp
function increment (plus_button) {
    count = count + 1;
    console.log (count);
}

increment ();
increment ();

// Minus-knapp
function decrement (minus_button) {
    count = count - 1;
    console.log (count);
}

decrement ();
decrement ();
decrement ();
decrement ();

// Reset-knapp
function reset (reset_button) {
    count = 0;
    console.log (count);
}

reset ();