const swap = (arr, idx1, idx2) =>
([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

function selectionSort(array){
  for(let i = 0; i < array.length; i++){
      let lowestElementIndex = i;
      for(let j = i+1; j < array.length; j++){
          if(array[j] < array[lowestElementIndex]){
              lowestElementIndex = j;
          }
      }
      if(i !== lowestElementIndex){
        swap(array, i, lowestElementIndex);
      }
  }
  return array;
}

export default selectionSort