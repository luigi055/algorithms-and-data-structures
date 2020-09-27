function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let currentElement = array[i];
    for (var j = i - 1; j >= 0 && array[j] > currentElement; j--) {
      array[j+1] = array[j];
    }

    array[j+1] = currentElement;
  }
  return array;
}

export default insertionSort;