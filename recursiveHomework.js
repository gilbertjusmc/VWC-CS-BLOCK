/*
Assignment:
We want to know the sum of the first N integers. ie: n=5, then 5+4+3+2+1 = 15
First, find the closed form solution of this, and code a function.
Then, write the recursive function of this.
Think about the factorial method we went over.
*/

function addClosedForm(n) {
    // 5 * (5 + 1) / 2 = 15
    // 5 * 6 / 2 = 15
    // 30 / 2 = 15

    return n * (n + 1) / 2;
}


function addRecursively(n) {
    if (n < 0) return 0;
    if (n === 0) return 0;
    return n + addRecursively(n - 1);
}

console.log('Closed Form Answer: ' + addClosedForm(6));
console.log('Recursive Answer: ' + addRecursively(6));