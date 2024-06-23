export const getPermutationsByHeap = arr => {
  const result = [];
  const swap = (i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

  const generate = (arr, k) => {
    if (k === 1) return result.push(arr.join(''));  // create string for simplify tests

    for (let i = 0; i < k; i++) {
      generate(arr, k - 1);
      swap(k % 2 ? 0 : i, k - 1);
    }
  }

  generate(arr, arr.length);

  return result;
}
