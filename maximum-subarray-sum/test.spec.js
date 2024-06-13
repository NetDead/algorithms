import { test, expect } from '@playwright/test';

import { maxSequence, maxSequenceForEmptyArray } from './kadane';

test('No empty subarrays admitted variant should work on base case', () => {
  expect(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toStrictEqual(6)
});

test('No empty subarrays admitted variant should work on base case with negative numbers', () => {
  expect(maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4])).toStrictEqual(-1)
});

test('Empty subarrays admitted variant should work on an empty array', () => {
  expect(maxSequenceForEmptyArray([])).toStrictEqual(0)
});

test('Empty subarrays admitted variant returns 0 for array of negative numbers', () => {
  expect(maxSequenceForEmptyArray([-2, -1, -3, -4, -1, -2, -1, -5, -4])).toStrictEqual(0)
});
