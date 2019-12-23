/*
Assignment:
1. Design your own class / function / etc. IE., Class called NumberSystem()
2. It should be able to take in a integer or string IE., 134, “F8A5”, “1011", etc.
3. It should convert numbers from binary to decimal, and hex to decimal.
4. Look up how to convert decimal into hex and decimal to binary, add that to your class / program.

Bonus:
- Do Hex -> Binary
- Trivial method? Hex -> Decimal -> Binary
- Or you can find the mathematical shortcut, up to you how much time you want to spend
*/

function binaryToDecimal(number) {
	let decimalNumber = parseInt(0, 2);
	console.log(decimalNumber);
	for (let iterate = 0; iterate < number.length; iterate++) {
		console.log(decimalNumber + '')
		decimalNumber *= 2;
		decimalNumber += +number[iterate];
	}
	return decimalNumber;
}
console.log(binaryToDecimal(1010));  // Output should be 10

// hexToDecimal() {

// }

