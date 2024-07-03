export const interpolationSearch = (array, k) => {
  let left = 0;
  let right = array.length - 1;

  while (array[left] < k && array[right] > k) {
    if (array[left] === array[right]) break;

    let index = Math.floor((k - array[left]) * (left - right) / (array[left] - array[right])) + left;

    switch (true) {
      case array[index] > k:
        right = index - 1;
        break;

      case array[index] < k:
        left = index + 1;
        break;

      default:
        return index;
    }
  }

  if (array[left] === k) return left;
  if (array[right] === k) return right;

  return -1;
}
