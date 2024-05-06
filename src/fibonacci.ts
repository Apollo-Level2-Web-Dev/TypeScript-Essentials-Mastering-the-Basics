function fibonacciSum(n: number): bigint {
  let a: bigint = 0n;
  let b: bigint = 1n;
  let sum: bigint = 0n;

  for (let i = 0; i <= n; i++) {
    sum += a;
    const temp = a + b;
    a = b;
    b = temp;
  }

  return sum;
}

const n = 1000; // Calculate sum of first 100 Fibonacci numbers
const resultf = fibonacciSum(n);
console.log("Sum of first", n, "Fibonacci numbers:", resultf);
