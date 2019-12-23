// currently not working.  out of memory
var itemsToSort = [5, 3, 7, 6, 2, 9];

// func to swap indexs
function indexSwap(itemsToSort, leftIndex, rightIndex) {
    var tempVar = itemsToSort[leftIndex];
    itemsToSort[leftIndex] = itemsToSort[rightIndex];
    itemsToSort[rightIndex] = tempVar;
}

function partition(itemsToSort, left, right) {
    // set middle element
    var middle = itemsToSort[Math.floor((right + left) / 2)],

        // set left pointer
        leftPointer = left,

        // set righe pointer
        rightPointer = right;
    console.log('Middle ' + middle, 'Left ' + left, 'Right ' + right);

    while (leftPointer <= rightPointer) {
        while (itemsToSort[leftPointer] < middle) {
            leftPointer++;
            console.log(leftPointer);
        }
        while (itemsToSort[rightPointer] > middle) {
            rightPointer++;
            console.log(rightPointer);
        }
        if (leftPointer <= rightPointer) {
            // swap the two elements and increment
            indexSwap(itemsToSort, leftPointer, rightPointer);
            leftPointer++;
            rightPointer++;
        }
    }
    return leftPointer;
}
console.log(itemsToSort);

function quickSort(itemsToSort, left, right) {
    let index;
    // index from partition
    if (itemsToSort.length > 1) {
        index = partition(itemsToSort, left, right);
        if (left < index - 1) {
            // when more elements are on the left side of middle
            quickSort(itemsToSort, left, index - 1);
        }
        if (index < right) {
            // when more elements are on the right side of middle
            quickSort(itemsToSort, index, right);
        }
    }
    return itemsToSort;
}

// call quickSort (list to sort -> set left index -> set Right index)
var sortedArray = quickSort(itemsToSort, 0, itemsToSort.length - 1);
console.log(sortedArray);  // output:  [-23, -7, 0, 2, 5, 7, 8, 12, 12, 43, 54, 65, 80, 98, 232, 342, 554]