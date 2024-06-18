import { test, expect } from '@playwright/test';

import { HashTable } from './hash-table.js';

const dictionary = new HashTable();

dictionary.add('foo', 1);
dictionary.add('bar', 42);
dictionary.add('oof', 42);
dictionary.add('abr', 1);
dictionary.add('o', 23);
dictionary.add('O', 23);

test('can get all values from hash table', () => {
  expect(dictionary.get('foo')).toStrictEqual(1);
  expect(dictionary.get('bar')).toStrictEqual(42);
  expect(dictionary.get('oof')).toStrictEqual(42);
  expect(dictionary.get('abr')).toStrictEqual(1);
  expect(dictionary.get('o')).toStrictEqual(23);
  expect(dictionary.get('O')).toStrictEqual(23);
});

test('cannot rewrite value', () => {
  dictionary.add('foo', 23);

  expect(dictionary.get('foo')).toStrictEqual(1);
})
