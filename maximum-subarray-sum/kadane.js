const maxSequence = array => {
  let currentSum = 0;
  let maxSum = -Infinity;

  for (let i = 0; i < array.length; i++) {
    currentSum = Math.max(array[i], currentSum + array[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

const maxSequenceForEmptyArray = array => {
  let currentSum = 0;
  let maxSum = 0;

  for (let i = 0; i < array.length; i++) {
    currentSum = Math.max(array[i], currentSum + array[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

export { maxSequence, maxSequenceForEmptyArray };
