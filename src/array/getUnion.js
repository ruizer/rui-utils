/**
 * @description 得到两个数组的并集, 两个数组的元素为数值或字符串
 * @param {Array} arr1
 * @param {Array} arr2
 */
function getUnion(arr1, arr2) {
  return Array.from(new Set([...arr1, ...arr2]));
}

module.exports = getUnion;
