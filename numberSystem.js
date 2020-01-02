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

// NOT WORKING YET......!!!!!!!!
function binaryToDecimal(binNumber) {
	let decimalNumber = parseInt(0, 2);
	// console.log(decimalNumber);
	for (let iterate = 0; iterate < binNumber.length; iterate++) {
		// console.log(decimalNumber + '')
		decimalNumber *= 2;
		decimalNumber += binNumber[iterate];
	}
	return decimalNumber + " - Binary To Decimal";
}
console.log(binaryToDecimal(1010));  // Output should be 10


// Hex To Decimal Table
// 0 - 9 = 0 - 9
// A - F = 10 - 15

// 9 = 9 * (16 * ^1) = 144
// C = 12 * (16 * ^0) = 12
// 9C = 144 + 12 = 156 ^10 dec
function hexToDec(hexNumber) {
	let decimalNum = 0;
	let table;
	hexNumber = hexNumber.toUpperCase();


	for (let iterate = 0; iterate < hexNumber.length; iterate++) {
		// Create the hex table by setting the decimal values for each element
		// console.log(decimalNum + " - Decimal Num")
		// console.log();

		// console.log(iterate + " Iteration Count");
		// console.log();
		table = "0123456789ABCDEF".indexOf(hexNumber[iterate]);
		// console.log(table + " Table");
		// console.log();
		// Take the given hexNumber
		// console.log(decimalNum + " Decimal");
		// console.log();
		decimalNum = decimalNum * 16 + table;

	}
	return decimalNum + " - Hex To Decimal";
}
console.log(hexToDec("ABE"));


