import { romans } from '../reference/romans.js';

export const convertToRoman = (num) => {
  const romanKey = Object.keys(romans);
  let romanNumber = '';

  for (let i = 0; i < romanKey.length; i++) {
    if (romans[romanKey[i]] <= num) {
      num -= romans[romanKey[i]];
      romanNumber += romanKey[i];
      i = i - 1;
    }
    if (!num) {
      return romanNumber;
    }
  }
};
