/*
Assignment:
Implement 2 different functions, each with a single console.log(“(func name)“)
    Name each “A”, “B”
You can only call (emphasis on call) “A” Exactly ONE TIME.
Each function takes in one parameter, ‘k’.
“A” returns the value of ‘k’ squared.
“A” cannot perform any mathematic operations.

Think about how the call stack interprets your program, which function finished first?
*/

let A = function (k) {
    return B(k);
}

let B = function (k) {
    return k ** 2;
}

// Same as above using arrow functions
// let A = (k) => B(k)
// let B = (k) => k ** 2

console.log(A(10));
console.log(B(10));