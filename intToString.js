/*
(Medium) - Integer to String
    - Given any positive OR negative integer, returns it as a String
    - NO BUILT-INs
    - And obviously no JS type inferencing magic.
i.E., 550 == “550"
*/
// var input = -1;
function intToString(input) {
    // Show input and typeof input
    console.log(input + ' = ' + typeof (input));
    // Concat an empty string
    let converted = '' + input;
    // Show that the data type has changed 
    console.log(converted + ' = ' + typeof (converted));
}
// input an integer to return a string of that input.
intToString(5);
console.log(' '); // Add space for readability
intToString(-2);


