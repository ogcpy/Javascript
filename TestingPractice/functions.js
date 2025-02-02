// functions.js

// capitalize function
export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// reverseString function
export const reverseString = (str) => {
  return str.split('').reverse().join('');
};

// calculator object
export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

// caesarCipher function
export const caesarCipher = (str, shift) => {
  const shiftChar = (char, shift) => {
    if (/[a-z]/.test(char)) {
      return String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26 + 26) % 26 + 97);
    } else if (/[A-Z]/.test(char)) {
      return String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26 + 26) % 26 + 65);
    } else {
      return char;
    }
  };

  return str.split('').map((char) => shiftChar(char, shift)).join('');
};

// analyzeArray function
export const analyzeArray = (arr) => {
  return {
    average: arr.reduce((acc, num) => acc + num, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
};
