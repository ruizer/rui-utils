const getFormatDate = require('./getFormatDate');

/**
 * @description 获取最近range天date数据
 * @param {Number} range 时间区间。默认30天
 * */
function getLatestDays(range) {
  const dateRange = range || 30;
  const now = new Date();
  const endTime = getFormatDate(now);
  const T = 86400000 * dateRange;
  const startTime = getFormatDate(new Date(now.getTime() - T));

  return {
    startTime,
    endTime,
  };
}

module.exports = getLatestDays;
