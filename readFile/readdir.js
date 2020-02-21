/*
 * @@Description: 
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-01-20 11:05:54
 * @LastEditTime : 2020-01-20 16:13:26
 * @LastEditors  : i.mengxh@gmail.com
 */
const fs = require('fs');
const join = require('path').join;
const path = require('path');

function getAllNames(level, dir) {
    let filesNameArr = [];
    // 用个hash队列保存每个目录的深度
    let mapDeep = {};
    mapDeep[dir] = 0;
    // 先遍历一遍给其建立深度索引
    function getMap(dir, curIndex) {
        let files = fs.readdirSync(dir); //同步拿到文件目录下的所有文件名
        files.map(function (file) {
            //let subPath = path.resolve(dir, file) //拼接为绝对路径
            let subPath = path.join(dir, file); //拼接为相对路径
            let stats = fs.statSync(subPath); //拿到文件信息对象
            // 必须过滤掉node_modules文件夹
            if (file != 'node_modules' || file != 'svn') {
                mapDeep[file] = curIndex + 1;
                if (stats.isDirectory()) { //判断是否为文件夹类型
                    return getMap(subPath, mapDeep[file]); //递归读取文件夹
                }
            }
            //console.log(subPath)
        });

    }
    getMap(dir, mapDeep[dir]);
    //console.log(mapDeep)

    function readdirs(dir, folderName) {
        let result = { //构造文件夹数据
            path: dir,
            name: path.basename(path),
            type: 'directory',
            deep: mapDeep[folderName]
        };
        let files = fs.readdirSync(dir); //同步拿到文件目录下的所有文件名

        result.children = files.map(function (file) {
            //let subPath = path.resolve(dir, file) //拼接为绝对路径

            let subPath = path.join(dir, file); //拼接为相对路径
            let stats = fs.statSync(subPath); //拿到文件信息对象
            //console.log(subPath)
            if (stats.isDirectory()) { //判断是否为文件夹类型
                // console.log(mapDeep[file])
                return readdirs(subPath, file, file); //递归读取文件夹
            }
            return { //构造文件数据
                path: subPath,
                name: file,
                type: 'file'
            };
        });

        return result; //返回数据
    }

    filesNameArr.push(readdirs(dir, dir));

    return filesNameArr;
}

console.log(getAllNames(10, './base'));