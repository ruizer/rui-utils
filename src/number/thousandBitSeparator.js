/**
 * @description 千分符分割
 * @param {Number} num 数字
 * @param {Boolean} d 是否去除小数默认false保留
 */
function thousandBitSeparator(num, d) {
  if (!num) return 0;
  const decimal = String(num).split('.')[1] || ''; // 小数部分
  const tempArr = [];
  const revNumArr = String(num)
    .split('.')[0]
    .split('')
    .reverse(); // 倒序
  revNumArr.forEach((v, i) => {
    tempArr.push(v);
    if ((i + 1) % 3 === 0 && i !== revNumArr.length - 1) {
      tempArr.push(',');
    }
  });
  let zs = tempArr.reverse().join(''); // 整数部分
  if (decimal && !d) zs += `.${decimal}`;
  return zs.indexOf(',') === 0 ? zs.slice(1, zs.length) : zs;
}

module.exports = thousandBitSeparator;
