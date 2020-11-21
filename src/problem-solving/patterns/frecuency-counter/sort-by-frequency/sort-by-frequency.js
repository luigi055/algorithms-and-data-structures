/**
 *  sort elements in an array by decreasing frequency of elements. 
 *  If two elements have the same frequency, sort them by increasing value.
 *  Time Complexity: O(n log n)
 *  Space Complexity: O(n)
 */
function sortByFrequency(numbers){
  const frequencyMap = new Map();

  numbers.forEach(number => {
    const savedNumber = frequencyMap.get(number) || 0;
    frequencyMap.set(number, savedNumber+1);
  })

  return numbers.slice().sort((a,b) => {
    const savedNumberA = frequencyMap.get(a);
    const savedNumberB = frequencyMap.get(b);

    return savedNumberA === savedNumberB ? a - b : savedNumberB - savedNumberA;
  });
}

export default sortByFrequency