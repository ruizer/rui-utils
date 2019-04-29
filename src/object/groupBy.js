/**
 * @description 数组对象分组，按照对象字段分组
 * @param {Array} list
 * @param {String} key
 */
function groupBy(list, key) {
  if (!Array.isArray(list)) return;
  const obj = {};
  list.forEach(item => {
    const val = item[key];
    if (!obj[val]) {
      obj[val] = [item];
    } else {
      obj[val].push(item);
    }
  });
  return obj;
}

module.exports = groupBy;
