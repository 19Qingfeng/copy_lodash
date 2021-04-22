// _.drop(array, [n=1])
/* 
例子
_.drop([1, 2, 3]);
// => [2, 3]
 
_.drop([1, 2, 3], 2);
// => [3]
 
_.drop([1, 2, 3], 5);
// => []
 
_.drop([1, 2, 3], 0);
// => [1, 2, 3] */

const drop = (array, number) => {
  const result = array.slice(number);
  return result;
};

console.log(drop([1, 2, 3], 0));

/* lodash */
function drop(array, n = 1) {
  const length = array == null ? 0 : array.length;
  return length ? slice(array, n < 0 ? 0 : toInteger(n), length) : [];
}
