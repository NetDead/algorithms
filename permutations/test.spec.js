import { test, expect } from '@playwright/test';

import { getPermutationsByHeap } from './heap.js';
import { getPermutationsByCyclicShift } from './cyclic-shift.js';
import { getPermutationsByNarayana } from './narayana.js';

const getFactorial = (length, result = 1) => {
  if (!length) return 0;

  if (length === 1) return result;

  return getFactorial(length - 1, result * length);
}
const checkResult = (arr, length) => {
  const uniqCombinationsCount = new Set(arr).size;

  return uniqCombinationsCount === 1 || uniqCombinationsCount === getFactorial(length)
};

const tests = [
  [],
  [1],
  [1,2],
  [1,2,3],
  [3,2,1],
  [0,0,0,0],
]

test('Permutations: Heap algorithm', () => {
  for(let i = 0; i < tests.length; i++) {
    expect(checkResult(getPermutationsByHeap(tests[i]), tests[i].length)).toBeTruthy();
  }
});

test('Permutations: cyclic shift algorithm', () => {
  for(let i = 0; i < tests.length; i++) {
    expect(checkResult(getPermutationsByCyclicShift(tests[i]), tests[i].length)).toBeTruthy();
  }
});

test('Permutations: Narayana algorithm', () => {
  for(let i = 0; i < tests.length; i++) {
    expect(checkResult(getPermutationsByNarayana(tests[i]), tests[i].length)).toBeTruthy();
  }
});
