const dropRightWhile = (array, condition) => {
  let index = array.length - 1;
  // 不满足条件的
  while (index-- && condition(array[index], index, array)) {}
  // index 为结束位置的值
  return array.slice(0, index + 1);
};

const users = [
  { user: 'barney111', active: false },
  { user: 'barney', active: false },
  { user: 'wanghaoyu', active: false },
  { user: 'wanghaoyu2', active: true },

  { user: 'fred', active: false },
  { user: 'pebbles', active: false },
];
console.log(
  dropRightWhile(users, function (o, i, a) {
    // console.log(o, i, a);
    return !o.active;
  })
);

// /* lodash */
function dropRightWhile(array, predicate) {
  return array != null && array.length
    ? baseWhile(array, predicate, true, true)
    : [];
}

function baseWhile(array, predicate, isDrop, fromRight) {
  const { length } = array;
  let index = fromRight ? length : -1;

  while (
    (fromRight ? index-- : ++index < length) &&
    predicate(array[index], index, array)
  ) {}

  return isDrop
    ? slice(array, fromRight ? 0 : index, fromRight ? index + 1 : length)
    : slice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
}

export default baseWhile;
