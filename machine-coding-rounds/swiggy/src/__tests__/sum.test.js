import { sum } from "../components/sum";
test("Sum function should calculate the sum of two numbers", () => {
  const result = sum(3, 4);
  // Known as Assertion
  expect(result).toBe(7);
});
