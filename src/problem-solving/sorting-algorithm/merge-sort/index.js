function mergeIteratively(arrayOne, arrayTwo){
  let results = [];
  let i = 0;
  let j = 0;
  while(i < arrayOne.length && j < arrayTwo.length){
      if(arrayTwo[j] > arrayOne[i]){
          results.push(arrayOne[i]);
          i++;
      } else {
          results.push(arrayTwo[j])
          j++;
      }
  }
  while(i < arrayOne.length) {
      results.push(arrayOne[i])
      i++;
  }
  while(j < arrayTwo.length) {
      results.push(arrayTwo[j])
      j++;
  }
  return results;
}

function mergeRecursively (arrayOne, arrayTwo) {
  if (arrayOne.length === 0) return arrayTwo;
  if (arrayTwo.length === 0) return arrayOne;

  const [headOne, ...tailOne] = arrayOne;
  const [headTwo, ...tailTwo] = arrayTwo

  if (headOne <= headTwo) return [headOne, ...mergeRecursively(tailOne, arrayTwo)];
  return [headTwo, ...mergeRecursively(tailTwo, arrayOne)]
}

function mergeSort(array) {
  if (array.length <= 1) return array

  const midIndex = Math.floor(array.length/2);
  const leftHalf = array.slice(0, midIndex)
  const rightHalf = array.slice(midIndex)

  return mergeRecursively(mergeSort(leftHalf), mergeSort(rightHalf));
}

export default mergeSort