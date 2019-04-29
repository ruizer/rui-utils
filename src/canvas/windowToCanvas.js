/**
 * @description 窗口坐标换为canvas坐标
 * */
function windowToCanvas(canvas, x, y) {
  var canvasBox = canvas.getBoundingClientRect();
  return {
    x: (x - canvasBox.left) * (canvas.width / canvasBox.width),
    y: (y - canvasBox.top) * (canvas.height / canvasBox.height),
  };
}
module.exports = windowToCanvas;

// function windowToCanvas2(canvas, x, y) {
//   return {
//     x:
//       x +
//       document.body.scrollLeft -
//       document.body.clientLeft -
//       canvas.offsetLeft,
//     y: y + document.body.scrollTop - document.body.clientTop - canvas.offsetTop,
//   };
// }