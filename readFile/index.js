/*
 * @@Description: 
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-01-19 18:26:32
 * @LastEditTime : 2020-01-20 10:35:06
 * @LastEditors  : i.mengxh@gmail.com
 */
const fs = require('fs');
const join = require('path').join;

function getJsonFiles(jsonPath) {
    let jsonFiles = [];

    function findJsonFile(path) {
        let files = fs.readdirSync(path);
        files.forEach(function (item, index) {
            let fPath = join(path, item);
            let stat = fs.statSync(fPath);
            if (stat.isDirectory() === true) {
                findJsonFile(fPath);
            }
            if (stat.isFile() === true) {
                jsonFiles.push(fPath);
            }
        });
    }
    findJsonFile(jsonPath);
    console.log(jsonFiles);
}

getJsonFiles("../gulpFile");
