# Linear Search

Given an array, the simplest way to search for a value is to look at every element in the array and check if it's the value we want.

## Example

Let's try to mimic the String.prototype.indexOf() function. using Linear Search.

```
function linearSearch(array, valueToSearch) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === valueToSearch) return i;
  }

  return -1;
}
```

## Big O notation of Linear Search

| Algorithm     | Time Complexity |          |          | Space Complexity |
| :------------ | :-------------: | :------: | :------: | :--------------: |
|               |      Best       | Average  |  worst   |      Worst       |
| Linear Search |      O(1)       |   O(N)   |   O(N)   |       O(N)       |
| Binary Search |      O(1)       | O(Log N) | O(Log N) |       O(N)       |
