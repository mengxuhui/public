/* 数组去重利用indexOf
 * @Author: i.mengxh@gmail.com
 * @Date: 2019-11-13 17:26:30
 * @Last Modified time: 2019-11-13 17:26:30
 */
const arr = [1, 2, 4, 5, 5, 6, 6, 8, 8];


function unique(arr) {
    if (!Array.from(arr)) {
        console.log('type arr is error');
        return;
    }
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr1.indexOf(arr[i]) === -1) {
            arr1.push(arr[i]);
        }
    }
    return arr1;
}

const newarr = unique(arr);
console.log(newarr);