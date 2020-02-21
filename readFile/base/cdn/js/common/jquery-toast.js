/*
 * @description: 公用toast插件
 * @Author: xzavier
 * @Update:  2017/10/19
 */
;(function($, window, document, undefined) {
	var toast;
	var defaultClassName = 'toast';
	var jQuery = window.jQuery;

	if (!jQuery) {
		return;
	}

	if (!$('#toast-style').length) {
		var style = '<style id="toast-style" type="text/css">.toast { display: block; position: fixed; opacity: 0; pointer-events: none; left: 50%; top: 50%; color: #fff; text-align: center; min-width: 100px; max-width: 480px; line-height: 20px; font-size: 18px; padding: 30px 30px; word-break: break-all; word-wrap: break-word; background: rgba(0, 0, 0, .7); -webkit-border-radius: 8px; border-radius: 8px; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); -webkit-transition: opacity .5s; transition: opacity .5s; }\
			.toast.succ { padding: 110px 30px 30px; }\
			.toast.succ:after { pointer-events: none; content: ""; display: block; position: absolute; right: 31%; top: 12%; width: 100px; height: 68px; background-image: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAA2CAMAAABeBV+DAAAAzFBMVEXu7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u4NUHWgAAAARHRSTlMABw4VHCInLTM5P0RITlRYXWJma3R7gIOPlJqhpKyzucLGysvP0dPU1drb3eDh4+Tl5+jp7O3u8PHy8/T19vf4+fr7/OdtkukAAAFxSURBVHhezddbV4JAFAXgARUR00zN7qVVVmllCql4A/j//6lcZ5MPsARqP7RfmfWxBmbmnFG0XHr+NU+7CL9zxdI64TY+STsOmVxbNNJkW9DuKFoTWpeiNaD1KFod2i1Fq0F7oGgH0PoUrQrtiaJZ0F4oWgXagKKZgWivFK0M7Z2qfVA0wxdtTNFK0Ox/qBU90T61GGB2b4ycWgHaVEvewlY+bSPaLK4pd8sF5i+0eYKm5FFQzqzpa9EWSZoawjOyaito+t7HfimbthRtBS0eO4enL0RbQ0uKA6+Yqmluuqa0qXhemqfNRdsU9g+bwUsdBo3w2t0kOB/FiTTKL7OpC2oSaTmX+zLRG0MzKJtxtNvauT035r1BM5UiHD3DSKMcs4NQUqEUgWdo1h9KlPOjPUKrUkpeH1qNUt7vodUpzUcP2iGhmRmpLrQjSuPmQWty2kqkxWl6kTanJUc61AvDCQDOdeYUAOeydaZ4aUzO8wJfzq6c6LYhEvAAAAAASUVORK5CYII=); background-position: 50% 0; background-size: cover; }\
			.toast-outter { position: fixed; z-index: 99999; left: 0; top: 0; width: 100%; height: 100%; overflow: hidden; pointer-events: none; }\
			.toast-outter .toast { position: absolute; }\
			.toast, .toast a, .toast a:visited { color: #fff; }\
			.toast-visible, .toast-outter .toast-visible { opacity: 1; pointer-events: all; }</style>';
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
            toast.className = defaultClassName;

            var fixed = document.createElement('div');
            fixed.className = defaultClassName + '-outter';
            fixed.appendChild(toast);

            document.body.insertBefore(fixed, document.body.firstChild);
        }
        toast.innerHTML = c;
        c = toast;
		
		toast.removeAttribute('style');
		jQuery ? jQuery(c).addClass(defaultClassName + '-visible') : c.classList.add(defaultClassName + '-visible');

		if (c.timeout) {
			clearTimeout(c.timeout);
		}
		t = parseInt(t) || 0;
		if (!t) t = 2000;
		else if (t > 600000) t = -1;
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
				jQuery ? jQuery(toast).removeClass(defaultClassName + '-visible') : toast.classList.remove(defaultClassName + '-visible');
			}, t);
		} else {
			jQuery ? jQuery(toast).removeClass(defaultClassName + '-visible') : toast.classList.remove(defaultClassName + '-visible');
		}
	};
})(jQuery, window, document);