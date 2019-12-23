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

console.log(isPrime(5))