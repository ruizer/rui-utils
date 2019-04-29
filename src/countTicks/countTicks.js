/**
 * @description 从数组中取n个数据，并且相对平均
 * @param {Array} arr
 * @param {Number} n
 */
function countTicks(arr, n) {
  const length = arr.length;
  let ticks = [];
  if (length <= n) {
    ticks = arr.map(v => v);
  } else {
    const s = parseInt(length / n, 10) - 1;
    const data = s >= 1 ? arr.slice(s, -s) : [].concat(arr);
    const l = data.length;
    const count = n;
    const step = parseInt(l / (count - 1), 10);
    const groups = data
      .map((e, i) => (i % step === 0 ? data.slice(i, i + step) : null))
      .filter(e => e);
    ticks.push(data[0]);
    for (
      let i = 1, groupLen = groups.length;
      i < groupLen && i < count - 1;
      i++
    ) {
      ticks.push(groups[i][0]);
    }
    ticks.push(data[l - 1]);
  }
  return ticks;
}

module.exports = countTicks;