/**
 * @description 如果传入的数值小于10，即位数只有1位，则在前面补充0
 */
function formatNumber(num) {
  return num < 10 ? '0' + num : num;
}

module.exports = formatNumber;
