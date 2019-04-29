/**
 * @description 获取指定位数的随机数
 * @param {Number} n 位数
 */
function ranNumber(n) {
  let rnd = '';
  for (let i = 0; i < n; i++) {
    rnd += Math.floor(Math.random() * 10);
  }
  return rnd;
}

module.exports = ranNumber;
