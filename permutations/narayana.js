const findMaxIndex = array => array.findLastIndex((item, i) => item < array[i + 1]);
const findIndexBiggerElement = (array, element) => array.findLastIndex(item => item > element);
const swap = (array, i, j) => [array[i], array[j]] = [array[j], array[i]];
const reversePermutation = (array, index) => [...array.slice(0, index + 1), ...array.slice(index + 1).reverse()];

const getPermutation = (array, indexes) => indexes.map(i => array[i]).join(''); // create string for simplify tests

export const getPermutationsByNarayana = array => {
  if (!array.length) return array;

  let indexes = [...array.keys()];
  let index = findMaxIndex(indexes);

  const result = [getPermutation(array, indexes)];

  while(index !== -1) {
    const element = indexes[index];
    const swapIndex = findIndexBiggerElement(indexes, element);

    swap(indexes, index, swapIndex);

    indexes = reversePermutation(indexes, index);

    result.push(getPermutation(array, indexes));

    index = findMaxIndex(indexes);
  }

  return result;
}
