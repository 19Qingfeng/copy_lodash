const isLength = (value) => {
  return (
    value &&
    typeof value === 'number' &&
    value >= 0 &&
    value % 1 === 0 &&
    value <= Number.MAX_SAFE_INTEGER
  );
};

// 排除null和非object类型
const isObjectLike = (obj) => {
  return obj && typeof obj === 'object';
};

// 排除函数以及不存在length属性的obj 那么就只剩下存在length的obj(likeObj)/Array
const isArrayLike = (obj) => {
  return typeof obj !== 'function' && isLength(obj.length);
};

const isArrayListObject = (likeObj) => {
  return isObjectLike(likeObj) && isArrayLike(likeObj);
};

console.log(isArrayListObject([1, 2, 3]));
console.log(isArrayListObject({ 0: 'a', 1: '123', length: 2 }));

isArrayListObject(document.body.children);
console.log(isArrayListObject('abc'));
console.log(isArrayListObject(Function));
