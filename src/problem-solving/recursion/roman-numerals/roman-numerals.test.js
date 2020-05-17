import convertToRoman from "./convertToRoman";

describe("Test convertToRoman function", () => {
  it.each([
    [1, "I"],
    [2, "II"],
    [3, "III"],
    [4, "IV"],
    [5, "V"],
    [9, "IX"],
    [12, "XII"],
    [16, "XVI"],
    [29, "XXIX"],
    [44, "XLIV"],
    [45, "XLV"],
    [68, "LXVIII"],
    [83, "LXXXIII"],
    [97, "XCVII"],
    [99, "XCIX"],
    [400, "CD"],
    [500, "D"],
    [501, "DI"],
    [649, "DCXLIX"],
    [798, "DCCXCVIII"],
    [891, "DCCCXCI"],
    [1000, "M"],
    [1004, "MIV"],
    [1006, "MVI"],
    [1023, "MXXIII"],
    [2014, "MMXIV"],
    [3999, "MMMCMXCIX"],
  ])("should convert %i to %s", (number, expected) => {
    expect(convertToRoman(number)).toEqual(expected);
  });
});
