import { test, expect } from '@playwright/test';

import { interpolationSearch } from './interpolation-search.js';

const sortedArray = [-10, -3, 0, 1, 5, 23, 40, 66, 90, 91, 99];

test('interpolation search: base cases', () => {
  for (let i = 0; i < sortedArray.length; i++) {
    console.log(i, sortedArray[i], interpolationSearch(sortedArray, sortedArray[i]));
    expect(interpolationSearch(sortedArray, sortedArray[i])).toStrictEqual(i);
  }
});

test('interpolation search: array not includes searched element', () => {
  expect(interpolationSearch([1,2,3,4,5], 0)).toStrictEqual(-1);
});

test('interpolation search: empty array', () => {
  expect(interpolationSearch([], 0)).toStrictEqual(-1);
});

test('interpolation search: array with equal elements', () => {
  expect(interpolationSearch([1,1,1,1,1], 1)).toStrictEqual(0);
});

test('interpolation search: array with 1 element', () => {
  expect(interpolationSearch([1], 1)).toStrictEqual(0);
});

test('interpolation search: array with 2 elements', () => {
  expect(interpolationSearch([1,2], 2)).toStrictEqual(1);
});
