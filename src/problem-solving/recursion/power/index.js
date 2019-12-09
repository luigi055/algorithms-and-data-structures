function power(number, times) {
  if (times === 0) return 1;
  times--;

  return number * power(number, times);
}

export default power;
