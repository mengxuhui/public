/*
 * @@Description: webpack测试
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-09-08 14:47:48
 * @LastEditTime: 2020-09-09 11:24:44
 * @LastEditors: i.mengxh@gmail.com
 */
import React from 'react';
import ReactDOM from 'react-dom';
require('./style.css');

function App() {
    const handleClick = () => {
        console.log('------');
    };
    return (
        <h1 onClick={handleClick}>Hello, world!</h1>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

// require.ensure(['./code-spliting'], function (require) {
//     const content = require('./code-spliting');
//     document.open();
//     document.write('<h1>' + content + '</h1>');
//     document.close();
// });