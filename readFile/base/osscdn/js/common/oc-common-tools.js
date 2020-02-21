/*
 * @@Description: 全局配置
 * @Author: i.mengxh@gmail.com
 * @Date: 2019-11-21 16:08:15
 * @LastEditTime : 2020-01-09 16:31:25
 * @LastEditors  : i.mengxh@gmail.com
 */

(function ($, window, document, undefined) {
    var toast;
    var jQuery = window.jQuery;

    if (!window.jQuery) {
        return;
    }

    if (!$('#toast-style').length) {
        var style = '<style id="toast-style" type="text/css">.toast { display: block; position: absolute; opacity: 0; text-align: center; pointer-events: none; left: 50%; top: 50%; color: #fff; min-width: 100px; max-width: 480px; line-height: 22px; font-size: 14px; padding: 8px 20px; word-break: break-all; word-wrap: break-word; background: rgba(0, 0, 0, .8); -webkit-border-radius: 4px; border-radius: 4px; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); -webkit-transition: opacity .5s; transition: opacity .5s; }.toast-outter { position: fixed; z-index: 10000002; left: 0; top: 0; width: 100%; height: 100%; overflow: hidden; pointer-events: none; }.toast-visible, .toast-outter .toast-visible { opacity: 1; pointer-events: all; }</style>';
        $('body').prepend(style);
    }

	/**
	 * 显示一个 Toast 通知。
	 * 
	 * @public
	 * @param {String} c 通知的内容
	 * @param {Number} t 通知显示到自动消失的时间。如果 t 是一个负数，Toast 通知将不会自动消失，默认3s
	 * @return {HTMLElement} Toast 通知的 HTMLElement 对象。
	 */
    $.toast = function (c, t) {
        if (!c || typeof c !== 'string') {
            return;
        }

        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'toast';

            var fixed = document.createElement('div');
            fixed.className = 'toast-outter';
            fixed.appendChild(toast);

            document.body.appendChild(fixed, document.body.firstChild);
        }
        toast.innerHTML = c;
        c = toast;

        toast.removeAttribute('style');
        jQuery ? jQuery(c).addClass('toast-visible') : c.classList.add('toast-visible');

        if (c.timeout) {
            clearTimeout(c.timeout);
        }
        t = parseInt(t) || 0;
        if (!t) {
            t = 2000;
        } else if (t > 600000) {
            t = -1;
        }
        t > 0 && $.toast.dismiss(t);
        return c;
    };
	/**
	 * 关闭 Toast
	 * 
	 * @public
	 * @param {Number} t - toast将在 t 表示的毫秒数后才消失
	 */
    $.toast.dismiss = function (t) {
        t = parseInt(t) || 0;
        toast.timeout && clearTimeout(toast.timeout);
        if (t > 0) {
            toast.timeout = setTimeout(function () {
                jQuery ? jQuery(toast).removeClass('toast-visible') : toast.classList.remove('toast-visible');
            }, t);
        } else {
            jQuery ? jQuery(toast).removeClass('toast-visible') : toast.classList.remove('toast-visible');
        }
    };

    // 全局配置
    $.ajaxSetup({
        beforeSend: function (jqXHR, settings) {
            //在请求前给修改url（增加一个时间戳参数）
            settings.url += settings.url.match(/\?/) ? "&" : "?";
            settings.url += "ts=" + new Date().getTime();
        },
    });
})(jQuery, window, document);
