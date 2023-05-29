import { sum } from "./";

describe("sum tests", () => {
  test("sum returns sum correctly", () => {
    const expected = 8;

    const actual = sum(3, 5);

    expect(actual).toBe(expected);
  });
});
