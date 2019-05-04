# rui-utils

前端业务代码工具库  

> 目的：高效率完成前端业务代码

业务开发过程中，会经常用到`数组对象分组`、`千分符`、`百分号`、`深拷贝`等常用函数，为避免不同项目多次复制粘贴的麻烦，这里统一封装，并发布到npm，以提高开发效率。

项目地址：[rui-utils](https://github.com/ruizer/rui-utils)，欢迎[star](https://github.com/ruizer/rui-utils)。有什么问题或者建议可以在[issues](https://github.com/ruizer/rui-utils/issues)提问

## 安装使用

1. 直接下载`lib`目录下的[rui-utils.min.js](https://github.com/ruizer/rui-utils/blob/master/lib/rui-utils.min.js)使用，支持UMD通用模块规范  
2. 使用npm安装

### 浏览器:
``` html
  <script src="rui-utils.min.js"></script>
  <script>
      var thousand = rutils.thousandBitSeparator(20190430);
      // 20,190,430
  </script>
```

### npm:
``` bash
$ npm install rui-utils
```

webpack、RequireJS等

``` javascript
// 完整引入
const rutils = require('rui-utils')
const thousand = rutils.thousandBitSeparator(20190430)
```

## API文档

### array
#### &emsp;&emsp; [getUnion][getUnion] &emsp;&emsp; 得到两个数组的并集, 两个数组的元素为数值或字符串
#### &emsp;&emsp; [getIntersection][getIntersection] &emsp;&emsp; 得到两个数组的交集, 两个数组的元素为数值或字符串

### canvas
#### &emsp;&emsp; [windowToCanvas][windowToCanvas] &emsp;&emsp; 窗口坐标换为canvas坐标

### class
#### &emsp;&emsp; [addClass][addClass] &emsp;&emsp; 为元素添加class
#### &emsp;&emsp; [hasClass][hasClass] &emsp;&emsp; 判断元素是否有某个class
#### &emsp;&emsp; [removeClass][removeClass] &emsp;&emsp; 为元素移除class

### cookie
#### &emsp;&emsp; [getCookie][getCookie] &emsp;&emsp; 根据name读取cookie
#### &emsp;&emsp; [removeCookie][removeCookie] &emsp;&emsp; 根据name删除cookie
#### &emsp;&emsp; [setCookie][setCookie] &emsp;&emsp; 设置Cookie

### countTicks
#### &emsp;&emsp; [countTicks][countTicks] &emsp;&emsp; 从数组中取n个数据，并且相对平均

### date
#### &emsp;&emsp; [getFormatDate][getFormatDate] &emsp;&emsp; 格式化日期，返回YYYY-MM-DD 格式的字符串日期
#### &emsp;&emsp; [getLatestDays][getLatestDays] &emsp;&emsp; 获取最近range天date数据

### deepClone
#### &emsp;&emsp; [deepClone][deepClone] &emsp;&emsp; 深度克隆

### deepClone
#### &emsp;&emsp; [getJsAsync][getJsAsync] &emsp;&emsp; 异步获取js库

### letter
#### &emsp;&emsp; [camelCaseToKebabCase][camelCaseToKebabCase] &emsp;&emsp; 驼峰转横杠写法
#### &emsp;&emsp; [kebabCaseToCamelCase][kebabCaseToCamelCase] &emsp;&emsp; 横杠转驼峰写法
#### &emsp;&emsp; [firstUpperCase][firstUpperCase] &emsp;&emsp; 首字母大写
#### &emsp;&emsp; [fisrtLowerCase][fisrtLowerCase] &emsp;&emsp; 首字母小写

### number
#### &emsp;&emsp; [formatNumber][formatNumber] &emsp;&emsp; 如果传入的数值小于10，即位数只有1位，则在前面补充0
#### &emsp;&emsp; [numberPrecent][numberPrecent] &emsp;&emsp; 数字转换成百分比
#### &emsp;&emsp; [numberScale][numberScale] &emsp;&emsp; 小数点移位置
#### &emsp;&emsp; [ranNumber][ranNumber] &emsp;&emsp; 获取指定位数的随机数
#### &emsp;&emsp; [thousandBitSeparator][thousandBitSeparator] &emsp;&emsp; 千分符分割

### object
#### &emsp;&emsp; [groupBy][groupBy] &emsp;&emsp; 数组对象分组，按照对象字段分组

### url
#### &emsp;&emsp; [parseQueryString][parseQueryString] &emsp;&emsp; url参数转对象
#### &emsp;&emsp; [stringfyQueryString][stringfyQueryString] &emsp;&emsp; 对象序列化


[getUnion]:https://github.com/ruizer/rui-utils/blob/master/src/array/getUnion.js
[getIntersection]:https://github.com/ruizer/rui-utils/blob/master/src/array/getIntersection.js
[windowToCanvas]:https://github.com/ruizer/rui-utils/blob/master/src/canvas/windowToCanvas.js
[addClass]:https://github.com/ruizer/rui-utils/blob/master/src/class/addClass.js
[hasClass]:https://github.com/ruizer/rui-utils/blob/master/src/class/hasClass.js
[removeClass]:https://github.com/ruizer/rui-utils/blob/master/src/class/removeClass.js
[getCookie]:https://github.com/ruizer/rui-utils/blob/master/src/cookie/getCookie.js
[removeCookie]:https://github.com/ruizer/rui-utils/blob/master/src/cookie/removeCookie.js
[setCookie]:https://github.com/ruizer/rui-utils/blob/master/src/cookie/setCookie.js
[countTicks]:https://github.com/ruizer/rui-utils/blob/master/src/countTicks/countTicks.js
[getFormatDate]:https://github.com/ruizer/rui-utils/blob/master/src/date/getFormatDate.js
[getLatestDays]:https://github.com/ruizer/rui-utils/blob/master/src/date/getLatestDays.js
[deepClone]:https://github.com/ruizer/rui-utils/blob/master/src/deepClone/deepClone.js
[getJsAsync]:https://github.com/ruizer/rui-utils/blob/master/src/getJsAsync/getJsAsync.js
[camelCaseToKebabCase]:https://github.com/ruizer/rui-utils/blob/master/src/letter/camelCaseToKebabCase.js
[kebabCaseToCamelCase]:https://github.com/ruizer/rui-utils/blob/master/src/letter/kebabCaseToCamelCase.js
[firstUpperCase]:https://github.com/ruizer/rui-utils/blob/master/src/letter/firstUpperCase.js
[fisrtLowerCase]:https://github.com/ruizer/rui-utils/blob/master/src/letter/fisrtLowerCase.js
[formatNumber]:https://github.com/ruizer/rui-utils/blob/master/src/number/formatNumber.js
[numberPrecent]:https://github.com/ruizer/rui-utils/blob/master/src/number/numberPrecent.js
[numberScale]:https://github.com/ruizer/rui-utils/blob/master/src/number/numberScale.js
[ranNumber]:https://github.com/ruizer/rui-utils/blob/master/src/number/ranNumber.js
[thousandBitSeparator]:https://github.com/ruizer/rui-utils/blob/master/src/number/thousandBitSeparator.js
[groupBy]:https://github.com/ruizer/rui-utils/blob/master/src/object/groupBy.js
[parseQueryString]:https://github.com/ruizer/rui-utils/blob/master/src/url/parseQueryString.js
[stringfyQueryString]:https://github.com/ruizer/rui-utils/blob/master/src/url/stringfyQueryString.js