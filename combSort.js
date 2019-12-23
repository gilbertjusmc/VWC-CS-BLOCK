
function is_array_sorted(arr) {
	var sorted = true;
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] > arr[i + 1]) {
			sorted = false;
			break;
		}
	}
	return sorted;
}


// Array to sort
let arr = [12, 2, 43, 554, 232, 12, 54, 342, -23, 65, 5, 98, -7, 80, 8, 7, 0];

// Set starting values
let iteration_count = 0;

// Sets starting gap of 2 less than the size of Array
let gap = arr.length - 2;

// This is the factor which new gap size is made
let decrease_factor = 1.25;

// Until array is not sorted, repeat iterations
while (!is_array_sorted(arr)) {
	// If not first gap
	if (iteration_count > 0)
		// Calculate gap
		gap = (gap == 1) ? gap : Math.floor(gap / decrease_factor);

	// Set front and back elements and increment to a gap
	let front = 0;
	let back = gap;
	while (back <= arr.length - 1) {
		// Swaps elements if not in order
		if (arr[front] > arr[back]) {
			let temp = arr[front];
			arr[front] = arr[back];
			arr[back] = temp;
		}

		// Increment and re-run swapping elements
		front += 1;
		back += 1;
	}
	iteration_count += 1;
}

// Print the sorted array
console.log(arr);
