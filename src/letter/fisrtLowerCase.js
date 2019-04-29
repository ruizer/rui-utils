/**
 * @description 首字母小写
 * @param {String} name
 * @returns
 */
function fisrtLowerCase(name) {
  let firstLetter = name.slice(0, 1) || '';
  let other = name.slice(1);
  return String(firstLetter).toLowerCase() + other;
}

module.exports = fisrtLowerCase;
