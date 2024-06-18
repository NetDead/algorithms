import { test, expect } from '@playwright/test';

import { allocateHotelRooms } from './allocating-hotel-rooms.js';

const getMaxNumberInArray = arr => Math.max(...arr);

test('Base cases', () => {
  const tests = [
    [[1,2],[2,4],[4,4]], // [1,2,1] or [2,1,1]
    [[1,5],[2,4],[6,8],[7,7]], // any of [1,2,1,2], [1,2,2,1], [2,1,2,1], or [2,1,1,2]
    [[15,22],[2,4],[6,9],[3,33],[12,21]], // [1,2,2,3,2], [2,1,1,3,1], [3,1,3,2,1], etc

    [[1,10],[2,5],[6,6],[3,7],[6,6],[11,13],[9,15],[8,14]],
    // Solutions include:   [1,2,2,3,4,1,3,2], [1,2,2,3,4,1,2,3],
    //                      [1,2,4,3,2,1,3,2], [2,3,3,1,4,2,1,3], and others
    [[8,8],[5,8],[8,9],[1,4],[1,3],[5,7],[4,8],[2,2],[4,5],[6,8]]
    // Solutions include:   [4, 1, 5, 1, 2, 4, 2, 3, 3, 3],
    //                      [5, 4, 2, 2, 1, 2, 3, 3, 1, 1], and others
  ];

  const roomsNeeded = [2,2,3,4,5];

  for (let i = 0; i < tests.length; i++) {
    expect(getMaxNumberInArray(allocateHotelRooms(tests[i]))).toStrictEqual(roomsNeeded[i]);
  }
});

test('One customer - expect [1]', () => {
  expect(getMaxNumberInArray(allocateHotelRooms([[5,100]]))).toStrictEqual(1);
});

test('7 Non-overlapping customers - expect [1,1,1,1,1,1,1]', () => {
  expect(getMaxNumberInArray(allocateHotelRooms([[15,19],[1,2],[3,5],[10,10],[6,9],[20,99],[101,101]]))).toStrictEqual(1);
});

test('All 5 customers overlap, so each needs a new room - expect some permutation of [1,2,3,4,5]', () => {
  expect(getMaxNumberInArray(allocateHotelRooms([[4,7],[1,10],[2,5],[3,4],[3,12]]))).toStrictEqual(5);
});
