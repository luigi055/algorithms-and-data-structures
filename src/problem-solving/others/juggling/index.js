export const juggleLeft = (array,times = 0) => [...array.slice(times),...array.slice(0,times)]
export const juggleRight = (array,times = 0) => {
  const newStartingIndex = array.length-times
  return (times >= array.length) 
    ? array 
    : [
        ...array.slice(newStartingIndex,array.length),
        ...array.slice(0,newStartingIndex)
    ]
}
