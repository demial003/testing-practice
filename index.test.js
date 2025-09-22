import { capitalize } from "./modules/capitalize";
import { reverseString } from "./modules/reverseString";
import { calculator } from "./modules/calculator";

test("capitalize first letter of hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("capitalize first letter of goodbye", () => {
  expect(capitalize("goodbye")).toBe("Goodbye");
});

test("capitalize first letter of xdd", () => {
  expect(capitalize("xdd")).toBe("Xdd");
});

test("reverse string hello", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("reverse string goodbye", () => {
  expect(reverseString("goodbye")).toBe("eybdoog");
});

test("reverse string xdd", () => {
  expect(reverseString("xdd")).toBe("ddx");
});

test("add 1 and 2", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("add 3 and 4", () => {
  expect(calculator.add(3, 4)).toBe(7);
});

test("add 6 and 4", () => {
  expect(calculator.add(6, 4)).toBe(10);
});

test("subtract 6 and 4", () => {
  expect(calculator.subtract(6, 4)).toBe(2);
});

test("subtract 6 and 11", () => {
  expect(calculator.subtract(6, 11)).toBe(-5);
});

test("subtract 6 and 2", () => {
  expect(calculator.subtract(6, 2)).toBe(4);
});

test("multiply 6 and 4", () => {
  expect(calculator.multiply(6, 4)).toBe(24);
});

test("multiply 2 and 4", () => {
  expect(calculator.multiply(2, 4)).toBe(8);
});

test("multiply 6 and 8", () => {
  expect(calculator.multiply(6, 8)).toBe(48);
});

test("divide 6 and 2", () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

test("divide 10 and 2", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("divide 6 and 1", () => {
  expect(calculator.divide(6, 1)).toBe(6);
});
