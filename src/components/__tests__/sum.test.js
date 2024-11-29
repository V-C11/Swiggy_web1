import { sum } from "../sum";

test("result should be 7", () => {
  const result = sum(3, 7);

  //Assertion
  expect(result).toBe(10);
});
