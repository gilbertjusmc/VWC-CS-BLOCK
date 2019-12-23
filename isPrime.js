/*
(Easy) - Prime Number Test for any integer!
    - Also do the first “n” primes - Write your Big O for both!
		- We will re-visit this next week
*/

// Returns booleen, from number given.
function isPrime(number) {
	if (number === 1) {
		return false;
	} else if (number === 2) {
		return true;
	} else {
		for (let input = 2; input < number; input++) {
			if (number % input === 0) {
				return false;
			}
		}
		return true;
	}
}
console.log('') // Add space for cleaner view in terminal
console.log('Returns true or false based on input.');
console.log('Is the input Prime? ' + isPrime(5));

// This will return all primes up to a given number
function allPrimesTo(maxNum) {
	let store = [], i, j, primes = [];
	for (i = 2; i <= maxNum; ++i) {
		if (!store[i]) {
			primes.push(i);
			for (j = i << 1; j <= maxNum; j += i) {
				store[j] = true;
			}
		}
	}
	return primes;
}

console.log('') // Add space after first function
console.log('This is all primes up to given number.');
console.log(allPrimesTo(10));
console.log(allPrimesTo(20));
console.log(allPrimesTo(50));
console.log(allPrimesTo(100));