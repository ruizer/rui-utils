/**
 * @description 格式化日期，返回YYYY-MM-DD 格式的字符串日期
 * @param {Date} date 日期
 */
function getFormatDate(date) {
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  let day = date.getDate();
  day = day < 10 ? `0${day}` : day;
  return `${year}-${month}-${day}`;
}

module.exports = getFormatDate;
