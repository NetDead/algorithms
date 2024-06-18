export const snailSort = arr => {
  const result = [];

  while(arr.length) {
    result.push(...arr.shift());
    arr.map(row => result.push(row.pop()));
    arr.reverse().map(row => row.reverse())
  }

  return result;
};
