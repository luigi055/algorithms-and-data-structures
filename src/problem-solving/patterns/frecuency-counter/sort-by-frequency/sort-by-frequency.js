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