//全局配置
$.ajaxSetup({
    beforeSend: function (jqXHR, settings) {
        //在请求前给修改url（增加一个时间戳参数）
        settings.url += settings.url.match(/\?/) ? "&" : "?";
        settings.url += "ts=" + new Date().getTime();
    },
});
