import insertionSort from './index'

describe("Testing insertionSort function", () => {
  it.each([
    [[6,3,2,5,4], [2,3,4,5,6]],
    [["jose", "carlos", "mario"], ["carlos", "jose", "mario"]],
    [[5,-4,0,20,-64,5,34],[-64,-4,0,5,5,20,34]]
  ])("should sort %s to %s", (arr, expected) => {
    expect(insertionSort(arr)).toEqual(expected);
  })
})