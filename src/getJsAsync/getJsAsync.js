function insertScript(src, reject) {
  const script = document.createElement('script');
  script.src = src || '';
  script.type = 'text/javascript';
  script.onerror =
    reject ||
    function r() {
      console.error('加载js文件出错！');
    };
  document.body.appendChild(script);
}

function listenJsOnload(jsName, resolve, global) {
  const win = global || window;
  const js = jsName;
  const interval = setInterval(() => {
    if (js instanceof Array) {
      js.every(v => {
        if (win[v]) {
          clearInterval(interval);
          resolve(win[v]);
          return false;
        }
        return true;
      });
    } else if (win[js]) {
      clearInterval(interval);
      resolve(win[js]);
    }
  }, 100);
}

/** @description 异步获取js库
 * @param {String} lib 库名
 * @param {String} src 库地址
 */
function getJsAsync(lib, src) {
  return new Promise(resolve => {
    if (window[lib]) {
      resolve(window[lib]);
    } else {
      // 加载js
      insertScript(src);
      // 监听是否加载成功
      listenJsOnload(lib, resolve);
    }
  });
}

module.exports = getJsAsync;
