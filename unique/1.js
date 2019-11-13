/* 数组去重
 * @Author: i.mengxh@gmail.com 
 * @Date: 2019-11-13 16:52:00 
 * @Last Modified by: mengxuhui214175@sogou-inc.com
 * @Last Modified time: 2019-11-13 16:53:59
 */

// 利用ES6 new Set方法
const arr = [1, 2, 4, 5, 5, 6, 6, 8, 8];

const newArr = Array.from(new Set(arr));
console.log(newArr);