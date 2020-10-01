function quickSortImmutable(array) {
  if (array.length === 0) return []

  const [head, ...tail] = array;
  const smallerElements = tail.filter(element => element <= head);
  const biggerElements = tail.filter(element => element > head);

  return [...quickSort(smallerElements), head, ...quickSort(biggerElements)];
}

function swap(array, positionOne, positionTwo) {
  if (positionOne === undefined || positionTwo === undefined) return array;
  if (positionOne >= array.length || positionTwo >= array.length) return array
  
  const temporal = array[positionOne]

  array[positionOne] = array[positionTwo];
  array[positionTwo] = temporal;

  return array;
}


function pivot(array, start = 0, end = array.length - 1) {
  // We are assuming the pivot is always the first element
  let pivot = array[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > array[i]) {
      swapIndex++;
      swap(array, swapIndex, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(array, start, swapIndex);
  return swapIndex;
}


function quickSortMutable(array, left = 0, right = array.length -1){
  if(left < right){
    let pivotIndex = pivot(array, left, right) //3
    //left
    quickSortMutable(array,left,pivotIndex-1);
    //right
    quickSortMutable(array,pivotIndex+1,right);
  }

   return array;
}


export default quickSortMutable;