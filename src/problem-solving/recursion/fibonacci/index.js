// Big O with recursion solution for fibonacci
// O(2^n) very inefficient
// Top-Down iteration
// function fibonacci(number) {
//   if (number <= 2) return 1;
//   return fibonacci(number - 2) + fibonacci(number - 1);
// }

// Now the dynamic programming solution using memoization
// Recursion + memoization
// Top-Down iteration
// function fibonacci(number, memo = []) {
//   if (memo[number] !== undefined) return memo[number];
//   if (number <= 2) return 1;

//   memo[number] = fibonacci(number -1, memo) + fibonacci(number-2, memo)

//   return memo[number];
// }

// Imperative iteration + memoization + Button-Up (Tabulation approach)
// Also O(n)
function fibonacci(number) {
  if (number <= 2) return 1;
  const fibNumbers = [0,1,1];

  for (let i=3; i <= number; i++) {
    fibNumbers[i] = fibNumbers[i-1] + fibNumbers[i-2];
  }
  return fibNumbers[number];
}

export default fibonacci;
