function fibonacci(number) {
  if (number <= 2) return 1;

  return fibonacci(number - 2) + fibonacci(number - 1);
}

export default fibonacci;
