import { sum } from "./";

describe("sum tests", () => {
  test("sum returns sum correctly", () => {
    const expected = 7;

    const actual = sum(3, 4);

    expect(actual).toBe(expected);
  });
});
