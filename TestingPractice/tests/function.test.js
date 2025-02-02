// functions.test.js
import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from '../functions';

// capitalize.test.js
test('capitalizes the first letter of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('world')).toBe('World');
});

// reverseString.test.js
test('reverses a string', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('world')).toBe('dlrow');
});

// calculator.test.js
test('adds two numbers', () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test('subtracts two numbers', () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test('multiplies two numbers', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test('divides two numbers', () => {
  expect(calculator.divide(6, 2)).toBe(3);
  expect(calculator.divide(5, 0)).toBe(Infinity); // Handle division by zero
});

// caesarCipher.test.js
test('shifts letters in lowercase', () => {
  expect(caesarCipher('abc', 3)).toBe('def');
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('shifts letters in uppercase', () => {
  expect(caesarCipher('ABC', 3)).toBe('DEF');
  expect(caesarCipher('XYZ', 3)).toBe('ABC');
});

test('preserves case', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('does not affect punctuation', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

// analyzeArray.test.js
test('returns correct object with average, min, max, and length', () => {
  const obj = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(obj).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
