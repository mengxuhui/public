
const { series, src, dest } = require('gulp');
const clean = require('gulp-clean');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const exec = require('child_process').exec;

const CDN = process.env.CDN

let localPath
if (CDN === 'devcdn') {
    localPath = 'cdn'
} else if (CDN === 'cdn') {
    localPath = 'cdn'
} else {
    localPath = 'osscdn'
}

// 函数并未被导出（export），因此被认为是私有任务（private task）。
// 它仍然可以被用在 `series()` 组合中。
// 文件匹配用官方的 Glob https://www.gulpjs.com.cn/docs/getting-started/explaining-globs/

function preCommonJS() {
    return src(`${localPath}/js/common/*.js`)
        .pipe(babel({
            "presets": ['@babel/env'],
            "sourceType": "script"
        }))
        .pipe(uglify())
        .pipe(dest(`${localPath}/base/js/common`))
}

function preLibJS() {
    return src(`${localPath}/js/lib/**`)
        .pipe(dest(`${localPath}/base/js/lib`))
}

function preCSS() {
    return src(`${localPath}/css/**`)
        .pipe(dest(`${localPath}/base/css`))
}

function rsyncPushCdn166(cb) {
    return exec('rsync -a ./cdn/base/* ocm@10.143.55.166:/data/cdn/base', function () {
        cb()
    })
}

function rsyncPushCdn88(cb) {
    return exec('rsync -a ./cdn/base/* ocm@10.143.55.88:/data/cdn/base', function () {
        cb()
    })
}

function rsyncPushCdn180(cb) {
    return exec('rsync -a ./osscdn/base/* ocm@10.134.120.180:/data/cdn/base', function () {
        cb()
    })
}

function rsyncPushCdn208(cb) {
    return exec('rsync -a ./osscdn/base/* ocm@10.134.120.208:/data/cdn/base', function () {
        cb()
    })
}

function cleanBase() {
    return src([`${localPath}/base`])
        .pipe(clean())
}


if (CDN === 'devcdn') {
    exports.default = series( preCommonJS, preLibJS, preCSS, rsyncPushCdn166, cleanBase);
} else if(CDN === 'cdn') {
    exports.default = series( preCommonJS, preLibJS, preCSS, rsyncPushCdn88, cleanBase);
} else {
    exports.default = series( preCommonJS, preLibJS, preCSS, rsyncPushCdn180, rsyncPushCdn208, cleanBase);
}
