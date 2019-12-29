// Queue
// Kind of the opposite of a stack
// FIFO - First in, first out!
// It’s just a line, like the line at the grocery store
// Now, think about what a Queue does

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

Extras:
Implement obj_1.equals(obj_2), where both objs are of the same Class
This checks if all values (and in some cases, the order) are equal
*/

class newQueue {
	constructor(data = []) {
		this.data = data;
	}

	// add to the queue
	add(object) {
		this.data.push(object);
	}

	// remove last element
	remove() {
		// check if empty 
		if (!(this.isEmpty())) {
			let firstElement = this.data[0];
			// remove first element
			this.data.splice(0, 1);
			return firstElement;
		} else {
			// if queue is empty
			return null;
		}
	}

	// check if the queue is truly empty
	isEmpty() {
		return this.data.length === 0;
	}

	// print the queue
	print() {
		console.log(this.data);
	}
}

// testing

let test = new newQueue();

// add items

test.add(1);
test.add(2);
test.add(3);
test.add(4);
test.add(5);
test.add(6);

test.print();
console.log();  // add space for clarity

// remove element from queue

console.log(test.remove());  // output should be first element

console.log();  // add space for clarity
test.print();  // output should ne remainding elements in array
console.log();  // add space for clarity

// check if empty
test.isEmpty();
// remove all elements and then check again

console.log(test.remove());
console.log(test.remove());
console.log(test.remove());

console.log();  // add space for clarity
test.print();  // show that it is working
console.log();  // add space for clarity

console.log(test.remove());
console.log(test.remove());

console.log();  // add space for clarity
test.print();  // should output empty array

