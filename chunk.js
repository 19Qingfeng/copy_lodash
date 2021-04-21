/* 
  _.chunk(['a', 'b', 'c', 'd'], 2);
  // => [['a', 'b'], ['c', 'd']]
  
  _.chunk(['a', 'b', 'c', 'd'], 3);
  // => [['a', 'b', 'c'], ['d']]
*/

const chunk = (array, number) => {
  const result = [];
  for (let i = 0; i < array.length; i += number) {
    result.push(array.slice(i, i + number));
  }
  return result;
};

/* lodash */
const chunk_lodash = (array, size) => {
  size = Math.max(0, size);
  const length = !array ? 0 : array.length;
  if (size < 1 || !length) {
    return [];
  }
  const result = new Array(Math.ceil(length / size));
  let index = 0;
  let resIndex = 0;
  while (resIndex < result.length) {
    result[resIndex++] = array.slice(index, (index += size));
  }
  return result;
};

console.log(chunk_lodash(['a', 'b', 'c', 'd'], 2));
console.log(chunk_lodash(['a', 'b', 'c', 'd'], 3));

console.log(chunk_lodash(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3));
