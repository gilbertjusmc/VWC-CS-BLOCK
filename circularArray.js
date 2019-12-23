//TODO: Create a circular Array
// Use the modulus operator

let circularArr = ["One", "Two", "Three", "Four", "Five", "Six"]

for (let i = 0, len = circularArr.length; i < len; i++) {
    let string = circularArr[i];
    for (let j = 1; j < 6; j++)
        string += "," + circularArr[(i + j) % len]; // you could push to an array as well
    console.log(i + ": " + string + '\n');
}