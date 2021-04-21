// _.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]

// 去假
const compact = (array) => {
  return array.filter((i) => Boolean(i));
};

console.log(compact([0, 1, false, 2, '', 3]))

function lodash_compact(array) {
  let resIndex = 0
  const result = []

  if (array == null) {
    return result
  }

  for (const value of array) {
    if (value) {
      result[resIndex++] = value
    }
  }
  return result
}

export default lodash_compact


