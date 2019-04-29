/**
 * @description 横杠转驼峰写法
 * @param {String} text
 * @returns
 */
function kebabCaseToCamelCase(text) {
  let t = text || '';
  t = t.replace(/[-](\w)/g, (match, p1) => p1.toUpperCase());
  return t;
}
module.exports = kebabCaseToCamelCase;