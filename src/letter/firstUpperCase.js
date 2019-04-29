/**
 * @description 首字母大写
 * @param {string} name
 * @returns
 */
function firstUpperCase(name) {
  let firstLetter = name.slice(0, 1) || '';
  let other = name.slice(1);
  return String(firstLetter).toUpperCase() + other;
}

module.exports = firstUpperCase;