/**
 * @description 小数点移位置
 * @param {Number} num   数字
 * @param {Number} m     移动位数
 */
function numberScale(num, m) {
  if (num === 'NaN') return 0;
  let parts = num.toString().split('.');
  const integerLen = parts[0].length;
  const decimalLen = parts[1] ? parts[1].length : 0;
  if (m > 0) {
    // 补多少个零：m - 原始值的小数位数
    let zeros = m - decimalLen;
    while (zeros > 0) {
      zeros -= 1;
      parts.push(0);
    }
    // 缩小，当缩小的倍数比原来的整数位大时，需要在数字前面补零
  } else {
    // 补多少个零：m - 原始值的整数位数
    let zeros = Math.abs(m) - integerLen;
    while (zeros > 0) {
      zeros -= 1;
      parts.unshift(0);
    }
  }

  const index = integerLen + m;
  parts = parts.join('').split('');
  parts.splice(index > 0 ? index : 0, 0, '.');

  return parseFloat(parts.join(''));
}

module.exports = numberScale;
