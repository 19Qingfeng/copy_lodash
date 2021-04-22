// 去除 condition 返回是假值(false)的部分 返回剩余array

const dropWhile = (array, condition) => {
  let index = -1;
  const length = array.length;
  while (++index < length && condition(array[index], index, array)) {}
  return array.slice(index, length);
};

const users = [
  { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'pebbles', active: false },
];

console.log(
  dropWhile(users, function (o) {
    return !o.active;
  })
);
