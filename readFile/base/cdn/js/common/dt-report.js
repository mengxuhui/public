var dtHosts=["lvshi.sogou.com","lvshi.sogo.com","lawyer.sogou.com","lawyer.sogo.com","wenzhen.sogou.com","wenzhen.sogo.com","zhuanjia.sogou.com","zhuanjia.sogo.com","ce.sogou.com"],hn=location.hostname,lsHosts=["lvshi.sogou.com","lvshi.sogo.com","lawyer.sogou.com","lawyer.sogo.com"],jkHosts=["wenzhen.sogou.com","wenzhen.sogo.com"],pros={lvshi:lsHosts.indexOf(hn)>-1,jiankang:jkHosts.indexOf(hn)>-1},debugKey=getQueryVal("debugKey")||"",isDevelopment="lvshi"===debugKey||"jiankang"===debugKey||"sgzz"===debugKey;function getParams(o){var e={};document.referrer&&document.referrer.length?e.refer=document.referrer.split("?")[0]:e.refer="",e.url=location.href.split("?")[0],e.login=!window._gtag||!0!==window._gtag.isLogin&&"true"!==window._gtag.isLogin?0:1,e.uid=window._gtag&&window._gtag.currentUserId||"";var t=getQueryVal("gf");t&&(e.gf=t);var r=getPlatfrom();if(e.isWap=r.isPc?0:1,e.network=navigator.connection&&(navigator.connection.effectiveType||navigator.connection.type||"unknown"),e.rnd=Math.random(),"object"!=typeof o)return e;for(var n in o)o.hasOwnProperty(n)&&(e[n]=o[n]);return e}function reportNormalPV(){report(getPVReportURL()+concatParams(getParams({pvType:0})))}function reportAsyncPV(){report(getPVReportURL()+concatParams(getParams({pvType:1})))}function reportAjaxPV(){report(getPVReportURL()+concatParams(getParams({pvType:2})))}function reportSglsExposure(o){("lvshi"===debugKey||pros.lvshi)&&report(getSglsExposureURL()+concatParams(getParams(o)))}function reportSglsPV(){("lvshi"===debugKey||pros.lvshi)&&report(getSglsViewURL()+concatParams(getParams({location:"feed"===getQueryVal("sk")?"feed":"other"})))}function reportBIZST(o,e,t){report(getSTReportUrl()+concatParams({biz:o||"",stKey:e||"",count:t||1}))}function reportSessionId(o,e,t){report(getSessionIdURL()+"biz="+o+"&referType="+e+"&bizSelfKey="+t)}function initOssdt(){(isDevelopment||isValidHost())&&(window.OSSDT={reportNormalPV:reportNormalPV,reportAsyncPV:reportAsyncPV,reportAjaxPV:reportAjaxPV,reportSglsExposure:reportSglsExposure,reportSglsPV:reportSglsPV,reportBIZST:reportBIZST,reportSessionId:reportSessionId},window.OSSDT.reportNormalPV())}function getPVReportURL(){return"https://zhuanjia.sogou.com/ossdt/n-0/m-report/m-pv/1.gif?"}function getSTReportUrl(){return"https://zhuanjia.sogou.com/ossdt/n-0/m-report/m-st/1.gif?"}function getSTSReportUrl(){return"https://zhuanjia.sogou.com/ossdt/n-0/m-report/m-sts/1.gif?"}function getSglsExposureURL(){return"https://lvshi.sogou.com/ajax/dt/dt-show.gif?"}function getSglsViewURL(){return"https://lvshi.sogou.com/ajax/dt/dt-view.gif?"}function getSessionIdURL(){return"https://zhuanjia.sogou.com/ossdt/n-0/m-report/m-sts/reg?"}function report(o){var e=new Image;e.onload=e.onerror=function(){e=e.onload=e.onerror=null},e.src=o}function concatParams(o){if("object"!=typeof o)return o;var e=[];for(var t in o)e.push(t+"="+encodeURIComponent(o[t]));return e.join("&")}function isValidHost(){return dtHosts.indexOf(hn)>-1}function getPlatfrom(){var o=navigator.userAgent,e=/(?:Windows Phone)/.test(o),t=/(?:SymbianOS)/.test(o)||e,r=/(?:Android)/.test(o),n=/(?:Firefox)/.test(o),s=(/(?:Chrome|CriOS)/.test(o),/(?:iPad|PlayBook)/.test(o)||r&&!/(?:Mobile)/.test(o)||n&&/(?:Tablet)/.test(o)),i=/(?:iPhone)/.test(o)&&!s;return{isTablet:s,isPhone:i,isAndroid:r,isPc:!i&&!r&&!t}}function getQueryVal(o){var e={},t=location.search.replace(/^\?+/,"");return t?(t.split("&").forEach(function(o){var t=o.indexOf("=");-1===t?e.null=o:e[o.substr(0,t)]=o.substr(t+1)}),e[o]):""}function getCookie(o){var e=document.cookie,t=e.indexOf(o);if(-1!=t){t=t+o.length+1;var r=e.indexOf(";",t);-1==r&&(r=e.length);var n=unescape(e.substring(t,r))}return n}initOssdt();