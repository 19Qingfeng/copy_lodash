// _.dropRight([1, 2, 3]);
// // => [1, 2]

// _.dropRight([1, 2, 3], 2);
// // => [1]

// _.dropRight([1, 2, 3], 5);
// // => []

// _.dropRight([1, 2, 3], 0);
// // => [1, 2, 3]

const dropRight = (array, number) => {
  if (!array) return [];
  const length = array.length;
  (number === null || number === undefined) && (number = 1);
  const sliceNumber = length - number < 0 ? 0 : length - number;
  return array.slice(0, sliceNumber);
};

console.log(dropRight([1, 2, 3]));
console.log(dropRight([1, 2, 3], 2));
console.log(dropRight([1, 2, 3], 5));
console.log(dropRight([1, 2, 3], 0))


/* lodash */

function dropRight(array, n=1) {
  const length = array == null ? 0 : array.length
  n = length - toInteger(n)
  return length ? slice(array, 0, n < 0 ? 0 : n) : []
}

export default dropRight

