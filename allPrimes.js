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

console.log(allPrimesTo(10));
console.log(allPrimesTo(20));
console.log(allPrimesTo(50));
console.log(allPrimesTo(100));

