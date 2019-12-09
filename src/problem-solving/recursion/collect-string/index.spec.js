import collectStrings from "./index";

describe("Testing collectString function", () => {
  it('should return ["foo","bar","baz"]', () => {
    const obj = {
      stuff: "foo",
      data: {
        val: {
          thing: {
            info: "bar",
            moreInfo: {
              evenMoreInfo: {
                weMadeIt: "baz"
              }
            }
          }
        }
      }
    };
    expect(collectStrings(obj)).toEqual(["foo", "bar", "baz"]);
  });
});
