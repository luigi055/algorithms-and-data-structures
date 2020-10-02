import radixSort from './index'

describe("Testing radixSort function", () => {
  it.each([
    [[6,3,2,5,4], [2,3,4,5,6]],
    [[23,345,5467,12,2345,9852], [12,23,345,2345,5467,9852]]
  ])("should sort %s to %s", (arr, expected) => {
    expect(radixSort(arr)).toEqual(expected);
  })
})