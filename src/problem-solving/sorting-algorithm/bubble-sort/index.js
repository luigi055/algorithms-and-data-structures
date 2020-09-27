
const swap = (arr, indexOne, indexTwo) => {
  [arr[indexOne], arr[indexTwo]] = [arr[indexTwo], arr[indexOne]]
}

function bubbleSort(array) {
  let hasSwapped = false;
  for (let i = array.length; i > 0 ; i--) {
    for (let j = 0; j < i-1; j++) {
      if (array[j] > array[j+1]) {
        swap(array, j, j+1)
        hasSwapped = true
      }
    }

    if (!hasSwapped) break;
  }

  return array;
}


export default bubbleSort;