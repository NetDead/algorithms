const leftShift = (arr, k) => {
  const temp = arr[0];

  for (let i = 0; i < k; i++) {
    arr[i] = arr[i + 1];
  }

  arr[k] = temp;
}

const getPermutation = (array, indexes) => indexes.map(i => array[i]).join(''); // create string for simplify tests
export const getPermutationsByCyclicShift = array => {
  if (!array.length) return array;

  let k = array.length - 1;
  const n = k;

  const indexes = [...array.keys()];

  const result = [getPermutation(array, indexes)];

  while (k) {
    leftShift(indexes, k);

    if (indexes[k] !== k) {
      result.push(getPermutation(array, indexes));

      k = n;
    } else {
      k--;
    }
  }

  return result;
}
