/*
 * @description: oc-登录+绑定
 * @Author: junezm
 * @Update:  2019/05/09
 */

var isCountDowning = false,
  smsCodeTimer = null,
  loginsuccesscb = null,
  scrollY = null;

$.sglsLogin = {
  /**
   * smsLogin
   * @param {Function} [scb] [登录后回调]
   */
  smsLogin: function (scb) {
    if ($('#pop-login-wrapper').length) {
      $('#pop-login-wrapper').show();
      return;
    }
    var popStr = '<div class="pop-bg" id="pop-login-wrapper">\
                <div class="pop-box login" id="pop-box">\
                    <i class="pop-close" id="pop-close"></i>\
                    <div class="pop-login">\
                        <h2 class="login-tit">手机短信登录</h2>\
                        <div class="login-form tel-form" id="tel-form">\
                            <div class="login-ipt">\
                                <input type="tel" class="tel-in" placeholder="请输入手机号" id="tel-input">\
                            </div>\
                            <span class="pop-tip">手机号错误</span>\
                        </div>\
                        <div class="login-form code-form" id="code-form">\
                            <div class="login-ipt v1">\
                                <input type="tel" class="code-in" placeholder="请输入短信验证码" id="code-input">\
                            </div>\
                            <a class="verify-btn v1 code-send-btn" href="javascript: void(0);" id="code-send-btn">发送验证码</a>\
                            <span class="pop-tip"></span>\
                        </div>\
                        <div class="login-form img-form" style="display: none;" id="img-form">\
                            <div class="login-ipt v1">\
                                <input type="tel" class="img-in" placeholder="请输入图片验证码"  id="img-input">\
                            </div>\
                            <img class="verify-img" src="" alt="" id="verify-img">\
                            <a class="verify-btn img-verify-btn" href="javascript: void(0);"  id="img-verify-btn">确定</a>\
                            <span class="pop-tip"></span>\
                        </div>\
                        <a class="login-btn" href="javascript: void(0);" id="login-btn">登录</a>\
                        <div class="login-f">登录即代表您已同意<a target="_blank" href="https://ce.sogou.com/protocol.html">《用户协议》</a>、<a target="_blank" href="https://corp.sogo.com/private.html?client_id=1112#sogouexplorer">《隐私协议》</a></div>\
                    </div>\
                </div>\
            </div>';
    $('body').append(popStr);
    scrollY = $(document).scrollTop()
    document.body.style = 'position:fixed;top:-' + scrollY + 'px;height: 100%;width:100%;overflow-y: scroll;'
    bindLoginEvents();
    clearTimer();
    loginsuccesscb = scb;
  },
  /**
   * smsBind
   * @param {Function} [scb] [登录后回调]
   */
  smsBind: function (scb) {
    if ($('#pop-bind-wrapper').length) {
      $('#pop-bind-wrapper').show();
      return;
    }
    var popStr = '<div class="pop-bg" id="pop-bind-wrapper">\
                <div class="pop-box login">\
                    <i class="pop-close" id="pop-close"></i>\
                    <div class="pop-login">\
                        <h2 class="login-tit">手机短信绑定</h2>\
                        <div class="login-form tel-form">\
                            <div class="login-ipt">\
                                <input type="tel" class="tel-in" placeholder="请输入手机号" id="tel-input">\
                            </div>\
                            <span class="pop-tip">手机号错误</span>\
                        </div>\
                        <div class="login-form code-form" id="code-form">\
                            <div class="login-ipt v1">\
                                <input type="tel" class="code-in" placeholder="请输入短信验证码" id="code-input">\
                            </div>\
                            <a class="verify-btn v1 code-send-btn" href="javascript: void(0);" id="code-send-btn">发送验证码</a>\
                            <span class="pop-tip"></span>\
                        </div>\
                        <div class="login-form img-form" style="display: none;" id="img-form">\
                            <div class="login-ipt v1">\
                                <input type="tel" class="img-in" placeholder="请输入图片验证码" id="img-input">\
                            </div>\
                            <img class="verify-img" src="" alt="" id="verify-img">\
                            <a class="verify-btn img-verify-btn" href="javascript: void(0);" id="img-verify-btn">确定</a>\
                            <span class="pop-tip"></span>\
                        </div>\
                        <a class="login-btn" href="javascript: void(0);" id="bind-btn">绑定</a>\
                        <div class="login-f">绑定即代表您已同意<a target="_blank" href="https://ce.sogou.com/protocol.html">《用户协议》</a>、<a target="_blank" href="https://corp.sogo.com/private.html?client_id=1112#sogouexplorer">《隐私协议》</a></div>\
                    </div>\
                </div>\
            </div>';

    $('body').append(popStr);
    scrollY = $(document).scrollTop()
    document.body.style = 'position:fixed;top:-' + scrollY + 'px;height: 100%;width:100%;overflow-y: scroll;'
    bindBindEvents();
    clearTimer();
    loginsuccesscb = scb;
  },
  /**
   * loginedDo
   * @param {Function || String} [cb] [判断已登录的回调]
   */
  loginedDo: function (cb) {
    var self = this;

    window.ossBaseLogin.getloginStatus(function () {
      if (typeof cb === 'function') {
        cb();
      } else if (typeof cb === 'string') {
        location.href = cb;
      }
    }, function () {
      $('#nav-user-info-box').html('<span class="nav-log-in">登录</span>');
      self.smsLogin(cb);
    });
  },
  /**
  * logOut
  * @param {Function || String} [scb, ecb] [判断已登录的回调]
  */
  logout: function (scb, ecb) {
    window.ossBaseLogin.logout(scb, ecb);
  }
};
// 手机号登录事件
function bindLoginEvents() {
  // 隐藏弹窗
  $(document).on('click', '#pop-close', function () {
    document.body.style = ''
    window.scrollTo(0, scrollY)
    $('#pop-login-wrapper').remove();
  });
  // 验证码发送...登录 login
  $(document).on('click', '#pop-login-wrapper #code-send-btn', function () {
    if (isCountDowning) {
      return;
    }
    var mobile = $.trim($('#tel-input').val());
    // 手机登录获取验证码
    window.ossBaseLogin.getSmsCode({ mobile: mobile }, function () {
      $('#pop-login-wrapper #code-send-btn').text('60s后可重发').addClass('gray');
      setLoginSmsTimer();
    }, function (code, desc) {
      if (code === -9005) {
        window.ossBaseLogin.getImgCode(function (url) {
          $('#pop-login-wrapper #verify-img').attr('src', url);
          $('#pop-login-wrapper #code-form').hide();
          $('#pop-login-wrapper #img-form').show();
        }, function (c, d) {
          $.toast(d);
        });
        $('#pop-login-wrapper #code-form').hide();
        $('#pop-login-wrapper #img-form').show();
      } else if (code === -9006 || code === -9007) {
        $('#pop-login-wrapper #img-form').addClass('error').find('.pop-tip').text(desc);
      } else if (code === -9002 || code === -9003 || code === -9004) {
        $('#tel-form').addClass('error').find('.pop-tip').text(desc);
      } else {
        $.toast(desc);
      }
    });
  });

  $(document).on('click', '#pop-login-wrapper #img-verify-btn', function () {
    if (isCountDowning) {
      return;
    }
    var mobile = $.trim($('#tel-input').val()),
      captcha = $.trim($('#pop-login-wrapper #img-input').val());

    window.ossBaseLogin.getSmsCode({ mobile: mobile, captcha: captcha }, function () {
      $('#pop-login-wrapper #img-form').hide();
      $('#pop-login-wrapper #code-form').show();

      $('#pop-login-wrapper #code-send-btn').text('60s后可重发').addClass('gray');
      setLoginSmsTimer();
    }, function (code, desc) {
      if (code === -9005) {
        window.ossBaseLogin.getImgCode(function (url) {
          $('#pop-login-wrapper #verify-img').attr('src', url);
          $('#pop-login-wrapper #code-form').hide();
          $('#pop-login-wrapper #img-form').show();
        }, function (c, d) {
          $.toast(d);
        });
      } else if (code === -9006 || code === -9007) {
        $('#pop-login-wrapper #img-form').addClass('error').find('.pop-tip').text(desc);
      } else if (code === -9002 || code === -9003 || code === -9004) {
        $('#tel-form').addClass('error').find('.pop-tip').text(desc);
      } else {
        $.toast(desc);
      }
    });
  });

  $(document).on('click', '#pop-login-wrapper #verify-img', function () {
    window.ossBaseLogin.getImgCode(function (url) {
      $('#pop-login-wrapper #verify-img').attr('src', url);
    }, function (c, d) {
      $.toast(d);
    });
  });

  $(document).on('click', '#pop-login-wrapper #login-btn', function () {
    var smsCode = $.trim($('#pop-login-wrapper #code-input').val()),
      mobile = $.trim($('#tel-input').val());
    // 判断图片验证码是否是显示的
    if (!$('#pop-login-wrapper #img-form').is(":hidden")) {
      return $.toast('请输入图片验证码，点击确定发送验证码后再登录', 3000)
    }
    window.ossBaseLogin.login({ mobile: mobile, smsCode: smsCode }, function (data) {
      $('#pop-login-wrapper').hide();
      clearTimer();
      if (typeof loginsuccesscb === 'function') {

        loginsuccesscb();
      } else if (typeof loginsuccesscb === 'string') {
        var hr = loginsuccesscb;
        if (hr.indexOf('?_rt=') > -1 || hr.indexOf('&_rt=') > -1) {
          hr = hr.replace(/\?\_rt=/, '?_rrt=').replace(/\&\_rt=/, '&_rrt=');
        } else if (hr.indexOf('?_rrt=') > -1 || hr.indexOf('&_rrt=') > -1) {
          hr = hr.replace(/\?\_rrt=/, '?_rt=').replace(/\&\_rrt=/, '&_rt=');
        } else {
          if (hr.indexOf('?') > -1) {
            hr += '&_rt=' + (Math.random() * 10 + '').replace('.', '');
          } else {
            hr += '?_rt=' + (Math.random() * 10 + '').replace('.', '');
          }
        }
        location.href = hr;
      }
    }, function (code, desc) {
      if (code === -9002 || code === -9003 || code === -9004) {
        $('#tel-form').addClass('error').find('.pop-tip').text(desc);
      } else if (code === -9008 || code === -9009) {
        $('#pop-login-wrapper #code-form').addClass('error').find('.pop-tip').text(desc);
      } else {
        $.toast(desc);
      }
    });
  });

  $('#pop-login-wrapper #code-input').on('focus', function () {
    $('#pop-login-wrapper #code-form').removeClass('error');
  });

  $('#pop-login-wrapper #img-input').on('focus', function () {
    $('#pop-login-wrapper #img-form').removeClass('error');
  });

  $('#tel-input').on('focus', function () {
    $('#tel-form').removeClass('error');
  });
}
// 手机号绑定事件
function bindBindEvents() {
  // 隐藏弹窗
  $(document).on('click', '#pop-close', function () {
    document.body.style = ''
    window.scrollTo(0, scrollY)
    $('#pop-bind-wrapper').remove();
  });
  // 验证码发送...绑定 bind
  $(document).on('click', '#pop-bind-wrapper #code-send-btn', function () {
    if (isCountDowning) {
      return;
    }
    var mobile = $.trim($('#tel-input').val());
    // 手机绑定获取验证码
    window.ossBaseLogin.getBindSmsCode({ mobile: mobile }, function () {
      $('#pop-bind-wrapper #code-send-btn').text('60s后可重发').addClass('gray');
      setBindSmsTimer();
    }, function (code, desc) {
      if (code === -9005) {
        window.ossBaseLogin.getImgCode(function (url) {
          $('#pop-bind-wrapper #verify-img').attr('src', url);
          $('#pop-bind-wrapper #code-form').hide();
          $('#pop-bind-wrapper #img-form').show();
        }, function (c, d) {
          $.toast(d);
        });
        $('#pop-bind-wrapper #code-form').hide();
        $('#pop-bind-wrapper #img-form').show();
      } else if (code === -9006 || code === -9007) {
        $('#pop-bind-wrapper #img-form').addClass('error').find('.pop-tip').text(desc);
      } else if (code === -9002 || code === -9003 || code === -9004) {
        $('#tel-form').addClass('error').find('.pop-tip').text(desc);
      } else {
        $.toast(desc);
      }
    });
  });
  // 验证码发送... 图形验证码+绑定手机号
  $(document).on('click', '#pop-bind-wrapper #img-verify-btn', function () {
    if (isCountDowning) {
      return;
    }
    var mobile = $.trim($('#tel-input').val()),
      captcha = $.trim($('#pop-bind-wrapper #img-input').val());

    window.ossBaseLogin.getBindSmsCode({ mobile: mobile, captcha: captcha }, function () {
      $('#pop-bind-wrapper #img-form').hide();
      $('#pop-bind-wrapper #code-form').show();

      $('#pop-bind-wrapper #code-send-btn').text('60s后可重发').addClass('gray');
      setBindSmsTimer();
    }, function (code, desc) {
      if (code === -9005) {
        window.ossBaseLogin.getImgCode(function (url) {
          $('#pop-bind-wrapper #verify-img').attr('src', url);
          $('#pop-bind-wrapper #code-form').hide();
          $('#pop-bind-wrapper #img-form').show();
        }, function (c, d) {
          $.toast(d);
        });
      } else if (code === -9006 || code === -9007) {
        $('#pop-bind-wrapper #img-form').addClass('error').find('.pop-tip').text(desc);
      } else if (code === -9002 || code === -9003 || code === -9004) {
        $('#tel-form').addClass('error').find('.pop-tip').text(desc);
      } else {
        $.toast(desc);
      }
    });
  });
  // 切换验证码
  $(document).on('click', '#pop-bind-wrapper #verify-img', function () {
    window.ossBaseLogin.getImgCode(function (url) {
      $('#pop-bind-wrapper #verify-img').attr('src', url);
    }, function (c, d) {
      $.toast(d);
    });
  });
  // 绑定手机
  $(document).on('click', '#pop-bind-wrapper #bind-btn', function () {
    var smsCode = $.trim($('#pop-bind-wrapper #code-input').val()),
      mobile = $.trim($('#tel-input').val());
    // 判断图片验证码是否是显示的
    if (!$('#pop-login-wrapper #img-form').is(":hidden")) {
      return $.toast('请输入图片验证码，点击确定发送验证码后再登录', 3000)
    }
    window.ossBaseLogin.bindMobile({ mobile: mobile, code: smsCode }, function (data) {
      $('#pop-bind-wrapper').hide();
      clearTimer();
      if (typeof loginsuccesscb === 'function') {

        loginsuccesscb();
      } else if (typeof loginsuccesscb === 'string') {
        var hr = loginsuccesscb;
        if (hr.indexOf('?_rt=') > -1 || hr.indexOf('&_rt=') > -1) {
          hr = hr.replace(/\?\_rt=/, '?_rrt=').replace(/\&\_rt=/, '&_rrt=');
        } else if (hr.indexOf('?_rrt=') > -1 || hr.indexOf('&_rrt=') > -1) {
          hr = hr.replace(/\?\_rrt=/, '?_rt=').replace(/\&\_rrt=/, '&_rt=');
        } else {
          if (hr.indexOf('?') > -1) {
            hr += '&_rt=' + (Math.random() * 10 + '').replace('.', '');
          } else {
            hr += '?_rt=' + (Math.random() * 10 + '').replace('.', '');
          }
        }
        location.href = hr;
      }
    }, function (code, desc) {
      if (code === -9002 || code === -9003 || code === -9004) {
        $('#tel-form').addClass('error').find('.pop-tip').text(desc);
      } else if (code === -9008 || code === -9009) {
        $('#pop-bind-wrapper #code-form').addClass('error').find('.pop-tip').text(desc);
      } else {
        $.toast(desc);
      }
    });
  });
  // 校验错误隐藏
  $('#pop-bind-wrapper #code-input').on('focus', function () {
    $('#pop-bind-wrapper #code-form').removeClass('error');
  });

  $('#pop-bind-wrapper #img-input').on('focus', function () {
    $('#pop-bind-wrapper #img-form').removeClass('error');
  });

  $('#tel-input').on('focus', function () {
    $('#tel-form').removeClass('error');
  });
}

function setLoginSmsTimer() {
  var time = 59;

  clearTimer();

  isCountDowning = true;

  smsCodeTimer = setInterval(function () {
    $('#pop-login-wrapper #code-send-btn').text((time--) + 's后可重发');

    if (time < 0) {
      clearTimer();
      $('#pop-login-wrapper #code-send-btn').text('发送验证码').removeClass('gray');
    }
  }, 1000);
}

function setBindSmsTimer() {
  var time = 59;

  clearTimer();

  isCountDowning = true;

  smsCodeTimer = setInterval(function () {
    $('#pop-bind-wrapper #code-send-btn').text((time--) + 's后可重发');

    if (time < 0) {
      clearTimer();
      $('#pop-bind-wrapper #code-send-btn').text('发送验证码').removeClass('gray');
    }
  }, 1000);
}


function clearTimer() {
  clearInterval(smsCodeTimer);
  isCountDowning = false;
  smsCodeTimer = null;
}

; (function ($, window, document, undefined) {
  var toast, afterTapTimeout;
  var jQuery = window.jQuery;

  if (!window.jQuery) {
    return;
  }

	/**
	 * 在使用 tap 事件后禁用整个 UI 一段时间，以避免“点穿”事件。
	 * @param {Number} t 要禁用的时间的毫秒数，默认是 500ms
	 */
  $.preventPuncture = function (t) {
    t = t - 0;
    afterTapTimeout && clearTimeout(afterTapTimeout)
    document.body.style.pointerEvents = 'none';
    afterTapTimeout = setTimeout(function () {
      document.body.style.pointerEvents = '';
      document.body.style.removeProperty('pointer-events');
    }, t || 500);
  };

	/**
	 * 显示一个 Toast 通知。
	 * 
	 * @public
	 * @param {String} c 通知的内容
	 * @param {Number} t 通知显示到自动消失的时间。如果 t 是一个负数，Toast 通知将不会自动消失，默认3s
	 * @return {HTMLElement} Toast 通知的 HTMLElement 对象。
	 */
  $.ossBindToast = function (c, t) {
    if (!c || typeof c !== 'string') {
      return;
    }

    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'oss-bind-toast';

      var fixed = document.createElement('div');
      fixed.className = 'oss-bind-toast-outter';
      fixed.appendChild(toast);

      document.body.appendChild(fixed, document.body.firstChild);
    }
    toast.innerHTML = c;
    c = toast;

    toast.removeAttribute('style');
    $(c).addClass('oss-bind-toast-visible');

    if (c.timeout) {
      clearTimeout(c.timeout);
    }
    t = parseInt(t) || 0;
    if (!t) {
      t = 2000;
    } else if (t > 600000) {
      t = -1;
    }
    t > 0 && $.ossBindToast.dismiss(t);
    return c;
  };

	/**
	 * 关闭 Toast
	 * 
	 * @public
	 * @param {Number} t - toast将在 t 表示的毫秒数后才消失
	 */
  $.ossBindToast.dismiss = function (t) {
    t = parseInt(t) || 0;
    toast.timeout && clearTimeout(toast.timeout);
    if (t > 0) {
      toast.timeout = setTimeout(function () {
        $(toast).removeClass('oss-bind-toast-visible');
      }, t);
    } else {
      $(toast).removeClass('oss-bind-toast-visible');
    }
  };

})(jQuery, window, document);
/*
 * @description: wap-base-jsonp跨站登录
 * @Author: xzavier
 * @Update:  2018/10/15
 */

/**
 * doReq
 * @param {String} [jsonpCb] [jsonpCallback]
 * @param {String} [url] [接口后缀 必传]
 * @param {Object} [params] [请求参数 必传]
 * @param {Function} [scb] [success 回调]
 * @param {Function} [ecb] [error 回调]
 * @param {Function} [ccb] [complete 回调]
 */
function doReq(jsonpCb, url, params, scb, ecb, ccb) {
  $.ajax({
    type: 'get',
    url: url,
    data: params,
    dataType: 'jsonp',
    jsonpCallback: jsonpCb,
    success: function (res, status, xhr) {
      var code = res && res.code,
        data = res && res.data,
        desc = res && res.desc;
      if (code === 0) {
        typeof scb === 'function' && scb(data);
      } else {
        typeof ecb === 'function' && ecb(code, data, desc);
      }
    },
    error: function () {
      typeof ecb === 'function' && ecb('ajaxerror');
    },
    complete: function () {
      typeof ccb === 'function' && ccb();
    },
    timeout: 10000
  });
}

// 白名单
var olHosts = ['lvshi.sogou.com', 'lvshi.sogo.com', 'lawyer.sogou.com', 'lawyer.sogo.com', 'wenzhen.sogou.com', 'wenzhen.sogo.com', 'zhuanjia.sogou.com', 'zhuanjia.sogo.com', 'ce.sogou.com', 'ce.sogo.com', 'my.sogou.com', 'dev.kf.sogou.com', 'preview.ce.sogou.com'];

var wzHosts = ['wenzhen.sogou.com', 'wenzhen.sogo.com'];
var lsHosts = ['lvshi.sogou.com', 'lvshi.sogo.com', 'lawyer.sogou.com', 'lawyer.sogo.com'];

var hn = location.hostname;

// 搜狗问医生
var isWz = wzHosts.indexOf(hn) > -1;
// 搜狗律师
var isLs = lsHosts.indexOf(hn) > -1;


// 接口前缀
var prefix = 'http://dev.kf.sogou.com/api/base'

if (olHosts.indexOf(hn) > -1) {
  prefix = 'https://zhuanjia.sogou.com/base';
}


var ossLogin = {
	/**
	 * getSmsCode
	 * @param {props} [Object] [参数对象]
	 * @param {Function} [scb] [success 回调]
	 * @param {Function} [ecb] [error 回调]
	 */
  getSmsCode: function (props, scb, ecb) {
    if (this.isSmscodeReqing) {
      return;
    }

    if (!props || typeof props !== 'object') {
      typeof ecb === 'function' && ecb(-9001, '传递参数错误');
      return;
    }

    var self = this,
      mobile = props && props.mobile,
      captcha = props && props.captcha,
      pKey = isWz ? 'jiankang' : (isLs ? 'lvshi' : '');

    if (!mobile) {
      typeof ecb === 'function' && ecb(-9002, '请输入手机号');
      return;
    }

    if (!/^\d{11}$/.test(mobile)) {
      typeof ecb === 'function' && ecb(-9003, '请输入正确手机号');
      return;
    }

    if (!/^1[3456789]\d{9}$/.test(mobile)) {
      typeof ecb === 'function' && ecb(-9004, '请输入正确手机号');
      return;
    }

    var params = { mobile: mobile, partnerKey: pKey };

    if (typeof captcha !== 'undefined') {
      // 需要图片验证

      if (!captcha) {
        typeof ecb === 'function' && ecb(-9006, '请输入图片验证码结果');
        return;
      }

      if (/[\u4e00-\u9fa5]/.test(captcha)) {
        typeof ecb === 'function' && ecb(-9007, '请输入正确计算结果');
        return;
      }

      params.captcha = captcha;
    }

    this.isSmscodeReqing = true;

    doReq('smsCodeCallback', prefix + '/ajax/login/send-sms', params, function (data) {
      typeof scb === 'function' && scb(data);
    }, function (code, data, desc) {
      if (code === -12 && (data.partnerCode + '') === '20257') {
        typeof ecb === 'function' && ecb(-9005, '请完成图片验证');
      } else {
        typeof ecb === 'function' && ecb(code, desc || '发送失败，请稍后重试', data && data.partnerCode);
      }
    }, function () {
      self.isSmscodeReqing = false;
    });
  },
	/**
	 * getImgCode
	 * @param {Function} [scb] [success 回调]
	 * @param {Function} [ecb] [error 回调]
	 */
  getImgCode: function (scb, ecb) {
    if (this.isImgCodeReqing) {
      return;
    }

    this.isImgCodeReqing = true;

    var self = this;

    doReq('imgCodeCallback', prefix + '/ajax/login/send-image-code', {}, function (data) {
      typeof scb === 'function' && scb(data.imgUrl);
    }, function (code, data, desc) {
      typeof ecb === 'function' && ecb(code, desc || '请求失败，请稍后重试');
    }, function () {
      self.isImgCodeReqing = false;
    });
  },
	/**
	 * login
	 * @param {props} [Object] [参数对象]
	 * @param {Function} [scb] [success 回调]
	 * @param {Function} [ecb] [error 回调]
	 */
  login: function (props, scb, ecb) {
    if (this.isLoginReqing) {
      return;
    }

    if (!props || typeof props !== 'object') {
      typeof ecb === 'function' && ecb(-9001, '传递参数错误');
      return;
    }

    var self = this,
      mobile = props && props.mobile,
      smsCode = props && props.smsCode,
      pKey = isWz ? 'jiankang' : (isLs ? 'lvshi' : '');

    if (!mobile) {
      typeof ecb === 'function' && ecb(-9002, '请输入手机号');
      return;
    }

    if (!/^\d{11}$/.test(mobile)) {
      typeof ecb === 'function' && ecb(-9003, '请输入正确手机号');
      return;
    }

    if (!/^1[3456789]\d{9}$/.test(mobile)) {
      typeof ecb === 'function' && ecb(-9004, '请输入正确手机号');
      return;
    }

    if (!smsCode) {
      typeof ecb === 'function' && ecb(-9008, '请输入短信验证码');
      return;
    }

    if (!/^\d{5}$/.test(smsCode)) {
      typeof ecb === 'function' && ecb(-9009, '请输入正确验证码');
      return;
    }

    this.isLoginReqing = true;

    var params = { mobile: mobile, smsCode: smsCode, partnerKey: pKey };

    doReq('loginCallback', prefix + '/ajax/login/check-mobile', params, function (data) {
      typeof scb === 'function' && scb(data);
    }, function (code, data, desc) {
      typeof ecb === 'function' && ecb(code, desc || '登录失败，请稍后重试', data && data.partnerCode);
    }, function () {
      self.isLoginReqing = false;
    });
  },
	/**
	 * getloginStatus
	 * @param {Function} [scb] [success 回调]
	 * @param {Function} [ecb] [error 回调]
	 */
  getloginStatus: function (scb, ecb) {
    doReq('loginStatusCallback', prefix + '/ajax/login/login-status', {}, function (data) {
      typeof scb === 'function' && scb(data);
    }, function (code, data, desc) {
      typeof ecb === 'function' && ecb(code, desc);
    });
  },
	/**
	 * logout
	 * @param {Function} [scb] [success 回调]
	 * @param {Function} [ecb] [error 回调]
	 */
  logout: function (scb, ecb) {
    doReq('logoutCallback', prefix + '/ajax/login/logout', {}, function (data) {
      typeof scb === 'function' && scb(data);
    }, function (code, data, desc) {
      typeof ecb === 'function' && ecb(code, desc);
    });
  },
	/**
	 * getMobile
	 * @param {Function} [scb] [success 回调]
	 * @param {Function} [ecb] [error 回调]
	 */
  getMobile: function (scb, ecb) {
    doReq('getMobileCallback', prefix + '/ajax/user/get-mobile', {}, function (data) {
      typeof scb === 'function' && scb(data.mobile);
    }, function (code, data, desc) {
      typeof ecb === 'function' && ecb(code, desc);
    });
  },
	/**
	 * getSmsCode
	 * @param {props} [Object] [参数对象]
	 * @param {Function} [scb] [success 回调]
	 * @param {Function} [ecb] [error 回调]
	 */
  getBindSmsCode: function (props, scb, ecb) {
    if (this.isBindCodeReqing) {
      return;
    }

    if (!props || typeof props !== 'object') {
      typeof ecb === 'function' && ecb(-9001, '传递参数错误');
      return;
    }

    var self = this,
      mobile = props && props.mobile,
      pKey = isWz ? 'jiankang' : (isLs ? 'lvshi' : '');

    if (!mobile) {
      typeof ecb === 'function' && ecb(-9002, '请输入手机号');
      return;
    }

    if (!/^\d{11}$/.test(mobile)) {
      typeof ecb === 'function' && ecb(-9003, '请输入正确手机号');
      return;
    }

    if (!/^1[3456789]\d{9}$/.test(mobile)) {
      typeof ecb === 'function' && ecb(-9004, '请输入正确手机号');
      return;
    }

    var params = { mobile: mobile, partnerKey: pKey };

    this.isBindCodeReqing = true;

    doReq('getBindSmsCodeCallback', prefix + '/ajax/code/send-sms', params, function (data) {
      self.bindToken = data.token;
      typeof scb === 'function' && scb(data);
    }, function (code, data, desc) {
      if (code === -1001) {
        desc = '请先登录';
      } else if (code === -12) {
        desc = '请输入正确的手机号';
      } else if (code === -13) {
        desc = '获取验证码次数已达上限'
      }
      typeof ecb === 'function' && ecb(code, desc || '发送失败，请稍后重试');
    }, function () {
      self.isBindCodeReqing = false;
    });
  },
	/**
	 * bindMobile
	 * @param {props} [Object] [参数对象]
	 * @param {Function} [scb] [success 回调]
	 * @param {Function} [ecb] [error 回调]
	 */
  bindMobile: function (props, scb, ecb) {
    if (this.isBindReqing) {
      return;
    }

    if (!this.bindToken) {
      typeof ecb === 'function' && ecb(-9010, '请先获取验证码');
      return;
    }

    if (!props || typeof props !== 'object') {
      typeof ecb === 'function' && ecb(-9001, '传递参数错误');
      return;
    }

    var self = this,
      mobile = props && props.mobile,
      bindCode = props && props.code,
      pKey = isWz ? 'jiankang' : (isLs ? 'lvshi' : '');

    if (!mobile) {
      typeof ecb === 'function' && ecb(-9002, '请输入手机号');
      return;
    }

    if (!/^\d{11}$/.test(mobile)) {
      typeof ecb === 'function' && ecb(-9003, '请输入正确手机号');
      return;
    }

    if (!/^1[3456789]\d{9}$/.test(mobile)) {
      typeof ecb === 'function' && ecb(-9004, '请输入正确手机号');
      return;
    }

    if (!bindCode) {
      typeof ecb === 'function' && ecb(-9008, '请输入短信验证码');
      return;
    }

    if (!/^\d{6}$/.test(bindCode)) {
      typeof ecb === 'function' && ecb(-9009, '请输入正确验证码');
      return;
    }

    this.isBindReqing = true;

    var params = { mobile: mobile, code: bindCode, token: this.bindToken, partnerKey: pKey };

    doReq('bindCallback', prefix + '/ajax/code/bind-mobile', params, function (data) {
      typeof scb === 'function' && scb(data);
    }, function (code, data, desc) {
      if (code === -1001) {
        desc = '请先登录';
      } else if (code === -12) {
        desc = '请输入正确的手机号';
      } else if (code === -13) {
        desc = '验证码错误';
      }
      typeof ecb === 'function' && ecb(code, desc || '绑定失败，请稍后重试');
    }, function () {
      self.isBindReqing = false;
    });
  },
	/**
	 * initMobileBind
	 * @param {Function} [scb] [绑定成功 回调]
	 */
  initMobileBind: function (scb) {
    if (!$('#oss-bind-style').length) {
      var style = '<style id="oss-bind-style" type="text/css">.oss-pop-ul li input{font-family:"pingfang sc",stheiti,"microsoft yahei",arial,sans-serif;margin:0;padding:0;border:none;outline:none;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}.oss-pop-con{margin-top:44px}.oss-pop-header{font-size:17px;line-height:30px;position:fixed;z-index:10000;top:0;left:0;width:100%;height:28px;padding:8px 0;text-align:center;background-color:#fff;background-image:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#ddd),color-stop(0%,transparent));background-image:-webkit-linear-gradient(bottom,#ddd 50%,transparent 0%);background-image:linear-gradient(to top,#ddd 50%,transparent 0%);background-position:bottom;background-size:100% 1px;background-repeat:no-repeat}.oss-pop-nav-tit{font-size:20px;position:relative;display:block;margin:0 81px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.oss-pop-close{position:absolute;left:5px;cursor:pointer}.oss-pop-close:before{margin:9px 5px 0 13px;content:"";vertical-align:top;display:inline-block;width:12px;height:12px;border-width:1px 1px 0 0;border-style:solid;border-color:#333;-webkit-transform:rotate(-135deg);-ms-transform:rotate(-135deg);transform:rotate(-135deg)}.oss-pop-bind-box{position:fixed;z-index:10000;top:0;left:0;width:100%;height:100%;background:#fff;overflow:hidden}.oss-pop-ul{padding:32px 30px 0}.oss-pop-ul li{margin-top:10px;padding:8px 0;height:30px;line-height:30px;font-size:17px;color:#333;background-image:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#ddd),color-stop(0%,transparent));background-image:-webkit-linear-gradient(bottom,#ddd 50%,transparent 0%);background-image:linear-gradient(to top,#ddd 50%,transparent 0%);background-position:bottom;background-size:100% 1px;background-repeat:no-repeat;overflow:hidden}.oss-pop-ul li:last-child{border-bottom:none;height:44px;line-height:44px;padding-bottom:0}.oss-pop-ul li label{float:left;width:54px;font-weight:600}.oss-pop-ul li .oss-pop-lab{margin-left:54px;margin-right:0}.oss-pop-ul li input{width:100%;height:24px;line-height:24px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 20px;background:#fff}.oss-pop-ul li .oss-code-in{width:58%;width:calc(100% - 82px)}.oss-pop-ul li .oss-send-btn{float:right;padding:0;width:82px;font-size:12px;height:30px;line-height:30px;text-align:center;border-radius:2px;background:#fff;color:#3e71d3;border:1px solid #3e71d3}.oss-pop-ul li .oss-bind-btn{display:block;width:100%;height:44px;line-height:44px;text-align:center;font-weight:600;color:#fff;border-radius:4px;background:#3e71d3;cursor:pointer}.oss-bind-assist{margin-top:10px;padding:0 30px;line-height:20px;color:#666;font-size:12px}.oss-bind-assist .protocol-box a{color:#3366cc}.oss-bind-assist .complain-link{display:inline-block}.oss-bind-toast{display:block;position:absolute;opacity:0;text-align:center;pointer-events:none;left:50%;top:50%;color:#fff;min-width:100px;max-width:480px;line-height:22px;font-size:14px;padding:8px 20px;word-break:break-all;word-wrap:break-word;background:rgba(0,0,0,.8);-webkit-border-radius:4px;border-radius:4px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transition:opacity .5s;transition:opacity .5s}.oss-bind-toast-outter{position:fixed;z-index:10002;left:0;top:0;width:100%;height:100%;overflow:hidden;pointer-events:none}.oss-bind-toast-visible,.oss-bind-toast-outter .oss-bind-toast-visible{opacity:1;pointer-events:all}</style>';
      $('body').prepend(style);
    }
    if (!$('#oss-pop-bind').length) {
      var popHtml = '<div class="oss-pop-bind-box" id="oss-pop-bind">' +
        '<header class="oss-pop-header">' +
        '<span class="oss-pop-close"></span>' +
        '<h1 class="oss-pop-nav-tit">绑定手机号</h1>' +
        '</header>' +
        '<div class="oss-pop-con">' +
        '<ul class="oss-pop-ul">' +
        '<li>' +
        '<label for="">手机号</label>' +
        '<div class="oss-pop-lab">' +
        '<input type="tel" class="oss-tel-in" placeholder="请输入您的手机号" name="" value="" />' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<label for="">验证码</label>' +
        '<div class="oss-pop-lab">' +
        '<input type="tel" class="oss-code-in" class="oss-code-ipt" placeholder="短信验证码" name="" value="" />' +
        '<input type="button" class="oss-send-btn" value="发送验证码" />' +
        '</div>' +
        '</li>' +
        '<li><a href="javascript: void(0);" class="oss-bind-btn">绑定</a></li>' +
        '</ul>' +
        '<div class="oss-bind-assist">' +
        '<div class="protocol-box">绑定即您已同意' +
        '<a target="_blank" href="http://account.sogou.com/static/agreement.html?client_id=1112#sogouexplorer">《用户协议》</a>、' +
        '<a target="_blank" href="http://corp.sogo.com/private.html?client_id=1112#sogouexplorer">《隐私协议》</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
      $('body').append(popHtml);
    }

    this.bindsuccesscb = scb;
    this.bindPopEvents();
    $('#oss-pop-bind').show();
  },
  bindPopEvents: function () {
    var self = this;

    $(document).on('click', '#oss-pop-bind .oss-pop-close', function () {
      $.preventPuncture();
      $('#oss-pop-bind').hide();
    });

    $(document).on('click', '#oss-pop-bind .oss-send-btn', function () {
      if (self.isCountDowning) {
        return;
      }
      var mobile = $.trim($('#oss-pop-bind .oss-tel-in').val());

      self.getBindSmsCode({ mobile: mobile }, function () {
        $.ossBindToast('发送成功');
        self.isCountDowning = true;
        $('#oss-pop-bind .oss-send-btn').val('60s后可重发');
        self.setSmsTimer();
      }, function (code, desc) {
        $.ossBindToast(desc);
      });
    });

    $(document).on('click', '#oss-pop-bind .oss-bind-btn', function () {
      var code = $.trim($('#oss-pop-bind .oss-code-in').val()),
        mobile = $.trim($('#oss-pop-bind .oss-tel-in').val());

      self.bindMobile({ mobile: mobile, code: code }, function () {
        $('#oss-pop-bind .oss-code-in').val('');
        $('#oss-pop-bind .oss-tel-in').val('');
        $('#oss-pop-bind').hide();
        clearInterval(self.bindSmsCodeTimer);
        self.isCountDowning = false;
        self.bindSmsCodeTimer = null;
        $('#oss-pop-bind .oss-send-btn').val('发送验证码');
        typeof self.bindsuccesscb === 'function' && self.bindsuccesscb();
      }, function (code, desc) {
        $.ossBindToast(desc);
      });
    });
  },
  setSmsTimer: function () {
    var self = this,
      time = 59;
    this.bindSmsCodeTimer = setInterval(function () {
      $('#oss-pop-bind .oss-send-btn').val((time--) + 's后可重发');

      if (time < 0) {
        clearInterval(self.bindSmsCodeTimer);
        self.isCountDowning = false;
        self.bindSmsCodeTimer = null;
        $('#oss-pop-bind .oss-send-btn').val('发送验证码');
      }
    }, 1000);
  }
}

if (hn.indexOf('sogou.com') > -1 || hn.indexOf('sogo.com') > -1) {
  doReq('loginInitCallback', prefix + '/ajax/login/login-init', {});  // 初始化种cookie用于判断是否需要图片验证
  window.ossBaseLogin = ossLogin;
}

; (function ($, window, document, undefined) {
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
})(jQuery, window, document);