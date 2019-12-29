// Set
// A set is just an unordered list (like an array) - but it has NO duplicates!
// Think of a math set {1, 2, 3}, etc.

/*
Assignment
Implement a Class for each of Set, Stack, Queue, Map
Each one should cover all of its capabilities
Each one can be initalized either empty (no parameters), OR with initial values
Implement obj.isEmpty()
Implement a “Type” Parameter (optional)
This parameter enforces types in your data structure, ie, all strings, all integers, etc.
Will throw error (or output a message) if you add a value that is not of the correct type
For Map, you will need two of these, one for Key, one for Value

Notes:
For Map, you can ONLY USE arrays. NO OBJECT-LITERALS. - That’s cheating!
Avoid built-in functions, if it feels like a shortcut, then it is a shortcut
*/
class newSet {
	constructor(data = []) {
		this.data = data;
	}

	// add elements
	add(object) {
		// check if element is already in the array. A set has no duplicates.
		if (!this.data.includes(object)) {
			this.data.push(object);
		}
	}

	// remove element
	remove(object) {
		let index = this.data.indexOf(object);
		// removes qty 1 element from the array (last by defualt)
		this.data.splice(index, 1);
	}

	print() {
		console.log(this.data);
	}
}

// testing
test = new newSet(); // initialize an empty array

// add elements to the array
test.add(1);
test.add(2);
test.add(3);
test.add(4);
test.add(5);
// print the array
test.print();

console.log();  // add space for clarity

// test adding elements that already are in the array
test.add(1);
test.add(4);
console.log("Added 1,4" + " | " + "Should return 1,2,3,4,5")
test.print();
console.log();  // add space for clarity

test.remove(); // should remove last element

console.log("Removed element" + " | " + "Should return 1,2,3,4")
test.print();
console.log();  // add space for clarity

console.log("Removed element named '2'" + " | " + "Should return 1,3,4")
test.remove(2); // should remove the element named "2"
test.print();