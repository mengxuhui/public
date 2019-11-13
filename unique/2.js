/* 利用splice来去重
 * @Author: i.mengxh@gmail.com
 * @Date: 2019-11-13 17:23:01
 * @Last Modified time: 2019-11-13 17:23:01
 */

const arr = [1, 2, 4, 5, 5, 6, 6, 8, 8];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            arr.splice(j, 1);
            j--;
        }
    }
}
console.log(arr); // [ 1, 2, 4, 5, 6, 8 ]