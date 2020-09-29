/*
 * @@Description: hello typescript
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-09-29 09:48:23
 * @LastEditTime: 2020-09-29 15:58:09
 * @LastEditors: i.mengxh@gmail.com
 */
var tonny = {
    name: 'tonny',
    age: 23,
    address: 'chendu'
};
var numbArr = [1, 2, 4, 3];
var numberArr = [1, 2, 4, 5];
function sayHello(person) {
    return 'Hello, ' + person;
}
var mySum = function (x, y) {
    return x + y;
};
var myS;
myS = function (x, y) {
    if (x === void 0) { x = 1; }
    if (y === void 0) { y = 2; }
    return x + y;
};
function handleEvent(ele, event) {
}
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
;
console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true
console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true
console.log(myS(1, 2));
console.log(sayHello('jonh'));
