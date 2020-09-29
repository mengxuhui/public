/*
 * @@Description: hello typescript
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-09-29 09:48:23
 * @LastEditTime: 2020-09-29 17:47:48
 * @LastEditors: i.mengxh@gmail.com
 */

interface CreateArrayFunc {
    <T>(length: number, value: T): Array<T>
}
let createArr: CreateArrayFunc;
createArr = function <T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
interface Person {
    name: string,
    age?: number,
    [propName: string]: string | number
}

interface mySumFucR {
    (x: number, y: number): number
}
let tonny: Person = {
    name: 'tonny',
    age: 23,
    address: 'chendu'
}

let numbArr: number[] = [1, 2, 4, 3];
let numberArr: Array<number> = [1, 2, 4, 5];

function sayHello(person: string) {
    return 'Hello, ' + person;
}

let mySum = function (x: number, y: number): number {
    return x + y;
}

let myS: mySumFucR;
myS = function (x: number = 1, y: number = 2) {
    return x + y
}

type eventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: eventNames) {

}

enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat };

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true
console.log(myS(1, 2))
console.log(sayHello('jonh'));

function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

console.log(createArray<string>(3, 'stin'));