const numberScale = require('./numberScale');
/**
 * @description 数字转换成百分比
 * @param {Number} value
 */
function numberPrecent(value) {
  let num = Number(value || 0);
  num = Math.abs(num);
  num = numberScale(num.toFixed(4), 2);
  num += '%';
  return num;
}

module.exports = numberPrecent;
