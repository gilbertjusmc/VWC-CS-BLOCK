// Stack
// We went over stack already
// LIFO - Last in, first out!
// What does a Stack class do?
// We can add to the stack
// We can remove from the stack
// We can check if the stack is empty or not
// We can initialize it in multiple ways, too

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
class Stack {
	constructor() {
		this.dataStack = [];
		this.top = 0;
	}

	// func Add elements to the stack
	push(element) {
		this.dataStack[this.top++] = element;
	}

	show() {
		console.log(this.dataStack)
	}

	// func Shows the top element of the stack
	peek() {
		return this.dataStack[this.top - 1];
	}

	// func Removes top element Last In First Out
	pop() {
		return this.dataStack[--this.top];
	}

	// func Clears the stack
	clear() {
		this.top = 0;
	}

	// func Shows size of stack
	length() {
		return this.top === 0;
	}
}

// Test Cases 							// Results
let s = new Stack();
console.log("Is Empty = " + s.length()); // true
s.push("Marine Corps");
s.push("Air Force");
s.push("Army");
s.push("Navy");
s.push("Coast Guard");
console.log("Is Empty = " + s.length()); // false
console.log(s.peek()); 					// Coast Guard
console.log("'Removed top item...'");
s.pop();
console.log(s.peek()); 					// Navy
console.log("Is Empty = " + s.length()); // false
console.log("'clear'");
s.clear();
console.log("Is Empty = " + s.length()); // true
console.log(s.peek()); 					// undefined
s.push("Marine Corps");
console.log(s.peek()); 					// Marine Corps
