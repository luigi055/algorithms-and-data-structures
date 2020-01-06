# Binary Search

Search a sorted array be repeatedly dividing the search interval in half. (Using the divide and conquer problem solving pattern). Begin with an interval covering the whole array in the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half, otherwise narrow it to the upper half, repeatedly check until the value is found or the interval is empty.

## Example

Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists otherwise return -.

```
function binarySearch(sortedArray, element) {
  let start = 0;
  let end = sortedArray.length -1;
  let middle = Math.floor((start + end)/2);

  while(sortedArray[middle] !== element && start <= end) {
    if (element < sortedArray[middle]) {
      end =middle -1;
    } else {
      start = middle + 1;
    }

    middle = Math.floor((start + end)/2);
  }

  return sortedArray[middle] === element ? middle : -1;
}
```

## Big O notation of Binary Search

| Algorithm     | Time Complexity |          |          | Space Complexity |
| :------------ | :-------------: | :------: | :------: | :--------------: |
|               |      Best       | Average  |  worst   |      Worst       |
| Binary Search |      O(1)       | O(Log N) | O(Log N) |       O(N)       |
| Linear Search |      O(1)       |   O(N)   |   O(N)   |       O(N)       |
