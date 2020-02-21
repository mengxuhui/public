/*
 * @Author: i.mengxh@gmail.com 
 * @Date: 2019-10-17 10:42:39 
 * @Last Modified by: mengxuhui214175@sogou-inc.com
 * @Last Modified time: 2019-10-17 10:48:29
 * ajax缓存处理
 */

(function ($) {
    $.ajaxSetup({
        beforeSend: function (jqXHR, settings) {
            //在请求前给修改url（增加一个时间戳参数）
            settings.url += settings.url.match(/\?/) ? "&" : "?";
            settings.url += "ts=" + new Date().getTime();
        },
    });
})(jQuery)

