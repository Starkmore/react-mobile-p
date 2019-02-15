// (function(doc, win) {
//   var docEl = doc.documentElement,
//     // 手机旋转事件,大部分手机浏览器都支持 onorientationchange 如果不支持，可以使用原始的 resize
//     resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
//     recalc = function() {
//       //clientWidth: 获取对象可见内容的宽度，不包括滚动条，不包括边框
//       var clientWidth = docEl.clientWidth;
//       if (!clientWidth) return;
//       docEl.style.fontSize = 20 * (clientWidth / 320) + "px";
//     };
//   recalc();
//   //判断是否支持监听事件 ，不支持则停止
//   if (!doc.addEventListener) return;
//   win.addEventListener(resizeEvt, recalc, false);
//   doc.addEventListener("DOMContentLoaded", recalc, false);
// })(document, window);

// (function (doc, win) {
//   var docEl = doc.documentElement,
//   resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//   recalc = function () {
//       var clientWidth = docEl.clientWidth;
//       if (!clientWidth) return;
//       docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
//   };
//   if (!doc.addEventListener) return;
//   win.addEventListener(resizeEvt, recalc, false);
//   doc.addEventListener('DOMContentLoaded', recalc, false);
// })(document, window);

