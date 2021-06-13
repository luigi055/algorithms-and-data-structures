import getMinorMinutesSubtraction from "./index";

describe("Testing array Challenge", () => {
	it.each([
		[["1:10am", "1:20am"], 10],
		[["1:10pm", "4:40am", "5:00pm"], 230],
		[["10:00am", "11:45pm", "5:00am", "12:01am"], 16],
	])("should the minor minute subtraction of %s be %i", (arr, expected) => {
		expect(getMinorMinutesSubtraction(arr)).toEqual(expected);
	});
});

// ["2:10pm", "1:30pm", "10:30am", "4:42pm"] the output was incorrect. The correct output is 40
// 2. For input ["11:12am", "5:10pm", "11:11am", "9:23pm"] the output was incorrect. The correct output is 1
// 3. For input ["11:12am", "5:10pm", "11:14am", "9:23pm"] the output was incorrect. The correct output is 2
// 4. For input ["10:00am", "11:45pm", "5:00am", "6:02am", "5:02pm"] the output was incorrect. The correct output is 62
// 5. For input ["2:10pm", "1:30pm", "10:30am", "10:00am", "4:42pm"] t
