/**
 * @description 驼峰转横杠写法
 * @param {String} text
 * @returns
 */
function camelCaseToKebabCase(text) {
  let t = text || '';
  t = t.replace(/([A-Z])(\w)/g, (match, p1, p2) => `-${p1.toLowerCase()}${p2}`);
  return t;
}

module.exports = camelCaseToKebabCase;
