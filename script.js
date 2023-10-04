const plus_button = document.querySelector ("#plus_buttonID");
console.log (plus_button);

const minus_button = document.querySelector ("#minus_buttonID");
console.log (minus_button);

const reset_button = document.querySelector ("#reset_buttonID")

let count = 0;

// Pluss-knapp
function increment () {
    count = count + 1;
    console.log (count);
}

increment ();
increment ();

// Minus-knapp
function decrement () {
    count = count - 1;
    console.log (count);
}

decrement ();
decrement ();
decrement ();
decrement ();

// Reset-knapp
function reset () {
    count = 0;
    console.log (count);
}

reset ();