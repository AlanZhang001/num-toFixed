# npm-example组件说明

- 修正原生toFixed方法的精度问题
- 支持四舍五入和直接截取

## 安装

```sh
npm install num-tofixed --save
```

## 使用

测试用例
```
npm install
npm test
```

示例：
```
// 通过script标签引入
// var toFixed = window.toFixed;

var toFixed = require('num-tofixed');

// 精确度取四舍五入值
toFixed(0.099999,3,true) //  '0.100'
toFixed(0.999999,3,true) //  '1.000'
toFixed(0.09,2,true)     //  '0.09'
toFixed(0.09,1,true)     //  '0.1'
toFixed(0.09,5,true)     //  '0.09000'
toFixed(0.09,0,true)     //  '0'
toFixed(0.99,3,true)     //  '0.990'
toFixed(0.99,1,true)     //  '1.0'
toFixed(.99,3,true)      //  '0.990'

toFixed(1.099999,3,true)  // '1.100'
toFixed(1.999999,3,true)  // '2.000'
toFixed(1.09,2,true)      // '1.09'
toFixed(1.09,1,true)      // '1.1'
toFixed(1.09,5,true)      // '1.09000'
toFixed(9.09,0,true)      // '9'
toFixed(9.99,3,true)      // '9.990'
toFixed(9.99,1,true)      // '10.0'
toFixed(199.9999,3,true)  // '200.000'

// 根据精确度直接截取小数点
toFixed(0.099999,3,false) // '0.099'
toFixed(0.09,2,false)     // '0.09'
toFixed(0.09,1,false)     // '0.0'
toFixed(0.09,5,false)     // '0.09000'
toFixed(0.09,0,false)     // '0'
toFixed(0.99,3,false)     // '0.990'
toFixed(.99,3,false)      // '0.990'
```

### API

#### toFixed(num,digit,isRound)

**说明：** 修正原生toFixed方法的精度问题，支持四舍五入和直接截取

**num:** `String|Number`, 需要取精度的数字或则可转换为数字的字符串

**digit:** `Number` 保留的小数点位数，可取范围为(0,20],末尾不足位数时补0

**isRound**：`Boolean` 保留小数点时是否进行四舍五入，默认为false，即直接截取，不进行四舍五入

**return** `String`

## 版本记录

#### v1.0.0 2018-04-20

- 组件发布
