import getMinorMinutesSubtraction from './index';

describe("Testing array Challenge" , () => {
  it.each([
    [["1:10am", "1:20am"], 10],
    [["1:10pm", "4:40am", "5:00pm"], 230],
    [["10:00am", "11:45pm", "5:00am", "12:01am"], 16],
  ])("should the minor minute subtraction of %s be %i", (arr, expected) => {
    expect(getMinorMinutesSubtraction(arr)).toEqual(expected);
  });
})