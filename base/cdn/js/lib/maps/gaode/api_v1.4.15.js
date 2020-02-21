(function (config) {
    var ba = navigator.userAgent.toLowerCase(), ca = window, fa = document, ga = fa.documentElement; function ia(a) { return -1 !== ba.indexOf(a) } var oa = /([a-z0-9]*\d+[a-z0-9]*)/;
    function pa() {
        var a = qa; if (!a) return null; var a = a.toLowerCase(), b = null; if (b = a.match(/angle \((.*)\)/)) a = b[1], a = a.replace(/\s*direct3d.*$/, ""); a = a.replace(/\s*\([^\)]*wddm[^\)]*\)/, ""); if (0 <= a.indexOf("intel")) {
            b = ["Intel"]; 0 <= a.indexOf("mobile") && b.push("Mobile"); (0 <= a.indexOf("gma") || 0 <= a.indexOf("graphics media accelerator")) && b.push("GMA"); if (0 <= a.indexOf("haswell")) b.push("Haswell"); else if (0 <= a.indexOf("ivy")) b.push("HD 4000"); else if (0 <= a.indexOf("sandy")) b.push("HD 3000"); else if (0 <= a.indexOf("ironlake")) b.push("HD");
            else { 0 <= a.indexOf("hd") && b.push("HD"); var c = a.match(oa); c && b.push(c[1].toUpperCase()) } return b = b.join(" ")
        } return 0 <= a.indexOf("nvidia") || 0 <= a.indexOf("quadro") || 0 <= a.indexOf("geforce") || 0 <= a.indexOf("nvs") ? (b = ["nVidia"], 0 <= a.indexOf("geforce") && b.push("geForce"), 0 <= a.indexOf("quadro") && b.push("Quadro"), 0 <= a.indexOf("nvs") && b.push("NVS"), a.match(/\bion\b/) && b.push("ION"), a.match(/gtx\b/) ? b.push("GTX") : a.match(/gts\b/) ? b.push("GTS") : a.match(/gt\b/) ? b.push("GT") : a.match(/gs\b/) ? b.push("GS") : a.match(/ge\b/) ?
            b.push("GE") : a.match(/fx\b/) && b.push("FX"), (c = a.match(oa)) && b.push(c[1].toUpperCase().replace("GS", "")), 0 <= a.indexOf("titan") ? b.push("TITAN") : 0 <= a.indexOf("ti") && b.push("Ti"), b = b.join(" ")) : 0 <= a.indexOf("amd") || 0 <= a.indexOf("ati") || 0 <= a.indexOf("radeon") || 0 <= a.indexOf("firegl") || 0 <= a.indexOf("firepro") ? (b = ["AMD"], 0 <= a.indexOf("mobil") && b.push("Mobility"), c = a.indexOf("radeon"), 0 <= c && b.push("Radeon"), 0 <= a.indexOf("firepro") ? b.push("FirePro") : 0 <= a.indexOf("firegl") && b.push("FireGL"), 0 <= a.indexOf("hd") &&
                b.push("HD"), 0 <= c && (a = a.substring(c)), (c = a.match(oa)) && b.push(c[1].toUpperCase().replace("HD", "")), b = b.join(" ")) : a.substring(0, 100)
    }
    var ra = "microsoft basic render driver;vmware svga 3d;Intel 965GM;Intel B43;Intel G41;Intel G45;Intel G965;Intel GMA 3600;Intel Mobile 4;Intel Mobile 45;Intel Mobile 965".split(";"), sa = "ActiveXObject" in ca, va = "devicePixelRatio" in ca && 1 < ca.devicePixelRatio || sa && "matchMedia" in ca && ca.matchMedia("(min-resolution:144dpi)") && ca.matchMedia("(min-resolution:144dpi)").matches, wa = ia("windows nt"), xa = -1 !== ba.search(/windows nt [1-5]\./), ya = -1 !== ba.search(/windows nt 5\.[12]/), za = xa && !ya; ia("windows nt 10");
    var Da = ia("windows phone"), Ea = ia("macintosh"), Fa = ia("Mb2345Browser"), Ga = ia("ipad;") || ia("ipad "), Ha = Ga && va, Ka = ia("ipod touch;"), La = ia("iphone;") || ia("iphone "), Ma = La || Ga || Ka, Na = Ma && -1 !== ba.search(/ os [456]_/); Ma && ba.search(/ os [4-8]_/); Ma && ba.search(/ os [78]_/); Ma && ia("os 8_"); var Qa = Ma && ia("os 10_"), Ra = ia("android"), Sa = -1 !== ba.search(/android [123]/); ia("android 4"); Ra && -1 === ba.search(/android [1-4]/) || ba.search(/android 4.4/);
    var Ta = Ra ? "android" : Ma ? "ios" : wa ? "windows" : Ea ? "mac" : "other", Ua = sa && !ca.XMLHttpRequest, Va = sa && !fa.querySelector, Wa = sa && !fa.addEventListener, Xa = sa && ia("msie 9"), Ya = sa && ia("msie 10"), Za = sa && ia("rv:11"), $a = Wa || Xa, ab = ia("edge"), bb = ia("qtweb"), cb = ia("ucbrowser"), db = ia("alipay") || Ra && cb, eb = ia("miuibrowser"), fb = ia("micromessenger"), gb = ia("mqqbrowser"), hb = ia("baidubrowser"), chrome = (ia("chrome") || ia("crios")) && !fb && !hb && !gb && !ab && !eb, ib = chrome && ia("chromium"), jb = chrome && !ib && 30 < parseInt(ba.split("chrome/")[1]),
        kb = ia("firefox"), lb = kb && 27 < parseInt(ba.split("firefox/")[1]), mb = (Ea || Ma) && ia("safari") && ia("version/"), nb = Ea && mb && 7 < parseInt(ba.split("version/")[1]), ob = Ma && ia("aliapp"), pb = Ma && (!gb && !cb && !fb && !chrome && !kb && !mb || ob && !cb), qb = Ra || Ma || Da || ia("mobile"), rb = "ontouchstart" in fa, sb = ca.navigator && ca.navigator.msPointerEnabled && !!ca.navigator.msMaxTouchPoints, tb = ca.navigator && !!ca.navigator.maxTouchPoints, ub = !rb && (tb || sb), vb = rb || ub, wb = function () {
            if (!qb) return ca.devicePixelRatio || 1; var a = document.getElementsByTagName("meta");
            if (window.parent && window.parent !== window) try { if (window.parent.location.origin === window.location.origin) a = window.parent.document.getElementsByTagName("meta"); else return 1 } catch (b) { return 1 } for (var c = a.length - 1; 0 <= c; c -= 1)if ("viewport" === a[c].name) {
                var c = a[c].content, d; -1 !== c.indexOf("initial-scale") && (d = parseFloat(c.split("initial-scale=")[1])); a = -1 !== c.indexOf("minimum-scale") ? parseFloat(c.split("minimum-scale=")[1]) : 0; c = -1 !== c.indexOf("maximum-scale") ? parseFloat(c.split("maximum-scale=")[1]) : Infinity;
                if (d) { if (c >= a) return d > c ? c : d < a ? a : d } else if (c >= a) return 1 <= a ? 1 : Math.min(c, 1); console && console.log && console.log("viewport\u53c2\u6570\u4e0d\u5408\u6cd5"); return null
            }
        }(), xb = va && (!qb || !!wb && 1 <= wb), yb = sa && "transition" in ga.style, zb = !!fa.createElementNS && !!fa.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, Ab = fa.createElement("canvas"), Bb = !(!Ab || !Ab.getContext), Cb = window.URL || window.webkitURL, Db = !sa && !ab && !(cb && Ra) && window.Worker && Cb && Cb.createObjectURL && window.Blob, Eb = "", qa = "", Fb = 0,
        Ib = window.forceWebGL ? { alpha: !0, antialias: !0, depth: !0 } : { alpha: !0, antialias: !0, depth: !0, failIfMajorPerformanceCaveat: !0, preserveDrawingBuffer: !0, stencil: !0 }, Jb = function () {
            if (!window.forceWebGL && (!Bb || !Db || pb && ob && !cb)) return !1; for (var a = ["webgl", "experimental-webgl", "moz-webgl"], b = null, c = 0; c < a.length; c += 1) {
                try { b = Ab.getContext(a[c], Ib) } catch (d) { } if (b) {
                    if (b.drawingBufferWidth !== Ab.width || b.drawingBufferHeight !== Ab.height) break; if (window.forceWebGL) return Eb = a[c], Fb = Infinity, !0; if (!b.getShaderPrecisionFormat ||
                        !b.getParameter || !b.getExtension) break; Fb = b.getParameter(b.MAX_RENDERBUFFER_SIZE); var e = b.getParameter(b.MAX_VIEWPORT_DIMS); if (!e) break; Fb = Math.min(Fb, e[0], e[1]); mb && "mac" === Ta && (Fb = Math.min(Fb, 4096)); e = Math.max(screen.width, screen.height); xb && (e *= Math.min(2, window.devicePixelRatio || 1)); if (e > Fb) break; if (23 > b.getShaderPrecisionFormat(35632, 36338).precision || 23 > b.getShaderPrecisionFormat(35633, 36338).precision) break; qa = b.getExtension("WEBGL_debug_renderer_info") ? b.getParameter(37446) : null; if ((b = pa()) &&
                            -1 !== ra.indexOf(b)) break; Eb = a[c]; return !0
                }
            } return !1
        }(), Kb = Jb && (jb || lb || nb) && ("mac" === Ta || "windows" === Ta) && !qb, Lb = !Bb || bb || Da || qb && kb || Xa || Na || Ha || Ka || Sa || ia("gt-n710") || za, Mb = !Lb && !Kb, Nb = Kb ? "vw" : Lb ? "d" : Mb ? "dv" : "v", Ob = ia("webkit"), Pb = "WebKitCSSMatrix" in ca && "m11" in new window.WebKitCSSMatrix, Qb = "MozPerspective" in ga.style, Rb = "OTransition" in ga.style, Sb = yb || Pb || Qb || Rb, Tb = void 0 !== config[8] ? config[8] : !0, Ub = void 0 !== config[9] ? config[9] : !0, Vb = void 0 !== config[10] ? config[10] : !0, Wb = void 0 !== config[11] ? config[11] :
            !0, Xb = void 0 !== config[12] ? config[12] : null, Yb = !zb && qb && Bb, Zb = !0; try { if ("undefined" === typeof ca.localStorage) Zb = !1; else { var $b = (new Date).getTime() + ""; ca.localStorage.setItem("_test", $b); ca.localStorage.getItem("_test") !== $b && (Zb = !1); ca.localStorage.removeItem("_test") } } catch (ac) { Zb = !1 } var bc = parseInt(ba.split("chrome/")[1]), cc = Tb && Bb;
    config.l = {
        Sqa: Ga, Tqa: La, size: La ? 100 : Ra ? 200 : 500, Ty: Ea, $ya: wa, hD: Ma, aEa: Qa, Rl: Ra, mla: Sa, g3: db, fz: Ta, DH: hb, $ua: gb, fE: mb, L9: fb, ns: sa, vi: Ua, av: Va, y4: Xa, x4: Ya, ye: Wa, A4: $a, Wqa: Za, xoa: ab, Zqa: sa && !Za, Rsa: Fa, xs: Zb, Gi: cc && Zb && Wb && !qb && chrome, If: Xb, geolocation: qb || sa && !Wa || ab, pya: cb, YK: cb && !chrome, chrome: chrome, G2: !0, IQ: kb, ba: qb, cta: qb && Ob, U5: qb && Pb, bta: qb && ca.opera, Mc: va, gL: wb, ja: xb, Hf: vb, W5: sb, gT: tb, X6: ub, Ama: chrome && 57 <= bc, Bma: !qb && chrome && 64 <= bc, J9: Ob, Xqa: yb, K9: Pb, mpa: Qb, Vta: Rb, yH: Sb, Lo: zb, $k: Bb, lS: Db, Kz: Vb,
        Cf: Kb, G9: Eb, H9: Ib, xR: qa, Psa: Fb, Aza: !1, pu: Tb && !Lb, p1: Tb ? Nb : "d", L1: Tb ? Jb : !1, KK: cc, Jq: Tb && Jb, nEa: Tb && (!Lb || Jb), eq: Ub && !!ca.WebSocket && !hb, ZEa: Yb, dua: Bb || Yb ? "c" : "d"
    }; var dc = config; config = void 0; var ec = { overlay: ["style"], "AMap.IndoorMap": ["AMap.CustomLayer", "cvector"], "AMap.IndoorMap3D": ["Map3D"], "AMap.MarkerList": ["AMap.TplUtils"], Map3D: ["vectorlayer", "wgl", "AMap.CustomLayer", "rbush"], "AMap.Heatmap": ["AMap.CustomLayer"], "AMap.DistrictLayer": ["MVT"], vectorForeign: ["gridmap", "MVT"], "AMap.GltfLoader": ["AMap.CustomLayer", "Map3D"], "AMap.LabelsLayer": ["rbush", "promise"] };
    window.AMap ? (window.AMap.version = "1566479160282", window.AMap.bL = { $L: function (a) { a(dc) } }) : window.AMap = { version: "1566479160282", bL: { $L: function (a) { a(dc) } } }; dc.Bj = "1566479160282"; dc.Au = ec; dc.EJ = "raster";
    for (var fc = document.head || document.getElementsByTagName("head")[0], gc = '.vml{behavior:url(#default#VML);display:inline-block;position:absolute}.amap-custom{top:0;left:0;position:absolute}.amap-container img{max-width:none!important;max-height:none!important}.amap-container{touch-action:none;position:relative;overflow:hidden;background:#fcf9f2 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0AgMAAAC2uDcZAAAADFBMVEX////////////////1pQ5zAAAABHRSTlMAgP/AWuZC2AAAAVhJREFUeAFiYGAQYGDEQjAB2rcDC4BiGIqiU7abdKlO2QkeIClyPsDHweMKtOPHIJ1Op6/w7Y4fdqfT6VpndzqdrnV2p9PpWmd3Oj3qWndSoKp+2J1Op7vr7E6n07XO7nQ6XevsTqfTtc7udPo4/f787E6n0911dqfT6VpndzqdrnV2p9PpWmd3Ot27Ce8m6HS6u85dR6fTtU7r6HS61mkdnU7XOrvT6XTvJuxOp9PddXan0+laZ3c6na51dDpd67SOTqd7N+HdBJ1Od9e56+h0utZpHZ1O1zq70+l0rbM7nU73bsLudDrdXWd3Ol3rtI5Op2ud1tHpdK3TOjqd7t2EdxN0Ot1dZ3c6na51dqfT6VpndzqdrnV2p9Pp3k3Q6XR3nbuOTqdrndbR6XSt0zo6na51Wken072bsDudTnfX2Z1Op2ud3el0utbZnU7XOq2j0+t0uncTD1gO4zoT5doZAAAAAElFTkSuQmCC);-ms-touch-action:none}.amap-drags,.amap-layers{width:100%;height:100%;position:absolute;overflow:hidden}.amap-layers canvas{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.amap-layer img{pointer-events:none}.amap-e,.amap-maps{width:100%;height:100%}.amap-maps,.amap-e,.amap-layers,.amap-tile,.amap-tile-container{position:absolute;left:0;top:0;overflow:hidden}.amap-context{position:absolute;left:0;top:0}.amap-overlays,.amap-markers,.amap-marker{position:absolute;left:0;top:0}.amap-layers{z-index:0}.amap-overlays{z-index:110;cursor:default}.amap-markers{z-index:120}.amap-controls{z-index:150}.amap-copyright{position:absolute;display:block!important;left:77px;height:16px;bottom:0;padding-bottom:3px;font-size:11px;font-family:Arial,sans-serif;z-index:160}.amap-logo{position:absolute;bottom:1px;left:1px;z-index:160;height:20px}.amap-logo img{width:73px!important;height:20px!important;border:0;vertical-align:baseline!important}.amap-icon{position:relative;z-index:1}.amap-icon img{position:absolute;z-index:-1}.amap-marker-label{position:absolute;z-index:2;border:1px solid blue;background-color:white;white-space:nowrap;cursor:default;padding:3px;font-size:12px;line-height:14px}.amap-info{position:absolute;left:0;z-index:140;width:320px}.amap-menu{position:absolute;z-index:140;_width:100px}.amap-info-close{position:absolute;right:5px;_right:12px;+right:11px;top:5px;_top:2px;+top:2px;color:#c3c3c3;text-decoration:none;font:bold 16px/14px Tahoma,Verdana,sans-serif;width:14px;height:14px}.amap-info-outer,.amap-menu-outer{box-shadow:0 1px 2px rgba(0,0,0,0.1);background:none repeat scroll 0 0 white;border-radius:2px;padding:1px;text-align:left}.amap-menu-outer:hover{box-shadow:0 1px 2px rgba(0,0,0,0.3)}.amap-info-contentContainer:hover .amap-info-outer{box-shadow:0 1px 2px rgba(0,0,0,0.3)}.amap-info-content{position:relative;background:#fff;padding:10px 18px 10px 10px;line-height:1.4;overflow:auto}.amap-marker-content{position:relative}.amap-info{_width:320px}.amap-menu{_width:100px}.amap-info-sharp-old{overflow:hidden;position:absolute;background-image:url(http://webapi.amap.com/images/arrows.png)}.bottom-center .amap-info-sharp-old{height:12px;margin:0 auto;width:20px;background-position:center 12px;top:100%;margin-top:-9px;left:50%;margin-left:-10px}.bottom-left .amap-info-sharp-old{height:12px;width:13px;background-position:-16px -46px;top:100%;margin-top:-9px}.bottom-right .amap-info-sharp-old{height:12px;width:13px;top:-1px;background-position:-56px -46px;left:100%;margin-left:-13px;top:100%;margin-top:-9px}.middle-left .amap-info-sharp-old{height:20px;width:12px;background-position:left;top:50%;margin-top:-10px;margin-left:-11px}.center .amap-info-sharp-old{display:none}.middle-right .amap-info-sharp-old{height:20px;margin-right:0;width:12px;background-position:right;left:100%;margin-left:-9px;top:50%;margin-top:-10px}.top-center .amap-info-sharp-old{height:12px;margin:0 auto;width:20px;background-position:top;top:0;margin-top:-3px;left:50%;margin-left:-10px}.top-left .amap-info-sharp-old{height:12px;width:13px;background-position:-16px -3px;top:0;margin-top:-3px}.top-right .amap-info-sharp-old{height:12px;width:13px;background-position:-56px -3px;left:100%;margin-left:-13px;top:0;margin-top:-3px}.amap-info-sharp{position:absolute}.bottom-center .amap-info-sharp{bottom:0;left:50%;margin-left:-8px;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #fff}.bottom-center .amap-info-sharp:after{position:absolute;content:"";margin-left:-8px;margin-top:-7px;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid rgba(0,0,0,0.3);filter:blur(2px);z-index:-1}.amap-info-contentContainer:hover.bottom-center .amap-info-sharp:after{border-top:8px solid rgba(0,0,0,0.5)}.bottom-left .amap-info-sharp{border-color:transparent #fff;border-width:0 0 10px 10px;border-style:solid}.bottom-left .amap-info-sharp:after{position:absolute;content:"";margin-left:-10px;border-color:transparent rgba(0,0,0,0.3);border-width:0 0 10px 10px;border-style:solid;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.bottom-left .amap-info-sharp:after{border-color:transparent rgba(0,0,0,0.5)}.bottom-left .amap-info-content{border-radius:2px 2px 2px 0}.bottom-right .amap-info-sharp{right:0;border-top:10px solid #fff;border-left:10px solid transparent}.bottom-right .amap-info-sharp:after{position:absolute;margin-top:-9px;margin-left:-10px;content:"";border-top:10px solid rgba(0,0,0,0.3);border-left:10px solid transparent;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.bottom-right .amap-info-sharp:after{border-top:10px solid rgba(0,0,0,0.5)}.bottom-right .amap-info-content{border-radius:2px 2px 0 2px}.top-center .amap-info-sharp{top:0;left:50%;margin-left:-8px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #fff}.top-center .amap-info-sharp:after{position:absolute;content:"";margin-top:0;margin-left:-8px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid rgba(0,0,0,0.3);filter:blur(1px);z-index:-1}.top-left .amap-info-sharp{left:0;top:0;border-bottom:10px solid #fff;border-right:10px solid transparent}.top-left .amap-info-sharp:after{position:absolute;content:"";margin-top:0;margin-left:0;border-bottom:10px solid rgba(0,0,0,0.3);border-right:10px solid transparent;filter:blur(1px);z-index:-1}.top-right .amap-info-sharp{right:0;top:0;border-bottom:10px solid #fff;border-left:10px solid transparent}.top-right .amap-info-sharp:after{position:absolute;content:"";margin-top:0;margin-left:-10px;border-bottom:10px solid rgba(0,0,0,0.3);border-left:10px solid transparent;filter:blur(1px);z-index:-1}.middle-right .amap-info-sharp{right:0;top:50%;margin-top:-8px;border-top:8px solid transparent;border-left:8px solid #fff;border-bottom:8px solid transparent}.middle-right .amap-info-sharp:after{position:absolute;content:"";margin-top:-8px;margin-left:-8px;border-top:8px solid transparent;border-left:8px solid rgba(0,0,0,0.3);border-bottom:8px solid transparent;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.middle-right .amap-info-sharp:after{border-left:8px solid rgba(0,0,0,0.5)}.middle-left .amap-info-sharp{left:0;top:50%;margin-top:-8px;border-top:8px solid transparent;border-right:8px solid #fff;border-bottom:8px solid transparent}.middle-left .amap-info-sharp:after{position:absolute;content:"";margin-top:-8px;margin-left:0;border-top:8px solid transparent;border-right:8px solid rgba(0,0,0,0.3);border-bottom:8px solid transparent;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.middle-left .amap-info-sharp:after{border-right:8px solid rgba(0,0,0,0.5)}.amap-info-contentContainer.top-left,.amap-info-contentContainer.top-center,.amap-info-contentContainer.top-right{padding-top:8px}.amap-info-contentContainer.bottom-left,.amap-info-contentContainer.bottom-center,.amap-info-contentContainer.bottom-right{padding-bottom:8px}.amap-info-contentContainer.middle-right{padding-right:8px}.amap-info-contentContainer.middle-left{padding-left:8px}.amap-menu-outer{margin:0;padding:0;list-style-type:none}ul.amap-menu-outer li{cursor:pointer;height:35px;line-height:35px;word-break:break-all;padding:0 10px;font-size:12px;white-space:nowrap}ul.amap-menu-outer li a{text-decoration:none;font-size:13px;margin:0 5px;color:#000;padding:5px 5px}ul.amap-menu-outer li:hover{background-color:#f3f3ee}.amap-overlay-text-container{display:block;width:auto;word-break:keep-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background:#fff;padding:2px 3px;border:1px solid #ccc;border-radius:3px}.amap-overlay-text-container.amap-overlay-text-empty{display:none}.amap-info-content-ie8{border:1px solid #9c9c9c}'.replace(/url\((['"]?)(?:\.\.\/)+/g, "url($1" +
        dc[2].split(",")[0] + "/"), hc = null, ic = 0, jc = fc.childNodes.length; ic < jc; ic++)if (1 === fc.childNodes[ic].nodeType) { hc = fc.childNodes[ic]; break } if (gc) if (fc) { var kc = document.createElement("style"); kc.setAttribute("type", "text/css"); kc.setAttribute("class", "AMap.style"); kc.styleSheet ? kc.styleSheet.cssText = gc : kc.innerHTML = gc; hc ? fc.insertBefore(kc, hc) : fc.appendChild(kc) } else document.write("<style type='text/css'>" + gc + "</style>"); var g = g || { Ba: { Be: 0, Tq: [], yj: {} } }, z = { o: {}, control: {}, A: {} }; g.LCa = function (a) { var b = Function; return function () { return (new b("return " + a))() } }(); g.CLASS_NAME = "AMap"; g.c = g.BuryPoint = {}; g.c.add = g.BuryPoint.add = function (a, b, c) { a.L4 || a.D || !(a = a.CLASS_NAME) || (a = a.replace("AMap.", ""), g.cA.ap(a, b, c)) }; var lc = { lang: 1, baseRender: 1, overlayRender: 1, viewMode: 1 };
    g.c.wa = g.BuryPoint.addOptions = function (a, b) { if (!a.Xta) if (b && (b.innerLayer || b.innerOverlay)) a.L4 = !0; else { a.Xta = !0; var c = a.CLASS_NAME; if (c) { c = c.replace("AMap.", ""); g.cA.ap(c); b = b || {}; for (var d in b) b.hasOwnProperty(d) && ("Map" === c && d in lc ? g.cA.ap(c, d, b[d]) : g.cA.ap(c, d)) } } }; g.aa = function () { };
    g.aa.extend = g.aa.extend = function (a) {
        function b() { } function c() {
            var a = this.initialize || this.r; a && a.apply(this, arguments); if (!d && this.Fi) {
                a = document.createElement("style"); a.setAttribute("type", "text/css"); this.CLASS_NAME && a.setAttribute("class", this.CLASS_NAME); this.Fi = this.Fi.replace(/url\((['"]?)(?:\.\.\/)*/g, "url($1" + g.w.yb + "/"); a.styleSheet ? a.styleSheet.cssText = this.Fi : a.innerHTML = this.Fi; for (var b = document.head || document.getElementsByTagName("head")[0], c = null, e = 0, f = b.childNodes.length; e < f; e++)if (1 ===
                    b.childNodes[e].nodeType) { c = b.childNodes[e]; break } c ? b.insertBefore(a, c) : b.appendChild(a)
            } d = !0
        } var d = !1; b.prototype = this.prototype; var e = new b; e.constructor = c; c.prototype = e; c.prototype.yh = c.prototype["super"] = function (a) { return a.callee.la.apply(this, a) }; for (var f in this) this.hasOwnProperty(f) && "prototype" !== f && (c[f] = this[f]); a.z8 && (g.extend(c, a.z8), a.z8 = null); a.ka && (g.extend.apply(null, [e].concat(a.ka)), a.ka = null); a.B && e.B && (a.B = g.extend({}, e.B, a.B)); var h = e.constructor.vra, k = {}; if (void 0 !== h) for (f in h) h.hasOwnProperty(f) &&
            (k[h[f]] = f); for (f in a) if (Object.prototype.hasOwnProperty.call(a, f)) { var l = f, m = f; h && k[f] && (m = k[f]); "function" === typeof a[l] && "function" === typeof e[m] && (a[l].la = e[m]) } g.extend(e, a); a.toString && (e.toString = a.toString); c.Vc = this.prototype; return c
    }; g.aa.zb = g.aa.include = function (a) { g.extend(this.prototype, a) };
    g.extend = function (a) { var b = Array.prototype.slice.call(arguments, 1), c, d, e, f; d = 0; for (e = b.length; d < e; d += 1)if (f = b[d] || {}, Object.assign) Object.assign(a, f); else for (c in f) Object.prototype.hasOwnProperty.call(f, c) && (a[c] = f[c]); return a }; g.aa.Ob = function (a) { for (var b in a) if (a.hasOwnProperty(b)) { var c = a[b]; if ("string" === typeof c) this.prototype[b] && (this.prototype[c] = this.prototype[b]); else for (var d = 0, e = c.length; d < e; d++)this.prototype[b] && (this.prototype[c[d]] = this.prototype[b]) } }; g.cA = {
        yj: {}, getKey: function (a, b) { a = a || ""; return void 0 !== b && a ? a + "@" + b : a }, ap: function (a, b, c) { this.yj[a] || (this.yj[a] = {}); b = this.getKey(b, c); void 0 == this.yj[a][b] && (this.yj[a][b] = 0) }, send: function () {
            var a = [], b; for (b in this.yj) if (this.yj.hasOwnProperty(b)) { var c = this.yj[b], d = [], e; for (e in c) c.hasOwnProperty(e) && 0 == c[e] && (d.push(e), c[e] = 1); d.length && a.push(b + "~" + d.join(",")) } a.length && (a = ["type=nfl", "k=" + g.w.key, "m=" + (g.l.ba ? 1 : 0), "pf=" + g.l.fz, "v=" + g.w.yr, "branch=JSAPI", "log=" + a.join("!")], a = g.w.Fc + "://webapi.amap.com/count?" +
                a.join("&"), new g.fb.wb(a))
        }
    }; setInterval(function () { g.cA.send() }, 1E4); g.va = {
        h: function (a, b, c, d, e) { if (this.ke(a, b, c || this)) return this; var f = this.bf = this.bf || {}; f[a] = f[a] || []; e ? f[a].unshift({ tb: b, Te: c || this, vj: d }) : f[a].push({ tb: b, Te: c || this, vj: d }); return this }, ke: function (a, b, c) { var d = this.bf; if (b && c) { if (d && a in d && d[a]) for (var e = 0; e < d[a].length; e += 1)if (d[a][e].tb === b && d[a][e].Te === c) return !0; return !1 } return d && a in d && d[a] && 0 < d[a].length }, G: function (a, b, c) {
            if (!this.ke(a)) return this; var d = this.bf; if (d && d[a]) for (var e = 0; e < d[a].length; e += 1)if (!(d[a][e].tb !== b && "mv" !==
                b || c && d[a][e].Te !== c)) { d[a].splice(e, 1); d[a].length || (d[a] = null); break } return this
        }, LJ: function (a, b) { if (!this.ke(a)) return this; var c = this.bf; if (c && c[a]) for (var d = 0; d < c[a].length; d += 1)if (!b || c[a][d].Te === b) { c[a].splice(d, 1); c[a].length || (c[a] = null); break } return this }, q: function (a, b) {
            if (!this.ke(a)) return this; var c = { type: a }; void 0 !== b && (b instanceof Array ? (c = b.slice(0), c.type = a) : "string" === typeof b || "number" === typeof b || "boolean" === typeof b ? c.value = b : g.a.lJ(b) ? c.value = b : c = g.extend(c, b)); for (var d =
                [].concat(this.bf[a]), e = 0; e < d.length; e += 1)d[e].tb && (d[e].tb.call(d[e].Te || this, c), d[e] && d[e].vj && this.bf[a] && this.bf[a].splice(e, 1)); return this
        }, ri: function (a) { a ? this.bf && this.bf[a] && (this.bf[a] = null) : this.bf = null; return this }
    }; g.va.on || (g.va.on = g.va.h); g.va.off || (g.va.off = g.va.G); g.va.emit || (g.va.emit = g.va.q); g.Re = {
        set: function (a, b, c) { var d = this.Cl; if (d && d[a]) { var d = d[a], e = "set" + this.Y3(a); if (d[e]) { var f = !1; !0 == d.D ? f = !0 : d.D = !0; d[e](b, c); f || (d.D = !1); c || this.iK(a, b) } else d.set(a, b, c) } else (this.Je = this.Je || {})[a] = b, c || this.iK(a, b) }, Y3: function () { var a = {}; return function (b) { a[b] || (a[b] = b[0].toUpperCase() + b.substr(1)); return a[b] } }(), get: function (a, b, c) {
            var d, e = this.Cl; d = "get" + this.Y3(a); if (e && e[a]) return c = e[a], c[d] ? (a = !1, !0 == c.D ? a = !0 : c.D = !0, b = c[d](b), a || (c.D = !1), b) : c.get(a, b); if (!c && this[d]) return a = !1, !0 ==
                this.D ? a = !0 : this.D = !0, b = this[d](b), a || (this.D = !1), b; if (this.Je && this.Je.hasOwnProperty(a)) return this.Je[a]
        }, W: function (a, b, c) { this.Cl || (this.Cl = {}); this.Cl[a] !== b && (b.h(a, function (b) { this.iK(a, b) }, this), this.Cl[a] = b, c || this.iK(a)) }, Se: function (a, b, c) { for (var d = 0; d < a.length; d += 1)this.W(a[d], b, !c) }, sl: function (a) { this.Cl && this.Cl[a] && (this.Cl[a].G(a, "mv", this), this.Cl[a] = void 0) }, tl: function () { if (this.Cl) for (var a in this.Cl) this.Cl.hasOwnProperty(a) && this.sl(a) }, iK: function (a, b) {
            var c = a + "Changed";
            if (this[c]) this[c](b); this.q(a, b)
        }, rEa: function (a, b, c) { var d = new (g.aa.extend({ ka: [g.va, g.Re] })); d.HP = function () { for (var b = !0, e = 0; e < a.length; e += 1)d.get(a[e]) || (b = !1); b && (d.tl(), c()) }; for (var e = 0; e < a.length; e += 1)d.W(a[e], b) }, Ze: function (a, b) { var c, d; for (c in a) a.hasOwnProperty(c) && (d = a[c], this.set(c, d, b)) }
    }; g.w = {
        localStorage: !0, xH: 500, pe: !0, ue: { dark: "#202020", blue_night: "#090d20", test: "#033447", mapv: "#000001", techblue: "#000b11", insight: "#19212a", "default": "#fcf9f2" }, MJ: { normal: "normal", dark: "dark", light: "light", fresh: "fresh", test: "blue", blue_night: "blue", mapv: "darkblue", insight: "grey" }, key: "d6650630f54056fea838e11e1654e8dc", Fc: "http", Xd: [115.423412, 39.442759, 117.514625, 41.060816, 116.405285, 39.904989], Ud: "http://restapi.amap.com", yb: "http://webapi.amap.com", WJ: "http://gaode.com", qv: "http://m.amap.com", sD: "http://webrd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=[lang]&size=1&scale=1&style=8&x=[x]&y=[y]&z=[z]",
        wJ: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x=[x]&y=[y]&z=[z]&scl=1&ltype=3", WT: "http://webst0{1,2,3,4}.is.autonavi.com/appmaptile?style=6&x=[x]&y=[y]&z=[z]", vK: "http://webst0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&lang=zh_cn&size=1&scale=1&style=8", wK: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&lang=zh_cn&size=1&scl=1&style=8&ltype=11", yE: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=[lang]&size=1&style=7&x=[x]&y=[y]&z=[z]",
        eL: "http://vector.amap.com", cL: "vdata.amap.com", fza: "ws"
    };
    function mc(a) {
        g.aa.Au = a.Au; g.l = a.l; g.EJ = a.EJ; g.Kua = a[7]; a.l = null; g.w.yb = a[2].split(",")[0]; g.w.Bj = a.Bj; g.w.rD = a.rD; var b = g.w.Fc = g.w.yb.split(":")[0]; "https" === b && (g.w.fza = "wss", g.w.Ud = g.w.Ud.replace("http", "https"), g.w.sD = g.w.sD.replace("http", "https"), g.w.wJ = g.w.wJ.replace("http", "https"), g.w.WT = g.w.WT.replace("http", "https"), g.w.vK = g.w.vK.replace("http", "https"), g.w.wK = g.w.wK.replace("http", "https"), g.w.yE = g.w.yE.replace("http", "https"), g.w.eL = g.w.eL.replace("http", "https")); var c = window.location.href;
        0 !== c.indexOf("http") && window.parent && window.parent !== window && (c = window.parent.location.href); g.w.gpa = c; c = encodeURIComponent(c); g.w.iu = c; g.w.Ai = g.w.yb + "/theme/v1.3/markers/" + (g.l.Mc ? "b" : "n"); var d = document.createElement("style"); d.type = "text/css"; g.w.Hna = "url(" + b + "://webapi.amap.com/theme/v1.3/openhand.cur),default"; var e = ".amap-container{cursor:" + g.w.Hna + ";}.amap-drag{cursor:url(" + b + "://webapi.amap.com/theme/v1.3/closedhand.cur),default;}"; d.styleSheet ? (b = function () { try { d.styleSheet.cssText = e } catch (a) { } },
            d.styleSheet.disabled ? setTimeout(b, 10) : b()) : d.appendChild(document.createTextNode(e)); (document.head || document.getElementsByTagName("head")[0]).appendChild(d); g.w.mode = Number(a[3]); g.w.Xd = a[1]; g.w.key = a[0]; g.w.yr = a[4]; g.w.Jc = a[5]; g.w.Xka = a[6]; g.w.vQ = a[13]
    } window.AMap && window.AMap.bL && window.AMap.bL.$L && window.AMap.bL.$L(mc); g.Hm = { yu: Math.PI / 180, cva: 180 / Math.PI, tQ: 6378137 }; (function () {
        function a(a) { return "undefined" === typeof a ? "" : a } g.$h = {
            hqa: function (b) {
            b.name = a(b.name); var c = [b.y, b.x, b.name]; if (g.l.ba) {
                var d = [g.w.qv + "/callAPP?", "src=jsapi_q"]; d.push("&ios=" + encodeURIComponent("viewMap?sourceApplication=jsapi_q&dev=0&poiname=" + b.name + "&lat=" + b.y + "&lon=" + b.x)); d.push("&android=" + encodeURIComponent("androidamap?action=shorturl&q=" + c.join(",") + "&sourceApplication=jsapi_q")); d.push("&wp=" + encodeURIComponent("viewMap?sourceApplication=jsapi_q&dev=0&poiname=" + b.name + "&lat=" +
                    b.y + "&lon=" + b.x)); d.push("&mo=" + encodeURIComponent(g.w.qv + "?q=" + c.join(",") + "&callapp=0&sourceApplication=jsapi_q")); return d.join("")
            } return g.w.WJ + "?q=" + c.join(",") + "&src=jsapi_q"
            }, M3: function (b) {
            b.name = a(b.name); b.address = a(b.address); b.x = a(b.x); b.y = a(b.y); var c = [b.id, b.y, b.x, b.name, b.address]; if (g.l.ba) {
                var d = [g.w.qv + "/callAPP?", "src=jsapi_p"]; d.push("&ios=" + encodeURIComponent("multiPointShow?sourceApplication=jsapi_p&dev=0&q=" + [b.y, b.x, b.name, b.address, b.id].join() + "&title=" + b.name)); d.push("&android=" +
                    encodeURIComponent("androidamap?action=shorturl&p=" + c.join(",") + "&sourceApplication=jsapi_p")); d.push("&wp=" + encodeURIComponent("multiPointShow?sourceApplication=jsapi_p&dev=0&q=" + [b.y, b.x, b.name, b.address, b.id].join() + "&title=" + b.name)); return d.join("")
            } return g.w.WJ + "?p=" + c.join(",") + "&src=jsapi_p"
            }, K3: function (b) {
                if (g.l.ba) {
                    var c = [g.w.qv + "/callAPP?", "src=jsapi_detail"]; c.push("&ios=" + encodeURIComponent("viewPOIDetail?sourceApplication=jsapi_detail&poiid=" + b.id)); b.name = a(b.name); b.x = a(b.x); b.y =
                        a(b.y); c.push("&android=" + encodeURIComponent("androidamap?action=openFeature&featureName=PoiDetail&poiid=" + b.id + "&poiname=" + b.name + "&x=" + b.x + "&y=" + b.y + "&sourceApplication=jsapi_detail")); c.push("&wp=" + encodeURIComponent("viewPOIDetail?sourceApplication=jsapi_detail&poiid=" + b.id)); c.push("&mo=" + encodeURIComponent(g.w.qv + "/detail/index/poiid=" + b.id + "&sourceApplication=jsapi_detail")); return c.join("")
                } return g.w.WJ + "/detail/" + b.id + "?src=jsapi_detail"
            }, pR: function (b) {
            b.sname = a(b.sname); "" === b.sname &&
                (b.sname = "\u8d77\u70b9"); b.dname = a(b.dname); "" === b.dname && (b.dname = "\u7ec8\u70b9"); b.mcount = a(b.mcount); b.my = a(b.my); b.mx = a(b.mx); b.mname = a(b.mname); var c = [b.sy, b.sx, b.sname, b.dy, b.dx, b.dname, b.m, b.t, b.mcount, b.my, b.mx, b.mname]; if (g.l.ba) {
                    var d = [g.w.qv + "/callAPP?", "src=jsapi_r_" + b.t]; d.push("&ios=" + encodeURIComponent("path?sourceApplication=jsapi_r_" + b.t + "&dev=0&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&m=" + b.m + "&t=" + b.t + "&vian=0&vialons=&vialats=&vianames="));
                    var e = b.t; 0 === b.t ? e = 2 : 2 === b.t && (e = 4); d.push("&android=" + encodeURIComponent("androidamap://route?sourceApplication=jsapi_r_" + b.t + "&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&dev=0&" + b.m + "&t=" + e)); d.push("&wp=" + encodeURIComponent("path?sourceApplication=jsapi_r_" + b.t + "&dev=0&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&m=" + b.m + "&t=" + b.t + "&vian=0&vialons=&vialats=&vianames=")); d.push("&mo=" + encodeURIComponent(g.w.qv +
                        "/?r=" + c.join(",") + "&callapp=0&sourceApplication=jsapi_r_" + b.t)); return d.join("")
                } return g.w.WJ + "?r=" + c.join(",") + "src=jsapi_r_" + b.t
            }, $s: function (a) { g.l.ba ? window.location.href = a : window.open(a) }
        }
    })(); "function" !== typeof Object.keys && (Object.keys = function (a) { var b = [], c; for (c in a) a.hasOwnProperty(c) && b.push(c); return b }); g.a = {
        CLASS_NAME: "AMap.Util", LK: [], Ea: 268435456, To: [215440491, 106744817], D9: function () { var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""); return function (b, c) { var d = [], e; c = c || a.length; if (b) for (e = 0; e < b; e++)d[e] = a[0 | Math.random() * c]; else { var f; d[8] = d[13] = d[18] = d[23] = "-"; d[14] = "4"; for (e = 0; 36 > e; e++)d[e] || (f = 0 | 16 * Math.random(), d[e] = a[19 === e ? f & 3 | 8 : f]) } return d.join("") } }(), NC: {
            start: function (a) {
            a.startTime = new Date; a.Ys = []; var b = (new Date).getTime(); a.id = requestAnimationFrame(function d() {
                var e =
                    (new Date).getTime(); a.Ys.push(e - b); b = e; a.id = requestAnimationFrame(d)
            })
            }, cancel: function (a) { a.id && cancelAnimationFrame(a.id) }, stop: function (a) { a.nna = new Date - a.startTime; this.cancel(a); a.NC = Math.round(1E3 / (a.nna / (a.Ys.length + 1))) }
        }, V3: function (a, b, c) {
            var d = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : !1; if (a === b) return b; switch (3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "linear") {
                case "ease": c = g.rw.jI(0.25, 0.1, 0.25, 1)(c); break; case "ease-in": c = g.rw.jI(0.42, 0, 1, 1)(c); break; case "ease-out": c =
                    g.rw.jI(0, 0, 0.58, 1)(c); break; case "ease-in-out": c = g.rw.jI(0.42, 0, 0.58, 1)(c)
            }var e = a + (b - a) * c; d && (e >>= 0); return e
        }, createObjectURL: function (a) { var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "text/javascript; charset=utf-8", c = null; try { c = (window.URL || window.webkitURL).createObjectURL(new Blob([a], { type: b })) } catch (d) { c = null } return c }, revokeObjectURL: function (a) { (window.URL || window.webkitURL).revokeObjectURL(a) }, HBa: function (a) { for (var b = {}, c = 0, d = a.length; c < d; c++)b[a[c]] = c; return b }, SC: function (a) {
            var b =
                {}; if (g.a.bk(a, "object")) for (var c in a) a.hasOwnProperty(c) && (b[a[c]] = c); return b
        }, nf: function (a, b) { for (var c = 0, d = b.length; c < d; c += 1)a.push(b[c]) }, create: "function" === typeof Object.create ? Object.create : function (a, b) { function c() { } c.prototype = a; var d = new c, e; for (e in b) b.hasOwnProperty(e) && (d[e] = b[e]); return d }, lb: function (a) {
            if ("object" === typeof a && null !== a) {
                if (a.h6 || this.bk(a, "Float32Array") || this.bk(a, "Uint16Array")) return a; var b = this.isArray(a) ? [] : {}, c; for (c in a) a.hasOwnProperty(c) && (b[c] = g.a.lb(a[c]));
                return b
            } return a
        }, X4: function (a) { return (a | 0) === a }, Dwa: "function" === typeof Object.setPrototypeOf ? Object.setPrototypeOf : function (a, b) { for (var c in b) a[c] = b[c] }, Oh: function (a) { return "function" === typeof a }, qla: function (a) { var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "webgl"; if (!a) return a; for (var c = [], d = 0, e = a.length; d < e; d += 2) { var f = parseInt(a.substr(d, 2), 16); if ("webgl" === b || "rgba" === b && 0 === d) f = this.hc(f / 255, 3); c.push(f) } c.push(c.shift()); return c }, Fs: function () { }, keys: "function" === typeof Object.keys ?
            Object.keys : function (a) { var b = [], c; for (c in a) a.hasOwnProperty(c) && b.push(c); return b }, map: function (a, b) { var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, d = []; if (a && a.length) g.a.Nb(a, function () { for (var e = arguments.length, f = Array(e), h = 0; h < e; h++)f[h] = arguments[h]; d[f[1]] = b.apply(c || a, f) }); else return a; return d }, forEach: function (a, b) { if (a && a.length) { var c = a.length; if (0 < c && (b(a[0], 0), 1 < c)) { b(a[1], 1); for (var d = 2; d < c; d++)b(a[d], d) } } }, Nb: function (a, b) {
                var c = 2 < arguments.length && void 0 !==
                    arguments[2] ? arguments[2] : null; if (a && a.length) for (var d = 0, e = a.length; d < e && !1 !== b.call(c, a[d], d, a); d++);
            }, find: function (a, b) { for (var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, d = 0, e = a.length; d < e; d++)if ("function" === typeof b) { if (b.call(c, a[d], d, a)) return a[d] } else if (a[d] === b) return a[d]; return null }, lJ: function (a) { return "object" === typeof HTMLElement ? a instanceof HTMLElement : a && "object" === typeof a && 1 === a.nodeType && "string" === typeof a.nodeName }, dw: function (a, b) {
                var c = "ASDFGHJKLQWERTYUIO!sdfghjkleiu3~yr5-P&mq9`%zCN*b=8@^xpVM",
                d, e; "v5" < (b || "v5") ? (d = c.length, e = 512) : (d = 27, c = c.substr(0, 27), e = 333); var f, h, k, l, m; h = []; k = NaN; l = 0; for (m = a.length; l < m; l++)f = a[l], f = c.indexOf(f), isNaN(k) ? k = f * d : (h.push(k + f - e), k = NaN); return h
            }, lwa: function (a, b) { for (var c = 1, c = 512 < b.length ? Math.round(Math.pow(b.length, 0.5)) : b.length, d = Math.ceil(b.length / c), e = 0; e < d; e += 1) { var f = c * e, h = f + c; h > b.length && (h = b.length); for (; f < h; f += 1)a(b[f]) } }, fCa: function (a) {
                if (/^rgba\(/.test(a)) return this.Gv(a); var b = a = this.SH(a); "#" === a[0] && (a = a.substring(1), 3 === a.length && (a =
                    a.replace(/./g, function (a) { return a + a })), b = this.Dr(8 === a.length ? a : "ff" + a)); return this.Gv(b)
            }, SH: function () {
                var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", a = a.toLowerCase(), b = {
                    aliceblue: "#f0f8ff", antiquewhite: "#faebd7", aqua: "#00ffff", aquamarine: "#7fffd4", azure: "#f0ffff", beige: "#f5f5dc", bisque: "#ffe4c4", black: "#000000", blanchedalmond: "#ffebcd", blue: "#0000ff", blueviolet: "#8a2be2", brown: "#a52a2a", burlywood: "#deb887", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50",
                    cornflowerblue: "#6495ed", cornsilk: "#fff8dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkgray: "#a9a9a9", darkgreen: "#006400", darkkhaki: "#bdb76b", darkmagenta: "#8b008b", darkolivegreen: "#556b2f", darkorange: "#ff8c00", darkorchid: "#9932cc", darkred: "#8b0000", darksalmon: "#e9967a", darkseagreen: "#8fbc8f", darkslateblue: "#483d8b", darkslategray: "#2f4f4f", darkturquoise: "#00ced1", darkviolet: "#9400d3", deeppink: "#ff1493", deepskyblue: "#00bfff", dimgray: "#696969",
                    dodgerblue: "#1e90ff", firebrick: "#b22222", floralwhite: "#fffaf0", forestgreen: "#228b22", fuchsia: "#ff00ff", gainsboro: "#dcdcdc", ghostwhite: "#f8f8ff", gold: "#ffd700", goldenrod: "#daa520", gray: "#808080", green: "#008000", greenyellow: "#adff2f", honeydew: "#f0fff0", hotpink: "#ff69b4", indianred: "#cd5c5c", indigo: "#4b0082", ivory: "#fffff0", khaki: "#f0e68c", lavender: "#e6e6fa", lavenderblush: "#fff0f5", lawngreen: "#7cfc00", lemonchiffon: "#fffacd", lightblue: "#add8e6", lightcoral: "#f08080", lightcyan: "#e0ffff", lightgoldenrodyellow: "#fafad2",
                    lightgrey: "#d3d3d3", lightgreen: "#90ee90", lightpink: "#ffb6c1", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", lightskyblue: "#87cefa", lightslategray: "#778899", lightsteelblue: "#b0c4de", lightyellow: "#ffffe0", lime: "#00ff00", limegreen: "#32cd32", linen: "#faf0e6", magenta: "#ff00ff", maroon: "#800000", mediumaquamarine: "#66cdaa", mediumblue: "#0000cd", mediumorchid: "#ba55d3", mediumpurple: "#9370d8", mediumseagreen: "#3cb371", mediumslateblue: "#7b68ee", mediumspringgreen: "#00fa9a", mediumturquoise: "#48d1cc", mediumvioletred: "#c71585",
                    midnightblue: "#191970", mintcream: "#f5fffa", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", navajowhite: "#ffdead", navy: "#000080", oldlace: "#fdf5e6", olive: "#808000", olivedrab: "#6b8e23", orange: "#ffa500", orangered: "#ff4500", orchid: "#da70d6", palegoldenrod: "#eee8aa", palegreen: "#98fb98", paleturquoise: "#afeeee", palevioletred: "#d87093", papayawhip: "#ffefd5", peachpuff: "#ffdab9", peru: "#cd853f", pink: "#ffc0cb", plum: "#dda0dd", powderblue: "#b0e0e6", purple: "#800080", rebeccapurple: "#663399", red: "#ff0000", rosybrown: "#bc8f8f",
                    royalblue: "#4169e1", saddlebrown: "#8b4513", salmon: "#fa8072", sandybrown: "#f4a460", seagreen: "#2e8b57", seashell: "#fff5ee", sienna: "#a0522d", silver: "#c0c0c0", skyblue: "#87ceeb", slateblue: "#6a5acd", slategray: "#708090", snow: "#fffafa", springgreen: "#00ff7f", steelblue: "#4682b4", tan: "#d2b48c", teal: "#008080", thistle: "#d8bfd8", tomato: "#ff6347", turquoise: "#40e0d0", violet: "#ee82ee", wheat: "#f5deb3", white: "#ffffff", whitesmoke: "#f5f5f5", yellow: "#ffff00", yellowgreen: "#9acd32"
                }; return "string" === typeof a ? b[a.toLowerCase()] ?
                    b[a.toLowerCase()] : a : a
            }, kI: function (a, b, c) { var d, e; d = Math.floor(c / 2); e = c - d; d = (1 << d) - 1 << e; e = (1 << e) - 1; return [c, a & d | b & e, b & d | a & e] }, lI: function (a) { return a ? encodeURIComponent(a) : "" }, Yc: function (a, b, c, d) { c = a[b].i[c]; if ("undefined" === typeof c) return null; a = a[b].s; if ("number" === typeof c) return a[c]; for (; "undefined" === typeof c[d.toString()] && !(d -= 1, 3 > d);); d = c[d.toString()]; return "number" === typeof d ? a[d] : null }, Gv: function (a) {
                a = a.split(","); a[0] = parseFloat(a[0].split("rgba(")[1]) / 255; a[1] = parseFloat(a[1]) / 255;
                a[2] = parseFloat(a[2]) / 255; a[3] = parseFloat(a[3]); return a
            }, Zva: function (a) { a = a.split(","); a[0] = parseFloat(a[0].split("rgb(")[1]) / 255; a[1] = parseFloat(a[1]) / 255; a[2] = parseFloat(a[2]) / 255; return a }, RT: function (a) { return "rgba(" + 255 * a[0] + "," + 255 * a[1] + "," + 255 * a[2] + "," + a[3] + ")" }, Vma: function (a) { return this.RT(this.Tl(a)) }, Tl: function (a) {
                if (a instanceof Array) return 3 == a.length && a.push(1), a; a = this.SH(a); if (0 == a.indexOf("#")) {
                    if (4 === a.length) return a = a.substr(1).replace(/./g, function (a) { return a + a }), this.Qs(a);
                    if (7 == a.length) return this.Qs(a.substr(1)); if (9 == a.length) return a = a.substr(1), this.Rk(a.substr(6) + a.substr(0, 6))
                } else { if (0 == a.indexOf("rgb(")) return a = this.Zva(a), a.push(1), a; if (0 == a.indexOf("rgba(")) return this.Gv(a) }
            }, I7: function (a) { return g.a.Dr("ff" + a) }, Dr: function (a) { for (var b = [], c = 0, d = a.length; c < d; c += 2)b.push(parseInt(a.substr(c, 2), 16)); b.push((b.shift() / 255).toFixed(2)); return "rgba(" + b.join(",") + ")" }, Qs: function (a) { return g.a.Rk("ff" + a) }, Rk: function (a) {
                for (var b = [], c = 0, d = a.length; c < d; c += 2)b.push(parseInt(a.substr(c,
                    2), 16) / 255); b.push(b.shift()); return b
            }, qh: function (a) { for (var b in a) if (a.hasOwnProperty(b)) return !1; return !0 }, uo: function (a, b) { 0 <= b && a.splice(b, 1); return a }, $wa: function (a, b) { return a.startsWith ? a.startsWith(b) : a.substr(0, b.length) === b }, cy: function (a, b) { var c = g.a.indexOf(a, b); return g.a.uo(a, c) }, filter: function (a, b, c) { var d = []; g.a.Nb(a, function (a, f) { b.call(c, a, f) && d.push(a) }); return d }, indexOf: function (a, b) {
                if (!a || !a.length) return -1; if (a.indexOf) return a.indexOf(b); for (var c = 0; c < a.length; c += 1)if (a[c] ===
                    b) return c; return -1
            }, IC: function (a, b) { return a.endsWith ? a.endsWith(b) : a.length < b.length ? !1 : a.substr(a.length - b.length) == b ? !0 : !1 }, bind: function () { var a = !1; Function.prototype.bind && (a = !0); return function (b, c) { var d = 2 < arguments.length ? Array.prototype.slice.call(arguments, 2) : null; return a ? d ? (d.unshift(c), b.bind.apply(b, d)) : b.bind(c) : function () { return b.apply(c, d || arguments) } } }(), Db: function (a, b) { b = b || {}; a.B = g.extend({}, a.B, b); return a.B }, Nma: function (a, b, c) {
                return "function" == typeof b ? this.nP(a, !0, this.Lla(b,
                    c, 1)) : this.nP(a, !0)
            }, nP: function (a, b, c, d, e, f, h) {
                var k; c && (k = e ? c(a, d, e) : c(a)); if (void 0 !== k) return k; if (!this.c5(a)) return a; if (d = this.isArray(a)) { if (k = this.nra(a), !b) return this.sla(a, k) } else { var l = Object.prototype.toString.call(a), m = "[object Function]" == l; if ("[object Object]" == l || "[object Arguments]" == l || m && !e) { if (k = this.ora(m ? {} : a), !b) return this.Bla(k, a) } else return e ? a : {} } f || (f = []); h || (h = []); for (e = f.length; e--;)if (f[e] == a) return h[e]; f.push(a); h.push(k); (d ? this.tla : this.Gla)(a, function (d, e) {
                k[e] =
                    g.a.nP(d, b, c, e, a, f, h)
                }); return k
            }, Bla: function (a, b) { return null == b ? a : this.Ela(b, Object.keys(b), a) }, c5: function (a) { var b = typeof a; return !!a && ("object" == b || "function" == b) }, kEa: function (a) { return !!a && "object" == typeof a }, hEa: function (a) { return "number" == typeof a && -1 < a && 0 == a % 1 && 9007199254740991 >= a }, nra: function (a) { var b = a.length, c = new a.constructor(b); b && "string" == typeof a[0] && Object.hasOwnProperty.call(a, "index") && (c.index = a.index, c.input = a.input); return c }, sla: function (a, b) {
                var c = -1, d = a.length; for (b ||
                    (b = Array(d)); ++c < d;)b[c] = a[c]; return b
            }, ora: function (a) { a = a.constructor; "function" == typeof a && a instanceof a || (a = Object); return new a }, Lla: function (a, b, c) { if ("function" != typeof a) return this.$u; if (void 0 === b) return a; switch (c) { case 1: return function (c) { return a.call(b, c) }; case 3: return function (c, e, f) { return a.call(b, c, e, f) }; case 4: return function (c, e, f, h) { return a.call(b, c, e, f, h) }; case 5: return function (c, e, f, h, k) { return a.call(b, c, e, f, h, k) } }return function () { return a.apply(b, arguments) } }, tla: function (a,
                b) { for (var c = -1, d = a.length; ++c < d && !1 !== b(a[c], c, a);); return a }, $u: function (a) { return a }, ona: function (a) { return function (b, c, d) { var e = g.a.Bxa(b); d = d(b); for (var f = d.length, h = a ? f : -1; a ? h-- : ++h < f;) { var k = d[h]; if (!1 === c(e[k], k, e)) break } return b } }, Gla: function (a, b) { return g.a.ona()(a, b, Object.keys) }, Bxa: function (a) { return g.a.c5(a) ? a : Object(a) }, Ela: function (a, b, c) { c || (c = {}); for (var d = -1, e = b.length; ++d < e;) { var f = b[d]; c[f] = a[f] } return c }, T2: function () { return !1 }, join: function (a, b) {
                    if (a.join) return a.join(b);
                    var c = [], d; for (d in a) a.hasOwnProperty(d) && c.push(d + "=" + (a[d] || "")); return c.join(b)
                }, z3: function (a, b) { return (a || "") + Math.round(Math.random() * Math.pow(10, b || 6)) }, vb: function () { var a = 0; return function (b) { b._amap_id || (a += 1, b._amap_id = a); return b._amap_id } }(), Boa: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=", Vf: Date.now ? function () { return Date.now() } : function () { return (new Date).getTime() }, pD: function (a, b, c, d) {
                    var e; if (d) {
                        var f = 0, h, k = this.Vf; e = function () {
                            h = k(); if (h - f < b) return !1; f = h; a.apply(c,
                                arguments)
                        }
                    } else { var l, m, n; n = function () { l = !1; m && (e.apply(c, m), m = !1) }; e = function () { l ? m = arguments : (l = !0, a.apply(c, arguments), setTimeout(n, b)) } } return e
                }, hc: function (a, b) { return a === a << 0 ? a : +parseFloat(a).toFixed(b || 0) }, isArray: Array.isArray ? Array.isArray : function (a) { return this.bk(a, "array") }, bk: function (a, b) { return Object.prototype.toString.call(a).split(" ")[1].slice(0, -1).toLowerCase() === b.toLowerCase() }, ka: "function" === typeof Array.prototype.ka ? function (a, b) { return a.ka(b) } : function (a, b) {
                    return -1 !==
                        this.indexOf(a, b)
                }, D8: function (a) { var b = 0; if (0 === a.length) return b; for (var c, d = 0, e = a.length; d < e; d += 1)c = a.charCodeAt(d), b = (b << 5) - b + c, b &= b; return b }, sCa: function (a, b) { b = b ? Math.ceil(parseInt(b.substr(6)) / 24) : 1; for (var c = "", d = 0, e = a.length; d < e; d++)c += String.fromCharCode((a.charCodeAt(d) - 256 - b + 65535) % 65535); return c }, Kna: function (a, b) {
                    var c = (a + "").slice(-2), d = (b + "").slice(-2); a = a.slice(0, -2); b = b.slice(0, -2); var e = parseInt((d + c).slice(1)), f = Math.ceil(e / 250) % 2 ? 1 : -1, d = parseInt("1" + d) / 3E3; a -= parseInt("1" + c) /
                        3E3 * f; b -= d * (1 < e / 500 ? 1 : -1); return new g.U(parseFloat(a).toFixed(5), parseFloat(b).toFixed(5))
                }, j6: function (a) { return "undefined" !== typeof JSON && JSON.stringify ? g.a.D8(JSON.stringify(a)) : null }, BGa: function (a, b) { if (b || !a.hasOwnProperty("_amap_hash")) { var c = g.a.j6(a); c && (a._amap_hash = c) } return a._amap_hash }, iepngFix: function (a) {
                    function b() { for (var a; c.length;)a = c.shift(), window.DD_belatedPNG.fixPng(a); d.jS = !0 } this.U6 || (this.U6 = [], this.jS = !1); var c = this.U6, d = this; if ("img" === a.tagName.toLowerCase()) c.push(a);
                    else { a = a.getElementsByTagName("*"); for (var e = 0; e < a.length; e += 1)c.push(a[e]) } window.DD_belatedPNG && this.jS ? setTimeout(function () { b() }, 100) : this.jS || g.rb.load("AMap.FixPng", b)
                }, Ia: function (a) { if (g.a.isArray(a)) if (g.a.isArray(a[0])) for (var b = 0; b < a.length; b += 1)a[b] = g.a.Ia(a[b]); else if (b = typeof a[0], "string" === b || "number" === b) return new g.U(a[0], a[1]); return a }, hza: function (a) { for (var b = [], c = 0, d = a.length; c < d; c += 1)b[c] = [a[c].x, a[c].y]; return b }, tq: function (a) {
                    return g.a.isArray(a) ? new g.xd(a[0], a[1]) :
                        a
                }, gP: function (a) { var b = a.type, c = a.rU, d = a.error; a = new g.fb.XMLHttpRequest(a.url, { vd: void 0 === b ? "GET" : b, l2: a.data, OT: "text/plain" }); a.h("complete", function (a) { a = JSON.parse(a.data); c && c(a) }, this); a.h("error", function () { var a = { errmsg: "REQUEST_FAILED" }; d && d(a) }, this) }
    };
    (function () {
        function a(a) { window.clearTimeout(a) } function b(a) { var b, c, d = ["webkit", "moz", "o", "ms"]; for (b = 0; b < d.length && !c; b += 1)c = window[d[b] + a]; return c } function c(a) { var b = +new Date, c = Math.max(0, (g.l.Rl ? 50 : 20) - (b - d)); d = b + c; return window.setTimeout(a, c) } var d = 0, e = window.requestAnimationFrame || b("RequestAnimationFrame") || c, f = window.cancelAnimationFrame || b("CancelAnimationFrame") || b("CancelRequestAnimationFrame") || a; g.a.Rc = function (a, b, c, d) {
            if (c) b ? g.a.bind(a, b).call(b, d) : a(); else return e(function () {
                b ?
                    g.a.bind(a, b).call(b, d) : a()
            })
        }; g.a.pi = function (a) { a && f.call(window, a) }
    })(); g.a.PT = window.requestIdleCallback ? function (a, b) { return window.requestIdleCallback(a, b) } : function (a) { var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, c = g.a.Vf(); return setTimeout(function () { a({ didTimeout: !1, timeRemaining: function () { return Math.max(0, 70 - (g.a.Vf() - c)) } }) }, b.timeout || 0) }; g.a.FP = window.cancelIdleCallback ? function (a) { return window.cancelIdleCallback(a) } : function (a) { clearTimeout(a) }; (function (a) {
        var b = 1, c = {}; a.a.Bwa = function (a, b) { if (c[a]) { var f = c[a]; f.lE = 1; f.result = b; if (f.fn) { for (var h = f.fn, k = 0, l = h.length; k < l; k++)h[k].call(null, b); f.fn = null } } }; a.a.Jma = function (a) { c[a] = null }; a.a.Qya = function (a, b) { if (c[a]) { var f = c[a]; 0 < f.lE ? b(null, f.result) : (f.fn || (f.fn = []), f.fn.push(b)) } else b(null, a) }; a.a.iR = function (d, e) {
            var f = navigator.geolocation; if (!a.l.hD || "https:" === document.location.protocol) return d(null, f); var h; e && e.Rya && (h = "f" + b++ , c[h] = { lE: 0 }); var k = null, l = !1; e && e.timeout && (k = setTimeout(function () {
                k =
                void 0; d({ code: 3, info: "TIME_OUT", message: "Get geolocation time out." }); l = !0
            }, e.timeout)); f.getCurrentPosition(function () { l || (clearTimeout(k), k = void 0, d(null, f)) }, function (b) { l || (clearTimeout(k), k = void 0, 2 === b.code && 0 < b.message.indexOf("permission") ? a.rb.load("AMap.GeoRemoteLoc", function () { d(null, a.A$, h) }) : d(null, f)) }, { timeout: 1E3 }); return h
        }
    })(g); (function (a) { var b = a.aa.extend({ ka: [a.va], r: function () { } }); a.Dj = new b })(g); (function (a) {
        var b = a.aa.extend({
            ka: [a.va], r: function () { this.tfa() }, tfa: function () { a.Dj && a.Dj.h("vecTileParsed.buildings", this.Zea, this) }, V4: function (a) { return a.map.bZ }, Tpa: function (a) { return this.V4(a) ? a.map.uN : null }, ywa: function (a, b) { if (b) { var e = b.map; e && (e.uN ? e.uN.toString() : "") !== (a ? a.toString() : "") && (e.uN = a || [], e.set("display", 0)) } }, c8: function (a, b) { if (b) { var e = b.map; e && e.bZ !== a && (e.bZ = a, e.set("display", 0)) } }, PAa: function () { }, YY: function (a, b) {
                if (a) for (var e = 0, f = a.length; e < f; e++)a[e] && 0 > b.indexOf(a[e]) &&
                    b.push(a[e])
            }, X2: function (b) { if (!b) return null; b = b.map.za; for (var d = 0, e = b.length; d < e; d++)if (a.o.di && b[d] instanceof a.o.di && b[d].fa && b[d].fa.length && (-1 !== b[d].fa.indexOf("building") || -1 !== b[d].fa.indexOf("poilabel")) && b[d].Ka) { var f = b[d].T.get("tiles", null, !0); if (f && f.length) return b[d] } return null }, rpa: function (a) { if (a = this.X2(a)) { if (a = a.T.get("tiles", null, !0)) a = a[0]; else return null; if (!a || !a.length) return null; for (var b = [], e = 0, f = a.length; e < f; e++) { var h = a[e]; h.de && h.de.gf && this.YY(h.de.gf, b) } return b } },
            Zea: function (a) { if (a.fp && a.fp.de) { var b = a.fp.de.gf; if (b) { var e = []; this.YY(b, e); this.q("vecTileParsed.builds.found", { I1: e, fp: a.fp }) } } }
        }); a.Ej = new b
    })(g); (function (a) {
        function b() { return { checkup: function () { var a = Array.prototype.slice.call(arguments, 0); a.pop()(null, a) } } } function c(a) { return { injectCode: function (b, c) { var d = null, e = null; try { d = (new Function("self", b))(a) } catch (f) { console.error("error", e), e = f.toString() } c(e, d) } } } function d(a) {
            function b(c, d) {
                function e(a, b, c) { a = { Dz: Date.now(), pz: h, error: a, result: b, oq: !1, Wk: !1 }; if (c) for (var f in c) c.hasOwnProperty(f) && (a[f] = c[f]); d(a) } var f = c.LR, h = c.pz, l = c.RP, m = c.gC, n = c.rla || [], p = a._wkHandlers[f]; p ? p[l] ? m ?
                    p[l].apply(p, n.concat(e)) : e(null, p[l].apply(p, n)) : e("Unknown cmd: " + l) : e("Can not find handler for: " + f)
            } var c = [], d = null, e = null; for (d in this._wkHandlers) -1 !== d.indexOf("_def_") && (e = this._wkHandlers.UEa = d); "function" === typeof this._wkHandlers[e].r && this._wkHandlers[e].r.call(this._wkHandlers[e]); a.gu = function (a) { c.push.apply(c, a) }; a.addEventListener("message", function (d) {
                function e(b) {
                    if (t) {
                        t.push(b); var d = !!b.oq; d || n++; b = n >= h || b.Wk; if (d || b) {
                            d = 1 < t.length ? { Tva: t } : t[0]; d.Dz = Date.now(); d.iGa = p; if (c.length) {
                                try {
                                    a.postMessage(d,
                                        c)
                                } catch (f) { a.postMessage(d), console.error(f) } c.length = 0
                            } else a.postMessage(d); t.length = 0; b && (e = t = null)
                        }
                    } else console.error("Seemed callback already sent!!", b, b.result.ec)
                } var f = d.data; d = f.Qva || [f]; for (var h = d.length, n = 0, p = Date.now() - f.Dz, t = [], f = 0; f < h; f++)b(d[f], e)
            }, !1)
        } function e(d, h) {
        this.B = a.extend({ batchSend: !0, lazy: !1, libPolyfills: null }, h); this.Cp = []; this.yA = this.B.clientId || "w" + f++; this.B.onReady && this.OS(this.B.onReady); this.WF = this.aea(); if ("function" === typeof d) { var m = {}; m[this.WF] = d; d = m } d[e.wR] =
            c; d[this.gY()] = b; this.lG = d; this.sB(null); this.B.lazy || this.Qx(); a.Gqa || !1 === this.B.hostWorker || (a.Gqa = this); this.$n && this.$n.r && this.$n.r.call(this.$n)
        } var f = 1, h = 1; a.extend(e, { wR: "_g_", Nwa: function (a) { if (!a.kba) { var b = []; a.addEventListener("message", function (a) { a = a.data; a = a.Tva || [a]; for (var c = 0, d = a.length; c < d; c++) { var e = a[c], f; a: { f = e.pz; for (var h = !e.Wk, k = 0, v = b.length; k < v; k++) { var w = b[k]; if (f === w.pz) { h || b.splice(k, 1); f = w; break a } } f = void 0 } f && f.gC(e.error, e.result, !0) } }, !1); a.Zaa = b; a.kba = !0 } } }); a.extend(e.prototype,
            {
                aea: function () { return "_def_" + this.yA }, gY: function () { return "_cln_" + this.yA }, tja: function () { var a = Array.prototype.slice.call(arguments, 0); this.U_ = a; if (this.wx) { for (var b = 0, c = this.wx.length; b < c; b++)this.wx[b].apply(null, a); this.wx.length = 0 } }, gu: function (a) { this.kja && this.Cp.push.apply(this.Cp, a) }, OS: function (a) { this.U_ ? a.apply(null, this.U_) : (this.wx || (this.wx = []), this.wx.push(a)) }, Qx: function (b) {
                    var c = this; if (!c.fX) {
                    c.fX = !0; var d = function (d, e) { d && a.l.lS && console.warn(d); c.tja.call(c, d, e); b && b(d, e) };
                        a.l.lS ? this.gja(function (a, b) { b ? this.Afa(b, function (a, c) { a ? d(a) : (this.sB(c), this.cP = c, this.Cp.length = 0, this.$n = null, d(null, { Ila: b, cza: c })) }) : d("Worker start failed!") }) : d("Worker not supported!")
                    }
                }, lf: function (b, c) {
                    var d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : a.a.Fs, f = this; b = b || f.WF; var h = {}; if (a.a.bk(c, "object")) {
                        var q = "return {", r; for (r in c) if (c.hasOwnProperty(r)) var s = c[r], q = "function" === typeof s ? q + ("\n\t" + r + ": " + s.toString() + ",") : "object" === typeof s ? q + ("\n\t" + r + ": " + JSON.stringify(s) +
                            ",") : q + ("\n\t" + r + ': "' + s + '",'); c = new Function(q + "\n}")
                    } f.LW(b, c, h); f.sB(null, h); f.OS(function (a) { a ? d(a) : f.cP ? (a = f.lY(c, f.gN(f.yA, b), !0), f.cP.sendMessage(e.wR + ":injectCode", a, function (a, b) { a || f.sB(f.cP, h); d(a, b) })) : d("Worker msger missing!!") })
                }, gN: function (a, b) { if (!a || !b) throw Error("clientId or ns missing!!"); return a + "_" + b }, zea: function (a, b, c) {
                    function d() { var b = Array.prototype.slice.call(arguments, 0); c.sendMessage.apply(c, [a].concat(b)) } var e = this; if (!c) return function () {
                        var a = b.apply(e.$n, arguments);
                        e.fX || "untilCall" === e.B.lazy && e.Qx(); return a
                    }; d._proxy2Worker = !0; return d
                }, aca: function (a) { var b = {}, c; for (c in a) a.hasOwnProperty(c) && this.LW(c, a[c], b); return b }, LW: function (a, b, c) { b = b.call(null, !1); for (var d in b) b.hasOwnProperty(d) && (c[a + ":" + d] = b[d], a === this.WF && (c[d] = b[d])) }, sB: function (a, b) {
                    if (!b) this.$n || (this.$n = this.aca(this.lG)), b = this.$n; else if (this.$n) for (var c in b) b.hasOwnProperty(c) && (this.$n[c] = b[c]); for (c in b) if (b.hasOwnProperty(c)) {
                        var d = b[c]; "function" === typeof d && (this[c] = this.zea(c,
                            d, a))
                    } this.kja = !!a
                }, lY: function (a, b) {
                    var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1, d = a.toString(), e, d = d.replace(/^function([^\(]*)\(/, function () { e = "_prep_h" + h++; return "function " + e + "(" }); return e ? "\n\t\t\t\t" + d + "\n\t\t\t\tif (self._wkHandlers['" + b + "'] && " + !c + ") {\n\t\t\t\t\tthrow new Error('" + b + " already exists!')\n\t\t\t\t} else {\n\t\t\t\t\tif (" + c + " && self._wkHandlers['" + b + "']) {\n\t\t\t\t\t\tvar handlerFunObj = " + e + ".call(null, self) || {}\n\n\t\t\t\t\t\tif (typeof Object.assign === 'function') {\n\t\t\t\t\t\t\tObject.assign(self._wkHandlers['" +
                        b + "'], handlerFunObj)\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tfor (var key in handlerFunObj) {\n\t\t\t\t\t\t\t\tif (handlerFunObj.hasOwnProperty(key)) {\n\t\t\t\t\t\t\t\t\tself._wkHandlers['" + b + "'][key] = handlerFunObj[key]\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t} else {\n\t\t\t\t\t\tself._wkHandlers['" + b + "'] = " + e + ".call(null, self) || {}\t\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t" + e + " = null;\n\t\t\t" : (console.error("No function match!!"), !1)
                }, gja: function (a) {
                    var b = this.yA, c = [], d;
                    for (d in this.lG) if (this.lG.hasOwnProperty(d)) { var f = this.lY(this.lG[d], this.gN(b, d)); f && c.push(f) } b = this.B.libPolyfills || []; d = 0; for (f = b.length; d < f; d++)b[d] = "(" + b[d].toString() + ")(self);"; var h = b.join(";\n") + ";\n" + c.join(";\n"), c = this.B.hostWorker, r = this; c && c !== r ? c.OS(function (b, c) { b ? a.call(r, b) : c.cza.sendMessage(e.wR + ":injectCode", h, function (b) { b ? a.call(r, b) : a.call(r, null, c.Ila) }) }) : a.call(r, null, r.xka(h))
                }, xka: function (b) {
                    b = ["self._wkHandlers={};", b, "(" + d.toString() + ")(self)"].join(""); var c; try {
                        var e =
                            a.a.createObjectURL(b); c = new Worker(e); setTimeout(function () { a.a.revokeObjectURL(e); e = null }, 3E3)
                    } catch (f) { return } return c
                }, Tca: function (b) { var c = 1, d = b.Zaa, e = this, f = !!e.B.batchSend; return function (h) { var r = Array.prototype.slice.call(arguments, 1), s = "function" === typeof r[r.length - 1] ? r.pop() : null, u = e.yA, v = h.split(":"), w = e.WF; 1 < v.length && (h = v[1], w = v[0]); r = { Dz: a.a.Vf(), LR: e.gN(u, w), gC: !!s, pz: u + "_" + c++, RP: h, rla: r }; s && d.push({ RP: r.RP, LR: r.LR, Dz: r.Dz, pz: r.pz, gC: s }); f ? e.Eba(b, r) : e.ux(b, r) } }, ux: function (a, b) {
                    if (this.Cp.length) {
                        try {
                            a.postMessage(b,
                                this.Cp)
                        } catch (c) { a.postMessage(b), console.error(c) } this.Cp.length = 0
                    } else a.postMessage(b)
                }, Eba: function (b, c) { b.$N || (b.$N = []); b.$N.push(c); if (!b.M_) { var d = this; b.M_ = setTimeout(function () { b.M_ = null; var c = b.$N; c.length && (d.ux(b, 1 === c.length ? c[0] : { Dz: a.a.Vf(), Qva: c }), c.length = 0) }, 0) } }, oka: function (a) { var b = this; a.addEventListener("error", function (a) { console.error(a); b.sB(null) }, !1); e.Nwa(a) }, Afa: function (a, b) {
                    var c = this; c.oka(a); var d = this.Tca(a); if (e.yca) b.call(c, null, { sendMessage: d }); else {
                    e.yca = !0;
                        var f = [c.gY() + ":checkup", Math.random().toFixed(5) + "", Math.round(1E3 * Math.random()), !1, function (a, e) { var h = !0; if (a || !e || e.length !== f.length - 2) h = !1; else for (var k = 0, v = e.length; k < v; k++)if (e[k] !== f[k + 1]) { h = !1; break } h ? b.call(c, null, { sendMessage: d }) : (console.error(a), b.call(c, "Self checkup failed!!")) }]; d.apply(c, f)
                    }
                }
            }); a.lA = e
    })(g); (function () {
        if (!g.te) {
        g.te = { af: {}, Fy: {} }; var a = g.te, b = g.te.af, c = g.a, d = g.w; b.start = function (b) { a.Fy[b.id] = { K: b.K, time: { J4: c.Vf() }, fma: function () { return c.Vf() - this.time.J4 } } }; b.end = function (b) { var d = a.Fy[b.id], e = d.time, d = c.bind(d.fma, d), l = b.index, m = b.key; "function" !== typeof b.Jc && (b.Jc = function () { }); if (void 0 === e[m]) void 0 === l ? e[m] = d() : (e[m] = [], e[m][l] = d()); else if (void 0 !== l && void 0 === e[m][l]) e[m][l] = d(); else return b.Jc(Error("Duplicate Invoke")); b.Jc(null) }; b.push = function (b) {
            var c = a.Fy[b.id].time,
            d = b.key, e = b.vf; "function" !== typeof b.Jc && (b.Jc = function () { }); if (void 0 === c[d]) c[d] = e; else return b.Jc(Error("Duplicate Invoke")); b.Jc(null)
        }; b.send = function (b) {
            var c = d.Fc + "://webapi.amap.com/count?", k = g.extend(e({ K: a.Fy[b.id].K }), b.params || {}), l = g.a; b.params && b.params.rs && !b.params.type && (b = a.Fy[b.id].time, delete b.J4, k = g.extend(k, b)); b = []; for (var m in k) l.isArray(k[m]) ? b.push([m, k[m].join("-")].join("=")) : b.push([m, k[m]].join("=")); b.push("jl=" + (d.rD ? 1 : 0)); if (l.bk(window.performance, "performance") &&
                l.bk(window.performance.getEntriesByType, "function")) { var n = 0, p = ["webapi.amap.com", "jsapi-test.amap.test", "localhost"], q = ["/maps", "/css"]; l.Nb(window.performance.getEntriesByType("resource"), function (a) { var b = void 0, c = void 0; a.name.match(/:\/\/([^:?#/]+)/) && (b = RegExp.$1); a.name.match(/[^\/](\/[^/?#:]+)/) && (c = RegExp.$1); b && c && l.ka(p, b) && l.ka(q, c) && (n += parseInt(a.responseEnd - a.startTime)) }); 0 !== n && b.push("sd=" + n) } new g.fb.wb(c + b.join("&"))
        }; var e = function (a) {
            var b = g.l; a = g.j.n3(a.K); return {
                type: "q",
                resolution: a.width + "*" + a.height, k: d.key, u: d.iu, iw: b.Cf ? 1 : 0, cw: b.L1 ? 1 : 0, gc: b.xR, m: b.ba ? 1 : 0, cv: b.pu ? 1 : 0, pf: b.fz, dpr: window.devicePixelRatio, screenwidth: screen.width, scale: b.gL || 0, detect: b.ja ? 1 : 0, v: d.yr
            }
        }
        }
    })(); (function () {
        if (!g.oL) {
            var a = g.a.SC({ w: "Conf", extend: "extend", l: "Browser", dw: "uncodeCoords" }); g.oL = function () {
                var b = new g.lA(function () {
                    return {
                        r: function () { this.Vw = { fk: 0, Av: 0 }; this.Lk = {}; this.fo = []; this.Bp = {}; this.Oj = {}; this.Ct = 0; this.AZ = 500 }, th: function (a, b) { var e = a.Id, f = a.Ae, h = "building" === a.fa[0]; (f && e !== this.Vw.Av && this.Vw.Av || !f && !h && e !== this.Vw.fk && this.Vw.fk) && this.Vka(!!f); f ? this.Vw.Av = e : h || (this.Vw.fk = e); this.msa(a, b) }, Vka: function (a) {
                            if (a) this.GW(); else if (!a && Object.keys(this.Lk).length) for (var b in this.Lk) this.Lk.hasOwnProperty(b) &&
                                (a = this.Lk[b], a.xt || a.abort())
                        }, Lxa: function () { this.Ct > this.AZ && this.BT(Object.keys(this.Oj).slice(0, Math.floor(this.AZ / 2))) }, BT: function (a) { for (var b = 0, e = a.length; b < e; b++)delete this.Oj[a[b]]; this.Ct -= a.length }, aQ: function (a) { var b = a.fa; a = a.Ae; var e = new XMLHttpRequest; e.wq = ""; e.dE = [(new Date).getTime() + "_" + Math.random(), a ? 1 : 0, b.join("|")].join("-"); return e }, o4: function (a, b, e) {
                            var f = this, h = a.Eb, k = a.Ae, l = [], m = h.filter(function (a) { var b = f.Oj[a.key]; if (b) { if (b.sZ) return !0; l.push(a.key) } return !1 }), n =
                                !1; if (m.length && ((n = m.length === h.length) || "function" !== typeof b || b(a, m), !k)) { var p = []; m.forEach(function (a) { a = a.key; p.push.apply(p, f.Oj[a]); delete f.Oj[a] }); this.Ct -= m.length; this.Hs(this.extend({}, a, { ME: p, Id: a.Id, bl: n }), e) } !k && l.length && this.BT(l); this.Lxa(); return n
                        }, msa: function (a, b) {
                            function e(e, f) {
                                var m = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1; if (p.Lk[q.dE] || p.pfa(q)) {
                                    var n = e.split("|"); f && (n[0] = f + n[0]); var t = n, x = ""; n[n.length - 1] && (x = n[n.length - 1], t = n.splice(0, n.length - 1)); if (k) for (var n =
                                        0, y = t.length; n < y; n++) { if (t[n]) { var D = JSON.parse(t[n]); if (D.length) { var C = D[0].split("-").slice(0, -1).join("/"); p.Oj[C] ? p.Oj[C].push(D) : (p.Oj[C] = [D], p.Ct++); m && (p.Oj[C].sZ = !0) } } } else p.Hs(p.extend({}, a, { ME: t, Id: h, bl: m, cS: !0 }), b); return x
                                } r || (p.Fl(l, b), r = !0)
                            } var f = this, h = a.Id, k = a.Ae, l = a.Eb, m = a.url; if (!this.o4(a, function (a, b) { var c = a.Eb, d = a.url, e = d.match(/&t=([^&]+)/)[1].split(";"); b.reverse().forEach(function (a) { a = c.indexOf(a); -1 !== a && e.splice(a, 1) }); a.url = d.replace(/&t=[^&]+/, "&t=" + e.join(";")) }, b)) {
                                if (this.FB() &&
                                    (this.GW(), k)) { this.Fl(l, b); return } var n = 0, p = this, q = this.aQ(a); k ? this.fo.push(q) : (this.Lk[q.dE] = q, q.Eb = l, q.Jc = b); var r = !1; q.onreadystatechange = function () {
                                        if (4 === q.readyState && 0 === q.status) q.xt || (q.xt = !0, f.Fl(l, b), q.onreadystatechange = null, k ? f.Z_(q) : delete f.Lk[q.dE]), q = null; else if (!q.xt) if (3 === q.readyState) { var h = q.responseText.substring(n); q.wq = e(h, q.wq); n = q.responseText.length } else 4 === q.readyState && (h = q.responseText.substring(n), a.Qg && (h += "|"), e(h, q.wq, !0), q.wq = "", k ? f.Z_(q) : delete f.Lk[q.dE],
                                            q = null)
                                    }; q.onerror = function () { }; q.open("GET", m, !0); q.send(); k && (q.a9 = l.map(function (a) { return a.key }))
                            }
                        }, ED: function (a) {
                            function b(d, p, r) {
                                var s = [r, d, p].join("/"); d = e.filter(function (a) { return a.key === s })[0]; 18 < k && !n && (s += "/" + k); if (d && "loaded" !== d.status && -1 !== m.indexOf(t)) if ("limg" === t) p = h[1], d.pd = p, "string" === typeof p.b && (p.b = w.DA(p.b)), r = "", (r = "object" === typeof p.u ? p.u.url : p.u) && (p.u = { url: r, uk: "limg-" + d.key + "-" + f }); else {
                                    p = {
                                        yg: d.ta, Hi: s, Oa: h, vd: t, Ox: a.mu, iD: "building" === t, xi: "poilabel" === t || "roadlabel" ===
                                            t || "building" === t && q
                                    }; if ("poilabel" === t || "roadlabel" === t) p.pd = d.pd; t === m[m.length - 1] && (d.status = "loaded"); l.push(p)
                                }
                            } var e = a.Eb, f = a.qS, h = a.tC, k = a.Id, l = a.Kc, m = a.fa, n = a.Cf, p = a.AR, q = a.pe, r = h[0].split("-"), s = parseInt(r[1]), u = parseInt(r[2]), v = parseInt(r[0]), w = this, t = r[3], r = Math.pow(2, v); 10 > v && (s <= p && b(s + r, u, v), s >= r - p && b(s - r, u, v)); b(s, u, v)
                        }, Z_: function (a) { for (var b = this.fo.length - 1; 0 <= b; b--)this.fo[b] === a && this.fo.splice(b, 1) }, pfa: function (a) {
                            for (var b = 0, e = this.fo.length; b < e; b++)if (this.fo[b] === a) return !0;
                            return !1
                        }, FB: function () { return Object.keys(this.Lk).length ? !0 : !1 }, GW: function () { if (this.fo.length) { for (var a = this.fo.length - 1; 0 <= a; a--) { var b = this.fo[a]; b.xt || b.abort(); b.a9 && this.BT(b.a9) } this.fo.length = 0 } }, Fl: function (a, b) { b(null, { Eb: a, d5: !0, disabled: this.disabled }, { Wk: !0 }) }
                    }
                }, { batchSend: !1 }); b.lf(null, new Function("\n     return {\n      " + a.Conf + ": " + JSON.stringify(g.w) + ",\n      " + a.extend + ": " + g.extend.toString() + ",\n      " + a.Browser + ": " + JSON.stringify(g.l) + ",\n      " + a.uncodeCoords + ": " +
                    g.a.dw.toString() + "\n     }")); return b
            }
        }
    })(); g.j = {
        CLASS_NAME: "DomUtil", get: function (a) { return "string" === typeof a ? document.getElementById(a) : a }, kD: function (a, b, c) { return a.parentNode == b ? !0 : a.parentNode && a.parentNode !== document.body && !g.j.rn(a.parentNode, c) ? g.j.kD(a.parentNode, b) : !1 }, yo: function (a) {
            if (!a) return [0, 0]; var b = a.offsetWidth, c = a.offsetHeight; b && c || !a.childNodes[0] || (b = b || a.childNodes[0].offsetWidth, c = c || a.childNodes[0].offsetHeight); window.opera && (b = Math.max(b, a.childNodes[0].scrollWidth), c = Math.max(c, a.childNodes[0].scrollHeight));
            return [b, c]
        }, EEa: function (a, b) { var c = document.head || document.getElementsByTagName("head")[0]; if (c) { var d = document.createElement("link"); d.setAttribute("rel", "stylesheet"); d.setAttribute("type", "text/css"); d.setAttribute("href", a); b ? c.appendChild(d) : c.insertBefore(d, c.firstChild) } else document.write("<link rel='stylesheet' href='" + a + "'/>") }, Yc: function (a, b) {
            var c = a.style[b]; !c && a.currentStyle && (c = a.currentStyle[b]); c && "auto" !== c || !document.defaultView || (c = (c = document.defaultView.getComputedStyle(a,
                null)) ? c[b] : null); c && "auto" !== c || "height" !== b || (c = a.clientHeight + "px"); c && "auto" !== c || "width" !== b || (c = a.clientWidth + "px"); return "auto" === c ? null : c
        }, TI: function (a) { if (a) return new g.xd(a.clientWidth || document.body.clientWidth, a.clientHeight || (g.l.ns ? "CSS1Compat" === document.compatMode ? document.documentElement.clientHeight : document.body.clientHeight : document.body.clientHeight), !0) }, n3: function (a) { return new g.xd(a.clientWidth, a.clientHeight) }, vR: function (a) {
            var b = 0, c = 0, d = a, e = document.body, f = document.documentElement,
            h, k = g.l.av; do { b += d.offsetTop || 0; c += d.offsetLeft || 0; b += parseInt(g.j.Yc(d, "borderTopWidth"), 10) || 0; c += parseInt(g.j.Yc(d, "borderLeftWidth"), 10) || 0; h = g.j.Yc(d, "position"); if (d.offsetParent === e && "absolute" === h) break; if ("fixed" === h) { b += e.scrollTop || f.scrollTop || 0; c += e.scrollLeft || f.scrollLeft || 0; break } d = d.offsetParent } while (d); d = a; do {
                if (d === e) break; b -= d.scrollTop || 0; c -= d.scrollLeft || 0; g.j.boa() || !g.l.J9 && !k || (c += d.scrollWidth - d.clientWidth, k && "hidden" !== g.j.Yc(d, "overflow-y") && "hidden" !== g.j.Yc(d, "overflow") &&
                    (c += 17)); d = d.parentNode
            } while (d); return new g.H(c, b)
        }, boa: function () { g.j.mda || (g.j.mda = !0, g.j.lda = "ltr" === g.j.Yc(document.body, "direction")); return g.j.lda }, create: function (a, b, c, d) { a = document.createElement(a); c && (a.className = c); b && (d && "before" === d ? b.insertBefore(a, b.firstChild) : b.appendChild(a)); return a }, z2: function () { document.selection && document.selection.empty && document.selection.empty(); this.nia || (this.nia = document.onselectstart, document.onselectstart = g.a.T2) }, M2: function () { }, Exa: function (a,
            b, c) { c ? this.Sa(a, b) : this.ab(a, b) }, rn: function (a, b) { if (a && b) return 0 < a.className.length && RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className) }, Sa: function (a, b) { a && b && (a.classList && a.classList.add ? a.classList.add(b) : g.j.rn(a, b) || (a.className += (a.className ? " " : "") + b)) }, qwa: function (a, b) { a && (a.className = b || "") }, ab: function (a, b) { function c(a, c) { return c === b ? "" : a } a && b && (a.classList && a.classList.remove ? a.classList.remove(b) : a.className = a.className.replace(/(\S+)\s*/g, c).replace(/(^\s+|\s+$)/, "")) }, H3: function (a,
                b) { return 1 === b ? "" : "opacity" in a.style ? "opacity:" + b : 8 <= document.documentMode ? "-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(opacity=" + Math.ceil(100 * b) + ")'" : "filter:alpha(opacity=" + Math.ceil(100 * b) + ")" }, Eq: function (a, b) { if (a.style) if ("opacity" in a.style) a.style.opacity = b; else if ("filter" in a.style) { var c = Math.round(100 * b); a.style.filter = ""; 100 !== c && (a.style.filter = " progid:DXImageTransform.Microsoft.Alpha(opacity=" + c + ")") } }, vU: function (a) {
                    for (var b = document.documentElement.style, c = 0; c < a.length; c +=
                        1)if (a[c] in b) return a[c]; return !1
                }, W3: function (a) { var b = g.l.K9; return "translate" + (b ? "3d" : "") + "(" + a.x + "px," + a.y + "px" + ((b ? ",0" : "") + ")") }, DDa: function (a, b) { return g.j.W3(b.add(b.Kd(-1 * a))) + (" scale(" + a + ") ") }, g8: function (a, b, c) { a.Vi = b; !c && g.l.yH ? (b = g.j.W3(b), c = a.style[g.j.lg].split("rotate"), 1 < c.length ? (c[0] = b, a.style[g.j.lg] = c.join("rotate")) : a.style[g.j.lg] = b, g.l.U5 && (a.style.WebkitBackfaceVisibility = "hidden")) : (a.style.left = b.x + "px", a.style.top = b.y + "px") }, Sd: function (a) {
                a.Vi || (a.Vi = a.style.left ?
                    new g.H(parseInt(a.style.left), parseInt(a.style.top)) : new g.H(0, 0)); return a.Vi
                }, rGa: function (a, b) { a = a instanceof Array ? a : [a]; for (var c = 0; c < a.length; c += 1)a[c].style.cssText = b }, Z7: function (a, b) { ";" !== b[b.length - 1] && (b += ";"); return b.toLowerCase() !== a.style.cssText.replace(/ /g, "").toLowerCase() ? (a.style.cssText = b, !0) : !1 }, Wa: function (a, b) { a = a instanceof Array ? a : [a]; for (var c = 0; c < a.length; c += 1)for (var d in b) b.hasOwnProperty(d) && (a[c].style[d] = b[d]); return this }, ZD: function (a) { for (; a.childNodes.length;)a.removeChild(a.childNodes[0]) },
        remove: function (a) { a && a.parentNode && a.parentNode.removeChild(a) }, rotate: function (a, b, c) { var d = g.j.lg; c = c || { x: a.clientWidth / 2, y: a.clientHeight / 2 }; d ? (a.style[d] = "" + (" rotate(" + b + "deg)"), a.style[g.j.at[d] + "-origin"] = c.x + "px " + c.y + "px") : (d = Math.cos(b * Math.PI / 180), b = Math.sin(b * Math.PI / 180), a.style.filter = "progid:DXImageTransform.Microsoft.Matrix()", 0 < a.filters.length && (a = a.filters.item(0), a.Dx = -c.x * d + c.y * b + c.x, a.Dy = -c.x * b - c.y * d + c.y, a.M11 = a.M22 = d, a.M12 = -(a.M21 = b))) }, S3: function (a, b, c) {
            var d = g.j.lg; c = c ||
                { x: a.clientWidth / 2, y: a.clientHeight / 2 }; return d ? g.j.at[d] + ":" + ("" + (" rotate(" + b + "deg)")) + ";" + (g.j.at[d] + "-origin:" + c.x + "px " + c.y + "px") : ""
        }, tm: function (a, b, c) { a.width = b; a.height = c }, getElementsByClassName: function (a, b, c) { b = b || "*"; c = c || document; if (c.getElementsByClassName) return c.getElementsByClassName(a); b = c.getElementsByTagName(b); a = RegExp("(^|\\s)" + a + "(\\s|$)"); c = []; for (var d = 0, e; d < b.length; d++)e = b[d], a.test(e.className) && c.push(e); return c }, fillText: function (a, b) {
            if (a) return void 0 !== a.textContent ?
                a.textContent = b : void 0 !== a.innerText ? a.innerText = b : a.innerHTML = b, a
        }
    };
    (function () { var a = g.j.vU(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]), b; g.extend(g.j, { z2: function () { g.F.h(window, "selectstart", g.F.preventDefault); if (a) { var c = document.documentElement.style; "none" !== c[a] && (b = c[a], c[a] = "none") } }, M2: function () { g.F.G(window, "selectstart", g.F.preventDefault); a && "none" !== b && (document.documentElement.style[a] = b, b = "none") }, Una: function () { g.F.h(window, "dragstart", g.F.preventDefault) }, Doa: function () { g.F.G(window, "dragstart", g.F.preventDefault) } }) })();
    g.j.lg = g.j.vU(["WebkitTransform", "OTransform", "MozTransform", "msTransform", "transform"]); g.j.at = { transform: "transform", WebkitTransform: "-webkit-transform", OTransform: "-o-transform", MozTransform: "-moz-transform", msTransform: "-ms-transform" }; g.j.rF = g.j.vU(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]); g.j.bAa = "webkitTransition" === g.j.rF || "OTransition" === g.j.rF ? g.j.rF + "End" : "transitionend"; g.F = {
        h: function (a, b, c, d) {
            function e(b) { b = b || window.event; b.target = b.target || b.srcElement; return c.call(d || a, b, k) } var f = g.a.vb(a) + "_" + g.a.vb(c) + "_" + g.a.vb(d || a), h = b + f; if (a[h]) return this; var k = b; g.l.IQ && "mousewheel" === b && (b = "DOMMouseScroll"); if (g.l.ns && ("mouseover" === b || "mouseout" === b)) { var l = e; b = "mouseover" === b ? "mouseenter" : "mouseleave"; e = function (a) { l(a) } } if (g.l.X6 && 0 === b.indexOf("touch")) return a[h] = e, this.cla(a, b, e, f); g.l.Hf && "dblclick" === b && this.ala && this.ala(a, e, f); "addEventListener" in a ? a.addEventListener(b,
                e, !1) : "attachEvent" in a ? a.attachEvent("on" + b, e) : a["on" + b] = e; a[h] = e; return this
        }, vj: function (a, b, c, d) { var e = this; this.h(a, b, function h(k) { e.G(a, b, h, d); return c.call(d || a, k || window.event, b) }, d) }, G: function (a, b, c, d) {
            c = g.a.vb(a) + "_" + g.a.vb(c) + "_" + g.a.vb(d || a); d = b + c; var e = a[d]; g.l.IQ && "mousewheel" === b && (b = "DOMMouseScroll"); !g.l.ns || "mouseover" !== b && "mouseout" !== b || (b = "mouseover" === b ? "mouseenter" : "mouseleave"); g.l.X6 && -1 < b.indexOf("touch") ? this.tva(a, b, c) : g.l.Hf && "dblclick" === b && this.pva ? this.pva(a, c) :
                "removeEventListener" in a ? a.removeEventListener(b, e, !1) : "detachEvent" in a && -1 === b.indexOf("touch") ? e && a.detachEvent("on" + b, e) : a["on" + b] = null; a[d] = void 0; return this
        }, yGa: function (a, b) { var c = document.createEvent("MouseEvents"); c.initMouseEvent(a, !0, !0, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null); b.target.dispatchEvent(c) }, hla: function (a) { a.xf = "info"; g.l.ye && g.F.stopPropagation(a) }, stopPropagation: function (a) { a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0; return this },
        axa: function (a) { var b = g.F.hla; g.l.Hf && (g.F.h(a, "touchstart", b, this), g.F.h(a, "touchmove", b, this), g.F.h(a, "touchend", b, this)); g.l.ba || (g.F.h(a, "mousedown", b, this), g.F.h(a, "mouseup", b, this), g.F.h(a, "mousemove", b, this), g.F.h(a, "mousewheel", b, this)); g.l.gT && (g.F.h(a, "pointerdown", b, this), g.F.h(a, "pointerup", b, this), g.F.h(a, "pointermove", b, this)); g.l.W5 && (g.F.h(a, "MSPointerDown", b, this), g.F.h(a, "MSPointerUp", b, this), g.F.h(a, "MSPointerMove", b, this)) }, preventDefault: function (a) {
            a.preventDefault ? a.preventDefault() :
            a.returnValue = !1; return this
        }, stop: function (a) { return g.F.preventDefault(a).stopPropagation(a) }, pwa: function (a) { return a && a.getBoundingClientRect ? (a.WL = a.getBoundingClientRect(), a.sW = [a.clientLeft, a.clientTop], !0) : !1 }, tya: function (a) { a.WL && (a.WL = null, a.sW = null) }, Soa: function (a, b) { var c = b.WL || b.getBoundingClientRect(), d = b.sW || [b.clientLeft, b.clientTop]; return new g.H(a.clientX - c.left - d[0], a.clientY - c.top - d[1]) }, gm: function (a, b) {
            if (b && b.getBoundingClientRect) return this.Soa(a, b); var c = document.body,
                d = document.documentElement, c = new g.H(g.l.Hf ? a.pageX : a.clientX + (c.scrollLeft || d.scrollLeft), g.l.Hf ? a.pageY : a.clientY + (c.scrollTop || d.scrollTop)); return b ? c.Za(g.j.vR(b)) : c
        }, a5: function (a) { return 1 === a.which || 0 === a.button || 1 === a.button }
    }; g.extend(g.F, {
        ZN: [], EZ: !1, cla: function (a, b, c, d) { switch (b) { case "touchstart": return this.fla(a, b, c, d); case "touchend": return this.dla(a, b, c, d); case "touchmove": return this.ela(a, b, c, d) } }, Co: function (a) { if (g.l.gT) return a; switch (a) { case "pointerdown": return "MSPointerDown"; case "pointerup": return "MSPointerUp"; case "pointercancel": return "MSPointerCancel"; case "pointermove": return "MSPointerMove" } }, fla: function (a, b, c, d) {
            function e(a) {
                for (var b = !1, d = 0; d < f.length; d += 1)if (f[d].pointerId === a.pointerId) {
                    b = !0;
                    break
                } b || f.push(a); a.touches = f.slice(); a.changedTouches = [a]; c(a)
            } var f = this.ZN; a["_amap_touchstart" + d] = e; a.addEventListener(this.Co("pointerdown"), e, !1); this.EZ || (a = function (a) { for (var b = 0; b < f.length; b += 1)if (f[b].pointerId === a.pointerId) { f.splice(b, 1); break } }, document.documentElement.addEventListener(this.Co("pointerup"), a, !1), document.documentElement.addEventListener(this.Co("pointercancel"), a, !1), this.EZ = !0); return this
        }, ela: function (a, b, c, d) {
            function e(a) {
                if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE ||
                    0 !== a.buttons) { for (var b = 0; b < f.length; b += 1)if (f[b].pointerId === a.pointerId) { f[b] = a; break } a.touches = f.slice(); a.changedTouches = [a]; c(a) }
            } var f = this.ZN; a["_amap_touchmove" + d] = e; a.addEventListener(this.Co("pointermove"), e, !1); return this
        }, dla: function (a, b, c, d) {
            function e(a) { for (var b = 0; b < f.length; b += 1)if (f[b].pointerId === a.pointerId) { f.splice(b, 1); break } a.touches = f.slice(); a.changedTouches = [a]; c(a) } var f = this.ZN; a["_amap_touchend" + d] = e; a.addEventListener(this.Co("pointerup"), e, !1); a.addEventListener(this.Co("pointercancel"),
                e, !1); return this
        }, tva: function (a, b, c) { c = a["_amap_" + b + c]; switch (b) { case "touchstart": a.removeEventListener(this.Co("pointerdown"), c, !1); break; case "touchmove": a.removeEventListener(this.Co("pointermove"), c, !1); break; case "touchend": a.removeEventListener(this.Co("pointerup"), c, !1), a.removeEventListener(this.Co("pointercancel"), c, !1) }return this }
    }); (function () {
        function a(a) { var b = a.target || a.srcElement; b.BW && f(b.BW); b.BW = e(function () { var c = b.np; if (c && c.mp) for (var d = 0; d < c.mp.length; d += 1)c.mp[d].call(c, a) }) } function b() { var b = this.contentDocument.defaultView; b.np = this.iba; b.addEventListener("resize", a); a.call(b, { target: b }) } var c = document.attachEvent, d = navigator.userAgent.match(/(Trident|Edge)/), e = g.a.Rc, f = g.a.pi; g.extend(g.F, {
            gla: function (e, f) {
                if (!e.mp) if (e.mp = [], c) e.np = e, e.attachEvent("onresize", a); else {
                "static" === window.getComputedStyle(e).position &&
                    (e.style.position = "relative"); var l = e.np = document.createElement("object"); l.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;"); l.iba = e; l.onload = b; l.type = "text/html"; d && e.appendChild(l); l.data = "about:blank"; d || e.appendChild(l)
                } e.mp.push(f)
            }, NFa: function (b, d) {
                b.mp.splice(b.mp.indexOf(d), 1); b.mp.length || (c ? b.detachEvent("onresize", a) : (b.np.contentDocument.defaultView.removeEventListener("resize",
                    a), b.np = !b.removeChild(b.np)))
            }, Kma: function (a) { a.mp = null; if (a.np) { var b = a.np; b.parentNode === a && b.parentNode.removeChild(b); a.np = null } }
        })
    })(); g.rb = {
        dta: g.w.yb + "/maps", Au: g.aa.Au, AS: 0, ez: [], vu: {}, Sg: function (a, b) { function c() { d += 1; d === e.length && b && b() } a.length || b(); for (var d = 0, e = [], f = 0; f < a.length; f += 1) { var h = this.Au[a[f]]; if (h) for (var k = 0; k < h.length; k += 1)e.push(h[k]); e.push(a[f]) } for (f = 0; f < e.length; f += 1)this.EQ(e[f], c) }, lD: function (a) { for (var b = 0; b < a.length; b += 1)if (1 !== this.uC(a[b]).status) return !1; return !0 }, EQ: function (a, b) {
            var c = this.uC(a); if (1 === c.status) b && b(); else {
                b && c.Rx.push(b); try {
                    if (g.l.xs && window.localStorage) {
                        var d = window.localStorage["_AMap_" +
                            a]; d && (d = JSON.parse(d), d.version === g.w.Bj ? (window._jsload_(a, d.script, !0), d.css && window._cssload_(a, d.css, !0)) : window.localStorage.removeItem("_AMap_" + a))
                    }
                } catch (e) { } if (0 === c.status) { this.Yua(a); var f = this; f.AS || (f.AS = 1, window.setTimeout(function () { f.AS = 0; var a = f.dta + "/modules?v=" + g.w.yr + "&key=" + g.w.key + "&m=" + f.ez.join(",") + "&vrs=" + g.w.Bj; g.rb.At(f.ez.join(",")); f.ez = []; c.BK = f.xsa(a) }, 1)); c.status = -1 }
            }
        }, At: function (a) {
            a = g.w.Ud + "/v3/log/init?" + ["s=rsv3&product=JsModule&key=" + g.w.key, "m=" + a].join("&");
            new g.fb.wb(a, { callback: "callback" })
        }, load: function (a, b) { var c = this.Au[a]; if (c) { for (var d = [], e = 0; e < c.length; e += 1)d.push(c[e]); d.push(a); for (var f = 0, c = function () { f += 1; f === d.length && b && b() }, e = 0; e < d.length; e += 1)this.EQ(d[e], c) } else this.EQ(a, b) }, Yua: function (a) { for (var b = 0; b < this.ez.length; b += 1)if (this.ez[b] === a) return; this.ez.push(a) }, Dn: function (a, b) { var c = this.uC(a); try { eval(b) } catch (d) { return } c.status = 1; for (var e = 0, f = c.Rx.length; e < f; e += 1)c.Rx[e](); c.Rx = [] }, nd: function (a, b) {
            var c = this; c.timeout = setTimeout(function () {
                1 !==
                c.vu[a].status ? (c.remove(a), c.load(a, b)) : clearTimeout(c.timeout)
            }, 5E3)
        }, uC: function (a) { this.vu[a] || (this.vu[a] = {}, this.vu[a].status = 0, this.vu[a].Rx = []); return this.vu[a] }, remove: function (a) { this.vu[a] = null }, xsa: function (a) { g.w.mode && (a += "&mode=" + g.w.mode); var b = document.createElement("script"); b.charset = "utf-8"; a && 0 === a.indexOf(g.w.yb) && (b.crossOrigin = "Anonymous"); b.src = a; document.body.appendChild(b); return b }
    };
    window._jsload_ = function (a, b, c) { var d = g.rb.uC(a); d.BK && 0 <= g.a.indexOf(document.body.childNodes, d.BK) && document.body.removeChild(d.BK); d.BK = null; try { if (!c && window.localStorage && b && "" !== b && g.l.xs) { var e = window.localStorage["_AMap_" + a], e = e || "{}", e = JSON.parse(e); e.version !== g.w.Bj || e.script ? window.localStorage.setItem("_AMap_" + a, JSON.stringify({ version: g.w.Bj, script: b })) : window.localStorage.setItem("_AMap_" + a, JSON.stringify({ version: g.w.Bj, script: b, css: e.css })) } } catch (f) { } g.rb.Dn(a, b) };
    window._cssload_ = function (a, b, c) {
        try { !c && window.localStorage && b && "" !== b && g.l.xs && window.localStorage.setItem("_AMap_" + a, JSON.stringify({ css: b, version: g.w.Bj })) } catch (d) { } var e = document.createElement("style"); e.type = "text/css"; -1 === g.w.yb.indexOf("webapi.amap.com") && (b = b.replace(/webapi.amap.com/gi, g.w.yb.split("://")[1])); "https" === g.w.Fc && (b = b.replace(/http:/gi, "https:")); e.styleSheet ? (a = function () { try { e.styleSheet.cssText = b } catch (a) { } }, e.styleSheet.disabled ? setTimeout(a, 10) : a()) : e.appendChild(document.createTextNode(b));
        a = document.head || document.getElementsByTagName("head")[0]; 2 > a.childNodes.length ? a.appendChild(e) : a.insertBefore(e, a.childNodes[1])
    }; (function (a) {
        var b = g.l; if (!g.indexedDB && b.Gi) {
            var c = a.indexedDB || a.webkitIndexedDB || a.msIndexedDB || a.mozIndexedDB, d = a.IDBKeyRange || a.jHa || a.SEa || a.REa; if (c) {
                var e = g.a, f = null; a = "amap-jsapi" + (a.Cza ? "-debug" : ""); var h = g.extend({}, g.va), k; try {
                k = c.open(a), k.onsuccess = function () { f = this.result; h.q("dbReady", { status: "success" }) }, k.onerror = function () { h.q("dbReady", { status: "error" }) }, k.onblocked = function () { h.q("dbReady", { status: "blocked" }) }, k.onupgradeneeded = function (a) {
                    a.currentTarget.result.createObjectStore("tile",
                        { keyPath: "tileKey" })
                }
                } catch (l) { b.Gi = !1 } finally { if (!b.Gi) return } var b = function (a) { return function () { try { return a.apply(this, arguments) } catch (b) { var c = arguments[arguments.length - 1]; "function" === typeof c && setTimeout(function () { c({ code: 4, nI: b }) }, 1) } } }, m = b(function (a, b) { return null === f ? (setTimeout(function () { b && b({ code: 3 }) }, 1), null) : f.transaction("tile", a).objectStore("tile") }); g.indexedDB = {
                    PB: function (a, b) {
                        f ? "function" === typeof a && a() : h.h("dbReady", function (c) {
                            "success" === c.status ? "function" === typeof a &&
                                a() : "function" === typeof b && b({ code: 3, status: status })
                        })
                    }, count: b(function (a) { var b = this, c = arguments; this.PB(function () { b.At.apply(b, c) }, a) }), At: b(function (a) { var b = m("readonly", a).count(); b.onsuccess = function () { a(null, b.result) }; b.onerror = function () { a({ code: 7 }) } }), get: b(function (a, b, c) { var d = this, e = setTimeout(function () { e && (e = null, c && c({ code: 7 })) }, b.timeout || 1E3); this.PB(function () { d.Nda.call(d, a, function (a, b) { e && (clearTimeout(e), e = null, c(a, b)) }) }, c) }), Nda: b(function (a, b) {
                        var c = m("readonly", b); if (e.isArray(a)) {
                            var d,
                            f; (function () { function e(b) { var f = c.get(a[b]); f.onsuccess = function (a) { a.target.result && (d[b] = a.target.result); h() }; f.onerror = h } function h() { f++; f === a.length && b(null, d) } d = []; for (var k = f = 0, l = a.length; k < l; k++)e(k) })()
                        } else { var h = c.get(a); h.onsuccess = function (a) { b && b(null, a.target.result) }; h.onerror = function () { b && b({ code: 1 }) } }
                    }), add: b(function (a, b) { var c = this, d = arguments; this.PB(function () { c.mba.apply(c, d) }, b) }), mba: b(function (a, b) {
                        function c() { 0 === --f && b(null) } e.isArray(a) || (a = [a]); var d = a.length, f =
                            d, h = 0, k = Math.ceil(d / 5), l = setInterval(function () { if (h++ < k) { var e = 5 * h; e > d && (e = d); for (var f = m("readwrite", b), s = 5 * (h - 1); s < e; s++) { var D = f.put(a[s]); D.onsuccess = D.onerror = c } } else clearInterval(l) }, 32)
                    }), remove: b(function (a, b) { var c = this, d = arguments; this.PB(function () { c.Aja.apply(c, d) }, b) }), Aja: b(function (a, b) {
                        var c = m("readwrite", b); e.isArray(a) || (a = [a]); a = a.sort(); c.openCursor(d.bound(a[0], a[a.length - 1])).onsuccess = function (c) {
                            if (c = c.target.result) {
                                if (e.ka(c.value.tileKey, a)) c["delete"](); for (var d = -1,
                                    f = 0, h = a.length; f < h; f++)if (a[f] > c.value.tileKey) { d = f; break } c["continue"](a[d])
                            } else b && b(null)
                        }
                    }), clear: b(function (a) { var b = this, c = arguments; this.PB(function () { b.LF.apply(b, c) }, a) }), LF: b(function (a) { var b = m("readwrite", a).clear(); b.onsuccess = function () { a && a(null) }; b.onerror = function () { a && a({ code: 2 }) } })
                }
            } else b.Gi = !1
        }
    })(window); (function () {
        function a(a) { u.data.keys = u.data.keys.filter(function (b) { return !r.ka(a, b) }).concat(a) } function b(a) { var b = g.w.Bj + "|" + a.Hi.replace(/\//g, ",") + "|" + (a.Cf ? "w" : "v") + "|", c; c = a.ja; var d = a.pe; c = [c ? 1 : 0, q.ba ? 1 : 0, d ? 1 : 0].join(); return b + c + "|" + m(a.url) } function c() { u.data.keys.length >= u.AL && d() } function d() { var a = u.data.keys.length, b = Math.floor(a / 2); a > u.AL && (b = Math.floor(a - u.AL / 2)); a = u.data.keys.slice(0, b); u.data.keys = u.data.keys.slice(b + 1); s.remove(a, function (a) { a && 3 === a.code && (q.Gi = !1) }) } function e() {
            var a =
                0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : r.Fs; k(); w.setItem(u.key, u.data, !0); f(a)
        } function f(a) { q.Gi && s && s.clear(function (b) { b && 3 === b.code && (q.Gi = !1); a() }) } function h() { k(); var a = w.getItem(u.key, !0); a && (a.dL === u.data.dL && a.l1 === u.data.l1 ? u.data = a : e()) } function k() { u.data = { dL: q.If, l1: g.w.Bj, keys: [], zf: {}, nn: {} }; u.ct = {} } function l(a) { a && (u.data.dL = a, q.If = a) } function m(a) { var b = "limg"; /flds=([^&]+)/.test(a) && (b = RegExp.$1); return b } function n(a) {
            if ("object" === typeof a && null !== a) {
                var b = [];
                if (r.isArray(a)) if (Object.keys(a).length == a.length) b = a.map(function (a) { return n(a) }); else { b.push("__arrayObject"); var c = {}, d; for (d in a) (0 > parseInt(d) || isNaN(parseInt(d))) && a.hasOwnProperty(d) && (c[d] = n(a[d])); b.push(c); b.push(a.map(function (a) { return n(a) })) } else if (r.bk(a, "Float32Array")) b.push("__Float32Array"), b.push(Array.prototype.slice.call(a)); else if (r.bk(a, "Uint16Array")) b.push("__Uint16Array"), b.push(Array.prototype.slice.call(a)); else for (d in b = {}, a) a.hasOwnProperty(d) && (b[d] = n(a[d]));
                return b
            } return a
        } function p(a) { if ("object" === typeof a && null !== a) { var b = {}; if (r.isArray(a)) if ("__Float32Array" === a[0]) b = new Float32Array(a[1]); else if ("__Uint16Array" === a[0]) b = new Uint16Array(a[1]); else if ("__arrayObject" === a[0]) { b = p(a[2]); a = a[1]; for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]) } else b = a.map(function (a) { return p(a) }); else for (c in a) a.hasOwnProperty(c) && (b[c] = p(a[c])); return b } return a } var q = g.l, r = g.a; if (!g.Gj && q.Gi) {
            var s = g.indexedDB, u = { AL: 1E3, key: "_AMap_data.tileKeys" }, v = [], w = {
                getItem: function (a,
                    b) { var c = localStorage.getItem(a); if (c && b) { var d; try { d = JSON.parse(c) } catch (e) { d = null } c = d } return c }, setItem: function (a, b, c) { var d = b; c && (d = JSON.stringify(b), 1.5 < d.length / 1024 / 1024 && Object.keys(b.nn).length && (b.nn = {}, d = JSON.stringify(b))); try { localStorage.setItem(a, d) } catch (f) { e() } }
            }; g.Gj = {
                clear: e, get: function (c, d) {
                    function f(a) {
                        var b = { NR: l, T5: G, NEa: w, zf: u.data.zf }; a && B.length && (/\|limg/.test(B[0]) ? b.z5 = a.map(function (a) { return JSON.parse(a.data) }).filter(function (a) { return a && a.key }) : b.Kc = h(a)); d && d(null,
                            b); w.length && (l = [], G = [])
                    } function h(a) { var b = []; m(c.url).split(",").forEach(function (c) { a.forEach(function (a) { if (a = JSON.parse(a.data[c])) { var d = a.yg; a.yg = new g.Yq(d.z, d.x, d.y); a.yg.S = d.S; b.push(a) } }) }); return b } var k = "FS" === c.type; if (!q.xs || !(k || q.Gi && 0 !== u.data.keys.length)) return d({ code: 1 }); var l = [], w = [], B = [], G = [], H = []; c.vxa.forEach(function (a) {
                        var d = !1, e = b({ Hi: a.key, url: c.url, Cf: c.Cf, ja: c.o.ja, pe: c.pe }); k && (v.push(e), u.data.nn[e] && (l.push(a), B.push(e), H.push({ data: p(u.data.nn[e]), tileKey: e }),
                            d = !0)); d || (q.Gi && r.ka(u.data.keys, e) ? (B.push(e), w.push(a)) : G.push(a))
                    }); if (k && 0 === w.length || 0 === B.length) return f(H); k && H.length && H.forEach(function (a) { a = r.indexOf(B, a.tileKey); B.splice(a, 1) }); s.get(B, { timeout: c.timeout || 1E3 }, function (b, c) { if (b || c.length !== B.length) b && 3 === b.code ? q.Gi = !1 : e(), G = w, w = [], f(null); else { if (k) for (var d = c.length - 1; 0 <= d; d--) { var h = c[d]; h && h.data ? u.data.nn[h.tileKey] = n(h.data) : G.push(w.splice(d, 1)[0]) } l = w; w = []; f(c); a(B) } }); (G.length || w.length) && f(H)
                }, ew: function (a) {
                    a.Eb.forEach(function (c) {
                        c =
                        b({ Hi: c.key, url: a.url, Cf: a.Cf, ja: a.o.ja, pe: a.pe }); u.ct[c] && delete u.ct[c]
                    })
                }, set: function (a, c) { a.If && a.If !== u.data.dL && (l(a.If), e(), c && c({ code: 2 })); !a.pd && a.Kc ? a.Kc.forEach(function (c) { var d = b({ Hi: c.Hi, url: a.url, Cf: a.Cf, ja: a.o.ja, pe: a.pe }); if (q.Gi || r.ka(v, d)) { var e = u.ct[d] || {}; e[c.vd] = c.Oa; u.ct[d] = e } }) : a.data && a.data.forEach(function (c) { var d = b({ Hi: c.key, url: a.url, Cf: a.Cf, ja: a.o.ja, pe: a.pe }); if (q.Gi || r.ka(v, d)) u.ct[d] = c.data }); u.data.zf = { "x-vd-v": a["x-vd-v"], tv: a.tv, bgc: a.bgc } }, flush: function () {
                    var a =
                        !0; return function () { var b = this; if (a) { if (Object.keys(u.data.nn).length) for (var c in u.data.nn) u.data.nn.hasOwnProperty(c) && !r.ka(v, c) && delete u.data.nn[c]; q.Gi ? s.count(function (a, c) { a || (c !== u.data.keys.length ? (u.data.keys.length && (u.data.keys = []), f(function () { b.aG(!0) })) : b.aG(!0)) }) : b.aG(!0); a = !1 } else b.aG() }
                }(), aG: function () {
                    var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : !1, b = {}, d = [], f = Object.keys(u.ct), h = []; f.length ? (f.forEach(function (a) {
                        var c = u.ct[a]; a.split("|").pop().split(",").every(function (a) {
                            return "limg" ===
                                a ? !0 : c && void 0 !== c[a]
                        }) ? (r.ka(u.data.keys, a) || (h.push(a), d.push({ tileKey: a, data: c })), r.ka(v, a) && void 0 === u.data.nn[a] && (u.data.nn[a] = c)) : b[a] = c
                    }), d.length && (q.Gi ? s.add(d, function (a) { a ? 3 !== a.code ? e() : q.Gi = !1 : (u.data.keys = u.data.keys.concat(h), w.setItem(u.key, u.data, !0), c()) }) : w.setItem(u.key, u.data, !0)), u.ct = b) : (a && w.setItem(u.key, u.data, !0), c())
                }
            }; h()
        }
    })(); g.U = g.aa.extend({
        r: function (a, b, c) { var d = parseFloat(b), e = parseFloat(a); if (isNaN(a) || isNaN(b)) throw "Invalid Object: LngLat(" + e + ", " + d + ")"; !0 !== c && (d = Math.max(Math.min(d, 90), -90), e = (e + 180) % 360 + (-180 > e || 180 === e ? 180 : -180)); this.P = d; this.Q = e }, eR: function () { return g.a.hc(this.Q, 6) }, bR: function () { return g.a.hc(this.P, 6) }, add: function (a, b) { return new g.U(this.Q + a.Q, this.P + a.P, b) }, Za: function (a, b) { return new g.U(this.Q - a.Q, this.P - a.P, b) }, gd: function (a, b) { return new g.U(this.Q / a, this.P / a, b) }, Kd: function (a,
            b) { return new g.U(this.Q * a, this.P * a, b) }, we: function (a) { return g.Zq.distance(this, a) }, offset: function (a, b) { if (isNaN(a) || isNaN(b)) return !1; var c = 2 * Math.asin(Math.sin(Math.round(a) / 12756274) / Math.cos(this.P * Math.PI / 180)), c = this.Q + 180 * c / Math.PI, d = 2 * Math.asin(Math.round(b) / 12756274); return new g.U(c, this.P + 180 * d / Math.PI) }, cb: function (a) { a = g.a.Ia(a); return a instanceof g.U ? 1E-9 >= Math.max(Math.abs(this.P - a.P), Math.abs(this.Q - a.Q)) : !1 }, toString: function () { return g.a.hc(this.Q, 6) + "," + g.a.hc(this.P, 6) }, rl: function () {
                return [this.Q,
                this.P]
            }, lb: function () { var a = this.controlPoints, b = new g.U(this.Q, this.P); a && (b.controlPoints = [].concat(a)); return b }
    });
    g.U.Ppa = function (a, b, c) {
        c = c + 1 || Math.round(Math.abs(a.Q - b.Q)); if (!c || 0.001 > Math.abs(a.Q - b.Q)) return []; var d = [], e = Math.PI, f = g.Hm.yu, h = g.Hm.cva, k = Math.asin, l = Math.sqrt, m = Math.sin, n = Math.pow, p = Math.cos, q = Math.atan2, r = a.P * f; a = a.Q * f; var s = b.P * f; b = b.Q * f; for (var k = 2 * k(l(n(m((r - s) / 2), 2) + p(r) * p(s) * n(m((a - b) / 2), 2))), u, v, w, t, f = 1; f < c; f += 1)u = 1 / c * f, v = m((1 - u) * k) / m(k), w = m(u * k) / m(k), u = v * p(r) * p(a) + w * p(s) * p(b), t = v * p(r) * m(a) + w * p(s) * m(b), v = v * m(r) + w * m(s), v = q(v, l(n(u, 2) + n(t, 2))), u = q(t, u), b > a ? (u < a && (u += 2 * e), u > b && (u -= 2 * e)) :
            (u > a && (u -= 2 * e), u < b && (u += 2 * e)), d.push(new g.U(u * h, v * h, !0)); return d
    }; g.U.Ob({ eR: "getLng", bR: "getLat", add: "add", Za: "subtract", gd: "divideBy", Kd: "multiplyBy", we: "distance", offset: "offset", cb: "equals", toString: "toString" }); g.re = g.aa.extend({
        r: function () {
        this.CLASS_NAME = "AMap.Bounds"; var a = null, b = null; if (1 === arguments.length && arguments[0] instanceof Array) a = new g.U(arguments[0][0], arguments[0][1], !0), b = new g.U(arguments[0][2], arguments[0][3], !0); else if (2 === arguments.length) a = g.a.Ia(arguments[0]), b = g.a.Ia(arguments[1]); else if (4 === arguments.length) a = new g.U(arguments[0], arguments[1]), b = new g.U(arguments[2], arguments[3]); else if (0 === arguments.length) a = new g.U(-180, -90), b = new g.U(180, 90); else throw "Invalid Object: Bounds(" +
            arguments.join(",") + ")"; this.sc = a; this.kc = b
        }, Tu: function () { return this.sc }, uy: function () { return this.kc }, Wj: function () { return new g.U(this.sc.Q, this.kc.P, !0) }, Eo: function () { return new g.U(this.kc.Q, this.sc.P, !0) }, contains: function (a) { var b = this.sc, c = this.kc, d; if (a instanceof g.gp) return this.CU().contains(a); a instanceof g.re ? (d = a.sc, a = a.kc) : d = a = g.a.Ia(a); var e = d.Q, f = b.Q, h = a.Q, k = c.Q; f > k && (k += 360, 0 > e && (e += 360), 0 > h && (h += 360)); return d.P >= b.P && a.P <= c.P && e >= f && h <= k }, Og: function (a) {
            var b = this.sc, c = this.kc,
            d = a.sc; a = a.kc; var e = a.Q >= b.Q && d.Q <= c.Q; return a.P >= b.P && d.P <= c.P && e
        }, ti: function () { return new g.U(this.sc.Q > this.kc.Q ? (this.sc.Q + this.kc.Q + 360) / 2 % 360 : (this.sc.Q + this.kc.Q) / 2, (this.sc.P + this.kc.P) / 2) }, extend: function (a) { this.sc.Q = Math.min(this.sc.Q, a.Q); this.sc.P = Math.min(this.sc.P, a.P); this.kc.Q = Math.max(this.kc.Q, a.Q); this.kc.P = Math.max(this.kc.P, a.P); return this }, sya: function (a) { return this.extend(a.sc).extend(a.kc) }, toString: function () { return this.sc.toString() + ";" + this.kc.toString() }, lb: function () {
            return new g.re(this.sc.lb(),
                this.kc.lb())
        }, cb: function (a) { return a instanceof g.re ? this.sc.cb(a.sc) && this.kc.cb(a.kc) : !1 }, qj: function () { return Math.abs(this.kc.Q - this.sc.Q) }, oj: function () { return Math.abs(this.sc.P - this.kc.P) }, CU: function (a) { var b = [this.Tu(), this.Eo(), this.uy(), this.Wj()]; a && b.push(this.Tu()); return new g.gp(b) }, zxa: function (a) { return new g.Lf(a.lc(this.Wj(), 20), a.lc(this.Eo(), 20)) }, YQ: function (a, b) { return this.CU(b).YQ(a) }, VQ: function (a) { return this.zxa(a).ti() }
    });
    g.re.Ob({ Tu: "getSouthWest", uy: "getNorthEast", Wj: "getNorthWest", Eo: "getSouthEast", contains: "contains", Og: "intersects", ti: "getCenter", extend: "extend" }); g.H = g.aa.extend({
        r: function (a, b, c) { if (isNaN(a) || isNaN(b)) throw "Invalid Object: Pixel(" + a + ", " + b + ")"; this.x = c ? Math.round(a) : Number(a); this.y = c ? Math.round(b) : Number(b) }, kf: function () { return this.x }, je: function () { return this.y }, add: function (a, b) { return new g.H(this.x + a.x, this.y + a.y, b) }, Za: function (a, b) { return new g.H(this.x - a.x, this.y - a.y, b) }, gd: function (a, b) { return new g.H(this.x / a, this.y / a, b) }, Kd: function (a, b) { return new g.H(this.x * a, this.y * a, b) }, we: function (a) {
            var b = a.x - this.x; a = a.y - this.y; return Math.sqrt(b *
                b + a * a)
        }, floor: function () { return new g.H(Math.floor(this.x), Math.floor(this.y)) }, round: function () { return new g.H(this.x, this.y, !0) }, cb: function (a) { return a instanceof g.H && this.x === a.x && this.y === a.y }, lb: function (a) { return new g.H(this.x, this.y, a) }, toString: function () { return this.x + "," + this.y }, rl: function () { return [this.x, this.y] }, length: function () { return Math.sqrt(this.x * this.x + this.y * this.y) }, direction: function () {
            var a = this.x, b = this.y; if (0 === a && 0 === b) return null; if (0 === a) return 0 < b ? 90 : 270; var c = 180 *
                Math.atan(b / a) / Math.PI; return 0 > a && 0 < b ? c + 180 : 0 > a && 0 > b ? c + 180 : 0 < a && 0 > b ? c + 360 : c
        }, uu: function (a) { var b = this.length(), c = a.length(); return b && c ? 180 * Math.acos((this.x * a.x + this.y * a.y) / c / b) / Math.PI : null }, Ana: function (a) { var b = this.length(), c = a.length(); return b && c ? (this.x * a.x + this.y * a.y) / c / b : null }, toFixed: function (a) { this.x = g.a.hc(this.x, a); this.y = g.a.hc(this.y, a); return this }
    }); g.H.Ob({ kf: "getX", je: "getY", add: "add", Za: "subtract", gd: "divideBy", Kd: "multiplyBy", we: "distance", cb: "equals", toString: "toString" }); g.xd = g.aa.extend({
        r: function (a, b, c) { if (isNaN(a) || isNaN(b)) throw "Invalid Object: Size(" + a + ", " + b + ")"; this.width = c ? Math.round(a) : Number(a); this.height = c ? Math.round(b) : Number(b) }, lb: function () { return new g.xd(this.width, this.height) }, qj: function () { return this.width }, oj: function () { return this.height }, uE: function () { return new g.H(this.qj(), this.oj()) }, contains: function (a) { return Math.abs(a.x) <= Math.abs(this.width) && Math.abs(a.y) <= Math.abs(this.height) }, cb: function (a) {
            return a instanceof g.xd && this.width ===
                a.width && this.height === a.height
        }, toString: function () { return this.qj() + "," + this.oj() }
    }); g.xd.Ob({ qj: "getWidth", oj: "getHeight", toString: "toString" }); g.gp = g.aa.extend({
        r: function (a) { this.CLASS_NAME = "AMap.ArrayBounds"; a = g.a.Ia(a); this.path = []; for (var b = 0; b < a.length; b += 1)this.path.push([a[b].Q, a[b].P]); this.bounds = this.Xd = a }, contains: function (a, b) { if (a instanceof g.gp) return g.Zq.isRingInRing(a.path, this.path); a instanceof g.H ? a = [a.x, a.y] : a instanceof g.U && (a = [a.Q, a.P]); return g.wd.Qd(a, this.path, b) }, toBounds: function () { for (var a = new g.re(180, 90, -180, -90), b = this.Xd.length - 1; 0 <= b; b -= 1)a.extend(this.Xd[b]); return a }, YQ: function (a) {
            for (var b = [], c = 0; c <
                this.path.length; c += 1)b[c] = a.lc(this.path[c], 20); return b
        }, VQ: function (a) { return this.toBounds().VQ(a) }, ti: function () { return this.toBounds().ti() }
    }); g.gp.Ob({ contains: "contains", ti: "getCenter" }); g.n$ = g.gp.extend({ r: function (a) { this.CLASS_NAME = "AMap.CoordsBounds"; this.path = a; if (a[0] instanceof g.H) { this.path = []; for (var b = 0; b < a.length; b += 1)this.path.push([a[b].x, a[b].y]) } this.bounds = this.Xd = a } }); g.Lf = g.aa.extend({
        r: function () { if (2 === arguments.length) this.Zb = arguments[0], this.Jd = arguments[1]; else if (1 === arguments.length && arguments[0] instanceof Array || 4 === arguments.length) { var a = arguments[0] instanceof Array ? arguments[0] : arguments; this.Zb = new g.H(a[0], a[1]); this.Jd = new g.H(a[2], a[3]) } else throw "Invalid Object: PixelBounds(" + arguments.join(",") + ")"; }, ti: function (a) { return new g.H((this.Zb.x + this.Jd.x) / 2, (this.Zb.y + this.Jd.y) / 2, a) }, contains: function (a) {
            var b; a instanceof g.Lf ? (b = a.Zb, a = a.Jd) :
                b = a; return b.x > this.Zb.x && a.x < this.Jd.x && b.y > this.Zb.y && a.y < this.Jd.y
        }, qj: function () { return this.Jd.x - this.Zb.x }, oj: function () { return this.Jd.y - this.Zb.y }, Og: function (a, b) { b || 0 === b || (b = 20); var c = this.Zb, d = this.Jd, e = a.Zb, f = a.Jd, h = f.y >= c.y - b && e.y <= d.y + b; return f.x >= c.x - b && e.x <= d.x + b && h }, toString: function () { return this.Zb + ";" + this.Jd }, lb: function () { return new g.Lf(this.Zb.lb(), this.Jd.lb()) }
    }); g.I = {}; g.I.uP = function (a) { for (var b = [Infinity, Infinity, -Infinity, -Infinity], c = 0, d = a.length; c < d; c += 1)g.I.oI(b, a[c]); return b }; g.I.w1 = function (a, b, c) { var d = Math.min.apply(null, a); a = Math.max.apply(null, a); var e = Math.min.apply(null, b); b = Math.max.apply(null, b); return g.I.wna(d, a, e, b, c) }; g.I.buffer = function (a, b) { a[0] -= b; a[1] -= b; a[2] += b; a[3] += b }; g.I.lb = function (a) { return a.slice() }; g.I.Qd = function (a, b) { return a[0] <= b[0] && b[0] <= a[2] && a[1] <= b[1] && b[1] <= a[3] };
    g.I.k2 = function (a, b) { return a[0] <= b[0] && b[2] <= a[2] && a[1] <= b[1] && b[3] <= a[3] }; g.I.kCa = function () { return [Infinity, Infinity, -Infinity, -Infinity] }; g.I.wna = function (a, b, c, d, e) { return "undefined" !== typeof e ? (e[0] = a, e[2] = b, e[1] = c, e[3] = d, e) : [a, c, b, d] }; g.I.empty = function (a) { a[0] = a[1] = Infinity; a[2] = a[3] = -Infinity; return a }; g.I.cb = function (a, b) { return a[0] === b[0] && a[2] === b[2] && a[1] === b[1] && a[3] === b[3] };
    g.I.extend = function (a, b) { b[0] < a[0] && (a[0] = b[0]); b[2] > a[2] && (a[2] = b[2]); b[1] < a[1] && (a[1] = b[1]); b[3] > a[3] && (a[3] = b[3]) }; g.I.oI = function (a, b) { b[0] < a[0] && (a[0] = b[0]); b[0] > a[2] && (a[2] = b[0]); b[1] < a[1] && (a[1] = b[1]); b[1] > a[3] && (a[3] = b[1]) }; g.I.eDa = function (a) { return [a[0], a[1]] }; g.I.fDa = function (a) { return [a[2], a[1]] }; g.I.ti = function (a) { return [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2] };
    g.I.rDa = function (a, b, c, d, e) { var f = b * d[0] / 2; d = b * d[1] / 2; b = Math.cos(c); c = Math.sin(c); f = [-f, -f, f, f]; d = [-d, d, -d, d]; var h, k, l; for (h = 0; 4 > h; h += 1)k = f[h], l = d[h], f[h] = a[0] + k * b - l * c, d[h] = a[1] + k * c + l * b; return g.I.w1(f, d, e) }; g.I.oj = function (a) { return a[3] - a[1] }; g.I.EDa = function (a) { return [a[2] - a[0], a[3] - a[1]] }; g.I.IDa = function (a) { return [a[0], a[3]] }; g.I.JDa = function (a) { return [a[2], a[3]] }; g.I.qj = function (a) { return a[2] - a[0] }; g.I.Og = function (a, b) { return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1] };
    g.I.qh = function (a) { return a[2] < a[0] || a[3] < a[1] }; g.I.normalize = function (a, b) { return [(b[0] - a[0]) / (a[2] - a[0]), (b[1] - a[1]) / (a[3] - a[1])] }; g.I.lGa = function (a, b) { var c = (a[2] - a[0]) / 2 * (b - 1), d = (a[3] - a[1]) / 2 * (b - 1); a[0] -= c; a[2] += c; a[1] -= d; a[3] += d }; g.I.touches = function (a, b) { return g.I.Og(a, b) && (a[0] === b[2] || a[2] === b[0] || a[1] === b[3] || a[3] === b[1]) }; g.I.transform = function (a, b, c) { a = [a[0], a[1], a[0], a[3], a[2], a[1], a[2], a[3]]; b(a, a, 2); return g.I.w1([a[0], a[2], a[4], a[6]], [a[1], a[3], a[5], a[7]], c) }; g.re.zb({ r: function () { var a = g.re.prototype.r; return function () { a.apply(this, arguments); this.southwest = this.sc; this.northeast = this.kc } }(), extend: function () { var a = g.re.prototype.extend; return function () { a.apply(this, arguments); this.sc.lng = this.sc.Q; this.sc.lat = this.sc.P; this.kc.lng = this.kc.Q; this.kc.lat = this.kc.P; return this } }() }); g.U.zb({ r: function () { var a = g.U.prototype.r; return function () { a.apply(this, arguments); this.lng = parseFloat(this.Q.toFixed(6)); this.lat = parseFloat(this.P.toFixed(6)) } }() }); g.sF = g.aa.extend({ r: function (a, b, c, d) { this.EW = a; this.UW = b; this.hX = c; this.DX = d }, transform: function (a, b) { return this.N0(a.lb(), b) }, N0: function (a, b) { b = b || 1; a.x = b * (this.EW * a.x + this.UW); a.y = b * (this.hX * a.y + this.DX); return a }, uya: function (a, b) { b = b || 1; return new g.H((a.x / b - this.UW) / this.EW, (a.y / b - this.DX) / this.hX) } }); g.lp = g.aa.extend({ r: function (a) { this.zL = a.MAX_LATITUDE || 85.0511287798; a.project && a.unproject && (this.lc = a.project, this.Wh = a.unproject) } }); g.lp.QV = { lc: function (a) { return new g.H(a.Q, a.P) }, Wh: function (a, b) { return new g.U(a.x, a.y, b) } };
    g.lp.xaa = new g.lp({ MAX_LATITUDE: 85.0511287798, project: function (a) { var b = Math.PI / 180, c = this.zL, c = Math.max(Math.min(c, a.P), -c); a = a.Q * b; b = Math.log(Math.tan(Math.PI / 4 + c * b / 2)); return new g.H(a, b, !1) }, unproject: function (a, b) { var c = 180 / Math.PI; return new g.U(a.x * c, (2 * Math.atan(Math.exp(a.y)) - Math.PI / 2) * c, b) } });
    g.lp.VV = {
        zL: 85.0840591556, LL: 6356752.3142, KL: 6378137, lc: function (a) { var b = Math.PI / 180, c = this.zL, d = Math.max(Math.min(c, a.P), -c), e = this.KL, c = this.LL; a = a.Q * b * e; b *= d; e = c / e; e = Math.sqrt(1 - e * e); d = e * Math.sin(b); d = Math.pow((1 - d) / (1 + d), 0.5 * e); b = Math.tan(0.5 * (0.5 * Math.PI - b)) / d; b = -c * Math.log(b); return new g.H(a, b) }, Wh: function (a, b) {
            for (var c = 180 / Math.PI, d = this.KL, e = this.LL, f = a.x * c / d, d = e / d, d = Math.sqrt(1 - d * d), e = Math.exp(-a.y / e), h = Math.PI / 2 - 2 * Math.atan(e), k = 15, l = 0.1; 1E-7 < Math.abs(l) && (k -= 1, 0 < k);)l = d * Math.sin(h),
                l = Math.PI / 2 - 2 * Math.atan(e * Math.pow((1 - l) / (1 + l), 0.5 * d)) - h, h += l; return new g.U(f, h * c, b)
        }
    }; g.Zh = {}; g.Zh.XE = { qD: function (a, b) { var c = this.Df.lc(a), d = this.scale(b); return this.zE.N0(c, d) }, RD: function (a, b, c) { b = this.scale(b); a = this.zE.uya(a, b); return this.Df.Wh(a, c) }, lc: function (a) { return this.Df.lc(a) }, scale: function (a) { return 256 << a }, Xp: function (a) { return 12756274 * Math.PI / (256 * Math.pow(2, a)) } }; g.Zh.pL = g.extend({}, g.Zh.XE, { code: "EPSG:3857", Df: g.lp.xaa, zE: new g.sF(0.5 / Math.PI, 0.5, -0.5 / Math.PI, 0.5), lc: function (a) { return this.Df.lc(a).Kd(6378137) } });
    g.Zh.AV = g.extend({}, g.Zh.XE, { code: "EPSG:3395", Df: g.lp.VV, zE: function () { var a = g.lp.VV; return new g.sF(0.5 / (Math.PI * a.KL), 0.5, -0.5 / (Math.PI * a.LL), 0.5) }() }); g.Zh.BV = g.extend({}, g.Zh.XE, { code: "EPSG:4326", Df: g.lp.QV, zE: new g.sF(1 / 360, 0.5, -1 / 360, 0.25) }); g.Zh.Yza = g.extend({}, g.Zh.XE, { Df: g.lp.QV, zE: new g.sF(1, 0, 1, 0) }); g.vJ = {
        lc: function (a, b) { a = g.a.Ia(a); return this.hj.qD(a, b || this.get("zoom")) }, Wh: function (a, b, c) { return this.hj.RD(a, b || this.get("zoom"), c) }, ksa: function (a, b) { return this.lc(a, b) }, bDa: function (a, b) { return this.Wh(a, b) }, Kp: function (a, b, c) { g.c.add(this, "containerToLngLat"); var d = this.get("size").uE().gd(2); if (a.cb(d) && !c) return this.get("center"); a = this.sg(a, b, c); return this.Td(a) }, ws: function (a, b) {
            g.c.add(this, "lngLatToContainer"); var c = 0; b && (c = "string" === typeof b ? Math.round(parseFloat(b) / 0.14929107086948487) :
                b); var d = this.Ab(a); return this.ce(d, null, c)
        }, Ab: function (a) { a = g.a.Ia(a); return this.lc(a, 20) }, Td: function (a) { return a ? this.Wh(a, 20) : a }, rJ: function (a) { a = g.a.Ia(a); return this.lc(a, 20).Za(g.a.ac) }, A5: function (a, b) { b || (a = g.a.Ia(a)); var c = [], d = !1; void 0 === a[0].length && (d = !0); for (var c = [], e = 0, f = a.length; e < f; e += 1)if (d) { var h = this.lc(a[e], 20).Za(g.a.ac); c[e] = [h.x, h.y] } else c[e] = this.A5(a[e], !0); return c }, npa: function (a) { return this.Wh(a.add(g.a.ac), 20) }, cDa: function (a) { return this.ce(a.add(g.a.ac)) }, kDa: function (a) {
            return a ?
                this.lc(this.get("center"), a) : this.get("centerPixel")
        }, GAa: function (a) { return (new g.H(a.x + 2.0037508342789244E7, 2.0037508342789244E7 - a.y)).gd(0.14929107086948487) }, B6: function (a) { return new g.H(0.14929107086948487 * a.x - 2.0037508342789244E7, 2.0037508342789244E7 - 0.14929107086948487 * a.y) }
    }; z.vF = g.aa.extend({ ka: [g.va, g.Re], B: { center: new g.U(116.397128, 39.916527), zoom: 13, rotation: 0, crs: "EPSG3857" }, r: function (a) { this.CLASS_NAME = "AMap.View2D"; g.c.wa(this, a); a = a || {}; a.center && (a.center = g.a.Ia(a.center)); this.B = a } }); z.Kb = g.aa.extend({
        ka: [g.va, g.Re, g.vJ], B: {
            features: "all", showLabel: !0, dragEnable: !0, showIndoorMap: g.l.ba ? !1 : !0, lang: "zh_cn", keyboardEnable: !0, doubleClickZoom: !0, gridMapForeign: !1, scrollWheel: !0, zoomEnable: !0, jogEnable: !0, continuousZoomEnable: !0, resizeEnable: !1, animateEnable: !0, rotateEnable: !1, labelzIndex: 99, showFog: !0, touchZoom: !0, zooms: [3, g.l.ba ? g.l.Mc ? 19 : 20 : 18], defaultCursor: "", limitBounds: null, logoUrl: g.w.yb + "/theme/v1.3/logo@1x.png", logoUrlRetina: g.w.yb + "/theme/v1.3/logo@2x.png", copyright: "\x3c!--v1.4.15--\x3e &copy " +
                (new Date).getFullYear() + " AutoNavi ", isHotspot: !g.l.ba, baseRender: g.l.p1, overlayRender: g.l.dua, mapStyle: "amap://styles/normal", showBuildingBlock: g.l.Cf, crs: "EPSG3857", rotation: 0, pitch: 0, yaw: 0, scale: 1, center: new g.U(116.397128, 39.916527), zoom: 13, detectRetina: !0, pitchEnable: !1, buildingAnimation: !1, maxPitch: 83, turboMode: !0, preloadMode: !1, workerMode: !0
        }, poiOnAMAP: function (a) { g.c.add(this, "poiOnAMAP"); var b = {}, c = g.a.Ia(a.location); b.id = a.id; c && (b.y = c.P, b.x = c.Q); b.name = a.name; b.address = a.address; g.$h.$s(g.$h.M3(b)) },
        detailOnAMAP: function (a) { g.c.add(this, "detailOnAMAP"); var b = {}, c = g.a.Ia(a.location); b.id = a.id; c && (b.y = c.P, b.x = c.Q); b.name = a.name; g.$h.$s(g.$h.K3(b)) }, setLabelzIndex: function (a) { g.c.add(this, "setLabelzIndex"); return this.set("labelzIndex", a) }, getLabelzIndex: function () { return this.get("labelzIndex", null, !0) }, setMapStyle: function (a) {
            g.c.add(this, "setMapStyle"); a = a || "normal"; -1 === a.indexOf("amap://styles/") ? g.w.MJ[a] ? this.set("styleUrl", "amap://styles/" + g.w.MJ[a]) : this.set("styleUrl", "") : this.set("styleUrl",
                a); this.BS()
        }, getMapStyle: function () { return this.get("styleUrl") || this.get("mapStyle", null, !0) }, getFeatures: function () { return this.get("features", null, !0) }, setFeatures: function (a) { g.c.add(this, "setFeatures"); this.set("features", a) }, setLang: function (a) { g.c.add(this, "setLang", a); "en" !== a && "zh_cn" !== a && "zh_en" !== a || a === this.get("lang", null, !0) || (this.set("lang", a), this.$j && this.$j.G7(this)) }, getLang: function () { return this.get("lang", null, !0) }, setCity: function (a, b) {
            g.c.add(this, "setCity"); var c = this;
            (new g.fb.wb(g.w.Ud + "/v3/config/district?subdistrict=0&extensions=all&key=" + g.w.key + "&s=rsv3&output=json&keywords=" + a, { callback: "callback" })).h("complete", function (d) {
                var e = d.districts; if (e && e.length) {
                    d = e[0]; /[^\w]+/.test(a) && (e = g.a.find(e, function (b) { return b.name === a })) && e !== d && (d = e); try {
                        var f = d.center.split(","), h; switch (d.level) { case "city": h = 10; break; case "province": h = 7; break; case "district": h = 12; break; case "country": h = 4; break; default: h = 12 }-1 !== d.name.indexOf("\u5e02") && (h = 10); c.D = !0; c.setZoomAndCenter(h,
                            new g.U(f[0], f[1]), !0); c.D = !1; b && b.call(c, f, h)
                    } catch (k) { }
                }
            }, this)
        }, getScreenShot: function (a, b) { g.c.add(this, "getScreenShot"); return this.map && g.l.$k ? this.map.U3(a, b) : "" }, getCity: function (a, b) {
            g.c.add(this, "getCity"); var c = g.w.Ud + "/v3/geocode/regeo?&extensions=&&key=" + g.w.key + "&s=rsv3&output=json&location=" + (b || this.get("center", null, !0)); (new g.fb.wb(c, { callback: "callback", Nx: !0, vd: "REGEO" })).h("complete", function (b) {
                b = b.regeocode.addressComponent; a({
                    province: b.province, city: b.city instanceof Array ?
                        "" : b.city, citycode: b.citycode instanceof Array ? "" : b.citycode, district: b.district instanceof Array ? "" : b.district
                })
            }, this)
        }, r: function (a, b) {
            b = g.extend({}, b); this.id = g.a.vb(this); this.CLASS_NAME = "AMap.Map"; g.c.wa(this, b); this.D = !0; b = b || {}; b.mapStyle && g.w.MJ[b.mapStyle] && (b.mapStyle = "amap://styles/" + g.w.MJ[b.mapStyle]); b.mapStyle && -1 !== b.mapStyle.indexOf("amap://styles/") ? (b.styleUrl = b.mapStyle, delete b.mapStyle) : b.styleUrl = "amap://styles/normal"; b.bgColor && g.extend(g.w.ue, b.bgColor); b.maxPitch && (b.maxPitch =
                Math.min(this.B.maxPitch, Math.max(b.maxPitch, 0))); b.pitch && (b.pitch = Math.min(b.maxPitch || this.B.maxPitch, Math.max(b.pitch, 0))); "3D" !== b.viewMode && (b.pitch = 0); g.w.Hr = b.buildingColor || null; b.mobile && (g.l.ba = !0); b.noPoi && (g.w.ota = !0); b.editEnable = g.w.vQ ? b.editEnable : !1; b.editEnable && (b.nolimg = !0, b.showIndoorMap = !1); void 0 !== b.nolimg && (b.nolimg_param = b.nolimg); "3D" === b.viewMode && g.l.Jq && void 0 === b.showBuildingBlock && !0 === b.showBuildingBlock; this.eq = !!b.enableSocket; b.server && (g.w.Ud = b.server); b.vdataUrl &&
                    (g.w.cL = b.vdataUrl); if ("string" === typeof a) { if (a = this.K = document.getElementById(a), !a) return } else "DIV" === a.tagName && (this.K = a); if (this.K.gM) { var c = this.K.gM; c.D = !0; c.destroy(); c.D = !1 } g.te.af.start({ id: this.id, K: this.K }); this.K.gM = this; var c = this.B.zooms[1], d = this.B.zooms[0]; b.zooms ? (b.zooms[0] = Math.max(d, b.zooms[0]), !0 === b.expandZoomRange && (c = g.l.ba ? g.l.Mc ? 19 : 20 : 20), b.zooms[1] = Math.min(c, b.zooms[1])) : b.zooms = [d, c]; b.forceZooms && (b.zooms = b.forceZooms); b = this.pma(b); c = this.getSize(!0); b.center && (b.center =
                        g.a.Ia(b.center)); this.hj = this.xna(b.crs || this.B.crs, b.center || this.B.center); this.xla(c, b); d = b.lang; "en" !== d && "zh_cn" !== d && "zh_en" !== d && (b.lang = "zh_cn"); g.j.lg || (b.rotation = 0, b.pitch = 0, b.rotateEnable = !1); b.preloadMode = !1; g.l.lS ? !1 !== b.workerMode && (z.Kb.At ? (b.workerMode = !1, z.Kb.At++) : z.Kb.At = 1) : b.workerMode = !1; b.layers && (d = b.layers, delete b.layers, b.layers = d); b.baseRender = b.baseRender || g.l.p1; b.forceVector && (b.baseRender = g.l.Cf ? "vw" : "v"); b.disableVector && (b.baseRender = "d"); "dom" === b.renderer && (b.baseRender =
                            "d", b.overlayRender = "d"); c = Math.max(c.width, c.height); g.l.ja && (c *= Math.min(2, window.devicePixelRatio || 1)); "vw" === b.baseRender && c > g.l.Psa && (b.baseRender = "dv"); "d" == b.baseRender && b.vectorMapForeign && (b.vectorMapForeign = !1, b.gridMapForeign = !0); g.a.Db(this, b); this.Ze(this.B); "rotateEnable" in b || "3D" !== b.viewMode || !g.l.Jq || this.set("rotateEnable", !0); "pitchEnable" in b || "3D" !== b.viewMode || !g.l.Jq || this.set("pitchEnable", !0); c = this.get("zoom", null, !0); d = this.get("zooms"); c > d[1] ? c = d[1] : c < d[0] && (c = d[0]); this.set("zoom",
                                c); this.B.zoom = c; this.zna(this.B); this.IP(); var e = this; this.Ze({ overlays: [], infos: {}, controls: {} }); var f = []; (b.gridMapForeign || b.vectorMapForeign) && f.push("gridmap"); b.vectorMapForeign && g.l.pu && f.push("MVT", "vectorForeign"); b.forceVector && (f.push("vectorlayer"), f.push("overlay")); "3D" === b.viewMode && g.l.Jq && f.push("Map3D"); g.l.$k && (b.vectorMapForeign || b.mapStyle || b.nolimg) && f.push("labelcanvas"); b.editEnable && f.push("edit"); g.l.$k && (f.push("AMap.IndoorMap"), -1 !== f.indexOf("Map3D") && f.push("AMap.IndoorMap3D"));
            this.ja = g.l.ja && this.get("detectRetina"); this.A9(b); this.D = !1; this.Bsa(function () {
                g.rb.Sg(f, function () {
                    if (!e.get("destroy")) {
                        var b = new g.Kb(a, e); if (g.Me) { var c = (g.Me[0] || g.Me).stylemaps["50001:1"].browserStyle[0].split("&"); b.EF = [c[0], c[4]] } b.Se("zoom center centerCoords rotation yaw pitch resolution".split(" "), e.view, !0); b.h("complete", function () { var a = {}; b.J && "3D" == b.J.type && (a.canvas = b.J.Ma, a.gl = b.J.ea); this.q("complete", a) }, e, !0); b.hj = e.hj; e.Se(["zoomSlow", "panTo", "targetLevel", "render"], b);
                        b.Se(["size", "bounds"], e); e.loaded = !0; e.q("coreMapCreated"); g.l.$k && e.Zka(); e.D = !0; "3D" === e.view.type && (e.AmbientLight || (e.AmbientLight = new g.zw.pV([1, 1, 1], 0.9)), e.DirectionLight || (e.DirectionLight = new g.zw.zV([0, -1, 1], [1, 1, 1], 0.1))); e.D = !1
                    }
                })
            })
        }, Bsa: function (a) {
            function b() {
                var a = AMap.anole, b = {}, c = [], d = 0, e = void 0; if (a) {
                    for (var a = a.replace(/\?/g, ":").replace(/\//g, "&"), e = a.split(""), a = 0, f = e.length; a < f; a++)void 0 === b[e[a]] && (b[e[a]] = d++ , c.push(e[a])); c.reverse(); d = 0; for (a = e.length; d < a; d++)e[d] = c[b[e[d]]];
                    a = e.join(""); g.Me = eval(a); delete AMap.anole
                }
            } if (g.l.ye || g.Me) a(); else {
                var c = !0; if (window.__AMapStyleSource) c = !1; else try { var d = JSON.parse(localStorage.getItem("_AMap_anole")); d && d.version === g.l.If && d.script ? eval(d.script) : c = !1 } catch (e) { c = !1 } if (c) b(), a(); else {
                    var f = document.createElement("script"); f.mCa = "anonymous"; f.id = "amap_anole_js"; f.src = window.__AMapStyleSource || g.w.Fc + "://vdata.amap.com/style?v=" + g.w.yr + "&key=" + g.w.key + "&mapstyle=normal"; c = document; (c.head || c.getElementsByTagName("head")[0] ||
                        c.body).appendChild(f); f.onload = function () { if (!g.Me) { if (!window.__AMapStyleSource && g.l.xs) try { var c = { version: g.l.If, script: "AMap['anole']=" + JSON.stringify(AMap.anole) }; localStorage.setItem("_AMap_anole", JSON.stringify(c)) } catch (d) { } b() } a(); f.parentNode.removeChild(f) }
                }
            }
        }, getViewMode_: function () { return this.view.type }, tpa: function (a, b, c) {
            var d = new g.U(a[4], a[5]); if ((a = new g.re(a[0], a[1], a[2], a[3])) && b && d) {
                for (var e = c[1]; e > c[0]; e -= 1) {
                    var f = this.lc(a.sc, e), h = this.lc(a.kc, e); if (Math.abs(h.x - f.x) < b.width &&
                        Math.abs(f.y - h.y) < b.height) break
                } return [d, Math.min(e + 1, c[1])]
            } return null
        }, xla: function (a, b) { if (!(b && b.center && b.zoom)) { var c = this.tpa(g.w.Xd, a, b.zooms); b.center = b.center || c && c[0]; "number" !== typeof b.zoom && (b.zoom = c && c[1]) } }, xna: function (a, b) {
            if (b instanceof g.U) {
                if ("string" === typeof a) { switch (a) { case "EPSG3395": return g.Zh.AV; case "EPSG4326": return g.Zh.BV }return g.Zh.pL } if (a.pointToLngLat && a.lngLatToPoint) return { RD: a.pointToLngLat, qD: a.lngLatToPoint, Xp: a.getResolution }; throw "illegal projection";
            } var c = this.get("zoom", null, !0); return { Xp: function (a) { return Math.pow(2, c - a) }, qD: function () { }, RD: function () { } }
        }, Lwa: function (a, b) {
        this.Jw && this.Jw.stop(); var c = ["pitch", "rotation", "zoom", "center"], d = {}, e = !1, f; for (f in a) if (a.hasOwnProperty(f) && -1 !== g.a.indexOf(c, f)) { var h = this.get(f); void 0 === h || h === a[f] || h.cb && h.cb(a[f]) || (d[f] = this.get(f), e = !0) } e && (this.Jw = new g.Cj(d, a, null, 0), this.Jw.transition = function (a, c, e) {
            e /= b || 300; if (1 <= e) return c; var f = {}, h; for (h in d) d.hasOwnProperty(h) && (f[h] = "center" ===
                h ? a[h].add(c[h].Za(a[h]).Kd(e)) : a[h] + (c[h] - a[h]) * e); return f
        }, this.Jw.rq = function (b) { b === a && (this.Jw.stop(), this.Bd = null); for (var c in b) b.hasOwnProperty(c) && ("center" === c ? (this.D = !0, this.setCenter(b[c], !0), this.D = !1) : this.set(c, b[c])) }, this.Jw.Dn(this))
        }, zna: function (a) { "3D" === this.get("viewMode") && g.l.Jq ? (this.set("baseRender", "vw"), this.view = new g.VL(this, a)) : this.view = new g.vF(this, a); this.D4() }, D4: function () { this.xi = "d" < this.get("baseRender") || "3D" === this.view.type }, featuresChanged: function () { this.IP() },
        BS: function () { this.IP(); this.hU() }, hU: function () { if (this.mm) { var a = !0; this.D = !0; var b = this.getMapStyle(); if (!1 === this.get("showIndoorMap") || "normal" !== b && "amap://styles/normal" !== b) a = !1; for (var b = this.getLayers(), c = this.D = !1, d = 0, e = b.length; d < e; d += 1) { if (b.hasOwnProperty(d) && "AMap.IndoorMap" === b[d].CLASS_NAME && b[d] !== this.mm) { a = !1; break } b[d].dq && b[d].dq() && b[d].get("visible") && (c = !0) } (a = c && a) && this.mm.getMap() !== this && this.mm.setMap(this); this.mm.set("visible", a) } }, IP: function () {
            this.A9(); if (this.view &&
                "3D" !== this.view.type) { var a = this.get("baseRender"); if (a && !("dv" < a)) { var b = this.get("features", null, !0); this.D = !0; var c = this.getMapStyle(); this.D = !1; var d = this.get("editEnable"); b && c && (g.l.pu && (d || "all" !== b || "normal" !== c && "amap://styles/normal" !== c) ? (this.set("baseRender", "v"), this.XS = a) : this.XS && (this.set("baseRender", this.XS), this.XS = null)); this.D4() } }
        }, Zka: function () {
            var a = this; !a.mm && a.K && (a.indoorMap = a.mm = new AMap.IndoorMap({ innerLayer: !0 }), a.hU(), g.a.Rc(function () {
                a.q("indoor_create", { target: a });
                a.set("display")
            }))
        }, layersChanged: function () { this.D = !0; var a = this.getLayers(); this.GJ = this.D = !1; for (var b = 0; b < a.length; b += 1)a[b].D = !0, a[b].getMap() !== this && a[b].setMap(this), a[b].D = !1, a[b].GJ && (this.GJ = !0); this.hU() }, getMapNumber: function () { if (this.map) return this.map.YD() }, getAdcode: function () { g.c.add(this, "getAdcode"); return g.w.Xka }, A9: function () {
            function a() {
                var a = !1; g.a.Nb(b.B.layers, function (b) { if (b.oG && b.constructor === z.o.ob) return a = !0, !1 }, b); if (g.a.ka(["d", "dv"], b.get("baseRender")) || !g.a.ka(["normal",
                    "amap://styles/normal"], b.get("mapStyle")) || "3D" === b.get("viewMode") && 0 < b.get("pitch") || "all" !== b.get("features") || b.get("editEnable") || !b.get("turboMode")) a = !1; return a
            } if (!this.l7) {
                var b = this, c = a(), d = this.get("rasterLayer"); if (d && !c) this.lk(d), this.set("rasterLayer", void 0); else if (!d && c && this.get("layers")) {
                    d = new z.o.ob({ innerLayer: !0, map: this, kk: !0, zIndex: 0 }); d.Fra = !0; if (this.B.layers) {
                        var e = null; g.a.Nb(this.B.layers, function (a) {
                        a instanceof z.o.ob && a.oG && (null === e || a.get("zIndex") > e.get("zIndex")) &&
                            (e = a)
                        }); e && d.Se(["zIndex", "opacity", "zooms", "visible"], e)
                    } this.set("rasterLayer", d, !0)
                }
            }
        }, pma: function (a) {
            a || (a = {}); if (a.hasOwnProperty("defaultLayer")) { a.layers = [a.defaultLayer]; var b = a.defaultLayer; b.jP = !0; this.set("defaultLayer", b, !0) } a.layers && 0 !== a.layers.length ? this.set("defaultLayer", a.layers[0], !0) : (b = new z.o.ob({ innerLayer: !0 }), a.layers = [b], b.jP = !0, this.set("defaultLayer", b, !0)); if (b = a.view) b.B.rotation && (a.rotation = b.B.rotation), b.B.center && (a.center = b.B.center), b.B.zoom && (a.zoom = Math.max(a.zooms[0],
                Math.min(a.zooms[1], b.B.zoom))), b.B.crs && (a.crs = b.B.crs); a.level && !a.zoom && (a.zoom = a.level); return a
        }, setLimitBounds: function (a) { g.c.add(this, "setLimitBounds"); a instanceof g.gp && (a.D = !0, a = a.toBounds(), a.D = !1); a instanceof g.re || (a = null); this.set("limitBounds", a) }, clearLimitBounds: function () { g.c.add(this, "clearLimitBounds"); this.set("limitBounds", null) }, getLimitBounds: function () { g.c.add(this, "getLimitBounds"); return this.get("limitBounds", null, !0) }, wH: function (a) {
            var b = this.get("layers"); if (!(0 <=
                g.a.indexOf(b, a)) && (b.push(a), this.set("layers", b), a.nG)) { a = a.getLayers(); for (var b = -1, c = a.length; ++b < c;) { var d = a[b]; d instanceof z.o.Tb || !d.setMap || d.setMap(this) } }
        }, XB: function (a) { var b = this.get("overlays"); 0 <= g.a.indexOf(b, a) || (a instanceof z.A.Jn ? (this.get("overlays").push(a), this.Vx instanceof z.A.Jn && (this.Vx.D = !0, this.Vx.close(), this.Vx.D = !1), this.Vx = a, this.set("contextmenu", a, !0)) : (a instanceof z.A.Qe && (this.nm instanceof z.A.Qe && this.kz(this.nm), this.nm = a), this.get("overlays").push(a)), this.q("overlays")) },
        lk: function (a) { var b = this.get("layers"), c = g.a.indexOf(b, a); if (-1 !== c) { if (a.nG) for (c = b.length; -1 < --c;) { var d = b[c]; d.AA !== a && d !== a || b.splice(c, 1) } else a.AA && a.AA.cka(a), b = g.a.uo(b, c); this.set("layers", b); if (a.nG) for (a = a.getLayers(), b = -1, c = a.length; ++b < c;)d = a[b], d instanceof z.o.Tb || !d.setMap || d.setMap() } }, getZooms: function () { return this.get("zooms", null, !0) }, setZooms: function (a) { return this.set("zooms", a, !0) }, kz: function (a) { var b = this.get("overlays"); this.set("overlays", g.a.uo(b, g.a.indexOf(b, a))) },
        getTileCoordByLngLat: function (a, b, c) { b = b || 256; this.D = !0; c = c || Math.round(this.getZoom()); this.D = !1; a = this.lc(a, c); c = new g.Yq(c, Math.floor(a.x / b), Math.floor(a.y / b)); c.GC = a.x % b; c.HC = a.y % b; return c }, setZoom: function (a, b) { g.c.add(this, "setZoom"); a = this.LC(a); var c = this.get("zooms"); a > c[1] && (a = c[1]); a < c[0] && (a = c[0]); this.get("zoomEnable") && (b || !this.loaded ? (this.set("zoom", a), this.q("zoomstart"), this.q("zoomchange"), this.q("zoomend")) : this.set("zoomSlow", a)) }, getZoom: function () {
            g.c.add(this, "getZoom");
            return this.LC(this.get("targetLevel") || this.get("zoom", null, !0))
        }, getCenter: function () { g.c.add(this, "getCenter"); return this.get("center", null, !0) }, setCenter: function (a, b) { g.c.add(this, "setCenter"); a = g.a.Ia(a); b || !this.loaded ? (this.q("movestart"), this.set("center", a), this.q("mapmove"), this.map ? this.map.q("moveend") : this.q("moveend")) : (this.D = !0, this.panTo(a), this.D = !1) }, getCoordsBound: function () { return this.view.em() }, getCoordsBoundByZoom: function (a) { return this.view.qpa(a) }, setRotation: function () {
            var a =
                0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0; g.c.add(this, "setRotation"); !g.l.ye && this.get("rotateEnable") && this.set("rotation", a)
        }, getRotation: function () { g.c.add(this, "getRotation"); return this.get("rotation") }, setPitch: function (a) { g.c.add(this, "setPitch"); a = Math.min(this.get("maxPitch"), Math.max(a, 0)); "3D" === this.view.type && this.get("pitchEnable") && this.set("pitch", a) }, getPitch: function () { g.c.add(this, "getRotation"); return "3D" === this.view.type ? this.get("pitch") : 0 }, getStatus: function () {
            g.c.add(this,
                "getStatus"); for (var a = "isHotspot pitchEnable dragEnable zoomEnable keyboardEnable jogEnable doubleClickZoom scrollWheel resizeEnable touchZoom rotateEnable animateEnable".split(" "), b = {}, c = 0; c < a.length; c += 1)b[a[c]] = this.get(a[c], null, !0); return b
        }, setStatus: function (a) {
            g.c.add(this, "setStatus"); for (var b in a) a.hasOwnProperty(b) && -1 !== "isHotspot,pitchEnable,dragEnable,keyboardEnable,doubleClickZoom,scrollWheel,zoomEnable,jogEnable,continuousZoomEnable,resizeEnable,animateEnable,rotateEnable,touchZoom".indexOf(b) &&
                this.set(b, a[b])
        }, getResolution: function (a, b) { g.c.add(this, "getResolution"); var c = (a = g.a.Ia(a)) ? a.P : this.get("center", null, !0).P; return this.hj.Xp(b || this.get("zoom")) * Math.cos(c * Math.PI / 180) }, getScale: function (a) { g.c.add(this, "getScale"); this.D = !0; a = this.getResolution() * (a || 96) / 0.0254; this.D = !1; return a }, getDefaultCursor: function () { g.c.add(this, "getDefaultCursor"); return this.get("defaultCursor", null, !0) || "url(" + g.w.yb + "/theme/v1.3/openhand.cur),default" }, setDefaultCursor: function (a) {
            g.c.add(this,
                "setDefaultCursor"); return this.set("defaultCursor", a, !0)
        }, zoomIn: function (a) { g.c.add(this, "zoomIn"); this.D = !0; this.setZoom(this.getZoom() + 1, a); this.D = !1 }, zoomOut: function (a) { g.c.add(this, "zoomOut"); this.D = !0; this.setZoom(this.getZoom() - 1, a); this.D = !1 }, LC: function (a) { return this.view && "3D" === this.view.type ? g.a.hc(a, 4) : Math.round(a) }, setZoomAndCenter: function (a, b, c) {
            g.c.add(this, "setZoomAndCenter"); b = g.a.Ia(b); a = this.LC(a); var d = this.get("zooms"); a > d[1] && (a = d[1]); a < d[0] && (a = d[0]); this.D = !0; this.loaded ?
                this.set("zoomAndCenter", [a, b, c]) : (this.setZoom(a, !0), this.setCenter(b, !0)); this.D = !1
        }, clearMap: function () { g.c.add(this, "clearMap"); for (var a = this.get("overlays"), b = 0; b < a.length; b += 1)a[b].set("map", null, !0); this.set("overlays", []); if (this.map && this.map.za) for (a = this.map.za, b = a.length - 1; 0 <= b; b -= 1)if (a[b].T instanceof z.o.sL) { var c = a[b].T; c.D = !0; c.setMap(null); c.D = !1 } }, destroy: function () {
            g.c.add(this, "destroy"); this.mm && (this.mm.setMap(), this.indoorMap = this.mm = null); this.set("overlays", []); this.set("defaultLayer",
                null); this.set("layers", []); var a = this.get("controls"); a.remove = []; for (var b in a.Hd) a.Hd.hasOwnProperty(b) && a.remove.push(a.Hd[b]); a.Hd = []; a.add = []; this.set("controls", a); this.set("destroy", !0); this.Ka = !1; this.tl(); this.B = this.K = null; this.Cc && this.Cc.tl(); this.Cc = null; this.view && this.view.tl(); this.view = null; this.ri(); z.Kb.At--
        }, addControl: function (a) {
            g.c.add(this, "addControl"); var b = g.a.vb(a), c = this.get("controls") || {}; c.Hd = c.Hd || {}; c.Hd[b] || (c.Hd[b] = a); c.add = c.add || []; c.add.push(a); this.set("controls",
                c)
        }, removeControl: function (a) { g.c.add(this, "removeControl"); var b = g.a.vb(a), c = this.get("controls") || {}; c.Hd = c.Hd || {}; c.Hd[b] && delete c.Hd[b]; c.remove = c.remove || []; c.remove.push(a); this.set("controls", c) }, clearControl: function () { g.c.add(this, "clearControl"); var a = this.get("controls") || {}; a.remove = a.remove || []; a.Hd = a.Hd || {}; for (var b in a.Hd) a.Hd.hasOwnProperty(b) && (a.remove.push(a.Hd[b]), delete a.Hd[b]); this.set("controls", a) }, plugin: function (a, b) {
            g.c.add(this, "plugin"); "string" === typeof a && (a = [a]);
            for (var c = [], d = 0; d < a.length; d += 1) { var e = a[d].split("."); 2 < e.length || (2 == e.length ? "AMap" === e[0] && (window.AMap[e[1]] || c.push(a[d])) : c.push(a[d])) } if (0 === c.length) return b(), this; g.rb.Sg(c, b); return this
        }, clearInfoWindow: function () { g.c.add(this, "clearInfoWindow"); var a = this.get("overlays"); a && 0 !== a.length && this.nm && (this.nm.D = !0, this.nm.close(), this.nm.D = !1) }, remove: function (a) {
            g.c.add(this, "remove"); a instanceof Array || (a = [a]); for (var b = 0; b < a.length; b += 1) {
                var c = a[b]; c.D = !0; c.getMap && c.getMap() === this &&
                    (c.close ? c.close() : c.setMap && c.setMap(null)); c.D = !1
            }
        }, add: function (a) { g.c.add(this, "add"); a instanceof Array || (a = [a]); for (var b = 0; b < a.length; b += 1) { var c = a[b]; c.D = !0; if (c.getMap && c.getMap() !== this) if (c.open) continue; else c.setMap && c.setMap(this); c.D = !1 } }, getAllOverlays: function (a, b) {
            g.c.add(this, "getAllOverlays"); var c = this.get("overlays"); if (a) { for (var d = "amap." + a.toLowerCase(), e = [], f = 0; f < c.length; f += 1)d !== c[f].CLASS_NAME.toLowerCase() || !b && (c[f].Aa || c[f].isOfficial) || e.push(c[f]); return e } if (!b) {
                e =
                []; for (f = 0; f < c.length; f += 1)c[f].Aa || c[f].isOfficial || e.push(c[f]); c = e
            } d = this.get("layers"); e = []; if (d) for (var f = 0, h = d.length; f < h; f += 1)d[f] instanceof z.o.sL && e.push(d[f]), d[f].ib && (e = e.concat(d[f].ib)); return c.concat(e)
        }, triggerResize: function () { this.map && this.map.zO() }, refreshSize: function () { this.OF = this.r3() }, r3: function () { return g.j.n3(this.K) }, getSize: function () { g.c.add(this, "getSize"); (!this.OF || 10 > this.OF.width * this.OF.height) && this.refreshSize(); return this.OF }, getContainer: function () {
            g.c.add(this,
                "getContainer"); return this.K
        }, panTo: function (a) { g.c.add(this, "panTo"); a = g.a.Ia(a); this.loaded ? this.set("panTo", a) : (this.D = !0, this.setCenter(a), this.D = !1) }, panBy: function (a, b, c) {
            g.c.add(this, "panBy"); this.D = !0; var d = this.get("rotation") * Math.PI / 180, e = a * Math.cos(d) + Math.sin(d) * b; a = -Math.sin(d) * a + Math.cos(d) * b; b = this.loaded && this.map && this.map.Bd ? this.map.Bd.L8 : this.get("centerCoords"); d = Math.pow(2, 20 - this.getZoom()); e = b.add(new g.H(-e * d, -a * d)); e = this.Td(e); !this.loaded || c ? this.setCenter(e, c) : this.set("panTo",
                e); this.D = !1
        }, setFitView: function (a, b, c, d) { g.c.add(this, "setFitView"); this.D = !0; var e = this.get("size"), f = e.height; if (!e.width || !f) return !0; if (a = this.I3(a)) { if (c = this.HI(a, 0, new g.H(40, 40), c, d)) b = b || !this.getBounds().contains(a.ti()) || g.l.ba && 1 < Math.abs(c[0] + this.get("zoom", null, !0)), this.setZoomAndCenter(c[0], c[1], b); this.D = !1; return a } }, I3: function (a) {
            if (a) if (a instanceof z.A.Bh) a = [a]; else { if (!(a instanceof Array)) return null } else this.D = !0, a = this.getAllOverlays(), this.D = !1; if (a) {
                for (var b, c = 0; c <
                    a.length; c += 1) { var d = a[c]; if (d.get("visible") && !(d instanceof z.A.Qe || d instanceof z.A.Jn)) { d.D = !0; var e = d.getBounds(); d.D = !1; e && (b = b ? b.sya(e) : e.lb()) } } return b
            }
        }, getBounds: function (a) { g.c.add(this, "getBounds"); var b = this.view.od(); return a && b.toBounds ? (b.D = !0, a = b.toBounds(), b.D = !1, a) : b }, setBounds: function (a, b, c, d, e, f) { g.c.add(this, "setBounds"); c = this.HI(a, b, c, e, f); d = d || g.l.ba && 1 < Math.abs(c[0] + b - this.get("zoom", null, !0)); this.D = !0; this.setZoomAndCenter(c[0], c[1], d); this.D = !1; return a }, w3: function (a,
            b, c, d, e) { a = this.I3(a); return this.HI(a, b, c, d, e) }, getCoordsBoundByZoomIn3D: function (a) { this.CH || (this.CH = new g.VL); this.D = !0; var b = this.getRotation(), c = this.getPitch(), d = this.getSize(!0).lb(); this.D = !1; a = { size: d, zoom: a, rotation: b, pitch: c, centerCoords: this.get("centerCoords") }; this.CH.Ze(a, !0); this.CH.Rq(); return this.CH.em() }, HI: function (a, b, c, d, e) {
                b = b ? Number(b) : 0; this.D = !0; var f = this.getRotation(), h = this.getPitch(), k = this.getSize(!0).lb(), l = this.view.type; this.D = !1; var m = a.VQ(this); a = a.YQ(this); this.$B ||
                    (this.$B = "3D" === l ? new g.VL : new g.vF); this.$B.Ze({ size: k, zoom: 3, rotation: f, pitch: h, centerCoords: m }, !0); var n = h = 0; d ? (n = d[0], c = d[1], h = d[2], d = d[3], k.width -= h + d, k.height -= n + c, h = (h - d) / 2, n = (n - c) / 2) : c && (k.width -= 2 * c.x, k.height -= 2 * c.y); e = e || (g.l.ba ? 17 : 18); c = this.get("zooms"); d = c[0]; var p = Infinity, q = Infinity; do {
                        this.$B.Ze({ zoom: d }, !0); "3D" === l && this.$B.Rq(); for (var q = p = Infinity, r = -Infinity, s = -Infinity, u = 0; u < a.length; u += 1)var v = this.$B.ce(a[u]), p = Math.min(p, v.x), r = Math.max(r, v.x), q = Math.min(q, v.y), s = Math.max(s,
                            v.y); p = r - p; q = s - q; if (p > k.width || q > k.height) { d -= 1; break } d += 1
                    } while (d <= c[1]); d = Math.min(c[1], e, Math.max(c[0], d + b)); d = Math.floor(d); b = Math.pow(2, 20 - d); e = f * Math.PI / 180; f = h * Math.cos(e) + Math.sin(e) * n; e = -Math.sin(e) * h + Math.cos(e) * n; m = m.Za(new g.H(f * b, e * b)); m = this.Wh(m, 20); return [d, m]
            }, setLayers: function (a) { g.c.add(this, "setLayers"); for (var b = 0; b < a.length; b += 1)a[b].set("map", this, !0); this.set("layers", a) }, getLayers: function () {
                g.c.add(this, "getLayers"); var a = this.get("layers", null, !0), a = a.slice(); if (this.D) {
                    for (var b =
                        [], c = -1, d = a.length; ++c < d;) { var e = a[c]; if (e.nG) for (var e = e.getLayers(), f = -1, h = e.length; ++f < h;) { var k = e[f]; k instanceof z.o.Tb && -1 === g.a.indexOf(a, k) && b.push(k) } } a = a.concat(b)
                } else for (b = a.length; -1 < --b;)a[b].AA && a.splice(b, 1); return a
            }, getDefaultLayer: function () { g.c.add(this, "getDefaultLayer"); return this.get("defaultLayer", null, !0) }, setDefaultLayer: function (a) {
                g.c.add(this, "setDefaultLayer"); this.D = !0; a.jP = !0; var b = this.get("defaultLayer"), c = this.get("layers"); if (b) {
                    if (a === b) return; b.jP = !1; c = g.a.uo(c,
                        g.a.indexOf(c, b))
                } this.set("defaultLayer", a, !0); a.D = !0; a.getMap == this && c.push(a); a.D = !1; this.setLayers(c); this.D = !1
            }, pixelToLngLat: function (a, b) { g.c.add(this, "pixelToLngLat"); return this.Wh(a, b) }, lnglatToPixel: function (a, b) { g.c.add(this, "lnglatToPixel"); return this.lc(a, b) }, drawPolyline: function (a) { g.c.add(this, "drawPolyline"); this.set("draw", "polyline"); this.set("drawStyle", a || { strokeColor: "#006600", mb: 0.9 }) }, render: function (a) { g.c.add(this, "render"); this.map && this.map.set("display", a ? 1 : 0) }, setMask: function (a) {
                g.c.add(this,
                    "setMask"); this.set("mask", a); this.map && (this.map.AJ = !0, this.map.set("display"))
            }, drawPolygon: function (a) { g.c.add(this, "drawPolygon"); this.set("draw", "polygon"); this.set("drawStyle", a || { strokeColor: "#006600", mb: 0.9, fillColor: "#FFAA00", be: 0.9 }) }, drawCircle: function (a) { g.c.add(this, "drawCircle"); this.set("draw", "circle"); this.set("drawStyle", a || { strokeColor: "#006600", mb: 0.9, fillColor: "#006600", be: 0.9 }) }, SI: function () { return this.view.SI() }, getCameraState: function () {
                g.c.add(this, "getCameraState"); if (this.view &&
                    "3D" == this.view.type) return this.view.m3()
            }, endDraw: function () { this.set("draw", null) }, isGoogleTileVisible: function () { return this.map.isForeignMapVisible() }, isForeignMapVisible: function () { if (this.get("gridForeignMap") || this.get("vectorForeignMap")) return this.map && this.map.Efa() }, ce: function (a, b, c) { g.c.add(this, "p20ToContainer"); return this.view.ce(a, b, c) }, sg: function (a, b, c) { g.c.add(this, "containerToP20"); return this.view.sg(a, b, c) }, getObject3DByContainerPos: function (a, b, c) {
                g.c.add(this, "getObject3DByContainerPos");
                if ("2D" === this.view.type || !this.map || !this.map.J) return null; this.D = !0; this.view.sg(a); var d = this.view.q3(a), e = this.map.J.oT, f = this.view.ad, h = this.get("zoom", null, !0), h = Math.pow(2, 20 - h); b = b || this.getLayers(); this.D = !1; for (var k = [], l = 0; l < b.length; l += 1) { var m = b[l]; m instanceof z.o.er && (m = m.$o(e, d, f, h, a)) && k.push(m) } return c ? k : k.length ? (k.sort(function (a, b) { return a.Rd - b.Rd }), { index: k[0].index, point: k[0].QD, distance: k[0].Rd, object: k[0].object }) : null
            }
    });
    z.Kb.Ob({ rJ: "lngLatToGeodeticCoord", npa: "geodeticCoordToLngLat", HI: "getFitZoomAndCenterByBounds", w3: "getFitZoomAndCenterByOverlays", ws: "lnglatTocontainer", lnglatTocontainer: "lngLatToContainer", Kp: "containTolnglat", containTolnglat: "containerToLngLat", Ab: "lngLatToP20", Td: "p20ToLngLat", ce: "p20ToContainer", sg: "containerToP20", lc: "project", Wh: "unproject" }); z.Kb.zb({
        isHotspotChanged: function () { if ("undefined" !== typeof this.ZC && (this.Pma(), this.get("isHotspot"))) { var a = this.get("layers", null, !0); a && a.length && !this.ZC && this.GJ && this.Qta() } }, Qta: function () { if (this.$j) this.r4(); else { var a = this; this.D = !0; this.plugin("AMap.HotSpot", function () { if (!a.ZC) { if (!a.$j) { var b = new g.bi; new z.A.Qe({ innerOverlay: !0 }); a.$j = b } a.r4() } }); this.D = !1 } }, Pma: function () { this.$j && this.Rqa() }, t6: function (a) { a.type = "hotspotover"; a.isIndoorPOI = !1; this.q("hotspotover", a) }, r6: function (a) {
        a.type =
            "hotspotclick"; a.isIndoorPOI = !1; this.q("hotspotclick", a)
        }, s6: function (a) { a.type = "hotspotout"; a.isIndoorPOI = !1; this.q("hotspotout", a) }, r4: function () { var a = this.$j; this.$j.D = !0; this.$j.setMap(this); this.$j.D = !1; a.h("mouseover", this.t6, this); a.h("click", this.r6, this); a.h("mouseout", this.s6, this) }, Rqa: function () { var a = this.$j; a.G("mouseover", this.t6, this); a.G("click", this.r6, this); a.G("mouseout", this.s6, this); this.$j.D = !0; this.$j.setMap(null); this.$j.D = !1; this.$j = null }
    }); z.event = {
        X: function (a, b, c, d) { g.F.h(a, b, c, d); return new g.$E(0, a, b, c, d) }, $ka: function () { }, addListener: function (a, b, c, d) { g.a.Oh(a.addListener) ? a.addListener(b, c, d) : (a.ke || (a.ke = g.va.ke), g.va.h.call(a, b, c, d)); return new g.$E(1, a, b, c, d) }, Jx: function (a, b, c, d) { g.a.Oh(a.Jx) ? a.Jx(b, c, d) : (a.ke || (a.ke = g.va.ke), g.va.h.call(a, b, c, d, !0)); return new g.$E(1, a, b, c, d) }, RH: function (a) { g.a.Oh(a.RH) ? a.RH() : g.va.ri.call(a) }, qu: function (a, b) { g.a.Oh(a.qu) ? a.qu(b) : g.va.ri.call(a, b) }, removeListener: function (a) {
        a instanceof
            g.$E && (g.a.Oh(a.wi.removeListener) ? a.wi.removeListener(a) : 0 === a.type ? g.F.G(a.wi, a.zQ, a.HR, a.Te) : 1 === a.type && (a.wi.ke || (a.wi.ke = g.va.ke), g.va.G.call(a.wi, a.zQ, a.HR, a.Te)))
        }, O: function (a, b) { var c = Array.prototype.slice.call(arguments, 1); g.a.Oh(a.O) ? a.O.apply(a, c) : (a.ke || (a.ke = g.va.ke), g.va.q.apply(a, c)) }
    }; g.$E = g.aa.extend({ r: function (a, b, c, d, e) { this.type = a; this.wi = b; this.zQ = c; this.HR = d; this.Te = e } });
    var nc = { X: "addDomListener", $ka: "addDomListenerOnce", addListener: "addListener", Jx: "addListenerOnce", RH: "clearInstanceListeners", qu: "clearListeners", removeListener: "removeListener", O: "trigger" }, oc; for (oc in nc) nc.hasOwnProperty(oc) && (z.event[nc[oc]] = z.event[oc]); g.event = z.event; z.o.Tb = g.aa.extend({
        ka: [g.va, g.Re], r: function (a) { (new Date).getTime(); this.CLASS_NAME = this.CLASS_NAME || "AMap.Layer"; g.a.Db(this, a); this.B.map && (a = this.B.map, delete this.B.map, this.B.map = a); this.Ze(this.B) }, getContainer: function () { g.c.add(this, "getContainer"); if (this.o && this.o.M) return this.o.M.pj() }, getZooms: function () { return this.get("zooms", null, !0) }, setOpacity: function (a) { g.c.add(this, "setOpacity"); a !== this.get("opacity", null, !0) && this.set("opacity", a) }, getOpacity: function () {
            return this.get("opacity",
                null, !0)
        }, show: function () { g.c.add(this, "show"); this.set("visible", !0); if (this.mq) { var a = this.get("map", null, !0); a && a.set("layers", a.get("layers", null, !0)) } }, hide: function () { g.c.add(this, "hide"); this.set("visible", !1); if (this.mq) { var a = this.get("map", null, !0); a && a.set("layers", a.get("layers", null, !0)) } }, setMap: function (a) { g.c.add(this, "setMap"); var b = this.get("map"); if (a) b && a !== b && b.lk(this), this.set("map", a); else if (b && (b.lk(this), this.set("map", null, !0), this.oi = !1, this.Ug && this.Ug(), this.onRemove)) this.onRemove() },
        getMap: function () { g.c.add(this, "getMap"); return this.get("map", null, !0) }, mapChanged: function () { var a = this.get("map"); a && a.wH(this) }, setzIndex: function (a) { g.c.add(this, "setzIndex"); this.set("zIndex", a) }, getzIndex: function () { return this.get("zIndex", null, !0) }
    }); z.o.ob = z.o.Tb.extend({
        B: { tileSize: 256, visible: !0, opacity: 1, zIndex: 0, noLimg: 1, zooms: [3, 20], getTileUrl: g.l.ba ? g.w.yE : g.w.sD, errorUrl: g.a.Boa, detectRetina: !0, className: "amap-layer", mapNumber: "", merge: !1, sort: !1, cacheSize: g.l.size }, r: function (a) {
        this.CLASS_NAME = this.CLASS_NAME || "AMap.TileLayer"; g.c.wa(this, a); (a = a || {}) && a.tileUrl && (a.getTileUrl = a.tileUrl); this.wma(a); var b = a.zooms; b && b[1] >= this.il[0] ? (b[0] < this.il[0] && (b[0] = this.il[0]), b[1] > this.il[1] && (b[1] = this.il[1])) : a.zooms = [this.il[0], this.il[1]];
            arguments.callee.la.call(this, a); a.kk && (this.kk = !0); this.oG = this.dq()
        }, setTextIndex: function (a) { g.c.add(this, "setTextIndex"); this.set("textIndex", a) }, dq: function () { if (this.get("createTile")) return !1; var a = this.get("getTileUrl"); return a && a !== g.w.sD && a !== g.w.yE ? !1 : !0 }, S1: function () { if (!this.dq()) return !1; var a = this.get("map"); return a && a.xi && "zh_cn" === a.get("lang") && !this.noVector ? !0 : !1 }, O3: function (a) {
            var b = g.w.wJ; g.l.ja && this.get("detectRetina") && (b = g.w.wJ.replace("scl=1", "scl=2")); a && (b = b.replace("ltype=3",
                "ltype=11")); return b
        }, Rf: function (a) {
            var b = this.S1(), c = this.get("map"); this.dq() && this.set("mapNumber", "GS(2018)1709"); if (this.kk) return new g.o.ob(this, a, this.ir(this.O3(!0)), this.B.maxDataZoom, !0); if (b) if (this.mq = !0, g.o.di) {
                if ("dv" === c.get("baseRender") && !this.get("watermark")) {
                    var b = c.get("showBuildingBlock"), d = new g.o.ob(this, a, this.ir(this.O3(!b)), void 0, !0); b && (d.ol = new g.o.md(new z.o.ob({ zooms: [16, 20], innerLayer: !0 }), a, ["building"]), d.ol.type = "\u697c\u5757\u56fe\u5c42", d.ol.Se(["visible",
                        "opacity", "zIndex"], d, !0), d.ol.fC(c.get("mapStyle") || "normal")); d.type = "\u6805\u683c\u5e95\u56fe"; return d
                } if ("v" <= c.get("baseRender") || this.get("watermark")) return "3D" == a.C.view.type ? (c = new g.o.md(this, a, ["region", "road"]), c.type = "\u77e2\u91cf\u5e95\u56fe", b = new z.o.ob({ zooms: [17, 20], zIndex: 50, innerLayer: !0 }), c.ol = new g.o.md(b, a, ["building"]), c.ol.Ye = 17, c.ol.type = "\u697c\u5757\u56fe\u5c42", c.ol.By = 1, c.ol.Se(["visible", "merge", "sort", "opacity"], c, !0), b.W("rejectMapMask", this, !0)) : (c = new g.o.md(this,
                    a, ["region", "building", "road"]), c.type = "\u77e2\u91cf\u5e95\u56fe"), a.Hla = c
            } else return ["vectorlayer", "overlay"]; else return this.mq = !1, new g.o.ob(this, a, null, this.B.maxDataZoom)
        }, getTileUrlChanged: function () { var a = this.get("getTileUrl"); if (a === g.w.sD || a === g.w.yE || a === g.w.vK) this.GJ = !0; "string" === typeof a && (a = this.ir(a)); this.set("tileFun", a) }, wma: function (a) {
        this.il || (this.il = [this.B.zooms[0], this.B.zooms[1]]); var b; a.hasOwnProperty("detectRetina") && !1 === a.detectRetina && (b = !0); g.l.ba && g.l.ja && this.B.detectRetina &&
            !b && (this.il[1] -= 1)
        }, getTiles: function () { g.c.add(this, "getTiles"); var a = this.get("tiles", null, !0); if (a && a.length) a = a[0]; else return []; for (var b = [], c, d = 0; d < a.length; d += 1)a[d].key && (c = a[d].key.split("/"), b.push("" + c[1] + "," + c[2])); return b }, reload: function () { g.c.add(this, "reload"); this.set("reload", 1) }, Ns: function () { this.D = !0; var a = this.get("map", null, !0); this.setMap(null); this.oi = !1; this.setMap(a); this.D = !1 }, setTileUrl: function (a) {
            g.c.add(this, "setTileUrl"); this.S1() ? (this.set("getTileUrl", a), this.Ns()) :
                this.set("getTileUrl", a)
        }, ir: function (a) { var b = this, c, d, e; return function (f, h, k) { f = (f + Math.pow(2, k)) % Math.pow(2, k); if ("number" !== typeof (f + h + k)) return null; var l = b.get("map"), m = "zh_cn"; l && (m = l.get("lang") || "zh_cn"); k = a.replace("[x]", f).replace("[y]", h).replace("[z]", k).replace("[lang]", m); if (!c) { if (d = a.match(/\{.*\}/)) e = d.toString().replace("{", "").replace("}", ""), e = e.split(","); c = !0 } e && e.length && (k = k.replace(d, e[Math.abs(f + h) % e.length])); return k } }, getTileUrl: function (a, b, c) {
            g.c.add(this, "getTileUrl");
            return this.get("tileFun", null, !0)(a, b, c)
        }, getZooms: function (a) { a || g.c.add(this, "getZooms"); return this.get("zooms", null, !0) }
    }); z.o.ob.eW = z.o.ob.extend({ B: { getTileUrl: g.w.WT, zooms: [3, 20], zIndex: 2, maxDataZoom: 18, detectRetina: !1, mapNumber: "GS(2019)3913", className: "amap-layer amap-satellite", cacheSize: g.l.size }, r: function (a) { this.CLASS_NAME = "AMap.TileLayer.Satellite"; g.c.wa(this, a); this.il = [3, 20]; arguments.callee.la.apply(this, arguments) } });
    z.o.ob.bW = z.o.ob.extend({
        B: { getTileUrl: g.w.vK, zooms: [3, 20], zIndex: 3, type: "overlayer", maxDataZoom: 18, className: "amap-layer amap-roadnet", cacheSize: g.l.size }, r: function (a) { this.CLASS_NAME = "AMap.TileLayer.RoadNet"; g.c.wa(this, a); this.il = [3, 20]; arguments.callee.la.apply(this, arguments) }, Rf: function (a) {
            if (this.get("map").xi) { this.mq = !0; var b = g.w.wK; g.l.ja && this.get("detectRetina") && (b = g.w.wK.replace("scl=1", "scl=2")); a = new g.o.ob(this, a, this.ir(b), this.B.maxDataZoom) } else this.mq = !1, a = new g.o.ob(this,
                a); return a
        }
    });
    z.o.ob.mW = z.o.ob.extend({
        B: { getTileUrl: function (a, b, c) { return g.w.Fc + "://tm.amap.com/trafficengine/mapabc/traffictile?v=1.0&t=1&zoom=" + (17 - c) + "&x=" + a + "&y=" + b }, zooms: [6, 20], zIndex: 4, type: "overlayer", autoRefresh: !1, interval: 180, maxDataZoom: 17, alwaysRender: !g.l.G2, className: "amap-layer amap-traffic", cacheSize: g.l.size }, r: function (a) { this.CLASS_NAME = "AMap.TileLayer.Traffic"; g.c.wa(this, a); this.il = [6, 20]; arguments.callee.la.apply(this, arguments); this.D = !0; this.startRefresh(); this.D = !1 }, stopRefresh: function () {
            g.c.add(this,
                "stopRefresh"); this.jK && (clearInterval(this.jK), this.jK = null)
        }, startRefresh: function () { g.c.add(this, "startRefresh"); if (this.get("autoRefresh") && !this.jK) { var a = this; this.jK = setInterval(function () { a.D = !0; a.reload(); a.D = !1; a.q("refresh") }, Math.max(1E3 * (this.get("interval") || 180), 1E4)) } }, reload: function () { g.c.add(this, "reload"); g.a.Rc(function () { this.set("reload") }, this) }, Ug: function () { this.D = !0; this.stopRefresh(); this.get("map") && this.get("map").G("zoomstart", this.reload, this); this.D = !1 }, Rf: function (a) {
            var b =
                this.get("map"), b = a.C; b.h("zoomstart", this.reload, this); return "d" !== b.get("baseRender") ? g.o.Iw ? a = new g.o.Iw(this, a) : ["vt"] : a = new g.o.ob(this, a, null, this.B.maxDataZoom)
        }
    });
    z.o.ob.bA = z.o.ob.extend({ B: { zooms: [3, 20], zIndex: 12, detectRetina: !1, className: "amap-layer amap-flexible", cacheSize: g.l.size }, r: function (a) { this.CLASS_NAME = this.CLASS_NAME || "AMap.TileLayer.Flexible"; g.c.wa(this, a); this.Gra = !0; arguments.callee.la.call(this, a) }, setCreateTile: function (a) { g.c.add(this, "setCreateTile"); "function" === typeof a && a !== this.get("createTile") && this.set("createTile", a) }, getCreateTile: function () { return this.get("createTile", null, !0) } });
    z.o.ob.Paa = z.o.ob.bA.extend({
        B: { zooms: [3, 20], zIndex: 12, tileSize: 512, detectRetina: !1, className: "amap-layer amap-wms", cacheSize: g.l.size, url: "", params: "" }, r: function (a) {
        this.CLASS_NAME = "AMap.TileLayer.WMS"; g.c.wa(this, a); arguments.callee.la.call(this, a); this.fw(); var b = this, c = this.get("tileSize"); this.set("createTile", function (a, e, f, h, k) {
            var l = Math.pow(2, 20 - f) * c; f = new g.H(l * a, l * (e + 1)); a = new g.H(l * (a + 1), l * e); e = g.vJ.B6(f); a = g.vJ.B6(a); var m = document.createElement("img"); "3D" === b.Bg && (m.crossOrigin = "anonymous");
            g.F.h(m, "load", function () { h(m) }); g.F.h(m, "error", function () { k(m) }); m.src = this.url + "&BBOX=" + e + "," + a
        })
        }, fw: function () { var a = this.get("url", null, !0), b = this.get("params", null, !0), c = this.get("tileSize"); b.WIDTH = c; b.HEIGHT = c; b.CRS = b.CRS || "EPSG:3857"; b.REQUEST = "GetMap"; b.SERVICE = "WMS"; b.FORMAT = b.FORMAT || "image/png"; b.TRANSPARENT = void 0 === b.TRANSPARENT ? "true" : b.TRANSPARENT; delete b.BBOX; this.url = a + "?" + g.a.join(b, "&"); this.D = !0; this.reload(); this.D = !1 }, setUrl: function (a) {
            g.c.add(this, "setUrl"); this.set("url",
                a, !0); this.fw()
        }, getUrl: function () { g.c.add(this, "getUrl"); return this.get("url", null, !0) }, setParams: function (a) { g.c.add(this, "setParams"); g.extend(this.get("params", null, !0), a || {}); this.fw() }, getParams: function () { g.c.add(this, "getParams"); return this.get("params", null, !0) }
    });
    z.o.ob.Qaa = z.o.ob.bA.extend({
        B: { zooms: [3, 20], tileSize: 256, zIndex: 12, detectRetina: !1, className: "amap-layer amap-wmts", cacheSize: g.l.size }, r: function (a) {
        this.CLASS_NAME = "AMap.TileLayer.WMTS"; g.c.wa(this, a); arguments.callee.la.call(this, a); this.fw(); var b = this; this.get("tileSize"); this.set("createTile", function (a, d, e, f, h) {
            var k = document.createElement("img"); "3D" === b.Bg && (k.crossOrigin = "anonymous"); g.F.h(k, "load", function () { f(k) }); g.F.h(k, "error", function () { h(k) }); k.src = this.url + "&TileMatrix=" + e + "&TileRow=" +
                d + "&TileCol=" + a
        })
        }, fw: function () { var a = this.get("url", null, !0), b = this.get("params", null, !0); b.TileMatrixSet = b.TileMatrixSet || "EPSG:3857"; b.Request = "GetTile"; b.Service = "WMTS"; b.Format = b.Format || "image/png"; this.url = a + "?" + g.a.join(b, "&"); this.D = !0; this.reload(); this.D = !1 }, setUrl: function (a) { g.c.add(this, "setUrl"); this.set("url", a, !0); this.fw() }, getUrl: function () { g.c.add(this, "getUrl"); return this.get("url", null, !0) }, setParams: function (a) {
            g.c.add(this, "setParams"); g.extend(this.get("params", null, !0),
                a || {}); this.fw()
        }, getParams: function () { g.c.add(this, "getParams"); return this.get("params", null, !0) }
    });
    z.o.ob.cF = z.o.ob.bA.extend({
        B: { detectRetina: !0, zooms: [10, 18], zIndex: 2 }, r: function (a) {
            arguments.callee.la.apply(this, arguments); var b = this; this.set("createTile", function (a, d, e, f, h) {
                var k = b.Je.map.map; k.Ch.Cz(a, d, e, function (l) {
                    if (l) h(); else {
                        var m = document.createElement("img"); "3D" === b.Bg && (m.crossOrigin = "anonymous"); g.F.h(m, "load", function () { f(m) }); g.F.h(m, "error", function () { h(m) }); m.src = function (a, c, d) {
                            var e = "zh_cn"; b && b.get && k && (e = k.get("lang") || "zh_cn"); return g.w.Fc + "://grid.amap.com/grid/" + d + "/" +
                                a + "/" + c + "?src=jsapi&key=" + g.w.key + "&lang=" + e + "&dpiType=" + (g.l.Mc ? "wprd" : "webrd")
                        }(a, d, e)
                    }
                })
            })
        }
    }); z.o.bd = z.o.Tb.extend({ B: { visible: !0, zooms: [3, 25], type: "overlay", zIndex: 5, alwaysRender: !0 }, r: function (a) { this.L4 = !0; arguments.callee.la.apply(this, arguments) }, Rf: function (a) { return new g.o.bd(this, a) } }); z.o.f$ = z.o.Tb.extend({ B: { zooms: [14, 20], zIndex: 8, visible: !0, merge: !0, sort: !1 }, r: function (a) { this.CLASS_NAME = "AMap.Buildings"; g.c.wa(this, a); a = a || {}; a.zooms && (a.zooms[0] = Math.max(14, a.zooms[0])); arguments.callee.la.apply(this, arguments) }, dq: function () { return !1 }, Rf: function (a) { if (g.l.pu) return a = new g.o.Maa(this, a), a.By = this.get("heightFactor") || 1, a }, setStyle: function (a) { this.set("customStyle", a); g.c.add(this, "setStyle") } }); z.o.lL = z.o.Tb.extend({
        B: { visible: !0, zooms: [3, g.l.ba ? 20 : 18], opacity: 1, type: "overlay", zIndex: 6 }, r: function (a) { arguments.callee.la.apply(this, arguments) }, Rf: function (a) { return g.o.eA ? new g.o.eA(this, a) : ["imagelayer"] }, getMap: function () { g.c.add(this, "getMap"); return this.Je.map }, show: function () { g.c.add(this, "show"); this.set("visible", !0); this.q("options") }, getOpacity: function () { g.c.add(this, "getOpacity"); return this.get("opacity", null, !0) }, setOpacity: function (a) {
            g.c.add(this, "setOpacity"); this.set("opacity",
                a)
        }, getBounds: function () { g.c.add(this, "getBounds"); return this.get("bounds", null, !0).lb() }, setBounds: function (a) { g.c.add(this, "setBounds"); this.q("bounds", a); this.D = !0; this.setOptions({ bounds: a }); this.D = !1 }, hide: function () { g.c.add(this, "hide"); this.set("visible", !1); this.q("options") }, setOptions: function (a) { g.c.add(this, "setOptions"); this.Ze(a); this.q("options") }, getOptions: function () { g.c.add(this, "getOptions"); var a = {}, b; for (b in this.B) this.B.hasOwnProperty(b) && (a[b] = this.get(b)); return a }, getElement: function () {
            return this.o.M ?
                this.o.M.bc : this.o.gg ? this.o.gg.bc : null
        }
    }); z.o.eA = z.o.lL.extend({ r: function (a) { this.CLASS_NAME = "AMap.ImageLayer"; g.c.wa(this, a); a && a.url && (a.__source__ = a.url); arguments.callee.la.apply(this, arguments) }, getImageUrl: function () { g.c.add(this, "getImageUrl"); return this.get("__source__") }, setImageUrl: function (a) { g.c.add(this, "setImageUrl"); return this.set("__source__", a) } });
    z.o.Oaa = z.o.lL.extend({ r: function (a) { this.CLASS_NAME = "AMap.VideoLayer"; g.c.wa(this, a); a && a.url && (a.__source__ = a.url); arguments.callee.la.apply(this, arguments) }, getVideoUrl: function () { g.c.add(this, "getVideoUrl"); return this.get("__source__") }, setVideoUrl: function (a) { g.c.add(this, "setVideoUrl"); return this.set("__source__", a) } });
    z.o.h$ = z.o.lL.extend({ r: function (a) { this.CLASS_NAME = "AMap.CanvasLayer"; g.c.wa(this, a); a && a.canvas && (a.__source__ = a.canvas); arguments.callee.la.apply(this, arguments) }, getCanvas: function () { g.c.add(this, "getCanvas"); return this.get("__source__") }, setCanvas: function (a) { g.c.add(this, "setCanvas"); return this.set("__source__", a) }, reFresh: function () { this.o && (this.o.pE = !0, this.o.set("display")) } }); z.o.aaa = z.o.Tb.extend({
        B: { visible: !0, zooms: [3, 20], type: "overlay", zIndex: 5, cursor: "pointer", alwaysRender: !0, stable: !0, bubble: !0, rejectMapMask: !0, className: "amap-mass" }, r: function (a, b) { this.CLASS_NAME = "AMap.MassMarks"; g.c.wa(this, b); g.l.$k && (this.sj = !0, b.size && (b.size = g.a.tq(b.size)), this.D = !0, this.setData(a), g.a.Db(this, b), b.style ? (this.Ze(this.B, !0), this.setStyle(b.style)) : this.setStyle(this.B), this.D = !1) }, clear: function () { g.c.add(this, "clear"); this.set("dataSources", "") }, getStyle: function () {
            g.c.add(this,
                "getStyle"); return this.xm
        }, setStyle: function (a) {
            g.c.add(this, "setStyle"); if (a instanceof Array) { for (var b = 0; b < a.length; b += 1)a[b].rotation_ = Math.PI * (a[b].rotation || 0) / 180, a[b].size = g.a.tq(a[b].size), a.rf = Math.max(a.rf || 0, a[b].size.width + a[b].anchor.x), a.eg = Math.max(a.rf || 0, a[b].size.height + a[b].anchor.y); this.xm = a } else a.size && (a.size = g.a.tq(a.size)), a.rotation_ = Math.PI * (a.rotation || 0) / 180, this.Ze(a, !0), this.xm = { anchor: this.get("anchor"), url: this.get("url"), size: this.get("size"), rotation_: this.get("rotation_") },
                this.xm.rf = this.xm.size.width + this.xm.anchor.x, this.xm.eg = this.xm.size.height + this.xm.anchor.y; this.q("style")
        }, setData: function (a) { g.c.add(this, "setData"); this.set("dataSources", a) }, getData: function () { g.c.add(this, "getData"); return this.get("datas") || this.get("dataSources") }, setMap: function (a) { g.c.add(this, "setMap"); g.l.$k && (a ? (this.get("map") && this.get("map").lk(this), this.set("map", a)) : this.get("map") && (this.get("map").lk(this), this.set("map", null, !0), this.oi = !1, this.Ug && this.Ug())) }, Rf: function (a) {
            return g.rb.lD(["cvector"]) ?
                (a = new g.o.bd(this, a), this.W("datas", a), a) : ["cvector"]
        }
    }); z.o.l$ = z.o.Tb.extend({
        r: function (a) { this.CLASS_NAME = "AMap.CompositeLayer"; this.nG = !0; g.a.Db(this, a); this.Pm = []; this.Ze(this.B) }, opacityChanged: function () { for (var a = this.get("opacity", null, !0), b = -1, c = this.Pm.length; ++b < c;)this.Pm[b].setOpacity(a) }, addLayer: function (a) { if (!this.has(a)) { a.AA = this; var b = this.get("map"); a.setMap(b); this.Pm.push(a) } return this }, removeLayer: function (a) { this.has(a) && a.setMap(null); return this }, cka: function (a) {
            if (this.has(a)) {
                delete a.AA; var b = this.Pm; a = g.a.indexOf(b, a); g.a.uo(b,
                    a)
            }
        }, has: function (a) { return -1 !== g.a.indexOf(this.Pm, a) }, show: function () { for (var a = -1, b = this.Pm.length; ++a < b;)this.Pm[a].show() }, hide: function () { for (var a = -1, b = this.Pm.length; ++a < b;)this.Pm[a].hide() }, setzIndex: function (a, b) { g.c.add(this, "setzIndex"); this.set("zIndex", a); var c = this.Pm; if ("undefined" === typeof b) for (var d = -1, e = c.length; ++d < e;) { var f = c[d]; f.setzIndex(a) } else (f = c[b]) && f.setzIndex(a) }, Rf: function (a) { this.e = a }, getLayers: function () { return this.Pm }
    }); z.o.$q = z.o.Tb.extend({
        P$: { visible: !0, zIndex: 20, opacity: 1, zooms: [3, 20], collision: !0, animation: !0, alwaysRender: !0 }, B: { zooms: [3, 20] }, Zr: function () { this.f && this.f.rz(this.Ti) }, r: function (a) { this.CLASS_NAME = this.CLASS_NAME || "AMap.LabelsLayer"; a = a || {}; g.c.wa(this, a); arguments.callee.la.apply(this, arguments); this.B = this.P$; g.a.Db(this, a); this.Ze(this.B); this.Ti = []; this.ib = []; this.xu = []; this.BQ = { click: 0, mouseover: 0, mousemove: 0, mouseout: 0, mousedown: 0, mouseup: 0, touchstart: 0, touchend: 0 } }, UY: function () {
            var a =
                this; return g.a.pD(function (b) { var c = a.f; c ? c.rz(b) : a.XC = b }, 100)
        }, rz: function (a) { this.q0(a) }, xo: function (a, b) { for (var c = b._LabelMarkerId || null, d = 0; d < a.length; d++)if (a[d].data.id === c) return d; return -1 }, removeItem: function () { }, yf: function (a) { return "undefined" === typeof a }, mZ: function (a) { return "string" === typeof a }, Hfa: function (a) { return "number" === typeof a }, fG: function () {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : []; return this.yf(a.width) || this.yf(a.height) ? this.mZ(a) ? a.split(",") : this.Hfa(a) ?
                [a, a] : a : [a.width, a.height]
        }, tea: function () { var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : []; return this.yf(a.Q) || this.yf(a.P) ? this.mZ(a) ? a.split(",") : a : [a.Q, a.P] }, zga: function (a) {
        "string" === typeof a && (a = a.trim(), a = a.split(" ")); if ("[object Array]" === Object.prototype.toString.apply(a)) {
            for (var b = a.length, c = 0; c < b; c++) { var d = parseInt(a[c]); a[c] = isNaN(d) ? 3 : d } switch (b) {
                case 0: a = [3, 3, 3, 3]; break; case 1: a = [a[0], a[0], a[0], a[0]]; break; case 2: a = [a[0], a[1], a[0], a[1]]; break; case 3: a = [a[0], a[1],
                a[2], a[1]]
            }return a
        } return [3, 3, 3, 3]
        }, add: function (a) {
            g.c.add(this, "add"); if (a) {
                a = "[object Array]" !== Object.prototype.toString.apply(a) ? [a] : a; for (var b = 0; b < a.length; b++) {
                    var c = a[b]; if (c) {
                    c.f = this; var d = c.B, e = { data: { id: c._LabelMarkerId || void 0, name: d.title || "", position: this.tea(d.position) || void 0, rank: d.rank || void 0 }, opts: { zooms: d.zooms || void 0, opacity: "number" === typeof d.opacity ? d.opacity : 1, zIndex: "number" === typeof d.zIndex ? d.zIndex : 1, height: "number" === typeof d.height ? d.height : 0, icon: {}, text: {} } };
                        if (d.icon) { var f = d.icon, h = f.size, k = f.clipSize; h && (f.size = this.fG(h)); k && (f.clipSize = this.fG(k)); e.opts.icon = d.icon } d.text && (e.opts.text = d.text, d.text.content && (e.data.txt = d.text.content), (d = (d = e.opts.text.style) && d.padding) && (e.opts.text.style.padding = this.zga(d))); this.Ti.push(e); this.ib.push(c)
                    }
                } this.Zr(); b = a.length; for (c = 0; c < b; c++)(e = a[c]) && e.X7 && e.X7()
            }
        }, remove: function (a) { g.c.add(this, "remove"); this.Ti && (a = this.xo(this.Ti, a), -1 !== a && (this.Ti.splice(a, 1), this.ib.splice(a, 1), this.Zr())) }, clear: function () {
            g.c.add(this,
                "clear"); this.f && this.f.clear(); this.Ti = []; this.ib = []
        }, Rf: function (a) { this.get("map") || this.set("map", a.C, !0); if (g.o.$q) { this.f = new g.o.$q(this, a); this.Ti && this.Zr(); a = this.xu; if (a.length) { for (var b = 0; b < a.length; b++)this.on.apply(this, a[b]); this.xu = [] } return this.f } return ["AMap.LabelsLayer"] }, setPosition: function () { }, positionChanged: function () { }, on: function (a) { g.c.add(this, "on"); this.f ? (this.yh(arguments), this.f.t1(a)) : this.xu.push(arguments) }, off: function (a) { g.c.add(this, "off"); this.f && this.f.v9(a) }
    }); z.o.sL = z.o.eA.extend({
        r: function (a, b, c) { this.CLASS_NAME = "AMap.GroundImage"; g.c.wa(this, c); c = c || {}; this.Rg = !0; var d = parseFloat(c.opacity); isNaN(d) && (d = 1); arguments.callee.la.call(this, { url: a, bounds: b, clickable: c.clickable, opacity: d, map: c.map, zooms: c.zooms || [3, 20] }); this.CLASS_NAME = "AMap.GroundImage" }, Gta: function (a) { this.get("bounds").contains(a.lnglat) && (a.target = this, this.q("click", a)) }, Hta: function (a) { this.get("bounds").contains(a.lnglat) && (a.target = this, this.q("dblclick", a)) }, setMap: function (a) {
            g.c.add(this,
                "setMap"); a ? (this.get("map") && (this.get("map").lk(this), this.c2 && z.event.removeListener(this.c2), this.v2 && z.event.removeListener(this.v2)), this.set("map", a)) : this.get("map") && (this.get("map").lk(this), this.Je.map = null)
        }, mapChanged: function () { this.get("map") && (this.get("map").wH(this), this.get("clickable") && (this.c2 = z.event.addListener(this.get("map"), "click", this.Gta, this), this.v2 = z.event.addListener(this.get("map"), "dblclick", this.Hta, this))) }
    }); z.A.Bh = g.aa.extend({
        ka: [g.va, g.Re, { Ia: g.a.Ia }], B: { extData: {}, bubble: !1, clickable: !0, draggable: !1 }, r: function () { this.vG = g.a.vb(this) }, uDa: function () { return this.vG }, YBa: function () { this.D = !0; this.get("map", null, !0) && this.setMap(this.get("map")); this.D = !1 }, mapChanged: function () { this.get("map", null, !0) && this.get("map", null, !0).XB(this) }, JQ: function (a) { var b = 0; a && (b = "string" === typeof a ? Math.round(parseFloat(a) / 0.14929107086948487) : a); return b }, setHeight: function (a) {
        this.height = a = a || 0; a = this.JQ(a); this.set("altitude",
            a)
        }, getHeight: function () { return this.height }, show: function () { g.c.add(this, "show"); this.set("visible", !0) }, hide: function () { g.c.add(this, "hide"); this.set("visible", !1) }, setMap: function (a) { g.c.add(this, "setMap"); a !== this.get("map", null, !0) && (a ? (this.get("map", null, !0) && this.get("map", null, !0).kz(this), this.set("map", a)) : this.get("map", null, !0) && (this.get("map", null, !0).kz(this), this.set("map", null, !0))) }, getMap: function () { g.c.add(this, "getMap"); return this.get("map", null, !0) }, setExtData: function (a) {
            g.c.add(this,
                "setExtData"); this.set("extData", a)
        }, positionChanged: function () { }, getExtData: function () { g.c.add(this, "getExtData"); return this.get("extData", null, !0) }
    }); z.A.bd = z.A.Bh.extend({
        r: function (a) { z.A.bd.Vc.r.apply(this, arguments) }, show: function () { g.c.add(this, "show"); this.set("visible", !0); this.q("show", { type: "show", target: this }) }, hide: function () { g.c.add(this, "hide"); this.set("visible", !1); this.q("hide", { type: "hide", target: this }) }, getVisible: function () { g.c.add(this, "getVisible"); return this.get("visible", null, !0) }, getOptions: function () {
            g.c.add(this, "getOptions"); var a = {}, b = "map zIndex strokeColor strokeOpacity strokeWeight strokeStyle strokeDasharray extData bubble clickable".split(" "),
                c = "isOutline outlineColor geodesic path lineJoin lineCap borderWeight showDir dirColor dirImg".split(" "), d = ["fillColor", "fillOpacity", "path", "lineJoin", "texture"], e = ["center", "radius", "texture"], f = ["bounds", "texture"], h = []; this instanceof z.A.Xb && (h = b.concat(c)); this instanceof z.A.zc && (h = b.concat(d)); this instanceof z.A.$g && (h = b.concat(e).concat(d)); this instanceof z.A.qt && (h = b.concat(e).concat(d)); this instanceof z.A.wt && (h = b.concat(d).concat(f)); for (b = 0; b < h.length; b += 1)a[h[b]] = this.get(h[b], null,
                    !0); return a
        }, setOptions: function (a) { g.c.add(this, "setOptions"); a.hasOwnProperty("path") && (a.path && a.path.length || (a.path = []), a.path = this.Ia(a.path)); a.center && (a.center = this.Ia(a.center)); var b; a.hasOwnProperty("map") && (b = a.map, delete a.map); this.Ze(a); void 0 !== b && (this.setMap(b), a.map = b); this.q("options"); this.q("change", { type: "change", target: this }) }, setzIndex: function (a) { g.c.add(this, "setzIndex"); this.set("zIndex", a) }, getzIndex: function () {
            g.c.add(this, "getzIndex"); return this.get("zIndex", null,
                !0)
        }, setDraggable: function (a) { g.c.add(this, "setDraggable"); this.set("draggable", a) }
    }); z.A.oF = z.A.bd.extend({
        B: { visible: !0, zIndex: 10, strokeColor: "#006600", strokeOpacity: 0.9, strokeWeight: 3, strokeStyle: "solid", strokeDasharray: [10, 5], lineJoin: "miter", lineCap: "butt", path: [] }, r: function (a) { z.A.oF.Vc.r.apply(this, arguments) }, setPath: function (a, b) { g.c.add(this, "setPath"); a && a.length || (a = []); a = this.Ia(a); this.A && this.A.get("deltaPos") && this.A.set("deltaPos", [0, 0], !0); this.set("path", a); this.q("change", { type: "change", target: this }); b || this.q("setPath") }, getPath: function () {
            g.c.add(this, "getPath");
            return this.i2()
        }, reset: function () { var a = this.i2(); this.A.set("deltaPos", [0, 0], !0); this.set("path", a) }, i2: function () { var a = this.get("path", null, !0); this.A && this.A.get("deltaPos") && (a = this.A.QA(a, this.A.get("deltaPos"))); return a }, od: function () { var a = this.get("path"); if (!a || !a.length) return null; a[0] instanceof g.U && (a = [a]); for (var b = new g.re(180, 90, -180, -90), c = 0; c < a.length; c += 1)for (var d = a[c], e = d.length - 1; 0 <= e; e -= 1)b.extend(d[e]); return b }
    }); z.A.oF.Ob({ od: "getBounds" }); z.A.ci = g.aa.extend({ ka: [g.va, g.Re], B: { size: new g.xd(36, 36), imageOffset: new g.H(0, 0), image: g.w.yb + "/theme/v1.3/markers/0.png", imageSize: null }, r: function (a) { this.CLASS_NAME = "AMap.Icon"; g.c.wa(this, a); a = a || {}; a.size && (a.size = g.a.tq(a.size)); a.imageSize && (a.imageSize = g.a.tq(a.imageSize)); g.a.Db(this, a); this.Ze(this.B) }, setImageSize: function (a) { g.c.add(this, "setImageSize"); a = g.a.tq(a); this.set("imageSize", a) }, getImageSize: function () { g.c.add(this, "getImageSize"); return this.get("imageSize", null, !0) } }); z.A.Z$ = g.aa.extend({ ka: [g.va, g.Re], B: { coords: [], type: "" }, r: function (a) { this.CLASS_NAME = "AMap.MarkerShape"; g.c.wa(this, a); g.a.Db(this, a); this.Ze(this.B) } }); z.A.sb = z.A.Bh.extend({
        B: { cursor: "pointer", visible: !0, zIndex: 100, angle: 0, textAlign: "left", verticalAlign: "top", autoRotation: !1, opacity: 1, offset: new g.H(-9, -31), size: new g.H(19, 33), raiseOnDrag: !1, topWhenClick: !1, topWhenMouseOver: !1, animation: "AMAP_ANIMATION_NONE" }, r: function (a) {
        this.CLASS_NAME = this.CLASS_NAME || "AMap.Marker"; g.c.wa(this, a); a = a || {}; this.Rg = !0; this.oga = g.a.vb(this); this.D = !0; a.position && (a.position = this.Ia(a.position)); a.height && this.setHeight(a.height); g.a.Db(this, a); g.l.ye && (this.B.angle =
            0); this.Ze(this.B, !0); this.mapChanged(); this.D = !1
        }, getAnchor: function () { g.c.add(this, "getAnchor"); return this.get("anchor", null, !0) }, setAnchor: function (a) { g.c.add(this, "setAnchor"); this.set("anchor", a) }, getId: function () { g.c.add(this, "getId"); return this.oga }, setRaiseOnDrag: function (a) { g.c.add(this, "setRaiseOnDrag"); this.set("raiseOnDrag", a) }, setPosition: function (a, b) { g.c.add(this, "setPosition"); a = this.Ia(a); void 0 !== b && (this.D = !0, this.setHeight(b), this.D = !1); this.set("position", a) }, getPosition: function () {
            g.c.add(this,
                "getPosition"); return this.get("position", null, !0)
        }, getBounds: function () { var a = this.get("position", null, !0).lb(); return new g.re(a, a.lb()) }, mapChanged: function () { this.sl("zoom"); var a = this.get("map", null, !0); a && (this.get("position", null, !0) || this.set("position", a.get("center")), a.XB(this), this.W("zoom", a)) }, getZooms: function () { g.c.add(this, "getZooms"); return this.get("zooms", null, !0) }, zoomChanged: function () {
            var a = this.get("zooms", null, !0); if (a) {
                var b = this.get("zoom"); b < a[0] || b > a[1] ? this.set("outOfZooms",
                    !0) : this.set("outOfZooms", !1); this.A && this.A.cua()
            }
        }, setIcon: function (a) { g.c.add(this, "setIcon"); this.set("icon", a) }, getIcon: function () { g.c.add(this, "getIcon"); return this.get("icon", null, !0) }, setContent: function (a) { g.c.add(this, "setContent"); this.set("content", a) }, getContent: function () { g.c.add(this, "getContent"); return this.get("content", null, !0) }, getContentDom: function () { return this.get("contentDom", null, !0) }, hide: function () { g.c.add(this, "hide"); this.set("visible", !1) }, show: function () {
            g.c.add(this,
                "show"); this.set("visible", !0)
        }, setCursor: function (a) { g.c.add(this, "setCursor"); this.set("cursor", a) }, setRotation: function (a) { g.c.add(this, "setRotation"); g.l.ye || this.set("angle", a) }, setAngle: function (a) { g.c.add(this, "setAngle"); g.l.ye || "number" !== typeof a || this.set("angle", a) }, getAngle: function () { g.c.add(this, "getAngle"); return this.get("angle", null, !0) }, setOffset: function (a) { g.c.add(this, "setOffset"); this.set("offset", a) }, getOffset: function () {
            g.c.add(this, "getOffset"); return this.get("offset", null,
                !0)
        }, setTextAlign: function (a) { g.c.add(this, "setTextAlign"); this.set("textAlign", a) }, getTextAlign: function () { g.c.add(this, "getTextAlign"); return this.get("textAlign", null, !0) }, setVerticalAlign: function (a) { g.c.add(this, "setVerticalAlign"); this.set("verticalAlign", a) }, getVerticalAlign: function () { g.c.add(this, "getVerticalAlign"); return this.get("verticalAlign", null, !0) }, setzIndex: function (a) { g.c.add(this, "setzIndex"); this.set("zIndex", a) }, getzIndex: function () {
            g.c.add(this, "getzIndex"); return this.get("zIndex",
                null, !0)
        }, setOpacity: function (a) { g.c.add(this, "setOpacity"); this.set("opacity", a) }, setDraggable: function (a) { g.c.add(this, "setDraggable"); this.set("draggable", a) }, getDraggable: function () { g.c.add(this, "getDraggable"); return this.get("draggable", null, !0) }, moveTo: function (a, b, c) { g.c.add(this, "moveTo"); a = this.Ia(a); this.set("move", { Zf: a, speed: b, tb: c }) }, moveAlong: function (a, b, c, d) {
            g.c.add(this, "moveAlong"); if (!(2 > a.length)) {
                a = this.Ia(a); for (var e = [a[0]], f = a[0], h = 1; h < a.length; h += 1)f.cb(a[h]) || e.push(a[h]);
                this.set("move", { Zf: e, speed: b, tb: c, Dma: d })
            }
        }, stopMove: function () { g.c.add(this, "stopMove"); this.set("move", !1) }, pauseMove: function () { g.c.add(this, "pauseMove"); var a = this.get("move"); if (!a) return !1; a.action = "pause"; this.set("move", a); return !0 }, resumeMove: function () { g.c.add(this, "resumeMove"); var a = this.get("move"); if (!a) return !1; a.action = "resume"; this.set("move", a); return !0 }, setShadow: function (a) { g.c.add(this, "setShadow"); this.set("shadow", a) }, getShadow: function () {
            g.c.add(this, "getShadow"); return this.get("shadow",
                null, !0)
        }, setClickable: function (a) { g.c.add(this, "setClickable"); a !== this.get("clickable", null, !0) && this.set("clickable", a) }, getClickable: function () { g.c.add(this, "getClickable"); return this.get("clickable", null, !0) }, setTitle: function (a, b) { g.c.add(this, "setTitle"); "string" === typeof a && this.set("title", a, b) }, getTitle: function () { g.c.add(this, "getTitle"); return this.get("title", null, !0) }, setLabel: function (a) {
            g.c.add(this, "setLabel"); a && !g.a.qh(a) && (a = g.extend({}, this.get("label"), a)); this.set("label",
                a)
        }, getLabel: function () { g.c.add(this, "getLabel"); return this.get("label", null, !0) }, setTop: function (a, b) { g.c.add(this, "setTop"); this.set("isTop", a, b) }, getTop: function () { g.c.add(this, "getTop"); return this.get("isTop", null, !0) }, setShape: function (a, b) { g.c.add(this, "setShape"); this.set("shape", a, b) }, getShape: function () { g.c.add(this, "getShape"); return this.get("shape", null, !0) }, setAnimation: function (a, b) { g.c.add(this, "setAnimation"); this.set("animation", a, b) }, getAnimation: function () {
            g.c.add(this, "getAnimation");
            return this.get("animation", null, !0)
        }, getMap: function () { g.c.add(this, "getMap"); return this.get("map", null, !0) }, markOnAMAP: function (a) { g.c.add(this, "markOnAMAP"); a = a || {}; var b = {}; b.name = a.name || this.get("name", null, !0) || ""; a = this.Ia(a.position) || this.get("position", null, !0); b.y = a.P; b.x = a.Q; g.$h.$s(g.$h.hqa(b)) }
    }); z.A.S$ = z.A.Bh.extend({
        B: { position: null, zooms: [3, 20], opacity: 1, visible: !0 }, r: function (a) { a = a || {}; this.CLASS_NAME = this.CLASS_NAME || "AMap.LabelMarker"; g.c.wa(this, a); arguments.callee.la.apply(this, arguments); this._LabelMarkerId = g.a.vb(this); g.a.Db(this, a); this.Ze(this.B, !0); this.CQ = []; this.bC = {} }, xo: function (a, b) { for (var c = b._LabelMarkerId || null, d = 0, e = a.length; d < e; d++)if (a[d].data.id === c) return d; return -1 }, X7: function () {
            var a = this.CQ || []; if (a.length) {
                for (var b = 0, c = a.length; b < c; b++)this.on.apply(this,
                    a[b]); this.CQ = []
            }
        }, getBounds: function () { g.c.add(this, "getBounds"); var a = this.get("position", null, !0); try { return "string" === typeof a ? a = new g.U(a.split(",")) : "[object Array]" == Object.prototype.toString.apply(a) && (a = new g.U(a[0], a[1])), new g.re(a, a.lb()) } catch (b) { return null } }, getPosition: function () { g.c.add(this, "getPosition"); var a = this.f.Ti, b = this.xo(a, this); return -1 !== b ? a[b].data.position : null }, setPosition: function (a) {
            g.c.add(this, "setPosition"); var b = this.f.Ti, c = this.xo(b, this); -1 !== c && (b[c].data.position =
                a); this.f.Zr()
        }, getZooms: function () { g.c.add(this, "getZooms"); var a = this.f.Ti, b = this.xo(a, this); return -1 !== b ? a[b].opts.zooms : null }, setZooms: function (a) { g.c.add(this, "setZooms"); var b = this.f.Ti, c = this.xo(b, this); -1 !== c && (b[c].opts.zooms = a); this.f.Zr() }, getOpacity: function () { g.c.add(this, "getOpacity"); var a = this.f.Ti, b = this.xo(a, this); return -1 !== b ? a[b].opts.opacity : null }, setOpacity: function (a) { g.c.add(this, "setOpacity"); var b = this.f.Ti, c = this.xo(b, this); -1 !== c && (b[c].opts.opacity = a); this.f.Zr() }, setIcon: function (a) {
            var b =
                this.f.Ti, c = this.xo(b, this); if (-1 !== c) { var d = a.size, e = a.clipSize; d && (a.size = this.f.fG(d)); e && (a.clipSize = this.f.fG(e)); b[c].opts.icon = g.extend({}, b[c].opts.icon, a) } this.f.Zr()
        }, setText: function (a) { var b = this.f.Ti, c = this.xo(b, this); -1 !== c && (b[c].data.txt = void 0 == a.content ? b[c].data.txt : a.content, b[c].opts.text = g.extend({}, b[c].opts.text, a), a.style && (b[c].opts.text.style = g.extend({}, b[c].opts.text.style, a.style)), this.f.Zr()) }, on: function (a, b) {
            g.c.add(this, "on"); if (this.f) {
            this.bC[a] = b; var c = this, d =
                this.f; d._markerBindArray || (d._markerBindArray = {}); var e = this._LabelMarkerId; d._markerBindArray[e] || (d._markerBindArray[e] = this); d.BQ[a] ? d.BQ[a]++ : (d.BQ[a] = 1, this.f.on(a, function (a) { var b = a.type; if (a && a.data && a.data.data && a.data.data.id && a.data.data.id) { var d = a.data.data.id, b = (d = c.f && c.f._markerBindArray && c.f._markerBindArray[d]) && d.bC[b]; d && b && (a.target = d, "function" === typeof b && b(a)) } }))
            } else this.CQ.push(arguments)
        }, off: function (a) {
            g.c.add(this, "off"); this.bC[a] && delete this.bC[a]; Object.keys(this.bC).length ||
                delete this.f._markerBindArray[this._LabelMarkerId]
        }
    }); z.A.Jn = z.A.Bh.extend({
        B: { visible: !1, items: [] }, r: function (a) { this.CLASS_NAME = "AMap.ContextMenu"; g.c.wa(this, a); this.Rg = !0; g.a.Db(this, a); this.B.items = []; this.Ze(this.B) }, addItem: function (a, b, c) { g.c.add(this, "addItem"); this.get("items").push({ Gn: a, tb: b, SJ: c }); this.q("items") }, removeItem: function (a, b) { g.c.add(this, "removeItem"); var c = this.get("items"), d, e; for (e = 0; e < c.length; e += 1)if (d = c[e], d.Gn === a && d.tb === b) { c.splice(e, 1); break } this.q("items") }, open: function (a, b) {
            g.c.add(this, "open"); this.D = !0; b = g.a.Ia(b);
            this.set("position", b); this.map ? this.map && this.map !== a && (this.map.kz(this), this.map = a, this.setMap(a)) : (this.map = a, this.setMap(a)); this.q("open", { type: "open", target: this }); this.D = !1
        }, close: function () { g.c.add(this, "close"); this.D = !0; this.setMap(null); this.map && (this.map = this.map.Vx = null, this.q("close", { type: "close", target: this })); this.D = !1 }
    }); z.A.Qe = z.A.Bh.extend({
        B: { visible: !0, offset: new g.H(0, 0), showShadow: !1, closeWhenClickMap: !1, retainWhenClose: !0, autoMove: !0, altitude: 0, anchor: "bottom-center" }, r: function (a) { this.CLASS_NAME = this.CLASS_NAME || "AMap.InfoWindow"; g.c.wa(this, a); a = a || {}; this.Rg = !0; a && a.size && (a.size = g.a.tq(a.size)); g.a.Db(this, a); this.Ze(this.B); a.position && this.set("position", g.a.Ia(a.position), !0); a.height && this.set("altitude", this.JQ(a.height), !0) }, open: function (a, b, c) {
            g.c.add(this, "open"); b = g.a.Ia(b); if (a && !this.PK && (b =
                b || this.get("position", null, !0))) { this.q("change", { type: "change", target: this }); c = this.JQ(c) || this.get("altitude"); var d = this.get("map", null, !0); d && d === a ? (this.set("altitude", c, !0), this.set("position", b)) : (this.map = a, a.nm && a.nm.close(), this.set("position", b, !0), this.set("altitude", c, !0), this.D = !0, this.setMap(a), this.D = !1); this.q("open", { type: "open", target: this }) }
        }, close: function () {
            g.c.add(this, "close"); this.A && this.A.map && (this.D = !0, this.setMap(null), this.map = null, this.q("change", { type: "change", target: this }),
                this.D = !1)
        }, getAnchor: function () { g.c.add(this, "getAnchor"); return this.get("anchor", null, !0) }, setAnchor: function (a) { g.c.add(this, "setAnchor"); this.set("anchor", a); this.q("change", { type: "change", target: this }) }, setContent: function (a) { g.c.add(this, "setContent"); this.set("content", a); this.q("change", { type: "change", target: this }) }, getContentU: function () { g.c.add(this, "getContentU"); return this.get("content", null, !0) }, getContentDom: function () { return this.get("contentDom", null, !0) }, getContent: function () {
            g.c.add(this,
                "getContent"); return this.get("content", null, !0)
        }, setPosition: function (a) { g.c.add(this, "setPosition"); a = g.a.Ia(a); this.set("position", a); this.q("change", { type: "change", target: this }) }, setOffset: function (a) { g.c.add(this, "setOffset"); this.set("offset", a); this.q("change", { type: "change", target: this }) }, getPosition: function () { g.c.add(this, "getPosition"); return this.get("position", null, !0) }, setSize: function (a) { g.c.add(this, "setSize"); a = g.a.tq(a); this.set("size", a); this.q("change", { type: "change", target: this }) },
        getSize: function (a) { g.c.add(this, "getSize"); var b = this.get("size", null, !0); if (b) return b; if (this.A && !a) return new g.xd(this.A.lh.offsetWidth, this.A.lh.offsetHeight) }, getIsOpen: function () { g.c.add(this, "getIsOpen"); return !!this.get("map") }
    }); z.A.Xb = z.A.oF.extend({ B: { isOutline: !1, outlineColor: "#000000", geodesic: !1, dirColor: "white", borderWeight: 1 }, r: function (a) { this.CLASS_NAME = this.CLASS_NAME || "AMap.Polyline"; g.c.wa(this, a); this.D = !0; z.A.Xb.Vc.r.apply(this, arguments); this.Rg = !0; a = a || {}; a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 50; a.path && (a.path = this.Ia(a.path)); g.a.Db(this, a); this.setOptions(this.B); this.D = !1 }, getLength: function () { g.c.add(this, "getLength"); for (var a = this.get("path"), b = 0, c = 0; c < a.length - 1; c += 1)b += a[c].we(a[c + 1]); return parseFloat(b.toFixed(2)) } }); (function (a) {
        function b(a, b, c, d) { if (1 <= a) return d; var e = 1 - a; return e * e * b + 2 * e * a * c + a * a * d } function c(a, b, c, d, e) { if (1 <= a) return e; var f = 3 * (c[0] - b[0]), h = 3 * (d[0] - c[0]) - f, s = 3 * (c[1] - b[1]); c = 3 * (d[1] - c[1]) - s; return [(e[0] - b[0] - f - h) * Math.pow(a, 3) + h * Math.pow(a, 2) + f * a + b[0], (e[1] - b[1] - s - c) * Math.pow(a, 3) + c * Math.pow(a, 2) + s * a + b[1]] } function d(a, c, d, e) { return [b(a, c[0], d[0], e[0]), b(a, c[1], d[1], e[1])] } function e(b, c) { c = a.a.Ia(c); return b.qD(c, 20).rl() } function f(b, c) {
            a.a.isArray(c) && (c = new a.H(c[0], c[1])); return b.RD(c,
                20)
        } function h(b, f, h, n, p, q) {
            var r = null; if (b && h && h.length) {
                b = [b]; b.push.apply(b, h); b.push(f); h = 0; for (r = b.length; h < r; h++)b[h] = e(n, b[h]); h = a.extend({ tolerance: 4, interpolateNumLimit: [3, 300] }, q); q = h.tolerance; h = h.interpolateNumLimit; q = Math.max(2, q); for (var s = r = 0, u = 0, v = b.length; u < v - 1; u++)var w = b[u], t = b[u + 1], r = r + Math.abs(t[0] - w[0]), s = s + Math.abs(t[1] - w[1]); a: {
                    p = Math.min(h[1], Math.max(h[0], Math.round(Math.max(r, s) / p / q))); q = null; switch (b.length) { case 3: q = d; break; case 4: q = c; break; default: r = null; break a }h = [];
                    r = [0].concat(b); for (s = 1; s < p - 2; s++)r[0] = s / p, h.push(q.apply(null, r)); h.push(b[b.length - 1]); r = h
                }
            } return r || [e(n, f)]
        } a.rw = {
            HFa: d, nCa: c, jI: function () {
                function a(b, c, d) { return (((1 - 3 * d + 3 * c) * b + (3 * d - 6 * c)) * b + 3 * c) * b } function b(a) { return a } var c = {}, d = "function" === typeof Float32Array; return function (e, f, h, s) {
                    function u(b) {
                        if (0 === b) b = 0; else if (1 === b) b = 1; else {
                            for (var c = 0, d = 1; 10 !== d && w[d] <= b; ++d)c += 0.1; --d; var d = c + (b - w[d]) / (w[d + 1] - w[d]) * 0.1, l = 3 * (1 - 3 * h + 3 * e) * d * d + 2 * (3 * h - 6 * e) * d + 3 * e; if (0.001 <= l) {
                                for (c = 0; 4 > c; ++c) {
                                    l = 3 *
                                    (1 - 3 * h + 3 * e) * d * d + 2 * (3 * h - 6 * e) * d + 3 * e; if (0 === l) break; d -= (a(d, e, h) - b) / l
                                } b = d
                            } else if (0 === l) b = d; else { var d = c, c = c + 0.1, m, n = 0; do m = d + (c - d) / 2, l = a(m, e, h) - b, 0 < l ? c = m : d = m; while (1E-7 < Math.abs(l) && 10 > ++n); b = m } b = a(b, f, s)
                        } return b
                    } if (!(0 <= e && 1 >= e && 0 <= h && 1 >= h)) throw Error("bezier x values must be in [0, 1] range"); var v = arguments.toString(); if (c[v]) return c[v]; if (e === f && h === s) return b; for (var w = d ? new Float32Array(11) : Array(11), t = 0; 11 > t; ++t)w[t] = a(0.1 * t, e, h); return c[v] = u
                }
            }(), B3: function (a, b, c, d) {
                var e, f, r = []; e = 0; for (f =
                    a.length; e < f; e += 1)r.push.apply(r, h(a[e - 1], a[e], a[e].controlPoints, b, c, d)); return r
            }, Upa: function (a, b, c, d) { a = this.B3(a, b, c, d); c = []; d = 0; for (var e = a.length; d < e; d++)c.push(f(b, a[d])); return c }
        }
    })(g); z.A.Wz = z.A.Xb.extend({
        B: { tolerance: 4, interpolateNumLimit: [3, 300] }, r: function (a) { this.CLASS_NAME = "AMap.BezierCurve"; g.c.wa(this, a); z.A.Wz.Vc.r.apply(this, arguments) }, getLength: function () { g.c.add(this, "getLength"); this.get("map"); this.D = !0; var a = this.getInterpolateLngLats(); this.D = !1; return g.Zq.distanceOfLine(a) }, getInterpolateLngLats: function () { g.c.add(this, "getInterpolateLngLats"); var a = this.get("map"); return g.rw.Upa(this.get("path"), a && a.hj || g.Zh.pL, Math.pow(2, 2), this.B) }, getSerializedPath: function () {
            g.c.add(this,
                "getSerializedPath"); for (var a = this.get("path", null, !0), b = [], c = 0, d = a.length; c < d; c++) { var e = a[c]; if (e instanceof g.U) { var f = []; if (e.controlPoints) for (var h = 0, k = e.controlPoints.length; h < k; h++)f.push(e.controlPoints[h].eR()), f.push(e.controlPoints[h].bR()); f.push(e.eR()); f.push(e.bR()); b.push(f) } else b.push(e) } return b
        }, Ia: function (a) { var b = typeof a[0]; if (g.a.isArray(a) && "object" === b) { for (b = 0; b < a.length; b += 1)a[b] = this.Jia(a[b]); return a } return [this.lFa(a)] }, Jia: function (a) {
            var b; if (a instanceof g.U) b =
                a; else { b = typeof a[0]; var c, d, e = []; if ("string" === b || "number" === b) { d = a.length; if (d % 2) throw Error("LngLat number should be even, now it's " + d); b = new g.U(a[d - 2], a[d - 1]); c = 0; for (d -= 2; c < d; c += 2)e.push(new g.U(a[c], a[c + 1])) } else if (g.a.isArray(a[0])) for (d = a.length, b = new g.U(a[d - 1][0], a[d - 1][1]), c = 0, d -= 1; c < d; c++)e.push(new g.U(a[c][0], a[c][1])); else throw Error("AMap.LngLat expected, now it's " + a); b && e.length && (b.controlPoints = g.a.Ia(e)) } if (b.controlPoints && 2 < b.controlPoints.length) throw Error("Control Points Number should be 1 or 2 !");
            return b
        }
    }); z.A.zc = z.A.oF.extend({
        r: function (a) { this.CLASS_NAME = this.CLASS_NAME || "AMap.Polygon"; g.c.wa(this, a); this.D = !0; z.A.zc.Vc.r.apply(this, arguments); this.Rg = !0; a = a || {}; a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 10; a.path && (a.path = this.Ia(a.path)); g.a.Db(this, g.extend({ fillColor: "#FFAA00", fillOpacity: 0.9 }, a)); this.setOptions(this.B); this.D = !1 }, lR: function (a) {
            var b = 6378137 * Math.PI / 180, c = 0, d = a.length; if (3 > d) return 0; for (var e = 0; e < d - 1; e += 1)var f = a[e], h = a[e + 1], k = f.Q * b * Math.cos(f.P * Math.PI / 180), f = f.P * b, l = h.Q *
                b * Math.cos(h.P * Math.PI / 180), c = c + (k * h.P * b - l * f); e = a[e]; a = a[0]; d = e.Q * b * Math.cos(e.P * Math.PI / 180); e = e.P * b; h = a.Q * b * Math.cos(a.P * Math.PI / 180); c += d * a.P * b - h * e; return 0.5 * Math.abs(c)
        }, getArea: function () { g.c.add(this, "getArea"); var a = this.get("path", null, !0), b; if (!a.length || a[0] instanceof g.U) b = this.lR(a); else { b = this.lR(a[0]); for (var c = 1; c < a.length; c += 1)b -= this.lR(a[c]) } return Number(b.toFixed(2)) }, toString: function () { g.c.add(this, "toString"); return this.get("path").join(";") }, contains: function (a) {
            g.c.add(this,
                "contains"); a = g.a.Ia(a); var b = this.get("path"); b.length && b[0] instanceof g.U && (b = [b]); a = [a.Q, a.P]; for (var c, d = 0, e = b.length; d < e && (c = this.lma(b[d]), g.wd.cq(c) || c.reverse(), c = g.wd.Qd(a, c, 0 === d ? !0 : !1), 0 < d && (c = !c), c); d += 1); return c
        }, lma: function (a) { for (var b = [], c = 0; c < a.length; c += 1)b.push([a[c].Q, a[c].P]); return b }
    }); z.A.$g = z.A.bd.extend({
        B: { visible: !0, zIndex: 10, strokeColor: "#006600", strokeOpacity: 0.9, strokeWeight: 3, strokeStyle: "solid", strokeDasharray: [10, 5], radius: 1E3, fillColor: "#006600", fillOpacity: 0.9, unit: "miter" }, r: function (a) {
        this.CLASS_NAME = this.CLASS_NAME || "AMap.Circle"; g.c.wa(this, a); this.D = !0; z.A.$g.Vc.r.apply(this, arguments); a = a || {}; a.center && (a.center = g.a.Ia(a.center)); a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 10; g.a.bk(a.radius, "string") && (a.radius = parseFloat(a.radius), isNaN(a.radius) && delete a.radius);
            g.a.Db(this, a); this.Rg = this.B.center ? !0 : !1; this.setOptions(this.B); this.D = !1
        }, setCenter: function (a, b) { g.c.add(this, "setCenter"); (a = g.a.Ia(a)) && a instanceof g.U && (this.A && this.A.get("deltaPos") && this.A.set("deltaPos", [0, 0], !0), this.set("center", a), this.q("change", { type: "change", target: this }), this.Rg || (this.Rg = !0, this.get("map") && this.get("map").q("overlays")), b || this.q("setCenter")) }, getCenter: function () {
            g.c.add(this, "getCenter"); var a = this.get("center", null, !0); this.A && this.A.get("deltaPos") && (a =
                this.A.QA([a], this.A.get("deltaPos"))[0]); return a
        }, reset: function () { var a = this.get("center", null, !0); this.A && this.A.get("deltaPos") && (a = this.A.QA([a], this.A.get("deltaPos"))[0], this.A.set("deltaPos", [0, 0], !0)); this.set("center", a) }, setRadius: function (a, b) { g.c.add(this, "setRadius"); this.set("radius", a); this.q("change", { type: "change", target: this }); b || this.q("setRadius") }, getPath: function (a) {
            g.c.add(this, "getPath"); a = a || 36; for (var b = this.get("center", null, !0), c = this.get("radius", null, !0), d = [], e = 0; e <
                a; e += 1) { var f = Math.PI * e / a * 2, h = Math.cos(f) * c, f = Math.sin(f) * c; d.push(b.offset(h, f)) } return d
        }, getRadius: function () { g.c.add(this, "getRadius"); return this.get("radius", null, !0) }, getBounds: function () { var a = this.get("center"), b = this.get("radius"); if (!a) return null; var c = a.offset(-b, -b), a = a.offset(b, b); return new g.re(c, a) }, contains: function (a) { g.c.add(this, "contains"); return this.get("center").we(a) <= this.get("radius") ? !0 : !1 }
    });
    z.A.vV = z.A.$g.extend({
        r: function (a) { this.CLASS_NAME = "AMap.CircleMarker"; g.c.wa(this, a); a = a || {}; a.unit = "px"; void 0 === a.radius ? a.radius = 20 : g.a.bk(a.radius, "string") && (a.radius = parseFloat(a.radius), isNaN(a.radius) && (a.radius = 20)); z.A.vV.Vc.r.apply(this, arguments) }, getBounds: function () { this.D = !0; var a = this.getCenter(); this.D = !1; return new g.re(a, a.lb()) }, contains: function (a) {
            g.c.add(this, "contains"); this.D = !0; var b = this.getMap(); this.D = !1; if (!b) return !1; var c = this.get("center"); b.D = !0; var d = !1; c.we(a) <=
                this.get("radius") * b.getResolution(c) && (d = !0); b.D = !1; return d
        }
    }); var pc = g.aa.extend({
        r: function (a) { var b = Array(3), c; c = a instanceof Array ? a : a instanceof g.Al || a instanceof g.Qa ? a.elements : arguments; b[0] = c[0] || 0; b[1] = c[1] || 0; b[2] = c[2] || 0; this.elements = b }, length: function () { return Math.sqrt(this.x5()) }, x5: function () { var a = this.elements; return a[0] * a[0] + a[1] * a[1] + a[2] * a[2] }, normalize: function () { var a = this.elements, b = a[0], c = a[1], d = a[2], e = Math.sqrt(b * b + c * c + d * d); if (e) { if (1 === e) return this } else return a[0] = 0, a[1] = 0, a[2] = 0, this; e = 1 / e; a[0] = b * e; a[1] = c * e; a[2] = d * e; return this },
        lb: function () { return new g.Qa(this) }, copy: function (a) { var b = this.elements; a = a.elements; b[0] = a[0]; b[1] = a[1]; b[2] = a[2]; return this }, set: function (a, b, c) { var d = this.elements; d[0] = a; d[1] = b; d[2] = c }, cb: function (a) { var b = this.elements; a = a.elements; return b[0] === a[0] && b[1] === a[1] && b[2] === a[2] }, An: function (a) { var b = this.elements; b[0] *= a; b[1] *= a; b[2] *= a; return this }, add: function (a) { var b = this.elements; a = a.elements; b[0] += a[0]; b[1] += a[1]; b[2] += a[2]; return this }, jla: function (a, b) {
            var c = a.elements, d = b.elements,
            e = this.elements; e[0] = c[0] + d[0]; e[1] = c[1] + d[1]; e[2] = c[2] + d[2]; return this
        }, sub: function (a) { a = a.elements; var b = this.elements; b[0] -= a[0]; b[1] -= a[1]; b[2] -= a[2]; return this }, wz: function (a, b) { var c = a.elements, d = b.elements, e = this.elements; e[0] = c[0] - d[0]; e[1] = c[1] - d[1]; e[2] = c[2] - d[2]; return this }, Sr: function (a) { a = a.elements; var b = this.elements; b[0] = b[1] * a[2] - b[2] * a[1]; b[1] = b[2] * a[0] - b[0] * a[2]; b[2] = b[0] * a[1] - b[1] * a[0]; return this }, Zx: function (a, b) {
            var c = a.elements, d = b.elements, e = this.elements; e[0] = c[1] * d[2] -
                c[2] * d[1]; e[1] = c[2] * d[0] - c[0] * d[2]; e[2] = c[0] * d[1] - c[1] * d[0]; return this
        }, Bf: function (a) { a = a.elements; var b = this.elements; return b[0] * a[0] + b[1] * a[1] + b[2] * a[2] }, we: function (a) { return Math.sqrt(this.B2(a)) }, B2: function (a) { var b = a.elements, c = this.elements; a = c[0] - b[0]; var d = c[1] - b[1], b = c[2] - b[2]; return a * a + d * d + b * b }, Qf: function (a) {
            var b = this.elements[0], c = this.elements[1], d = this.elements[2]; a = a.elements; var e = 1 / (a[3] * b + a[7] * c + a[11] * d + a[15]); this.elements[0] = (a[0] * b + a[4] * c + a[8] * d + a[12]) * e; this.elements[1] =
                (a[1] * b + a[5] * c + a[9] * d + a[13]) * e; this.elements[2] = (a[2] * b + a[6] * c + a[10] * d + a[14]) * e; return this
        }
    }); g.Qa = pc; g.Qa.Ob({ Bf: "dot", lb: "clone", add: "add", sub: "sub", jla: "addVectors", wz: "subVectors", Zx: "crossVectors", normalize: "normalize", length: "length" });
    var qc = g.aa.extend({
        r: function (a) { var b = Array(4), c; c = a instanceof Array ? a : arguments; b[0] = c[0]; b[1] = c[1]; b[2] = c[2]; b[3] = c[3] || 1; this.elements = b }, copy: function (a) { var b = this.elements; a = a.elements; b[0] = a[0]; b[1] = a[1]; b[2] = a[2]; b[3] = void 0 !== a[3] ? a[3] : 1; return this }, multiply: function (a) { var b = this.elements; b[0] *= a; b[1] *= a; b[2] *= a; b[3] *= a }, Qf: function (a) {
            var b = this.elements[0], c = this.elements[1], d = this.elements[2], e = this.elements[3]; a = a.elements; this.elements[0] = a[0] * b + a[4] * c + a[8] * d + a[12] * e; this.elements[1] =
                a[1] * b + a[5] * c + a[9] * d + a[13] * e; this.elements[2] = a[2] * b + a[6] * c + a[10] * d + a[14] * e; this.elements[3] = a[3] * b + a[7] * c + a[11] * d + a[15] * e; return this
        }
    }); g.Al = qc; function rc(a, b) { this.Zy = void 0 !== a ? a : new g.Qa(1, 0, 0); this.pC = void 0 !== b ? b : 0 } g.Dw = rc; rc.prototype = { set: function (a, b) { this.Zy.copy(a); this.pC = b; return this }, normalize: function () { var a = 1 / this.Zy.length(); this.Zy.An(a); this.pC *= a; return this }, cI: function (a) { return this.Zy.Bf(a) + this.pC } }; function uc(a, b, c, d, e) { a.Zy.set(b, c, d); a.pC = e; return a }; function vc(a, b, c, d, e, f) { this.OD = [void 0 !== a ? a : new g.Dw, void 0 !== b ? b : new g.Dw, void 0 !== c ? c : new g.Dw, void 0 !== d ? d : new g.Dw, void 0 !== e ? e : new g.Dw, void 0 !== f ? f : new g.Dw] } g.FV = vc;
    vc.prototype = {
        set: function (a, b, c, d, e, f) { var h = this.OD; h[0].copy(a); h[1].copy(b); h[2].copy(c); h[3].copy(d); h[4].copy(e); h[5].copy(f); return this }, lb: function () { return (new g.FV).copy(this) }, copy: function (a) { for (var b = this.OD, c = 0; 6 > c; c++)b[c].copy(a.OD[c]); return this }, gJ: function () {
            var a = new g.Qa, b = new g.Qa, c = a.elements, d = b.elements; return function (e) {
                var f = this.OD, h = e.max.elements; e = e.min.elements; for (var k = 0; 6 > k; k++) {
                    var l = f[k], m = l.Zy.elements; c[0] = 0 < m[0] ? e[0] : h[0]; d[0] = 0 < m[0] ? h[0] : e[0]; c[1] = 0 < m[1] ?
                        e[1] : h[1]; d[1] = 0 < m[1] ? h[1] : e[1]; c[2] = 0 < m[2] ? e[2] : h[2]; d[2] = 0 < m[2] ? h[2] : e[2]; m = l.cI(a); l = l.cI(b); if (0 > m && 0 > l) return !1
                } return !0
            }
        }()
    }; (function (a) {
        function b(a) { this.elements = a || [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1] } a.UV = function (a) { this.elements = [a.elements[0], a.elements[1], a.elements[2], a.elements[4], a.elements[5], a.elements[6], a.elements[8], a.elements[9], a.elements[10]] }; b.prototype.aU = function () { var a = this.elements; a[0] = 1; a[4] = 0; a[8] = 0; a[12] = 0; a[1] = 0; a[5] = 1; a[9] = 0; a[13] = 0; a[2] = 0; a[6] = 0; a[10] = 1; a[14] = 0; a[3] = 0; a[7] = 0; a[11] = 0; a[15] = 1 }; b.prototype.set = function (a) {
            if (a.elements !== this.elements) return this.elements = a.elements.slice(0),
                this
        }; b.prototype.toFixed = function (b) { for (var d = this.elements, e = 0; 16 > e; ++e)0 !== d[e] && (d[e] = a.a.hc(d[e], b)); return this }; b.prototype.concat = function (a) { var b, e, f, h, k, l, m; e = b = this.elements; f = a.elements; if (b === f) for (f = Array(16), a = 0; 16 > a; ++a)f[a] = b[a]; for (a = 0; 4 > a; a++)h = e[a], k = e[a + 4], l = e[a + 8], m = e[a + 12], b[a] = h * f[0] + k * f[1] + l * f[2] + m * f[3], b[a + 4] = h * f[4] + k * f[5] + l * f[6] + m * f[7], b[a + 8] = h * f[8] + k * f[9] + l * f[10] + m * f[11], b[a + 12] = h * f[12] + k * f[13] + l * f[14] + m * f[15]; return this }; b.multiply = function (b, d) {
            var e = Array(16), f, h,
            k, l, m, n, p; k = h = b.elements; l = d.elements; if (h === l) for (f = 0; 16 > f; ++f)e[f] = h[f]; for (f = 0; 4 > f; f++)h = k[f], m = k[f + 4], n = k[f + 8], p = k[f + 12], e[f] = h * l[0] + m * l[1] + n * l[2] + p * l[3], e[f + 4] = h * l[4] + m * l[5] + n * l[6] + p * l[7], e[f + 8] = h * l[8] + m * l[9] + n * l[10] + p * l[11], e[f + 12] = h * l[12] + m * l[13] + n * l[14] + p * l[15]; return new a.Hc(e)
        }; b.prototype.multiply = b.prototype.concat; b.prototype.wh = function (b) {
            var d = this.elements; b = b.elements; var e = new a.Al, f = e.elements; f[0] = b[0] * d[0] + b[1] * d[4] + b[2] * d[8] + b[3] * d[12]; f[1] = b[0] * d[1] + b[1] * d[5] + b[2] * d[9] + b[3] *
                d[13]; f[2] = b[0] * d[2] + b[1] * d[6] + b[2] * d[10] + b[3] * d[14]; f[3] = b[0] * d[3] + b[1] * d[7] + b[2] * d[11] + b[3] * d[15]; return e
        }; b.prototype.BE = function () { var a, b; a = this.elements; b = a[1]; a[1] = a[4]; a[4] = b; b = a[2]; a[2] = a[8]; a[8] = b; b = a[3]; a[3] = a[12]; a[12] = b; b = a[6]; a[6] = a[9]; a[9] = b; b = a[7]; a[7] = a[13]; a[13] = b; b = a[11]; a[11] = a[14]; a[14] = b; return this }; b.prototype.zwa = function (a) {
            var b, e, f; b = a.elements; a = this.elements; e = []; e[0] = b[5] * (b[10] * b[15] - b[11] * b[14]) - b[9] * (b[6] * b[15] + b[7] * b[14]) + b[13] * (b[6] * b[11] - b[7] * b[10]); e[4] = -b[4] *
                (b[10] * b[15] - b[11] * b[14]) + b[8] * (b[6] * b[15] - b[7] * b[14]) - b[12] * (b[6] * b[11] - b[7] * b[10]); e[8] = b[4] * (b[9] * b[15] - b[11] * b[13]) - b[8] * (b[5] * b[15] - b[7] * b[13]) + b[12] * (b[5] * b[11] - b[7] * b[9]); e[12] = -b[4] * (b[9] * b[14] - b[10] * b[13]) + b[8] * (b[5] * b[14] - b[6] * b[13]) - b[12] * (b[5] * b[10] - b[6] * b[9]); e[1] = -b[1] * (b[10] * b[15] - b[11] * b[14]) + b[9] * (b[2] * b[15] - b[3] * b[14]) - b[13] * (b[2] * b[11] - b[3] * b[10]); e[5] = b[0] * (b[10] * b[15] - b[11] * b[14]) - b[8] * (b[2] * b[15] - b[3] * b[14]) + b[12] * (b[2] * b[11] - b[3] * b[10]); e[9] = -b[0] * (b[9] * b[15] - b[11] * b[13]) + b[8] *
                    (b[1] * b[15] - b[3] * b[13]) - b[12] * (b[1] * b[11] - b[3] * b[9]); e[13] = b[0] * (b[9] * b[14] - b[10] * b[13]) - b[8] * (b[1] * b[14] - b[2] * b[13]) + b[12] * (b[1] * b[10] - b[2] * b[9]); e[2] = b[1] * (b[6] * b[15] - b[7] * b[14]) - b[5] * (b[2] * b[15] - b[3] * b[14]) + b[13] * (b[2] * b[7] - b[3] * b[6]); e[6] = -b[0] * (b[6] * b[15] - b[7] * b[14]) + b[4] * (b[2] * b[15] - b[3] * b[14]) - b[12] * (b[2] * b[7] - b[3] * b[6]); e[10] = b[0] * (b[5] * b[15] - b[7] * b[13]) - b[4] * (b[1] * b[15] - b[3] * b[13]) + b[12] * (b[1] * b[7] - b[3] * b[5]); e[14] = -b[0] * (b[5] * b[14] - b[6] * b[13]) + b[4] * (b[1] * b[14] - b[2] * b[13]) - b[12] * (b[1] * b[6] -
                        b[2] * b[5]); e[3] = -b[1] * (b[6] * b[11] - b[7] * b[10]) + b[5] * (b[2] * b[11] - b[3] * b[10]) - b[9] * (b[2] * b[7] - b[3] * b[6]); e[7] = b[0] * (b[6] * b[11] - b[7] * b[10]) - b[4] * (b[2] * b[11] + b[3] * b[10]) + b[8] * (b[2] * b[7] - b[3] * b[6]); e[11] = -b[0] * (b[5] * b[11] + b[7] * b[9]) + b[4] * (b[1] * b[11] - b[3] * b[9]) - b[8] * (b[1] * b[7] + b[3] * b[5]); e[15] = b[0] * (b[5] * b[10] - b[6] * b[9]) - b[4] * (b[1] * b[10] + b[2] * b[9]) + b[8] * (b[1] * b[6] - b[2] * b[5]); f = b[0] * e[0] + b[1] * e[4] + b[2] * e[8] + b[3] * e[12]; if (0 === f) return this; f = 1 / f; for (b = 0; 16 > b; b++)a[b] = e[b] * f; return this
        }; b.prototype.Pg = function () { return (new b).zwa(this) };
        b.prototype.dU = function (a, b, e, f, h, k) { var l, m, n, p; if (a === b || e === f || h === k) throw "null frustum"; m = 1 / (b - a); n = 1 / (f - e); p = 1 / (k - h); l = this.elements; l[0] = 2 * m; l[1] = 0; l[2] = 0; l[3] = 0; l[4] = 0; l[5] = 2 * n; l[6] = 0; l[7] = 0; l[8] = 0; l[9] = 0; l[10] = -2 * p; l[11] = 0; l[12] = -(b + a) * m; l[13] = -(f + e) * n; l[14] = -(k + h) * p; l[15] = 1; return this }; b.prototype.aua = function (a, d, e, f, h, k) { return this.concat((new b).dU(a, d, e, f, h, k)) }; b.prototype.xwa = function (a, b, e, f, h, k) {
            var l, m, n, p; if (a === b || f === e || h === k) throw "null frustum"; if (0 >= h) throw "near <= 0"; if (0 >=
                k) throw "far <= 0"; m = 1 / (b - a); n = 1 / (f - e); p = 1 / (k - h); l = this.elements; l[0] = 2 * h * m; l[1] = 0; l[2] = 0; l[3] = 0; l[4] = 0; l[5] = 2 * h * n; l[6] = 0; l[7] = 0; l[8] = (b + a) * m; l[9] = (f + e) * n; l[10] = -(k + h) * p; l[11] = -1; l[12] = 0; l[13] = 0; l[14] = -2 * h * k * p; l[15] = 0; return this
        }; b.prototype.SQ = function (a, d, e, f, h, k) { return this.concat((new b).xwa(a, d, e, f, h, k)) }; b.prototype.f8 = function (a, b, e, f) {
            var h, k; if (e === f || 0 === b) throw "null frustum"; if (0 >= e) throw "near <= 0"; if (0 >= f) throw "far <= 0"; a /= 2; k = Math.sin(a); if (0 === k) throw "null frustum"; h = 1 / (f - e); k = Math.cos(a) /
                k; a = this.elements; a[0] = k / b; a[1] = 0; a[2] = 0; a[3] = 0; a[4] = 0; a[5] = k; a[6] = 0; a[7] = 0; a[8] = 0; a[9] = 0; a[10] = -(f + e) * h; a[11] = -1; a[12] = 0; a[13] = 0; a[14] = -2 * e * f * h; a[15] = 0; return this
        }; b.prototype.perspective = function (a, d, e, f) { return this.concat((new b).f8(a, d, e, f)) }; b.prototype.Kv = function (a, b, e) { var f = this.elements; f[0] = a; f[4] = 0; f[8] = 0; f[12] = 0; f[1] = 0; f[5] = b; f[9] = 0; f[13] = 0; f[2] = 0; f[6] = 0; f[10] = e; f[14] = 0; f[3] = 0; f[7] = 0; f[11] = 0; f[15] = 1; return this }; b.prototype.scale = function (a, b, e) {
            var f = this.elements; f[0] *= a; f[4] *= b;
            f[8] *= e; f[1] *= a; f[5] *= b; f[9] *= e; f[2] *= a; f[6] *= b; f[10] *= e; f[3] *= a; f[7] *= b; f[11] *= e; return this
        }; b.prototype.i8 = function (a, b, e) { var f = this.elements; f[12] = a; f[13] = b; f[14] = e; return this }; b.prototype.translate = function (a, b, e) { var f = this.elements; f[12] += f[0] * a + f[4] * b + f[8] * e; f[13] += f[1] * a + f[5] * b + f[9] * e; f[14] += f[2] * a + f[6] * b + f[10] * e; f[15] += f[3] * a + f[7] * b + f[11] * e; return this }; b.prototype.sz = function (a, b, e, f) {
            var h, k, l, m, n, p, q, r; a = Math.PI * a / 180; h = this.elements; k = Math.sin(a); a = Math.cos(a); 0 !== b && 0 === e && 0 === f ?
                (0 > b && (k = -k), h[0] = 1, h[4] = 0, h[8] = 0, h[12] = 0, h[1] = 0, h[5] = a, h[9] = -k, h[13] = 0, h[2] = 0, h[6] = k, h[10] = a, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) : 0 === b && 0 !== e && 0 === f ? (0 > e && (k = -k), h[0] = a, h[4] = 0, h[8] = k, h[12] = 0, h[1] = 0, h[5] = 1, h[9] = 0, h[13] = 0, h[2] = -k, h[6] = 0, h[10] = a, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) : 0 === b && 0 === e && 0 !== f ? (0 > f && (k = -k), h[0] = a, h[4] = -k, h[8] = 0, h[12] = 0, h[1] = k, h[5] = a, h[9] = 0, h[13] = 0, h[2] = 0, h[6] = 0, h[10] = 1, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) : (l = Math.sqrt(b * b + e * e + f * f), 1 !== l && (l = 1 / l, b *= l, e *= l, f *= l), l = 1 - a, m = b * e, n = e * f, p = f * b, q = b * k,
                    r = e * k, k *= f, h[0] = b * b * l + a, h[1] = m * l + k, h[2] = p * l - r, h[3] = 0, h[4] = m * l - k, h[5] = e * e * l + a, h[6] = n * l + q, h[7] = 0, h[8] = p * l + r, h[9] = n * l - q, h[10] = f * f * l + a, h[11] = 0, h[12] = 0, h[13] = 0, h[14] = 0); h[15] = 1; return this
        }; b.prototype.rotate = function (a, d, e, f) { return this.concat((new b).sz(a, d, e, f)) }; b.prototype.Ss = function (a) { return this.rotate(a, 1, 0, 0) }; b.prototype.Ts = function (a) { return this.rotate(a, 0, 1, 0) }; b.prototype.Us = function (a) { return this.rotate(a, 0, 0, 1) }; a.Hc = b
    })(g); z.A.qt = z.A.zc.extend({
        B: { visible: !0, zIndex: 10, strokeColor: "#006600", strokeOpacity: 0.9, strokeWeight: 3, strokeStyle: "solid", strokeDasharray: [10, 5], radius: [1E3, 1E3], fillColor: "#006600", fillOpacity: 0.9 }, r: function () {
            var a = this, b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}; this.CLASS_NAME = "AMap.Ellipse"; g.c.wa(this, b); var b = g.extend({}, this.B, b), c = this.Gr(b); b.path = c; z.A.qt.Vc.r.call(this, b); this.set("path", c); this.get("center") && this.get("map") || (this.Rg = !1); this.on("movepoly", function (b) {
                var c =
                    a.get("map"); b = c.Td(c.Ab(a.get("center")).add(b.YJ)); "3D" === c.view.type && a.set("deltaPos", [0, 0], !0); a.set("center", b)
            })
        }, Gr: function () {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, b = [], c = a.center || this.get("center"), d = a.map || this.get("map"); if (c && d) for (var c = g.a.Ia(c), e = a.radius || this.get("radius"), f = d.Ab(c), a = f.x, f = f.y, h = g.a.map(e, function (a) { return a / d.getResolution(c, 20) }), e = h[0], h = h[1], k = g.l.ba, l = (k ? 4 : 1) * Math.PI / 180, m = 0, k = k ? 89 : 359; m <= k; m++) {
                var n = m * l, n = {
                    x: a + e * Math.cos(n), y: f +
                        h * Math.sin(n)
                }; b.push(d.Td(n))
            } return b
        }, mapChanged: function () { g.a.Oh(z.A.qt.Vc.mapChanged) && z.A.qt.Vc.mapChanged.apply(this); this.D = !0; this.setPath(this.Gr()); this.D = !1; !this.Rg && this.get("map") && (this.Rg = !0, this.get("map").q("overlays")) }, setCenter: function (a, b) {
            g.c.add(this, "setCenter"); (a = g.a.Ia(a)) && a instanceof g.U && (this.A && this.A.get("deltaPos") && this.A.set("deltaPos", [0, 0], !0), this.set("center", a), this.set("path", this.Gr()), this.Rg || (this.Rg = !0, this.get("map") && this.get("map").q("overlays")),
                b || (this.q("setCenter"), this.q("change", { type: "change", target: this })))
        }, setRadius: function (a) { var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1; g.c.add(this, "setRadius"); a && 2 === a.length && (this.set("radius", a), this.set("path", this.Gr()), b || (this.q("change", { type: "change", target: this }), this.q("setPath"))) }, setOptions: function (a) { z.A.qt.Vc.setOptions.call(this, a); this.D = !0; a.radius && this.setRadius(a.radius, !0); a.center && this.setCenter(a.center, !0); this.D = !1 }, getRadius: function () {
            g.c.add(this,
                "getRadius"); return this.get("radius", null, !0)
        }, getCenter: function () { g.c.add(this, "getCenter"); var a = this.get("center", null, !0); this.A && this.A.get("deltaPos") && this.A.QA([a], this.A.get("deltaPos"))[0]; return a }
    }); z.A.wt = z.A.zc.extend({
        B: { visible: !0, zIndex: 10, strokeColor: "#006600", strokeOpacity: 0.9, strokeWeight: 3, strokeStyle: "solid", strokeDasharray: [10, 5], fillColor: "#006600", fillOpacity: 0.9 }, r: function () {
            var a = this, b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}; this.CLASS_NAME = "AMap.Rectangle"; g.c.wa(this, b); b = g.extend({}, this.B, b); this.D = !0; var c = this.Gr(b); b.path = c; z.A.wt.Vc.r.call(this, b); this.setPath(c); this.B.bounds && this.get("map") || (this.Rg = !1); this.on("movepoly", function (b) {
                var c = a.get("map"),
                f = a.get("bounds"), h = c.Td(c.Ab(f.sc).add(b.YJ)); b = c.Td(c.Ab(f.kc).add(b.YJ)); "3D" === c.view.type && a.set("deltaPos", [0, 0]); a.set("bounds", new g.re(h, b))
            }); this.D = !1
        }, Gr: function () { var a = [], b = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).bounds || this.get("bounds"); if (b) { b.D = !0; var c = b.getSouthWest(), d = b.getNorthEast(); b.D = !1; g.a.Nb([new g.U(c.Q, c.P, !0), new g.U(d.Q, c.P, !0), new g.U(d.Q, d.P, !0), new g.U(c.Q, d.P, !0)], function (b) { return a.push(b) }) } return a }, mapChanged: function () {
            g.a.Oh(z.A.wt.Vc.mapChanged) &&
            z.A.wt.Vc.mapChanged.apply(this); this.D = !0; this.setPath(this.Gr()); this.D = !1; !this.Rg && this.get("map") && (this.Rg = !0, this.get("map").q("overlays"))
        }, setOptions: function (a) { this.D = !0; z.A.wt.Vc.setOptions.call(this, a); a.bounds && this.setBounds(a.bounds, !0); this.D = !1 }, setBounds: function (a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1; g.c.add(this, "setBounds"); a && a instanceof g.re && (this.set("bounds", a), this.set("path", this.Gr()), this.Rg || (this.Rg = !0, this.get("map") && this.get("map").q("overlays")),
                b || (this.q("change", { type: "change", target: this }), this.q("setBounds")))
        }, getBounds: function () { g.c.add(this, "getBounds"); return this.get("bounds", null, !0) }
    }); z.A.kW = z.A.sb.extend({
        B: { text: "", textAlign: "center", verticalAlign: "middle", offset: new g.H(0, 0) }, r: function (a) { this.CLASS_NAME = "AMap.Text"; g.c.wa(this, a); z.A.kW.Vc.r.apply(this, arguments); this.sfa(); this.D = !0; this.setText(this.get("text")); this.setStyle(this.get("style")); this.D = !1 }, sfa: function () { if (!this.OB) { var a = document.createElement("div"); a.className = "amap-overlay-text-container"; this.OB = a } }, getText: function () { g.c.add(this, "getText"); return this.get("text", null, !0) }, setText: function (a) {
            g.c.add(this,
                "setText"); a || 0 === a || (a = ""); g.j.Exa(this.OB, "amap-overlay-text-empty", !a); g.c.add(this, "setText"); this.set("text", a); this.OB.innerHTML = a; this.p7()
        }, setStyle: function (a) { g.c.add(this, "setStyle"); a = a || {}; for (var b in a) a.hasOwnProperty(b) && (this.OB.style[b] = a[b]); this.p7() }, p7: function () { this.D = !0; this.setContent(this.OB); this.setShadow(this.getShadow()); this.D = !1 }
    }); g.IV = {
        find: function (a) { return g.a.find(this.Mw || [], a) }, DI: function () { return this.Mw || [] }, Hd: function (a) { return null !== this.find(a) }, add: function (a) { var b = this, c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : g.a.Fs, d = this.Mw || (this.Mw = []); g.a.isArray(a) ? g.a.Nb(a, function (a) { b.add(a, c) }) : null === this.find(a) && (d.push(a), c(a)); return this }, remove: function (a) {
            var b = this, c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : g.a.Fs, d = this.Mw; if (d) if (g.a.isArray(a)) g.a.Nb(a, function (a) {
                b.remove(a,
                    c)
            }); else { var e = g.a.indexOf(d, a); -1 !== e && (c(d[e]), d.splice(e, 1)) } return this
        }, clear: function () { this.Nb(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : g.a.Fs); this.Mw = []; return this }, Nb: function () { var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : g.a.Fs, b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null; g.a.Nb(this.Mw || [], function () { for (var c = arguments.length, d = Array(c), e = 0; e < c; e++)d[e] = arguments[e]; c = d[0]; g.a.Oh(c.Nb) ? c.Nb(a, b) : a.apply(b || c, d) }); return this }, Io: function (a) {
            for (var b =
                arguments.length, c = Array(1 < b ? b - 1 : 0), d = 1; d < b; d++)c[d - 1] = arguments[d]; this.Nb(function (b) { b && g.a.Oh(b[a]) && b[a].apply(b, c) }); return this
        }, h: function (a) { var b = arguments; this.Nb(function (a) { a.on.apply(a, b) }); return this }, G: function (a) { var b = arguments; this.Nb(function (a) { a.off.apply(a, b) }); return this }, addListener: function () { this.h.apply(this, arguments) }, Jx: function (a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : g.a.Fs, c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null; this.Nb(function (d) {
                d.on.call(d,
                    event, function () { b(); d.off(a) }, c)
            })
        }, removeListener: function (a) { this.G(a.zQ, a.HR, a.Te) }, O: function (a, b) { this.Nb(function (c) { c.emit(a, b) }) }
    }; z.A.Ln = z.A.Bh.extend({
        ka: [g.IV], r: function () { var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : []; this.CLASS_NAME = "AMap.OverlayGroup"; g.c.wa(this); z.A.Ln.Vc.r.apply(this); this.map = null; this.add(a) }, rc: function (a) { g.c.add(this, "setMap"); this.Io("setMap", a); this.Io("setMap", a); this.set("map", a); this.map = a; return this }, mapChanged: function () { }, XB: function (a) { var b = this; g.c.add(this, "addOverlay"); this.add(a, function (a) { b.map && (a.D = !0, a.setMap(b.map), a.D = !1) }); return this }, kz: function (a) {
            var b =
                this; g.c.add(this, "removeOverlay"); this.remove(a, function (a) { a.D = !0; a.getMap() === b.map && a.setMap(null); a.D = !1 }); return this
        }, ed: function () { var a = this; g.c.add(this, "clearOverlays"); this.clear(function (b) { b.D = !0; b.getMap() === a.map && b.setMap(null); b.D = !1 }); return this }, Cy: function () { g.c.add(this, "hide"); this.Io("hide"); return this }, show: function () { g.c.add(this, "show"); this.Io("show"); return this }, Db: function () {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}; g.c.add(this, "setOptions");
            this.Io("setOptions", a); return this
        }
    }); z.A.Ln.Ob({ find: "getOverlay", DI: "getOverlays", XB: ["addOverlay", "addOverlays"], Hd: "hasOverlay", kz: ["removeOverlay", "removeOverlays"], ed: "clearOverlays", Nb: "eachOverlay", rc: "setMap", Db: "setOptions", show: "show", Cy: "hide", h: "on", G: "off" }); (function (a, b) {
        function c(a, b) { if (!a.length) return !1; for (var c = 0, d = a.length; c < d; c++) { var e = a[c]; if (!("*" === b || e && e.geometry && e.geometry.type === b) || e && e.properties && !e.properties._isAmap) return !1 } return !0 } function d(a) { for (var b = [], c = 0, d = a.length; c < d; c++)b.push(a[c].geometry.coordinates); return b } function e(a) { if (!a || !a.length) return []; a = b.a.Ia(a); for (var c = [], d = 0, e = a.length; d < e; d++)c[d] = a[d].rl(); a[a.length - 1].cb(a[0]) || c.push(a[0].rl()); return c } a.A.GV = a.A.Ln.extend({
            r: function (c) {
            this.CLASS_NAME =
                "AMap.GeoJSON"; b.c.wa(this, c); a.A.GV.Vc.r.call(this, []); this.D = !0; this.B = b.extend({ getMarker: function (b, c) { return new a.A.sb({ innerOverlay: !0, position: c }) }, getPolyline: function (b, c) { return new a.A.Xb({ path: c, innerOverlay: !0 }) }, getPolygon: function (b, c) { return new a.A.zc({ path: c, innerOverlay: !0 }) }, coordsToLatLng: function (a) { return a } }, c); if (!this.B.coordsToLatLngs) { var d = this.B.coordsToLatLng; this.B.coordsToLatLngs = function (a) { for (var b = [], c = 0, e = a.length; c < e; c++)b.push(d.call(null, a[c])); return b } } this.importData(this.B.geoJSON);
                this.D = !1
            }, importData: function (a) { b.c.add(this, "importData"); if (a && (a = this.nfa(a), a.length)) { this.clearOverlays(); this.XB(a); var c = this.B.map; if (c) for (var d = 0, e = a.length; d < e; d++)a[d].D = !0, a[d].setMap(c), a[d].D = !1 } }, toGeoJSON: function () { b.c.add(this, "toGeoJSON"); for (var a = this.DI(), c = [], d = 0, e = a.length; d < e; d++)a[d].D = !0, c[d] = a[d].toGeoJSON(), a[d].D = !1; return c }, nfa: function (a) { if (a) { b.a.isArray(a) || (a = [a]); for (var c = [], d = 0, e = a.length; d < e; d++) { var m = this.ofa(a[d]); m && c.push(m) } return c } }, cX: function (a) {
                var b =
                    "Feature" === a.type ? a.geometry : a, b = this.B.coordsToLatLng(b ? b.coordinates : null), b = this.B.getMarker(a, b); this.wr(a, b); return b
            }, dca: function (c) { for (var d = "Feature" === c.type ? c.geometry : c, d = d ? d.coordinates : null, e = [], l = 0, m = d.length; l < m; l++)e.push(this.cX(b.extend({}, c, { type: "Feature", properties: { _isAmap: !0, _pointIndex: l, _parentProperities: c.properties }, geometry: { type: "Point", coordinates: d[l] } }))); d = new a.A.Ln(e); this.wr(c, d); return d }, bX: function (a) {
                var b = "Feature" === a.type ? a.geometry : a, b = this.B.coordsToLatLngs(b ?
                    b.coordinates : null), b = this.B.getPolyline(a, b); this.wr(a, b); return b
            }, cca: function (c) { for (var d = "Feature" === c.type ? c.geometry : c, d = d ? d.coordinates : null, e = [], l = 0, m = d.length; l < m; l++)e.push(this.bX(b.extend({}, c, { type: "Feature", properties: { _isAmap: !0, _lineStringIndex: l, _parentProperities: c.properties }, geometry: { type: "LineString", coordinates: d[l] } }))); d = new a.A.Ln(e); this.wr(c, d); return d }, dX: function (a) {
                for (var b = "Feature" === a.type ? a.geometry : a, b = b ? b.coordinates : null, c = [], d = 0, e = b.length; d < e; d++)c.push(this.B.coordsToLatLngs(b[d]));
                b = this.B.getPolygon(a, c); this.wr(a, b); return b
            }, eca: function (c) { for (var d = "Feature" === c.type ? c.geometry : c, d = d ? d.coordinates : null, e = [], l = 0, m = d.length; l < m; l++)e.push(this.dX(b.extend({}, c, { type: "Feature", properties: { _isAmap: !0, _polygonIndex: l, _parentProperities: c.properties }, geometry: { type: "Polygon", coordinates: d[l] } }))); d = new a.A.Ln(e); this.wr(c, d); return d }, Xba: function (c) {
                for (var d = ("Feature" === c.type ? c.geometry : c).geometries, e = [], l = 0, m = d.length; l < m; l++)e.push(this.rN(b.extend({}, c, {
                    type: "Feature",
                    properties: { _isAmap: !0, _geometryIndex: l, _parentProperities: c.properties }, geometry: d[l]
                }))); d = new a.A.Ln(e); this.wr(c, d); return d
            }, ofa: function (b) { if (b) switch (b.type) { case "Feature": return this.rN(b); case "FeatureCollection": for (var c = b.features, d = [], e = 0, m = c.length; e < m; e++) { var n = this.rN(c[e]); n && d.push(n) } c = new a.A.Ln(d); this.wr(b, c); return c; default: throw Error("Invalid GeoJSON object." + b.type); } }, wr: function (a, c) {
            c && a.properties && c.setExtData && (c.D = !0, c.setExtData(b.extend({}, c.getExtData() || {},
                { _geoJsonProperties: a.properties })), c.D = !1)
            }, rN: function (a) { var b = "Feature" === a.type ? a.geometry : a; if (!(b && b.coordinates || b)) return null; switch (b.type) { case "Point": return this.cX(a); case "MultiPoint": return this.dca(a); case "LineString": return this.bX(a); case "MultiLineString": return this.cca(a); case "Polygon": return this.dX(a); case "MultiPolygon": return this.eca(a); case "GeometryCollection": return this.Xba(a); default: throw Error("Invalid GeoJSON geometry." + b.type); } }
        }); a.A.Ln.zb({
            toGeoJSON: function (a) {
                b.c.add(this,
                    "toGeoJSON"); a = a || this.DI(); for (var e = [], k = 0, l = a.length; k < l; k++)a[k].toGeoJSON && (a[k].D = !0, e[k] = a[k].toGeoJSON(), a[k].D = !1); this.D = !0; a = this.getExtData() || {}; this.D = !1; if (c(e, "Point")) e = { type: "Feature", properties: a._geoJsonProperties || {}, geometry: { type: "MultiPoint", coordinates: d(e) } }; else if (c(e, "LineString")) e = { type: "Feature", properties: a._geoJsonProperties || {}, geometry: { type: "MultiLineString", coordinates: d(e) } }; else if (c(e, "Polygon")) e = {
                        type: "Feature", properties: a._geoJsonProperties || {}, geometry: {
                            type: "MultiPolygon",
                            coordinates: d(e)
                        }
                    }; else if (c(e, "*")) { a = a._geoJsonProperties || {}; for (var k = [], l = 0, m = e.length; l < m; l++)k.push(e[l].geometry); e = { type: "Feature", properties: a, geometry: { type: "GeometryCollection", geometries: k } } } else e = { type: "FeatureCollection", properties: a._geoJsonProperties || {}, features: e }; return e
            }
        }); a.A.sb.zb({
            toGeoJSON: function () {
                b.c.add(this, "toGeoJSON"); this.D = !0; var a = this.getExtData() || {}, c = this.getPosition().rl(); this.D = !1; return {
                    type: "Feature", properties: a._geoJsonProperties || {}, geometry: {
                        type: "Point",
                        coordinates: c
                    }
                }
            }
        }); a.A.Xb.zb({ toGeoJSON: function () { b.c.add(this, "toGeoJSON"); this.D = !0; var a = this.getExtData() || {}, c = this.getPath(); this.D = !1; return { type: "Feature", properties: a._geoJsonProperties || {}, geometry: { type: "LineString", coordinates: e(c) } } } }); a.A.zc.zb({
            toGeoJSON: function () {
                b.c.add(this, "toGeoJSON"); this.D = !0; var a = this.getExtData() || {}, c = this.getPath(); this.D = !1; a = a._geoJsonProperties || {}; if (c) { c = b.a.Ia(c); b.a.isArray(c[0]) || (c = [c]); for (var d = [], l = 0, m = c.length; l < m; l++)d[l] = e(c[l]); c = d } else c =
                    []; return { type: "Feature", properties: a, geometry: { type: "Polygon", coordinates: c } }
            }
        })
    })(z, g); z.o.xL = z.o.Tb.extend({
        ka: [g.IV], r: function (a) { var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}; this.CLASS_NAME = "AMap.LayerGroup"; g.c.wa(this, b); z.o.xL.Vc.r.call(this, b); this.map = null; this.add(a) }, rc: function (a) { g.c.add(this, "setMap"); this.Io("setMap", a); this.set("map", a); this.map = a; return this }, mapChanged: function () { }, wH: function (a) { var b = this; g.c.add(this, "addLayer"); this.add(a, function (a) { b.map && (a.D = !0, a.setMap(b.map), a.D = !1) }); return this }, lk: function (a) {
            var b = this; g.c.add(this,
                "removeLayer"); this.remove(a, function (a) { a.D = !0; a.getMap() === b.map && a.setMap(null); a.D = !1 }); return this
        }, Ima: function () { var a = this; g.c.add(this, "clearLayers"); this.clear(function (b) { b.D = !0; b.getMap() === a.map && b.setMap(null); b.D = !1 }); return this }, Cy: function () { g.c.add(this, "hide"); this.Io("hide"); return this }, show: function () { g.c.add(this, "show"); this.Io("show"); return this }, reload: function () { this.Io("reload"); return this }, Db: function () {
            var a = this, b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] :
                {}; g.c.add(this, "setOptions"); var c = g.a.keys(b); g.a.Nb(c, function (c) { a.Io("set", c, b[c]) }); return this
        }
    }); z.o.xL.Ob({ find: "getLayer", DI: "getLayers", wH: ["addLayer", "addLayers"], Hd: "hasLayer", lk: ["removeLayer", "removeLayers"], Ima: "clearLayers", Nb: "eachLayer", rc: "setMap", Db: "setOptions", show: "show", Cy: "hide", reload: "reload", h: "on", G: "off" }); g.haa = z.Kb.extend({ r: function (a, b) { b && (b.center = b.position, b.zoom = 11); arguments.callee.la.apply(this, arguments); window.console && window.console.log && window.console.log("\u9ad8\u5fb7\u5730\u56feJSAPI\u8857\u666f\u5df2\u4e0b\u7ebf\uff0c\u611f\u8c22\u60a8\u7684\u652f\u6301\u3002") } }); g.iaa = z.A.sb.extend({ r: function (a) { arguments.callee.la.apply(this, arguments) } }); g.wd = {
        Wr: function (a, b) { for (var c = Infinity, d = 0, e = 1, f = b.length; e < f; d = e, e += 1)c = Math.min(c, g.wd.Vwa(a, [b[d], b[e]])); return Math.sqrt(c) }, Vwa: function (a, b) { return this.JK(a, this.d2(a, b)) }, JK: function (a, b) { var c = a[0] - b[0], d = a[1] - b[1]; return c * c + d * d }, CFa: function (a, b, c, d) {
            d = d || 1E-6; if (c[0] === b[0]) { var e = Math.min(b[1], c[1]); b = Math.max(b[1], c[1]); return Math.abs(a[0] - c[0]) < d && a[1] >= e && a[1] <= b } var e = Math.min(b[0], c[0]), f = Math.max(b[0], c[0]); return Math.abs((c[1] - b[1]) / (c[0] - b[0]) * (a[0] - b[0]) + b[1] - a[1]) < d &&
                a[0] >= e && a[0] <= f
        }, d2: function (a, b) { var c = a[0], d = a[1], e = b[0], f = b[1], h = e[0], e = e[1], k = f[0], f = f[1], l = k - h, m = f - e, c = 0 === l && 0 === m ? 0 : (l * (c - h) + m * (d - e)) / (l * l + m * m || 0); 0 >= c || (1 <= c ? (h = k, e = f) : (h += c * l, e += c * m)); return [h, e] }, cq: function (a) { for (var b = a.length, c = 0, d = a[b - 1], e = d[0], d = d[1], f, h, k = 0; k < b; k += 1)h = a[k], f = h[0], h = h[1], c += (f - e) * (h + d), e = f, d = h; return 0 < c }, Qd: function (a, b, c) {
            var d = a[0]; a = a[1]; var e = !1, f, h, k, l, m = b.length, n = 0; for (l = m - 1; n < m; l = n, n += 1) {
                var p = !1; f = b[n][0]; h = b[n][1]; k = b[l][0]; l = b[l][1]; if (f === d && h === a || k ===
                    d && l === a) return c ? !0 : !1; if (h < a === l >= a) { f = (k - f) * (a - h) / (l - h) + f; if (d === f) return c ? !0 : !1; p = d < f } p && (e = !e)
            } return e
        }, Y6: function (a, b) {
            function c(a, b, c, d) { var e = [a[0] - b[0], a[1] - b[1]], f = [c[0] - d[0], c[1] - d[1]]; a = a[0] * b[1] - a[1] * b[0]; c = c[0] * d[1] - c[1] * d[0]; d = 1 / (e[0] * f[1] - e[1] * f[0]); return [(a * f[0] - c * e[0]) * d, (a * f[1] - c * e[1]) * d] } function d(a, b, c) { return (c[0] - b[0]) * (a[1] - b[1]) > (c[1] - b[1]) * (a[0] - b[0]) } var e, f, h, k, l = a; e = b[b.length - 2]; for (var m = 0, n = b.length - 1; m < n; m++) {
                f = b[m]; var p = l, l = []; h = p[p.length - 1]; for (var q = 0, r =
                    p.length; q < r; q++)k = p[q], d(k, e, f) ? (d(h, e, f) || l.push(c(e, f, h, k)), l.push(k)) : d(h, e, f) && l.push(c(e, f, h, k)), h = k; e = f
            } if (3 > l.length) return []; l.push(l[0]); return l
        }
    }; (function (a) {
        function b(b, c) {
            var d; a: { switch (b) { case "EPSG3395": d = a.Zh.AV; break a; case "EPSG4326": d = a.Zh.BV; break a }d = a.Zh.pL } return {
                project: function (b) { a.a.isArray(b) && (b = new a.U(b[0], b[1])); return d.qD(b, c).rl() }, unproject: function (b) { a.a.isArray(b) && (b = new a.H(b[0], b[1])); return d.RD(b, c).rl() }, normalizePoint: function (b) { return a.a.Ia(b) }, distance: function (b, c) {
                    c = this.normalizePoint(c); if (a.a.isArray(c)) return this.distanceToLine(b, c); b = this.normalizePoint(b); var d = a.Hm.yu, e = Math.cos, f = b.P * d, h =
                        c.P * d, k = 2 * a.Hm.tQ, d = c.Q * d - b.Q * d, e = (1 - e(h - f) + (1 - e(d)) * e(f) * e(h)) / 2; return k * Math.asin(Math.sqrt(e))
                }, ringArea: function (b) { b = this.normalizeLine(b); var c = a.Hm.tQ * a.Hm.yu, d = 0, e = b.length; if (3 > e) return 0; for (var f = 0; f < e - 1; f += 1)var h = b[f], k = b[f + 1], u = h.Q * c * Math.cos(h.P * a.Hm.yu), h = h.P * c, v = k.Q * c * Math.cos(k.P * a.Hm.yu), d = d + (u * k.P * c - v * h); f = b[f]; b = b[0]; e = f.Q * c * Math.cos(f.P * a.Hm.yu); f = f.P * c; k = b.Q * c * Math.cos(b.P * a.Hm.yu); d += e * b.P * c - k * f; return 0.5 * Math.abs(d) }, sphericalCalotteArea: function (b) {
                    var c = a.Hm.tQ; b = c - c *
                        Math.cos(b / c); return 2 * Math.PI * c * b
                }
            }
        } function c() { return { normalizePoint: function (a) { return a && a.x && a.y ? [a.x, a.y] : a }, distance: function (a, b) { var c = a[0] - b[0], d = a[1] - b[1]; return Math.sqrt(c * c + d * d) }, project: function (a) { return a }, unproject: function (a) { return a }, ringArea: function (a) { for (var b = [0, 0], c = [0, 0], d = 0, e = a[0], n = a.length, p = 2; p < n; p++) { var q = a[p - 1], r = a[p]; b[0] = e[0] - r[0]; b[1] = e[1] - r[1]; c[0] = e[0] - q[0]; c[1] = e[1] - q[1]; d += b[0] * c[1] - b[1] * c[0] } return d / 2 } } } function d(a) {
            for (var b = 0, c = a.length, d = 0; d < c - 1; d++)var e =
                a[d], n = a[d + 1], b = b + (n[0] - e[0]) * (n[1] + e[1]); if (a[c - 1][0] !== a[0][0] || a[c - 1][1] !== a[0][1]) e = a[c - 1], n = a[0], b += (n[0] - e[0]) * (n[1] + e[1]); return 0 >= b
        } function e(b) { this.CLASS_NAME = "AMap.GeometryUtil"; this.Qb = a.extend({ onSegmentTolerance: 5, crs: "EPSG3857", maxZoom: 20 }, b); this.setCrs(this.Qb.crs) } a.extend(e.prototype, {
            clone: function (b) { return new e(a.extend({}, this.Qb, b)) }, isPoint: function (b) { return b && (b instanceof a.U || a.a.isArray(b) && !isNaN(b[0])) }, normalizePoint: function (a) { return a }, normalizeLine: function (a) {
                for (var b =
                    [], c = 0, d = a.length; c < d; c++)b.push(this.normalizePoint(a[c])); return b
            }, normalizeMultiLines: function (b) { a.a.isArray(b) && this.isPoint(b[0]) && (b = [b]); for (var c = [], d = 0, e = b.length; d < e; d++)c.push(this.normalizeLine(b[d])); return c }, setCrs: function (d) { a.extend(this, d && d.project && d.unproject ? d : "plane" === d ? c() : b(d, this.Qb.maxZoom)) }, distance: function () { throw Error("distance Not implemented!"); }, jx: function (a, b) {
                a = this.normalizeLine(a); this.isPoint(a[0]) || (a = a[0]); for (var c = [], d = 0, e = a.length; d < e; d++)c.push(this.project(a[d]));
                !0 === b ? c = this.makesureClockwise(c) : !1 === b && (c = this.makesureClockwise(c), c.reverse()); return c
            }, nja: function (a) { for (var b = [], c = 0, d = a.length; c < d; c++)b.push(this.unproject(a[c])); return b }, closestOnSegment: function (b, c, d) { b = a.wd.d2(this.project(b), this.jx([c, d])); return this.unproject(b) }, closestOnLine: function (a, b) { b = this.normalizeLine(b); for (var c = Infinity, d, e = 0, n = b.length; e < n - 1; e++) { var p = this.closestOnSegment(a, b[e], b[e + 1]), q = this.distance(a, p); q < c && (c = q, d = p) } return d }, distanceToSegment: function (a,
                b, c) { return this.distanceToLine(a, [b, c]) }, distanceToLine: function (a, b) { b = this.normalizeLine(b); this.isPoint(b[0]) || (b = b[0]); for (var c = Infinity, d = 0, e = b.length; d < e - 1; d++)var n = this.closestOnSegment(a, b[d], b[d + 1]), c = Math.min(c, this.distance(a, n)); return c }, distanceToPolygon: function (a, b) { return this.isPointInRing(a, b) ? 0 : this.distanceToLine(a, b) }, isPointOnSegment: function (a, b, c, d) { if (!d && 0 !== d || 0 > d) d = this.Qb.onSegmentTolerance; return this.distanceToSegment(a, b, c) <= d }, isPointOnLine: function (a, b, c) {
                    b = this.normalizeLine(b);
                    for (var d = 0, e = b.length; d < e - 1; d++)if (this.isPointOnSegment(a, b[d], b[d + 1], c)) return !0; return !1
                }, isPointOnRing: function (a, b, c) { b = this.normalizeLine(b); for (var d = 0, e = b.length; d < e; d++)if (this.isPointOnSegment(a, b[d], b[d === e - 1 ? 0 : d + 1], c)) return !0; return !1 }, isPointOnPolygon: function (a, b, c) { b = this.normalizeMultiLines(b); for (var d = 0, e = b.length; d < e; d++)if (this.isPointOnRing(a, b[d], c)) return !0; return !1 }, makesureClockwise: function (a) { d(a) || (a = [].concat(a), a.reverse()); return a }, makesureAntiClockwise: function (a) {
                d(a) &&
                    (a = [].concat(a), a.reverse()); return a
                }, isPointInRing: function (b, c) { c = this.normalizeLine(c); var d = this.jx(c, !0); return a.wd.Qd(this.project(b), d, !1) }, isRingInRing: function (a, b) { for (var c = 0, d = a.length; c < d; c++)if (!this.isPointInRing(a[c], b)) return !1; c = 0; for (d = b.length; c < d; c++)if (this.isPointInRing(b[c], a)) return !1; return !0 }, isPointInPolygon: function (a, b) { b = this.normalizeMultiLines(b); for (var c, d = 0, e = b.length; d < e && (c = this.isPointInRing(a, b[d]), 0 < d && (c = !c), c); d += 1); return c }, doesSegmentsIntersect: function (a,
                    b, c, d) { var e = this.jx([a, b, c, d]); a = e[0]; b = e[1]; c = e[2]; d = e[3]; var e = !1, n = (d[0] - c[0]) * (a[1] - c[1]) - (d[1] - c[1]) * (a[0] - c[0]), p = (b[0] - a[0]) * (a[1] - c[1]) - (b[1] - a[1]) * (a[0] - c[0]); a = (d[1] - c[1]) * (b[0] - a[0]) - (d[0] - c[0]) * (b[1] - a[1]); 0 !== a && (b = n / a, p /= a, 0 <= b && 1 >= b && 0 <= p && 1 >= p && (e = !0)); return e }, doesSegmentLineIntersect: function (a, b, c) { c = this.normalizeLine(c); for (var d = 0, e = c.length; d < e - 1; d++)if (this.doesSegmentsIntersect(a, b, c[d], c[d + 1])) return !0; return !1 }, doesSegmentRingIntersect: function (a, b, c) {
                        c = this.normalizeLine(c);
                        for (var d = 0, e = c.length; d < e; d++)if (this.doesSegmentsIntersect(a, b, c[d], c[d === e - 1 ? 0 : d + 1])) return !0; return !1
                    }, doesSegmentPolygonIntersect: function (a, b, c) { c = this.normalizeMultiLines(c); for (var d = 0, e = c.length; d < e; d++)if (this.doesSegmentRingIntersect(a, b, c[d])) return !0; return !1 }, doesLineLineIntersect: function (a, b) { a = this.normalizeLine(a); for (var c = 0, d = a.length; c < d - 1; c++)if (this.doesSegmentLineIntersect(a[c], a[c + 1], b)) return !0; return !1 }, doesLineRingIntersect: function (a, b) {
                        a = this.normalizeLine(a); for (var c =
                            0, d = a.length; c < d - 1; c++)if (this.doesSegmentRingIntersect(a[c], a[c + 1], b)) return !0; return !1
                    }, doesPolygonPolygonIntersect: function (a, b) { return this.doesRingRingIntersect(b, a) || this.isRingInRing(a, b) || this.isRingInRing(b, a) ? !0 : !1 }, doesRingRingIntersect: function (a, b) { a = this.normalizeLine(a); for (var c = 0, d = a.length; c < d; c++)if (this.doesSegmentRingIntersect(a[c], a[c === d - 1 ? 0 : c + 1], b)) return !0; return !1 }, hP: function (a, b) {
                        for (var c = 0, d = 0; d < a.length - 1; d += 1) {
                            var e = this.distance(a[d], a[d + 1]); if (e + c < b) c += e; else return c =
                                (b - c) / e, [a[d][0] + c * (a[d + 1][0] - a[d][0]), a[d][1] + c * (a[d + 1][1] - a[d][1]), d]
                        } return null
                    }, sX: function (a, b) {
                        function c() { var a = [e[0] - n[0], e[1] - n[1]], b = [p[0] - q[0], p[1] - q[1]], d = e[0] * n[1] - e[1] * n[0], f = p[0] * q[1] - p[1] * q[0], h = 1 / (a[0] * b[1] - a[1] * b[0]); return [(d * b[0] - f * a[0]) * h, (d * b[1] - f * a[1]) * h] } function d(a) { return (n[0] - e[0]) * (a[1] - e[1]) > (n[1] - e[1]) * (a[0] - e[0]) } a = this.makesureAntiClockwise(a); b = this.makesureClockwise(b); var e, n, p, q, r = a; e = b[b.length - 1]; for (var s = 0, u = b.length; s < u; s++) {
                            n = b[s]; var v = r, r = []; p = v[v.length -
                                1]; for (var w = 0, t = v.length; w < t; w++)q = v[w], d(q) ? (d(p) || r.push(c()), r.push(q)) : d(p) && r.push(c()), p = q; e = n
                        } return r
                    }, ringRingClip: function (a, b) { a = this.jx(a); b = this.jx(b); var c = this.sX(a, b); 0 == c.length && (c = this.sX(b, a)); return this.nja(c) }, ringArea: function () { throw Error("distance Not implemented!"); }, distanceOfLine: function (a) { a = this.normalizeLine(a); for (var b = 0, c = 0, d = a.length; c < d - 1; c++)b += this.distance(a[c], a[c + 1]); return b }, isClockwise: function (a) { a = this.jx(a); return d(a) }
        }); a.Zq = new e; a.Fj = new e; a.Fj.setCrs("plane")
    })(g); g.rL = function () {
        var a = {}; (function () { function b(a) { for (var b = 0, e = a.length, f = 0; f < e - 1; f++)var h = a[f], k = a[f + 1], b = b + (k[0] - h[0]) * (k[1] + h[1]); if (a[e - 1][0] !== a[0][0] || a[e - 1][1] !== a[0][1]) h = a[e - 1], k = a[0], b += (k[0] - h[0]) * (k[1] + h[1]); return 0 >= b } a.Isa = function (a) { b(a) && (a = [].concat(a), a.reverse()); return a }; a.R4 = b })(); (function () {
            function b(a) { var b = a.length; 2 < b && a[b - 1][0] == a[0][0] && a[b - 1][1] == a[0][1] && a.pop() } function c(a, b) { for (var c = 0; c < b.length; c++)a.push(b[c][0]), a.push(b[c][1]) } a.Vh = function (a, e) {
                var f =
                    2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0, h = arguments[3]; e = e || []; var k = [], l = []; b(a); c(k, a); var m = a.length; e.forEach(b); for (var n = 0; n < e.length; n++)l.push(m), m += e[n].length, c(k, e[n]); l = (this.TK ? this.TK : g.Ac.TK)(k, l); if (h) { f = []; for (n = 0; n < l.length; n += 1)h = 2 * l[n], f.push([k[h], k[h + 1]]); return f } if (f) for (n = 0; n < l.length; n += 1)l[n] += f; return l
            }
        })(); return a
    }; (function (a) {
    a.ZE = function () {
        function a(b, c, d, e, f) { for (var h, k = 0, l = c, n = d - e; l < d; l += e)k += (b[n] - b[l]) * (b[l + 1] + b[n + 1]), n = l; if (f === 0 < k) for (f = c; f < d; f += e)h = r(f, b[f], b[f + 1], h); else for (f = d - e; f >= c; f -= e)h = r(f, b[f], b[f + 1], h); h && m(h, h.next) && (s(h), h = h.next); return h } function c(a, b) { if (!a) return a; b || (b = a); var c = a, d; do if (d = !1, c.A8 || !m(c, c.next) && 0 !== l(c.Ga, c, c.next)) c = c.next; else { s(c); c = b = c.Ga; if (c === c.next) break; d = !0 } while (d || c !== b); return b } function d(a, b, e, f, r, u, C) {
            if (a) {
                if (!C && u) {
                    var F = a, A = F; do null === A.z &&
                        (A.z = h(A.x, A.y, f, r, u)), A.Yo = A.Ga, A = A.hl = A.next; while (A !== F); A.Yo.hl = null; A.Yo = null; var F = A, B, G, H, I, M, L, O = 1; do { A = F; H = F = null; for (I = 0; A;) { I++; G = A; for (B = M = 0; B < O && (M++ , G = G.hl, G); B++); for (L = O; 0 < M || 0 < L && G;)0 !== M && (0 === L || !G || A.z <= G.z) ? (B = A, A = A.hl, M--) : (B = G, G = G.hl, L--), H ? H.hl = B : F = B, B.Yo = H, H = B; A = G } H.hl = null; O *= 2 } while (1 < I)
                } for (F = a; a.Ga !== a.next;) {
                    A = a.Ga; G = a.next; if (u) a: if (H = a.Ga, I = a.next, 0 <= l(H, a, I)) H = !1; else {
                        M = h(H.x < a.x ? H.x < I.x ? H.x : I.x : a.x < I.x ? a.x : I.x, H.y < a.y ? H.y < I.y ? H.y : I.y : a.y < I.y ? a.y : I.y, f, r, u); O = h(H.x >
                            a.x ? H.x > I.x ? H.x : I.x : a.x > I.x ? a.x : I.x, H.y > a.y ? H.y > I.y ? H.y : I.y : a.y > I.y ? a.y : I.y, f, r, u); for (B = a.hl; B && B.z <= O;) { if (B !== a.Ga && B !== a.next && k(H.x, H.y, a.x, a.y, I.x, I.y, B.x, B.y) && 0 <= l(B.Ga, B, B.next)) { H = !1; break a } B = B.hl } for (B = a.Yo; B && B.z >= M;) { if (B !== a.Ga && B !== a.next && k(H.x, H.y, a.x, a.y, I.x, I.y, B.x, B.y) && 0 <= l(B.Ga, B, B.next)) { H = !1; break a } B = B.Yo } H = !0
                    } else a: if (H = a.Ga, I = a.next, 0 <= l(H, a, I)) H = !1; else { for (M = a.next.next; M !== a.Ga;) { if (k(H.x, H.y, a.x, a.y, I.x, I.y, M.x, M.y) && 0 <= l(M.Ga, M, M.next)) { H = !1; break a } M = M.next } H = !0 } if (H) b.push(A.le /
                        e), b.push(a.le / e), b.push(G.le / e), s(a), F = a = G.next; else if (a = G, a === F) {
                            if (C) if (1 === C) { C = b; F = e; A = a; do G = A.Ga, H = A.next.next, !m(G, H) && n(G, A, A.next, H) && p(G, H) && p(H, G) && (C.push(G.le / F), C.push(A.le / F), C.push(H.le / F), s(A), s(A.next), A = a = H), A = A.next; while (A !== a); a = A; d(a, b, e, f, r, u, 2) } else {
                                if (2 === C) a: {
                                    C = a; do {
                                        for (F = C.next.next; F !== C.Ga;) {
                                            if (A = C.le !== F.le) if (A = void 0, A = C.next.le !== F.le) if (A = void 0, A = C.Ga.le !== F.le) {
                                                A = A = void 0; b: {
                                                    A = C; do {
                                                        if (A.le !== C.le && A.next.le !== C.le && A.le !== F.le && A.next.le !== F.le && n(A, A.next, C,
                                                            F)) { A = !0; break b } A = A.next
                                                    } while (A !== C); A = !1
                                                } if (A = !A) if (A = void 0, A = p(C, F)) if (A = void 0, A = p(F, C)) { A = C; G = !1; H = (C.x + F.x) / 2; I = (C.y + F.y) / 2; do A.y > I !== A.next.y > I && A.next.y !== A.y && H < (A.next.x - A.x) * (I - A.y) / (A.next.y - A.y) + A.x && (G = !G), A = A.next; while (A !== C); A = G }
                                            } if (A) { a = q(C, F); C = c(C, C.next); a = c(a, a.next); d(C, b, e, f, r, u); d(a, b, e, f, r, u); break a } F = F.next
                                        } C = C.next
                                    } while (C !== a)
                                }
                            } else d(c(a), b, e, f, r, u, 1); break
                        }
                }
            }
        } function e(a, b) { return a.x - b.x } function f(a, b) {
            var c = b, d = a.x, e = a.y, f = -Infinity, h; do {
                if (e <= c.y && e >= c.next.y &&
                    c.next.y !== c.y) { var l = c.x + (e - c.y) * (c.next.x - c.x) / (c.next.y - c.y); if (l <= d && l > f) { f = l; if (l === d) { if (e === c.y) return c; if (e === c.next.y) return c.next } h = c.x < c.next.x ? c : c.next } } c = c.next
            } while (c !== b); if (!h) return null; if (d === f) return h.Ga; for (var l = h, m = h.x, n = h.y, s = Infinity, r, c = h.next; c !== l;)d >= c.x && c.x >= m && d !== c.x && k(e < n ? d : f, e, m, n, e < n ? f : d, e, c.x, c.y) && (r = Math.abs(e - c.y) / (d - c.x), (r < s || r === s && c.x > h.x) && p(c, a) && (h = c, s = r)), c = c.next; return h
        } function h(a, b, c, d, e) {
            a = 32767 * (a - c) * e; b = 32767 * (b - d) * e; a = (a | a << 8) & 16711935;
            a = (a | a << 4) & 252645135; a = (a | a << 2) & 858993459; b = (b | b << 8) & 16711935; b = (b | b << 4) & 252645135; b = (b | b << 2) & 858993459; return (a | a << 1) & 1431655765 | ((b | b << 1) & 1431655765) << 1
        } function k(a, b, c, d, e, f, h, k) { return 0 <= (e - h) * (b - k) - (a - h) * (f - k) && 0 <= (a - h) * (d - k) - (c - h) * (b - k) && 0 <= (c - h) * (f - k) - (e - h) * (d - k) } function l(a, b, c) { return (b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y) } function m(a, b) { return a.x === b.x && a.y === b.y } function n(a, b, c, d) { return m(a, b) && m(c, d) || m(a, d) && m(c, b) ? !0 : 0 < l(a, b, c) !== 0 < l(a, b, d) && 0 < l(c, d, a) !== 0 < l(c, d, b) } function p(a,
            b) { return 0 > l(a.Ga, a, a.next) ? 0 <= l(a, b, a.next) && 0 <= l(a, a.Ga, b) : 0 > l(a, b, a.Ga) || 0 > l(a, a.next, b) } function q(a, b) { var c = new u(a.le, a.x, a.y), d = new u(b.le, b.x, b.y), e = a.next, f = b.Ga; a.next = b; b.Ga = a; c.next = e; e.Ga = c; d.next = c; c.Ga = d; f.next = d; d.Ga = f; return d } function r(a, b, c, d) { a = new u(a, b, c); d ? (a.next = d.next, a.Ga = d, d.next.Ga = a, d.next = a) : (a.Ga = a, a.next = a); return a } function s(a) { a.next.Ga = a.Ga; a.Ga.next = a.next; a.Yo && (a.Yo.hl = a.hl); a.hl && (a.hl.Yo = a.Yo) } function u(a, b, c) {
            this.le = a; this.x = b; this.y = c; this.hl = this.Yo =
                this.z = this.next = this.Ga = null; this.A8 = !1
            } return {
                TK: function (h, k, l) {
                    l = l || 2; var m = k && k.length, n = m ? k[0] * l : h.length, p = a(h, 0, n, l, !0), s = []; if (!p) return s; var r, u, B, G; if (m) { var H = l, m = [], I, M, L; G = 0; for (I = k.length; G < I; G++) { M = k[G] * H; L = G < I - 1 ? k[G + 1] * H : h.length; M = a(h, M, L, H, !1); M === M.next && (M.A8 = !0); var O = L = M; do L.x < O.x && (O = L), L = L.next; while (L !== M); m.push(O) } m.sort(e); for (G = 0; G < m.length; G++) { k = m[G]; H = p; if (H = f(k, H)) k = q(H, k), c(k, k.next); p = c(p, p.next) } } if (h.length > 80 * l) {
                        r = B = h[0]; u = m = h[1]; for (H = l; H < n; H += l)G = h[H], k =
                            h[H + 1], G < r && (r = G), k < u && (u = k), G > B && (B = G), k > m && (m = k); B = Math.max(B - r, m - u); B = 0 !== B ? 1 / B : 0
                    } d(p, s, l, r, u, B); return s
                }
            }
    }; a.p$ = a.ZE()
    })(g); (function (a) {
        function b(a) { var b = a.length; 2 < b && a[b - 1][0] == a[0][0] && a[b - 1][1] == a[0][1] && a.pop() } function c(a, b) { for (var c = 0; c < b.length; c++)a.push(b[c][0]), a.push(b[c][1]) } a.On = {
            mi: function (a) { for (var b = a.length, c = 0, h = b - 1, k = 0; k < b; h = k++)c += a[h][0] * a[k][1] - a[k][0] * a[h][1]; return 0.5 * c }, R4: function (b) { return 0 > a.On.mi(b) }, normalize: function (b) {
                var c; if (b) {
                    c = []; for (var f = 0, h = b.length; f < h; f += 1)c[f] = b[f] instanceof Array ? this.normalize(b[f]) : b[f] instanceof a.U ? [b[f].Q, b[f].P] : b[f] instanceof a.H ? [b[f].x, b[f].y] :
                        b[f]
                } return c
            }, Vh: function (d, e) { e = e || []; var f = [], h = []; b(d); c(f, d); var k = d.length; e.forEach(b); for (var l = 0; l < e.length; l++)h.push(k), k += e[l].length, c(f, e[l]); return a.p$.TK(f, h) }
        }
    })(g); g.XH = function (a, b, c) {
        g.c.add({ CLASS_NAME: "convertFrom" }, b); var d = g.w.Ud + "/v3/assistant/coordinate/convert"; a = g.a.Ia(a); var e = []; if (a instanceof Array) { for (var f = 0, h = a.length; f < h; f += 1)e.push(a[f] + ""); e = e.join(";") } else e = a + ""; b = ["key=" + g.w.key, "s=rsv3", "locations=" + e, "coordsys=" + (b || "gps")]; d += 0 < b.length ? "?" + b.join("&") : ""; d = new g.fb.wb(d, { callback: "callback" }); d.h("complete", function (a) {
            if ("1" === a.status) {
                a = a.locations.split(";"); for (var b = 0; b < a.length; b += 1) {
                    var d = a[b].split(","); a[b] = new AMap.LngLat(d[0],
                        d[1])
                } c && "function" === typeof c && c("complete", { info: "ok", locations: a })
            } else c && "function" === typeof c && c("error", a.info)
        }, this); d.h("error", function (a) { c && "function" === typeof c && c("error", a.info) }, this)
    }; g.fb = g.fb || {};
    g.fb.NL = g.aa.extend({
        ka: [g.va], r: function (a, b) { this.B = { callback: "cbk", type: "json", charset: "utf-8" }; b = b || {}; g.a.Db(this, b); this.url = a; this.send(a, b.vd, b.l2, b.OT, b.responseType) }, send: function (a) {
            var b = g.j.create("script"); b.type = "text/javascript"; b.charset = this.B.charset; var c = this; g.l.ye ? b.onreadystatechange = function () { "loaded" !== this.readyState && "complete" !== this.readyState || c.q("complete") } : (b.onload = function () { c.q("complete") }, b.onerror = function () { c.q("error", { status: 0, info: "service error", url: a }) });
            b.src = a; document.getElementsByTagName("head")[0].appendChild(b)
        }
    }); g.fb.wb = g.fb.NL.extend({
        qma: function () { if (g.a.W7) return g.a.LK.push(this), !0 }, Vva: function () { this.q("error", { info: "TIME_OUT_A" }) }, send: function (a, b, c, d) {
            function e() { window[f] = null; try { window[f] = null } catch (a) { } h.onerror = null; h.parentNode && h.parentNode.removeChild(h) } if (!this.B.Nx || !this.qma()) {
                a = encodeURI(a); var f = this.B.fun; if (!f || window[f]) f = g.a.z3("jsonp_", 6) + "_"; var h = document.createElement("script"); h.type = "text/javascript"; h.charset = "utf-8"; h.async = !0; var k = this; g.l.ye || (h.onerror = function () {
                    e();
                    k.q("error", { info: "REQUEST_FAILED", url: a })
                }); window[f] = function (a) { e(); if (k.B.callbackFunction) k.B.callbackFunction.call(k.B.context, a); else if (3E4 === a.errcode && a.data) g.a.W7 = !0, g.rb.load("AMap.AntiCrabFrame", function () { g.a.Nx || (g.a.Nx = new g.a$); g.a.LK.push(k); g.a.Nx.open(k.B.vd, a.data.host, k.KD || "", k.url) }); else { if (a instanceof Array || "string" === typeof a) a = { data: a }; a.aDa = f; k.q("complete", a) } }; b = "?"; -1 !== a.indexOf("?") && (b = "&"); b = a + b + this.B.callback + "=" + f; if (-1 !== a.indexOf(g.w.Ud + "/v") || -1 !== a.indexOf("yuntuapi.amap.com/datasearch") ||
                    -1 !== a.indexOf("webapi.amap.com/")) b = b + "&platform=JS&logversion=2.0" + ("&appname=" + g.w.iu), b += "&csid=" + g.a.D9(), b += "&sdkversion=" + g.w.yr; if (c = this.B.lI) { var l = [], m; for (m in c) c.hasOwnProperty(m) && (l.push(m + "=" + c[m]), b += "&" + m + "=" + encodeURIComponent(c[m])); k.KD = l.join("&") } h.src = d ? b + "&rereq=true" : b; g.fb.wb.nda = document.getElementsByTagName("body")[0] || document.getElementsByTagName("head")[0]; g.fb.wb.nda.appendChild(h)
            }
        }
    }); g.fb.XMLHttpRequest = g.fb.NL.extend({
        send: function (a, b, c, d, e) {
            var f = this; if ((g.l.ye || g.l.y4) && window.XDomainRequest) { var h = this.T9 = new XDomainRequest; h.onerror = function (b) { f.q("error", { url: a, data: b }) }; h.onload = function () { f.q("complete", { url: a, data: h.responseText }) }; h.open(b || "GET", a); setTimeout(function () { h.send(c || void 0) }, 0) } else {
                var k = this.T9 = new XMLHttpRequest; k.onreadystatechange = function () {
                4 === k.readyState && 200 === k.status ? f.q("complete", { url: a, data: "arraybuffer" === k.responseType ? k.response : k.responseText }) :
                    404 === k.status && (k.abort(), f.q("error", { url: a, data: "404" }))
                }; k.onerror = function (b) { k.abort(); f.q("error", { url: a, data: b }) }; k.open(b || "GET", a); "POST" === b && k.setRequestHeader("Content-Type", d || "application/x-www-form-urlencoded"); e && (k.responseType = e); k.send(c || void 0)
            }
        }, abort: function () { this.T9.abort() }
    }); for (var $ = {
        v: "1.4.15", Pixel: g.H, LngLat: g.U, Size: g.xd, Bounds: g.re, ArrayBounds: g.gp, PixelBounds: g.Lf, Panorama: g.haa, PanoramaMarker: g.iaa, Map: z.Kb, View2D: z.vF, GroundImage: z.o.sL, Marker: z.A.sb, ImageMarker: z.A.Gza, Text: z.A.kW, Icon: z.A.ci, MarkerShape: z.A.Z$, Polyline: z.A.Xb, BezierCurve: z.A.Wz, Polygon: z.A.zc, Circle: z.A.$g, CircleMarker: z.A.vV, Ellipse: z.A.qt, Rectangle: z.A.wt, ContextMenu: z.A.Jn, InfoWindow: z.A.Qe, Buildings: z.o.f$, TileLayer: z.o.ob, ImageLayer: z.o.eA, CanvasLayer: z.o.h$, VideoLayer: z.o.Oaa, VectorLayer: z.o.bd,
        MassMarks: z.o.aaa, CompositeLayer: z.o.l$, LabelsLayer: z.o.$q, LabelMarker: z.A.S$, LayerGroup: z.o.xL, OverlayGroup: z.A.Ln, GeoJSON: z.A.GV, CANVAS: "canvas", DOM: "dom", convertFrom: g.XH, Http: { JSONP: g.fb.wb }, event: { CLASS_NAME: "AMap.event" }
    }, wc = "addDomListener addDomListenerOnce addListener addListenerOnce clearInstanceListeners clearListeners removeListener trigger".split(" "), xc = 0; xc < wc.length; xc += 1)$.event[wc[xc]] = function () {
        var a = g.event[wc[xc]], b = wc[xc]; return function () {
            g.c.wa($.event); g.c.add($.event, b);
            return a.apply(g.event, Array.prototype.slice.call(arguments))
        }
    }(); $.GeometryUtil = { CLASS_NAME: "AMap.GeometryUtil" };
    for (var Hc = "distance ringArea isClockwise makesureClockwise makesureAntiClockwise distanceOfLine ringRingClip doesSegmentsIntersect doesSegmentLineIntersect doesSegmentRingIntersect doesSegmentPolygonIntersect doesLineLineIntersect doesLineRingIntersect doesPolygonPolygonIntersect doesRingRingIntersect isPointInRing isRingInRing isPointInPolygon isPointOnSegment isPointOnLine isPointOnRing isPointOnPolygon closestOnSegment closestOnLine distanceToSegment distanceToLine distanceToPolygon".split(" "), xc =
        0; xc < Hc.length; xc += 1)$.GeometryUtil[Hc[xc]] = function () { var a = g.Zq[Hc[xc]], b = Hc[xc]; return function () { g.c.wa($.GeometryUtil); g.c.add($.GeometryUtil, b); return a.apply(g.Zq, Array.prototype.slice.call(arguments)) } }(); $.GeometryUtil.triangulateShape = function (a, b) { g.c.wa($.GeometryUtil); g.c.add($.GeometryUtil, "triangulateShape"); a = g.On.normalize(a); b = g.On.normalize(b); return g.On.Vh(a, b) }; $.PlaneGeometryUtil = { CLASS_NAME: "AMap.PlaneGeometryUtil" };
    for (xc = 0; xc < Hc.length; xc += 1)$.PlaneGeometryUtil[Hc[xc]] = function () { var a = g.Fj[Hc[xc]], b = Hc[xc]; return function () { g.c.wa($.PlaneGeometryUtil); g.c.add($.PlaneGeometryUtil, b); return a.apply(g.Fj, Array.prototype.slice.call(arguments)) } }(); $.PlaneGeometryUtil.triangulateShape = function (a, b) { g.c.wa($.PlaneGeometryUtil); g.c.add($.PlaneGeometryUtil, "triangulateShape"); a = g.On.normalize(a); b = g.On.normalize(b); return g.On.Vh(a, b) }; $.plugin = $.service = z.Kb.prototype.plugin; $.TileLayer.Satellite = z.o.ob.eW;
    $.TileLayer.RoadNet = z.o.ob.bW; $.TileLayer.google = z.o.ob.cF; $.TileLayer.Flexible = z.o.ob.bA; $.TileLayer.WMS = z.o.ob.Paa; $.TileLayer.WMTS = z.o.ob.Qaa; $.TileLayer.Traffic = z.o.ob.mW; $.Panorama.Events = z.event; $.TileLayer.PanoramaLayer = z.o.ob.Oza; $.UA = { ie: g.l.ns, ielt9: g.l.ye, ielt11: g.l.Zqa, mobile: g.l.ba, android: g.l.Rl, ios: g.l.hD };
    $.Browser = {
        ua: navigator.userAgent, mobile: g.l.ba, plat: g.l.fz, mac: g.l.Ty, windows: g.l.$ya, ios: g.l.hD, iPad: g.l.Sqa, iPhone: g.l.Tqa, android: g.l.Rl, android23: g.l.mla, chrome: g.l.chrome, firefox: g.l.IQ, safari: g.l.fE, wechat: g.l.L9, uc: g.l.pya, qq: g.l.$ua, ie: g.l.ns, ie6: g.l.vi, ie7: g.l.av, ie8: g.l.ye && !g.l.av && !g.l.vi, ie9: g.l.y4, ie10: g.l.x4, ie11: g.l.Wqa, edge: g.l.xoa, ielt9: g.l.ye, baidu: g.l.DH, isLocalStorage: g.l.xs, isGeolocation: !!navigator.geolocation, mobileWebkit: g.l.cta, mobileWebkit3d: g.l.U5, mobileOpera: !!g.l.bta,
        retina: g.l.Mc, touch: !!g.l.Hf, msPointer: !!g.l.W5, pointer: !!g.l.gT, webkit: g.l.J9, ie3d: g.l.Xqa, webkit3d: g.l.K9, gecko3d: g.l.mpa, opera3d: g.l.Vta, any3d: g.l.yH, isCanvas: g.l.$k, isSvg: g.l.Lo, isVML: g.l.ns, isWorker: !!window.Worker, isWebsocket: !!window.WebSocket, isWebGL: function () { for (var a = document.createElement("canvas"), b = ["webgl", "experimental-webgl", "moz-webgl"], c = null, d = 0; d < b.length; d += 1) { try { c = a.getContext(b[d]) } catch (e) { } if (c) if (c.drawingBufferWidth !== a.width || c.drawingBufferHeight !== a.height) break; else return !0 } return !1 }
    };
    $.Util = { CLASS_NAME: "AMap.Util" }; var Ic = { colorNameToHex: g.a.SH, rgbHex2Rgba: g.a.I7, argbHex2Rgba: g.a.Dr, isEmpty: g.a.qh, deleteItemFromArray: g.a.cy, deleteItemFromArrayByIndex: g.a.uo, indexOf: g.a.indexOf, format: g.a.hc, isArray: g.a.isArray, isDOM: g.a.lJ, includes: g.a.ka, requestIdleCallback: g.a.PT, cancelIdleCallback: g.a.FP, requestAnimFrame: g.a.Rc, cancelAnimFrame: g.a.pi, color2RgbaArray: g.a.Tl, color2Rgba: g.a.Vma };
    for (xc in Ic) Ic.hasOwnProperty(xc) && "function" == typeof Ic[xc] && ($.Util[xc] = function () { var a = xc; return function () { g.c.wa($.Util); g.c.add($.Util, a); return Ic[a].apply(g.a, Array.prototype.slice.call(arguments)) } }()); $.DomUtil = { CLASS_NAME: "AMap.DomUtil" }; var Jc = { getViewport: g.j.TI, getViewportOffset: g.j.vR, create: g.j.create, setClass: g.j.qwa, hasClass: g.j.rn, addClass: g.j.Sa, removeClass: g.j.ab, setOpacity: g.j.Eq, rotate: g.j.rotate, setCss: g.j.Wa, empty: g.j.ZD, remove: g.j.remove, TRANSFORM: g.j.lg, TRANSITION: g.j.rF };
    for (xc in Jc) Jc.hasOwnProperty(xc) && "function" == typeof Jc[xc] && ($.DomUtil[xc] = function () { var a = xc; return function () { g.c.wa($.DomUtil); g.c.add($.DomUtil, a); return Jc[a].apply(g.j, Array.prototype.slice.call(arguments)) } }()); var Kc = g.w; $.User = { key: Kc.key }; window.AMap = $; window.AMap.BuryPoint = g.BuryPoint; window.AMap.Class = g.aa;
    if (!Kc.rD && "undefined" !== typeof arguments && arguments.callee) try { if (g.l.xs && window.localStorage) { var Lc = window.localStorage["_AMap_" + g.EJ]; Lc && JSON.parse(Lc).version === Kc.Bj || window.localStorage.setItem("_AMap_" + g.EJ, JSON.stringify({ version: Kc.Bj, script: "(" + arguments.callee + ")(config)" })); new g.fb.XMLHttpRequest(Kc.yb + "/maps/cookie?key=amap_ver&value=" + Kc.Bj, { vd: "GET", OT: "text/plain" }) } } catch (Mc) { }; g.Cj = g.aa.extend({
        r: function (a, b, c, d) { this.start = a; this.end = b; this.transition = c; this.precision = d || 0; this.Hv = !1; this.update = g.a.bind(this.update, this); return this }, Dn: function (a) { this.dh = this.startTime = +new Date; this.frames = 0; this.Hv = !0; this.mo = g.a.Rc(this.update); this.$ha = g.a.bind(this.rq, a || this) }, update: function () {
        this.frames += 1; var a = +new Date, b = a - this.startTime, b = this.transition ? this.transition(this.start, this.end, b, this.frames, a - this.dh) : null; "number" === typeof b && Math.abs(b - this.end) < this.precision ?
            (this.stop(), b = this.end) : this.mo = g.a.Rc(this.update); this.dh = a; this.$ha(b)
        }, stop: function (a) { g.a.pi(this.mo); a && this.update(); this.Hv = !1 }
    }); g.Cj.Easing = { Linear: { None: function (a) { return a } }, Bounce: { In: function (a) { return 1 - (a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) }, Out: function (a) { return g.Cj.Easing.Bounce.In(1 - a) } }, Cubic: { In: function (a) { return 1 - a * a * a }, Out: function (a) { a = 1 - a; return 1 - a * a * a } } }; g.Kb = g.aa.extend({
        ka: [g.va, g.Re, g.vJ], r: function (a, b) {
        this.mc = g.a.bind(this.mc, this); this.C = b; this.hj = b.hj; this.wm = ""; this.bh = this.Gg = this.Qk = !1; this.Sn = {}; this.K = a; this.bga(); this.sra(); this.W("zooms", b, !0); this.W("size", b, !0); this.W("limitBounds", b); this.W("view", b); this.W("nolimg", b, !0); this.W("mapNumber", b, !0); this.W("lang", b, !0); this.W("features", b, !0); this.W("styleID", b, !0); this.W("forceBig", b, !0); this.W("mode", b, !0); this.W("showBuildingBlock", b, !0); this.W("mapStyle", b); var c = this.get("mapStyle");
            this.ue = g.w.ue[c] || g.w.ue["default"]; this.rH = "#a3ccff"; this.HB = b.get("skyColor") || "#cce0ff"; g.w.vQ && this.W("editEnable", b); g.w.vQ && this.yd ? this.W("style", b, !0) : this.W("styleUrl", b); this.W("hightlight", b, !0); this.W("labelzIndex", b, !0); if (g.l.KK) {
                c = new z.o.ob({ innerLayer: !0, zIndex: b.get("labelzIndex"), visible: !1 }); this.Cc = new g.o.Ij(c, this, ["point", "road"]); this.Cc.type = "\u77e2\u91cf\u6807\u6ce8"; var d = this.C.get("defaultLayer"); d && c.W("rejectMapMask", d, !0); b.labelsLayer = this.Cc.T; this.Cc.T.h("complete",
                    this.lr, this, !0); this.Cc.T.h("renderComplete", this.lr, this); this.Cc.bB = this.Cc.Qg = !0
            } this.W("isHotspot", b, !0); this.W("layers", b); this.W("overlays", b); this.W("infos", b, !0); this.W("contextmenus", b, !0); this.W("controls", b); this.W("bounds", b); this.W("draw", b); this.Se("zoomAndCenter destroy defaultCursor jogEnable animateEnable baseRender overlayRender gridMapForeign vectorMapForeign".split(" "), b); this.Se("rotateEnable pitchEnable dragEnable keyboardEnable doubleClickZoom scrollWheel zoomEnable touchZoom".split(" "),
                b, !0); this.get("jogEnable") ? this.dv = !0 : this.dv = !1; this.rfa(); this.yfa(); this.TY && this.TY(); this.W("resizeEnable", b); this.C.map = this; c = this.get("size"); c = c.width * c.height / 65536; g.l.Mc && 3 < c && (this.s1 = !0); this.V = { Fd: !1 }; this.sK()
        }, editEnableChanged: function () { this.yd = this.get("editEnable") }, labelzIndexChanged: function () { this.Cc && this.Cc.set("zIndex", this.get("labelzIndex")) }, styleChanged: function () { this.el = !0 }, mapStyleChanged: function () {
            if (this.C.xi) {
            this.wm && (this.set("style", ""), this.wu = this.wm = "");
                var a = this.get("mapStyle"); this.el = !0; this.ue = g.w.ue[a] || g.w.ue["default"]; this.YD()
            }
        }, styleUrlChanged: function () {
            if (this.C.xi) {
                var a = this.get("styleUrl") || ""; if (a !== this.wm) {
                    var b = -1 !== a.indexOf("?isPublic=true"), a = a.substr(0, 46), c = a.split("amap://styles/")[1]; "normal" === c ? (this.wm = "", this.set("nolimg", !!this.C.get("nolimg_param")), this.set("style", ""), this.wu = "") : (this.Iz = !0, this.set("nolimg", !0), b = new g.fb.wb(32 > c.length ? g.w.Fc + "://webapi.amap.com/style?name=" + c + "&key=" + g.w.key : g.w.Fc + "://webapi.amap.com/v4/map/styles?styleid=" +
                        c + "&s=rsv3&key=" + g.w.key + (b ? "&ispublic=1" : ""), { callback: "callback" }), b.h("complete", function (a) { a.data && a.data.content ? this.set("style", JSON.parse(a.data.content)) : this.set("style", ""); this.Iz = !1 }, this), b.h("error", function () { this.Iz = !1 }, this), this.wm = a, this.YD())
                }
            }
        }, Y7: function (a) { this.K.style.background = a }, opa: function (a) { var b = this.get("center"); if (a.contains(b)) return null; a = g.Zq.closestOnLine(b, a.CU().path); return new g.U(a[0], a[1]) }, sma: function () {
            var a = this.get("limitBounds"), b = this.get("bounds");
            b.sc && b.sc.Q > b.kc.Q && (b.kc.Q += 360); if (!a.contains(b)) { if (b instanceof g.gp) return this.opa(a, b); var c = this.get("center").lb(); a.qj() < b.qj() ? c.Q = a.ti().Q : (a.sc.Q > b.sc.Q && (c.Q += a.sc.Q - b.sc.Q), a.kc.Q < b.kc.Q && (c.Q += a.kc.Q - b.kc.Q)); a.oj() < b.oj() ? c.P = a.ti().P : (a.sc.P > b.sc.P && (c.P += a.sc.P - b.sc.P), a.kc.P < b.kc.P && (c.P += a.kc.P - b.kc.P)); return c }
        }, zO: function () {
            var a = this.lU; this.C.refreshSize(); var b = this.get("size"); b && a && !b.cb(a) && (this.lU = b, this.Mv = !0, this.set("display"), this.F7(b), this.get("resizeEnable") &&
                this.pa("resize", { vta: a, f6: b }))
        }, I_: function () { var a = this; a.zO(); a.tO = setTimeout(function () { a.I_() }, 200) }, vca: function () { this.tO && (clearTimeout(this.tO), this.tO = null) }, bga: function () { this.C.D = !0; this.lU = this.C.getSize(); this.C.D = !1; if (g.l.ye || g.l.L9 && g.l.hD || g.l.Rsa) this.I_(); else { var a = this; g.F.gla(this.K, function (b) { a.zO(b) }) } }, sra: function () {
            var a = this.K; g.j.Sa(a, "amap-container"); var b = {}; b.$c = g.j.create("div", a, "amap-maps"); this.Gl = g.j.create("div", a); this.Gl.style.display = "none"; b.Jr = g.j.create("div",
                b.$c, "amap-drags"); b.o = g.j.create("div", b.Jr, "amap-layers"); b.A = g.j.create("div", b.Jr, "amap-overlays"); b.controls = g.j.create("div", a, "amap-controls"); b.ov = g.j.create("a", a, "amap-logo"); var c = window.location.host; -1 === c.indexOf("amap.com") && -1 === c.indexOf("gaode.com") && (b.ov.href = g.l.ba ? "http://m.amap.com" : "http://gaode.com", b.ov.target = "_blank"); g.j.create("img", b.ov).src = g.l.Mc ? this.C.B.logoUrlRetina : this.C.B.logoUrl; b.jn = g.j.create("div", a, "amap-copyright"); b.jn.style.display = "none"; 350 < g.j.TI(this.K).width &&
                    (b.jn.innerHTML = this.C.B.copyright, b.jn.J5 = g.j.create("span", b.jn, "amap-mcode"), this.YD()); this.Ta = b
        }, YD: function () {
            var a = this.get("layers"); if (a) {
                for (var b = -1, c = "", d = 0; d < a.length; d += 1) { var e = a[d].get("mapNumber"), f = a[d].get("zIndex", null, !0); e && f > b && a[d].get("visible") && (c = e, b = f) } this.set("mapNumber", c); this.C.D = !0; a = this.C.getMapStyle(); this.C.D = !1; "GS(2018)1709" === c && a && "normal" !== a && "amap://styles/normal" !== a && (c = "", this.Ta.jn.style.visibility = "hidden", this.Ta.ov.style.display = "none"); c && this.Ta.jn.J5 &&
                    (this.Ta.jn.J5.innerHTML = "- " + c + "\u53f7", this.Ta.jn.style.visibility = "visible", this.Ta.ov.style.display = "block"); return c
            }
        }, YX: function () { var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : !1; g.Gj && (a ? g.Gj.flush() : this.b3 || (this.b3 = g.a.Rc(function () { g.Gj.flush(); this.b3 = null }, this))) }, CT: function (a) {
            var b = this, c = this.C.get("rasterLayer"); c && (this.C.set("rasterLayer", void 0), this.C.l7 = !0, this.C.kk = this.C.Ka, this.Xk && (this.Xk.YI = !1), c.o && (c.o.BD = !0), a || (this.DT = g.a.PT(function () {
            b.DT = null;
                b.C && b.C.lk(c)
            }))); a && this.DT && g.a.FP(this.DT)
        }, lr: function () {
            function a() { for (var a = d.get("layers"), b = d.get("zoom"), c = 0; c < a.length; c += 1) { var e = a[c].get("zooms"); if (!(a[c].kk || a[c].H4 || !e || b > e[1] || b < e[0] || !a[c].get("visible") || a[c].o && a[c].o.fa && 0 === a[c].o.fa.length || a[c].o && a[c].o.BD || a[c].o && a[c].o.Ka)) return !1 } a = d.C.get("features"); return ("all" === a || g.a.ka(a, "point")) && d.Cc && d.Cc.get("visible") && 0 < d.Cc.fa.length && !d.Cc.Ka && !d.Cc.eo ? !1 : !0 } function b() {
                var a = { id: d.C.id }; g.te.af.end(g.extend(a, { key: "rds" }));
                g.te.af.send(g.extend(a, { params: { rs: d.get("baseRender"), viewmode: d.C.view.type, fd: 0 === d.sJ ? 1 : 0, raster: d.C.kk ? 1 : 0 } })); d.C && d.C.mm && d.C.mm.rB && d.C.mm.rB(); d.C.e7 = 1; d.YX(); d.set("display"); d.oD = !0
            } function c() { g.te.af.end({ id: d.C.id, key: "rd" }); g.a.Rc(function () { this.q("complete") }, d); d.C.Ka = !0; d.set("display") } if (!this.fQ) if (this.oD) 1 === this.Dt && 13 === this.get("zoom") && (g.a.NC.stop(this.bG), g.te.af.send({ id: this.C.id, params: { fps: this.bG.NC, type: "fps", rs: this.get("baseRender") } }), this.Dt = 2), this.YX();
            else { var d = this, e = this.C.get("rasterLayer"), f = a(); e ? (e.o && e.o.Ka && (this.C.Ka || c()), f && (this.C.Ka || c(), this.CT(), b())) : f && (this.C.Ka || c(), b(), this.C.l7 = !0) }
        }, layersChanged: function () {
        this.za = this.za || []; for (var a = this.get("layers"), b = this.za.length - 1; 0 <= b; b -= 1)this.za[b] === this.sd || this.za[b] === this.Ms || this.za[b].bB || this.za[b].T.bB || -1 !== g.a.indexOf(a, this.za[b].T) || (this.za[b].Ug(), this.za[b].ol && this.za[b].ol.Ug(), this.za[b].T.G("complete", this.lr, this), this.za[b].T.G("renderComplete", this.lr,
            this), this.za = g.a.uo(this.za, b)); for (var c = !1, d = !0, e = this.get("labelzIndex"), b = 0; b < a.length; b += 1)if (!a[b].H4) if (a[b].oi) -1 === g.a.indexOf(this.za, a[b].o) && this.za.push(a[b].o); else { var f = this.Rf(a[b]); f && (this.za.push(f), a[b].oi = !0, a[b].o = f); a[b].h("complete", this.lr, this, !0); a[b].h("renderComplete", this.lr, this) } for (b = 0; b < this.za.length; b += 1)f = this.za[b].T, f.mq && f.get("visible") && (c = !0, !1 === f.get("detectRetina") && (d = !1), e = f.get("textIndex") || e); this.Cc && (c || "3D" !== this.C.view.type ? this.Cc.eo = !1 : (c =
                g.a.find(a, function (a) { if (z.o.st && a instanceof z.o.st && a.get("visible")) return !0 }), this.Cc.eo = c = !!c)); a = g.a.indexOf(this.za, this.Cc); c && this.C.get("showLabel") ? (-1 === a && this.za.push(this.Cc), this.Cc.ja = d && g.l.ja, this.Cc.fC(this.get("mapStyle") || "normal"), this.Cc.set("zIndex", e), this.Cc.set("visible", !0), this.C.ZC = !0, this.C.get("isHotspot") ? this.Cc.Ota() : this.Cc.OP()) : (this.Cc && (this.Cc.set("visible", !1), this.C.ZC = !1, this.Cc.OP()), this.C.ZC = !1); this.C.isHotspotChanged(); this.set("display", 0); this.YD()
        },
        isHotspotChanged: function () { this.layersChanged() }, controlsChanged: function () { var a = this.get("controls"), b, c; if (a.add && 0 < a.add.length) for (; 0 < a.add.length;)b = a.add.shift(), (c = b.fu || b.addTo) && c.call(b, this.C, this.Ta.controls); else if (a.remove && a.remove.length) for (; 0 < a.remove.length;)b = a.remove.shift(), (c = b.Dv || b.removeFrom) && c.call(b, this.C, this.Ta.controls) }, V0: function () {
            if (!this.fQ) {
                var a = this; this.$0 = !1; a.sd || (a.sd = new g.o.bd(new z.o.bd, a), a.sd.rf = 36, a.sd.eg = 36, a.sd.set("zIndex", 120), a.za.push(a.sd),
                    a.sd.BC = !0); for (var b = a.get("overlays"), c = [], d = 0; d < a.Tc.length; d += 1)-1 === g.a.indexOf(b, a.Tc[d].Yb) && (a.Tc[d].Yb instanceof z.A.Qe || a.Tc[d].Yb instanceof z.A.Jn ? a.Tc[d].Ug() : (a.sd && a.Tc[d] instanceof g.A.sb ? (a.sd.Tg = g.a.cy(a.sd.Tg, a.Tc[d].L), a.sd.s7([a.Tc[d].L])) : a.Ms && a.Ms.s7([a.Tc[d].L]), a.Tc[d].L.ca ? (g.j.remove(a.Tc[d].L.ca), a.Tc[d].L.ca = null) : a.Tc[d].L.Ya && (g.j.remove(a.Tc[d].L.Ya.Xf), g.j.remove(a.Tc[d].L.Ya.$b), a.Tc[d].L.Ya = null), a.Tc[d].xn && a.Tc[d].xn.stop(), a.Tc[d].uh && a.Tc[d].uh.stop(), a.Tc[d].Yb.oi =
                        !1, a.Tc[d].Yb.tl(), a.Tc[d].Yb.A = null, a.Tc[d].Yb = null, a.Tc[d].L.Xna(), a.Tc[d].L = null, a.Tc[d].tl(), a.Tc[d].Je = null, a.Tc[d].ri(), a.Tc[d].map = null), c.push(a.Tc[d])); for (d = 0; d < c.length; d += 1)a.Tc = g.a.uo(a.Tc, g.a.indexOf(a.Tc, c[d])); var e = [], f = []; g.a.lwa(function (b) { if (!b.oi && b.Rg) { var c = b.A || a.ama(b); c && (a.Tc.push(c), c instanceof g.A.Qe || c instanceof g.A.Jn ? c.$y(a) : c instanceof g.A.sb ? e.push(c.L) : f.push(c.L), b.oi = !0) } }, b); e.length && a.sd.Ix(e); f.length && (a.Ms || (a.Ms = new g.o.bd(new z.o.bd, a), a.Ms.set("zIndex",
                            110), a.za.push(a.Ms)), a.Ms.Ix(f)); a.set("display", 0)
            }
        }, overlaysChanged: function () { this.Tc = this.Tc || []; this.get("overlays") && 0 === this.get("overlays").length ? this.V0() : this.$0 || (g.a.Rc(this.V0, this), this.$0 = !0) }, contextmenusChanged: function () { var a = this.get("contextmenu"); if (a) { var b = this; g.rb.load("overlay", function () { b.Vx = new g.A.Jn(a, b); b.set("display", 0) }) } }, infosChanged: function () {
            var a = this.get("infos"); if (a) {
            this.nm = this.nm || {}; var b, c = this; g.rb.load("overlay", function () {
                for (var d in a) a.hasOwnProperty(d) &&
                    (b = a[d], c.nm[d] = c.nm[d] || new g.A.Qe(b, c))
            })
            }
        }, ama: function (a) {
            var b = null; if (a instanceof z.A.sb) b = new g.A.sb(a, this); else if (a instanceof z.A.Jn) b = new g.A.Jn(a, this); else if (a instanceof z.A.Qe) b = new g.A.Qe(a, this); else {
                var c = ["overlay"]; "d" === this.get("overlayRender") ? (c.push("dvector"), g.l.Lo ? c.push("svg") : c.push("vml")) : c.push("cvector"); if (!this.Kya && !g.rb.lD(c)) { var d = this; g.rb.Sg(c, function () { this.Kya = !0; d.overlaysChanged() }); return } a instanceof z.A.zc ? b = new g.A.zc(a, this) : a instanceof z.A.Wz ?
                    b = new g.A.Wz(a, this) : a instanceof z.A.Xb ? b = new g.A.Xb(a, this) : a instanceof z.A.$g ? b = new g.A.$g(a, this) : a instanceof z.A.qt ? b = new g.A.zc(a, this) : a instanceof z.A.wt && (b = new g.A.zc(a, this))
            } return b
        }, i3: function () { var a = this.ue; !this.wu || this.Ch && this.Ch.tp || (a = "function" === typeof this.wu ? this.wu(this.Xk.R.zoom) : this.wu); return a }, FBa: function () {
            function a() { } var b = new g.o.bd, c = [], d = new g.U(116.405467, 39.907761); new g.style.Dg.ci; for (var e = 0; 100 > e; e += 1)for (var f = 0; 100 > f; f += 1) {
                var h = new g.U(d.Q + 0.02 *
                    f, d.P + 0.02 * e), h = new g.ai({ name: "point" + (100 * e + f), map: this, ha: new g.Ca.Cg(this.Ab(h)) }); c[100 * e + f] = h; h.h("hover", a, h)
            } b.Ix(c); this.za.push(b)
        }, fc: function () { }, DBa: function (a) { var b = new g.o.bd, c = [], c = (new g.B$({ map: this })).rT(a); b.Ix(c); this.za.push(b); this.set("display", 0) }, Rf: function (a) { var b = this; a = a.Rf(this); if (!a) return null; if (a.length && "string" == typeof a[0]) g.rb.Sg(a, function () { b.layersChanged() }); else return a; return null }, yDa: function () { return this.Ta }, OFa: function () { this.set("display", 0) },
        displayChanged: function (a) { this.M0 || this.sK(a) }, sK: function (a) { if (a) if (g.a.pi(this.cE), g.l.Rl) { var b = this; setTimeout(function () { b.mc() }, 0) } else this.mc(); else this.lw || (this.cE = g.a.Rc(this.mc), this.lw = !0) }, mc: function () {
        this.cE = null; if (!this.fQ) {
            this.q("render"); this.lw = !1; var a = {}; if (this.za && (a.size = this.C.get("size"), a.size.width && a.size.height)) {
                for (var b = this.C.view.type, c = [], d = 0, e = this.za.length; d < e; d += 1)this.za[d].Bg && this.za[d].Bg !== b ? this.za[d].Ka = !0 : (c.push(this.za[d]), this.za[d].ol && c.push(this.za[d].ol));
                c.sort(function (a, b) { var c = a.get("zIndex"), d = b.get("zIndex"); return c > d ? 1 : c === d ? a.AF > b.AF ? 1 : -1 : -1 }); a.za = c; c = g.l.ja ? Math.min(window.devicePixelRatio || 1, 2) : 1; a.Kla = 15E5 < a.size.width * a.size.height * c * c; a.YI = !!this.C.get("rasterLayer"); a.ba = g.l.ba; a.lang = this.get("lang"); a.R = this.C.SI(); a.Bg = b; this.C.D = !0; a.S = this.C.getResolution([0, 0]); a.ys = this.C.get("mapStyle"); a.el = this.el; this.C.D = !1; a.Fd = this.bh; a.BCa = this.Sn; a.Ge = this.Qk; a.$f = this.Gg; a.RK = this.Gg && g.l.ba; a.GU = g.l.ba && this.Qk; a.xE = g.l.ba && this.bh;
                this.xE = a.xE; b = this.get("targetLevel") || a.R.zoom; a.Xq = a.R.zoom > b; a.Kf = a.R.zoom > b ? "zoomOut" : a.R.zoom < b ? "zoomIn" : "stable"; a.VEa = !0; a.s1 = this.s1; for (var b = !1, f, c = !1, d = 0; d < this.za.length; d += 1)this.za[d].yi && this.za[d].T.get("visible") && a.R.zoom <= this.za[d].T.get("zooms")[1] && (a.HT = !0), this.za[d].he().Mc && (b = !0); for (d = 0; d < this.za.length; d += 1)this.za[d].T.qP && a.HT && (!this.Qk && this.za[d].T.get("visible") && (f = this.za[d].T.qP(), f.fEa = 1, f.zoom = a.R.zoom), c = !0); this.qb = []; c && f && this.qb !== f && (this.qb = f); a.qb =
                    this.qb; a.Mc = b; a.scale = Math.pow(2, a.R.zoom - a.R.De); this.Xk = a; this.kd = this.C.get("mask"); a.kd = this.kd; a.AJ = this.AJ; if (f = this.JI()) f.mc(a), this.el = this.OQ = this.AJ = !1
            }
        }
        }, JI: function () { if (!this.J || this.J.type !== this.C.view.type || this.J.Hsa) if (this.J = null, "3D" == this.C.view.type) { var a = this; g.rb.load("Map3D", function () { a.J || (a.J = new g.Da.jF(a), a.set("display")) }) } else this.J = new g.M.canvas.Kb(this); return this.J }, ypa: function () {
            var a = [], b = this.get("controls").Hd, c; for (c in b) b[c].vy && b[c].vy() && a.push(b[c].vy());
            return a
        }, destroyChanged: function () {
            delete g.te.Fy[this.C._amap_id]; this.fQ = 1; this.CT(!0); this.V = {}; this.Cc && (this.Cc.T.G("complete", this.lr, this), this.Cc.Ug(), this.za = g.a.uo(this.za, g.a.indexOf(this.za, this.Cc))); this.Ch && this.Ch.cf && this.Ch.cf.T && this.Ch.cf.T.setMap(); this.Yja && clearTimeout(this.Yja); this.Cja(); this.Cga(); this.dO && this.dO(); this.Ika(); this.tl(); this.C = this.C.map = null; this.K = this.K.gM = null; this.ri(); this.ze && (this.ze.stop(), this.ze = null); this.Jf && (this.Jf.stop(), this.Jf = null); this.Bd &&
                (this.Bd.stop(), this.Bd = null); this.J && this.J.Af && this.J.Af(); this.J = null
        }, Ika: function () { var a = this.K; this.vca(); g.F.Kma(a); g.j.ZD(a); this.Gl = null; g.j.ab(a, "amap-container"); this.Ta = null }, jogEnableChanged: function () { this.get("jogEnable") ? this.dv = !0 : this.dv = !1 }, drawChanged: function () {
            var a = this, b, c, d = this.get("draw"); if (d) { this.bq || (this.bq = []); b = 0; for (c = this.bq.length; b < c; b += 1)this.bq[b].qva(); g.rb.load("interaction", function () { var b = new g.Iza({ type: d, o: a.Ms }, a); a.bq.push(b); a.loaded = !0 }) } else if (this.bq) for (b =
                0, c = this.bq.length; b < c; b += 1)this.bq[b].qva(), this.bq[b].bCa(), this.G("click", this.bq[b].NDa, this)
        }, ce: function (a, b, c) { return this.C.view.ce(a, b, c) }, sg: function (a, b, c) { return this.C.view.sg(a, b, c) }, U3: function (a, b) {
            var c = this.get("size"), d = document.createElement("canvas"); a = a || c.width; b = b || c.height; d.width = a; d.height = b; for (var e = -(c.width - a) / 2, c = -(c.height - b) / 2, f = d.getContext("2d"), h = this.Ta.o.childNodes, k = [], l = 0; l < h.length; l += 1)k.push(h[l]); k.sort(function (a, b) { return a.style.zIndex - b.style.zIndex });
            for (l = 0; l < k.length; l += 1) {
                var m = k[l]; if (g.j.rn(m, "amap-layer") || g.j.rn(m, "amap-e") || g.j.rn(m, "amap-labels")) if ("CANVAS" === m.tagName) { var h = c, n = e, p = parseFloat(m.style.width) || m.width, q = parseFloat(m.style.height) || m.height, r = 1; m.style.transform && (r = parseFloat(m.style.transform.split("(")[1])); f.drawImage(m, n, h, p * r, q * r) } else if ("DIV" === m.tagName) for (var r = m.childNodes, s = parseFloat(m.style.top) || 0 + c, m = parseFloat(m.style.left) || 0 + e, u = 0; u < r.length; u += 1) {
                    var v = r[u]; if ("CANVAS" === v.tagName || "IMG" === v.tagName) h =
                        parseFloat(v.style.top) || 0, n = parseFloat(v.style.left) || 0, p = parseFloat(v.style.width) || v.width, q = parseFloat(v.style.height) || v.height, f.drawImage(v, n + m, h + s, p, q)
                }
            } return d.toDataURL()
        }
    }); g.Kb.zb({
        rfa: function () { this.gB = !1; g.l.Hf && ("3D" === this.C.view.type ? this.Nba() : this.Lba()); g.l.ba || this.Iba() }, Cja: function () { g.l.Hf && ("3D" === this.C.view.type ? this.Iga() : this.Hga()); g.l.ba || this.Dga() }, rotateEnableChanged: function () { this.bwa = this.get("rotateEnable"); g.l.Hf && this.u1 && "3D" !== this.C.view.type && (this.bwa ? this.u1() : this.uta()) }, zoomEnableChanged: function () {
            this.get("zoomEnable") ? (g.l.Hf && this.tP && "3D" !== this.C.view.type && this.tP(), g.l.ba || this.Kba()) : (g.l.Hf && this.KS && this.KS(), g.l.ba ||
                this.Gga())
        }, mousewheelChanged: function () { }, zS: function (a) { a && (this.gB = a.au) }, bw: function () { this.gB = !1 }, Ei: function (a, b, c, d) {
            var e, f = {}; a || (a = window.event); var h = g.F.gm(a, this.Ta.$c); g.l.Hf && ("touchend" !== a.type ? this.V.Xfa = h : h = this.V.Xfa); f.ub = h; f.Pa = this.sg(h); f.Pa && (f.Pa = f.Pa.toFixed(3)); f.Zf = this.Td(f.Pa); c || (c = this.gB ? this.gB ? [this.gB] : null : this.fea(f.Pa, d)) && 0 < c.length && c[0].tr && (e = c[0].tr, f.au = c[0]); e || "info" === a.xf || (e = this); f.dd = e; f.IAa = a.altKey; f.ctrlKey = a.ctrlKey; f.button = void 0 === a.button ?
                0 : a.button; b || g.F.preventDefault(a); return f
        }, BN: function (a) { return a && a !== this && a !== document }, uO: function () { var a = this.V; a.Yf && (a.Uj.ub.x === a.Yf.x && a.Uj.ub.y === a.Yf.y ? a.Gg = !1 : (a.Gg = !0, a.qp || (a.Tp.q("dragstart", a.Sp), a.qp = !0), a.Tp.q("dragging", a.Uj), a.Yf = a.Uj.ub)) }, Twa: function (a) { for (var b = [], c = 0; c < a.length; c += 1)a[c] && (b = b.concat(a[c])); return b }, xv: function (a, b, c) { return a && b && (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y) < (c || 10) }, fea: function (a, b) {
            var c = this.JI(); if (!c) return null; var d, e = this; this.za.sort(function (a,
                b) { return a.get("zIndex") > b.get("zIndex") ? -1 : 1 }); c.Pu(a, this.za, function (a) { d = a; d = e.Twa(d) }, function () { d = [] }, b); return d
        }
    }); g.Kb.zb({
        yfa: function () { this.Sn = {}; this.h("moveend", this.p6, this); g.l.Rl && (g.l.YK || g.l.DH) && this.h("zoomend", this.jV, this); this.h("movestart", this.q6, this); this.h("zoomstart", this.w6, this); this.h("zoomend", this.v6, this); this.lM(); this.Dt = 0; this.bG = {}; "undefined" === typeof window.requestAnimationFrame && (this.Dt = 2) }, w6: function () { 2 !== this.Dt && 12 === this.get("zoom") && (this.Dt = 1, g.a.NC.start(this.bG)); this.Qk = !0 }, v6: function () {
        1 === this.Dt && 13 !== this.get("zoom") && (this.Dt = 0, g.a.NC.cancel(this.bG)); this.Qk =
            !1; this.set("display")
        }, p0: function (a, b) { this.Sn.left = 0 < a; this.Sn.right = 0 > a; this.Sn.LE = 0 < b; this.Sn.jQ = 0 > b }, Xt: function () { this.Sn.left = !1; this.Sn.right = !1; this.Sn.LE = !1; this.Sn.jQ = !1 }, Cga: function () { this.G("moveend", this.p6, this); g.l.Rl && (g.l.YK || g.l.DH) && this.G("zoomend", this.jV, this); this.G("movestart", this.q6, this); this.G("zoomstart", this.w6, this); this.G("zoomend", this.v6, this); this.Ega() }, p6: function (a) {
        this.Gg = !1; this.Xt(); this.F7(); !a.b5 && this.C.get("limitBounds", null, !0) ? (a = this.sma()) && !a.cb(this.get("center")) ?
            this.DK(this.get("zoom"), a, !1, !0) : this.pa("moveend") : this.pa("moveend"); this.set("display")
        }, q6: function () { this.Gg = !0; this.Xt() }, dragEnableChanged: function () { (this.CC = this.get("dragEnable")) ? this.kM() : this.cO() }, pa: function (a, b) { if (this.C.ke(a)) { var c; b && (c = b.f6 ? { type: a, newsize: b.f6, oldsize: b.vta } : { type: a, pixel: b.ub, target: this.C, lnglat: b.Zf }); this.C.q(a, c) } }, lM: function () { this.h("click", this.UZ); this.h("dblclick", this.YZ); g.l.Hf && this.WW(); g.l.ba || this.Jba() }, Ega: function () {
            this.G("click", this.UZ);
            this.G("dblclick", this.YZ); g.l.Hf && this.JZ(); g.l.ba || this.Fga()
        }, KG: function (a, b) { var c = this.get("targetLevel") || this.get("zoom"), c = 0 < b ? Math.floor(c) + 1 : Math.ceil(c) - 1, c = Math.min(Math.max(c, this.get("zooms")[0]), this.get("zooms")[1]); c === this.get("zoom") || this.Jf && this.Jf.Hv && c === this.Jf.end || this.Tz(c, !1, a) }, UZ: function (a) { this.pa("click", a) }, YZ: function (a) { this.get("doubleClickZoom") && this.get("zoomEnable") && this.KG(a.Pa, 1); this.pa("dblclick", a) }, pBa: function (a) {
            this.KG(a.HGa, a.O8); this.pa("touchend",
                a)
        }, kM: function () { this.CC && ("3D" === this.C.view.type ? (this.h("dragstart", this.d_), this.h("dragging", this.$Z), this.h("dragend", this.b_)) : (this.h("dragstart", this.c_), this.h("dragging", this.ZZ), this.h("dragend", this.a_))) }, cO: function () { this.CC || ("3D" === this.C.view.type ? (this.G("dragstart", this.d_), this.G("dragging", this.$Z), this.G("dragend", this.b_)) : (this.G("dragstart", this.c_), this.G("dragging", this.ZZ), this.G("dragend", this.a_))) }, c_: function (a) {
            this.zS(a); this.Xt(); this.bh = !0; this.V.iy = a.ub.x; this.V.DC =
                a.ub.y; this.ze && (this.ze.stop(), this.ds(!0)); this.pa("dragstart"); this.pa("movestart"); this.q("movestart", a); this.Zwa()
        }, ZZ: function () {
            var a = this.V, b = a.Uj.ub.x - a.iy, c = a.Uj.ub.y - a.DC; if (c || b) {
                this.V.Gg = !0; this.p0(b, c); a.iy = a.Uj.ub.x; a.DC = a.Uj.ub.y; var a = b, d = c, e = this.rotation; e && (e *= Math.PI / 180, a = b * Math.cos(e) + Math.sin(e) * c, d = -Math.sin(e) * b + Math.cos(e) * c); a = this.get("centerCoords").Za((new g.H(a, d)).Kd(this.S)); (d = this.U1(a)) && (c = Math.round(this.ce(d).Za(this.ce(a)).y)); this.Qo(this.Ta.Jr, b, c); a.x =
                    (a.x + g.a.Ea) % g.a.Ea; this.set("centerCoords", a, !0); this.set("center", this.Td(a), !0); this.dv && (this.dh ? (a = new Date, this.Jt = 100 < a - this.dh ? new g.H(0, 0) : new g.H(b, c), this.dh = a) : this.dh = new Date); this.pa("dragging"); this.pa("mapmove")
            } else this.V.Gg = !1, this.Jt = null, this.Xt()
        }, Qo: function (a, b, c) {
            if (a && !(1 > Math.abs(b) && 1 > Math.abs(c))) {
                var d = parseFloat(a.style.top) || 0, e = parseFloat(a.style.left) || 0, f = ""; this.rotation && (f = g.j.at[g.j.lg] + ":rotate(" + this.rotation + "deg);overflow:visible;"); a.style.cssText = "position:absolute;top:" +
                    (d + c) + "px;left:" + (e + b) + "px;" + f
            }
        }, U1: function (a) { var b = this.C.view.xW(), c = this.lU.height * this.S / 2; return a.y < b.dc + c ? (a.y = b.dc + c, a) : a.y > b.qc - c ? (a.y = b.qc - c, a) : null }, a_: function () {
            this.bw(); 100 < new Date - this.dh && (this.Jt = null); this.V.Yf = null; this.bh = !1; this.Xt(); this.pa("dragend"); if (this.dv && this.Jt) if (this.V.Gg) {
                var a = this.Jt, b = new g.H(0, 0); this.ze = new g.Cj(a, b, function (a, b, e) { return 600 <= e ? b : a.Kd(1 - Math.pow(e / 600, 2)).floor() }, 1); this.ze.rq = function (a) {
                    if (2 > Math.abs(a.x) && 2 > Math.abs(a.y)) this.ze.stop(),
                        this.q("moveend"), this.ds(), this.Jt = this.dh = null; else { var b = a.x, e = a.y, f = this.rotation; f && (f *= Math.PI / 180, b = a.x * Math.cos(f) + Math.sin(f) * a.y, e = -Math.sin(f) * a.x + Math.cos(f) * a.y); b = this.get("centerCoords").Za((new g.H(b, e)).Kd(this.S)); e = this.U1(b); f = a.y; e && (f = Math.round(this.ce(e).Za(this.ce(b)).y)); this.Qo(this.Ta.Jr, a.x, f); b.x = (b.x + g.a.Ea) % g.a.Ea; this.set("centerCoords", b, !0); this.set("center", this.Td(b), !0); this.pa("mapmove") }
                }; this.ze.Dn(this)
            } else this.q("moveend"), this.ds(!0), this.Jt = this.dh = null;
            else this.q("moveend"), this.ds(), this.Jt = this.dh = null
        }, Zwa: function () { if (!this.V.refresh) { var a = this, b = null; this.V.refresh = setInterval(function () { b !== a.V.Yf && (a.set("display", 0), b = a.V.Yf) }, g.l.ba ? 400 : 100) } }, jV: function () {
            if (g.l.Rl && (g.l.YK || g.l.DH)) {
                for (var a = this.Ta.o.childNodes, b = 0; b < a.length; b += 1) { var c = a[b]; c instanceof HTMLCanvasElement && (c.width = 0); "amap-e" === c.className && (c.style.height = "0") } for (b = 0; b < this.za.length; b += 1)c = this.za[b], "undefined" !== typeof AMap.IndoorMap && c instanceof AMap.IndoorMap &&
                    (c.cu && (c.cu.width = 0), c.Cx && (c.Cx.width = 0))
            }
        }, ds: function (a) { this.V.refresh && (clearInterval(this.V.refresh), this.V.refresh = null); a || (this.jV(), this.set("display", 0)) }, F7: function (a) { this.set("refresh", a) }
    }); g.Kb.zb({
        setZoomSlow: function (a) { this.DK(a, null, !this.get("animateEnable")) }, setPanTo: function (a) { this.DK(null, a, !this.get("animateEnable")) }, zoomAndCenterChanged: function (a) { var b = a[0]; b < this.get("zooms")[0] && (b = this.get("zooms")[0]); b > this.get("zooms")[1] && (b = this.get("zooms")[1]); this.DK(b, a[1], a[2] || !this.get("animateEnable")) }, zoomChanged: function () { this.S = Math.pow(2, 20 - this.get("zoom")); this.q("closeOverlays"); this.set("display") }, rotationChanged: function (a) {
        this.rotation = this.get("rotation");
            this.C.q("rotate", { rotation: this.rotation || 0 }); !0 !== a && this.set("display", 0)
        }, pitchChanged: function () { this.pitch = this.get("pitch"); this.C.q("pitch", { pitch: this.pitch || 0 }); this.set("display", 0) }, centerCoordsChanged: function () { this.q("closeOverlays"); this.NAa ? this.sK(!0) : this.sK(!1) }
    }); g.oW = g.aa.extend({
        ka: [g.va, g.Re], r: function (a, b) { this.type = "2D"; this.Ze(b, !0); a && this.Mla(a) }, Mla: function (a) { this.map = a; this.Se(["size", "refresh", "maxPitch"], a); this.centerChanged(); a.Se(["zoom", "center", "centerCoords", "rotation", "pitch"], this) }, xW: function () { this.aM || this.bna(); return this.aM }, bna: function () {
            var a; if (this.get("center") instanceof g.U) { a = new g.re(-180, -85, 180, 85); var b = this.map.Ab(a.Wj()); a = this.map.Ab(a.Eo()); this.aM = { Ec: b.x, dc: b.y, Dc: a.x, qc: a.y } } else a = this.map.get("limitBounds",
                null, !0), this.aM = { Ec: a[0], dc: a[1], Dc: a[2], qc: a[3] }
        }, SI: function () { var a = this.map, b = this.get("zoom"); return { zoom: b, kh: this.get("center"), Ha: this.em(), jb: this.get("centerCoords"), rotation: parseInt(this.get("rotation")), Df: a.get("crs"), S: Math.pow(2, 20 - b), De: Math.round(b), xg: Math.pow(2, 20 - Math.round(this.get("zoom"))) } }, centerChanged: function () { this.set("centerCoords", this.map.Ab(this.get("center")).toFixed(3), !0) }, centerCoordsChanged: function () {
            var a = this.map; a.D = !0; var b = this.xW(), c = this.get("centerCoords"),
                d = a.getSize(); a.D = !1; var e = this.get("zoom", null, !0), a = this.get("center", null, !0), d = d.height * Math.pow(2, 20 - e) / 2; a instanceof g.U ? c.x = (c.x + 268435456) % 268435456 : 0 > c.x ? c.x = 0 : c.x > b.Dc && (c.x = b.Dc); c.y < b.dc + d ? c.y = b.dc + d : c.y > b.qc - d && (c.y = b.qc - d); this.set("center", this.map.Td(c), !0)
        }
    }); g.vF = g.oW.extend({
        em: function () { var a = this.get("size"), b = this.get("centerCoords"), c = parseInt(this.get("rotation")) % 360, d = this.get("zoom", null, !0), e = Math.pow(2, 20 - d), c = Math.PI * c / 180, a = new g.H((Math.abs(a.width * Math.cos(c)) + Math.abs(a.height * Math.sin(c))) / 2, (Math.abs(a.width * Math.sin(c)) + Math.abs(a.height * Math.cos(c))) / 2), e = new g.Lf(b.Za(a.Kd(e)), b.add(a.Kd(e))), c = this.map.get("targetLevel"); if (c > d - 1) { var f = Math.pow(2, 20 - c); e.W9 = new g.Lf(b.Za(a.Kd(f)), b.add(a.Kd(f))) } e.M8 = c || d; e.xc = a; return e }, qpa: function (a) {
            var b =
                this.get("size"), c = this.get("centerCoords"), d = parseInt(this.get("rotation")) % 360, d = Math.PI * d / 180, b = new g.H((Math.abs(b.width * Math.cos(d)) + Math.abs(b.height * Math.sin(d))) / 2, (Math.abs(b.width * Math.sin(d)) + Math.abs(b.height * Math.cos(d))) / 2); a = Math.pow(2, 20 - a); return new g.Lf(c.Za(b.Kd(a)), c.add(b.Kd(a)))
        }, od: function () { var a = this.em(), b = a.Jd.x, c = a.Zb.y, a = new g.H(a.Zb.x, a.Jd.y), b = new g.H(b, c); return new g.re(this.map.Td(a), this.map.Td(b)) }, zoomChanged: function () { }, ce: function (a, b) {
            this.get("size"); var c =
                a.lb(), d = this.get("centerCoords"), e = c.Za(d); e.x < -g.a.Ea / 2 ? e.x += g.a.Ea : e.x > g.a.Ea / 2 && (e.x -= g.a.Ea); var c = this.get("size").uE().gd(2), f = this.get("rotation") * Math.PI / 180, d = e.x * Math.cos(f) - Math.sin(f) * e.y, e = Math.sin(f) * e.x + Math.cos(f) * e.y; return c.add((new g.H(d, e)).Kd(Math.pow(2, (b || this.get("zoom")) - 20)))
        }, sg: function (a, b) {
            var c = this.get("size").uE().gd(2), d = a.Za(c), e = this.get("rotation") * Math.PI / 180, c = d.x * Math.cos(e) + Math.sin(e) * d.y, d = -Math.sin(e) * d.x + Math.cos(e) * d.y, c = this.get("centerCoords").add((new g.H(c,
                d)).Kd(Math.pow(2, 20 - (b || this.get("zoom"))))); c.x = (c.x + 268435456) % 268435456; return c
        }
    }); g.VL = g.oW.extend({
        r: function (a, b) { this.dg = new g.Hc; this.ad = new g.Hc([1, 0, 0, 0, 0, -1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1]); arguments.callee.la.apply(this, arguments); this.scale = 1; this.type = "3D"; this.Nz = null; this.b7 = ""; this.R = ["", 0, 0, "", 0]; this.Nz = {} }, refreshChanged: function () { this.Rq() }, zoomChanged: function (a) { this.Rq(); this.R[4] = a }, centerChanged: function (a) { arguments.callee.la.apply(this, arguments); this.Rq() }, centerCoordsChanged: function (a) { arguments.callee.la.apply(this, arguments); this.Rq(); this.R[0] = a.toString() },
        rotationChanged: function (a) { this.Rq(); this.R[2] = a }, pitchChanged: function (a) { this.Je.pitch = Math.min(this.get("maxPitch"), Math.max(a, 0)); this.Rq(); this.R[1] = a }, Rq: function () { if (!this.Bya() && (this.YU(), this.Yna(), this.map)) { var a = this, b = function () { a.map.camera = a.m3(); a.map.q("camerachange", { map: a.map, camera: a.map.camera }) }; a.map.Ka ? b() : this.map.h("complete", b, this) } }, m3: function () { return { height: this.gn, fov: this.fpa, aspect: this.YB, near: this.Xy, far: this.rI, position: this.gma, rotation: this.Je.rotation, pitch: this.Je.pitch } },
        Yna: function () { this.Yfa = g.a.Vf() }, Ko: function () { var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 300; return g.a.Vf() - this.Yfa > a }, YU: function () {
            var a = this.get("centerCoords"), b = this.get("pitch"), c = this.get("rotation"), d = (new g.Hc).i8(-a.x + g.a.ac.x, -a.y + g.a.ac.y, 0); this.gma = { x: a.x - g.a.ac.x, y: a.y - g.a.ac.y }; a = (new g.Hc).sz(180 - b, 1, 0, 0); this.Jua = (new g.Hc).set(a); c = (new g.Hc).sz(c, 0, 0, 1); this.Rs = (new g.Hc).set(c); this.epa = d.Pg(); this.ad = (new g.Hc).i8(0, 0, -this.gn).multiply(a.multiply(c.multiply(d))).toFixed(8);
            this.ad.We = this.ad.Pg()
        }, Bya: function (a) {
            a = a || this.get("zoom"); var b = this.get("size"), c = b.width, b = b.height; if (!c || !b) return !0; this.YB = c /= b; b = b / 2 * Math.pow(2, 20 - a); a = g.a.hc((56 - a) * Math.PI / 180, 2); var d = g.a.hc(b / Math.tan(a / 2), 0); 2400 > d && (d = 2400, a = 2 * Math.atan(b / d)); this.fpa = a; this.gn = d; this.Xy = this.gn / 10; this.rI = 50 * this.gn; this.Ina = (this.gn - this.Xy) / (this.rI - this.Xy); this.dg.f8(a, c, this.Xy, this.rI); this.dg.We = this.dg.Pg(); a = this.dg; var c = new g.FV, b = c.OD, e = this.dg.elements, d = e[0], f = e[1], h = e[2], k = e[3], l =
                e[4], m = e[5], n = e[6], p = e[7], q = e[8], r = e[9], s = e[10], u = e[11], v = e[12], w = e[13], t = e[14], e = e[15]; uc(b[0], k - d, p - l, u - q, e - v).normalize(); uc(b[1], k + d, p + l, u + q, e + v).normalize(); uc(b[2], k + f, p + m, u + r, e + w).normalize(); uc(b[3], k - f, p - m, u - r, e - w).normalize(); uc(b[4], k - h, p - n, u - s, e - t).normalize(); uc(b[5], k + h, p + n, u + s, e + t).normalize(); a.SQ = c
        }, SI: function () {
            var a = this.map; a.map.Mv && (this.Rq(), this.R[3] = a.get("size").toString()); var b = this.R.toString(); if (b !== this.b7) {
                var c = this.get("zoom"), d = this.Nz; d.zoom = c; d.YB = this.YB; d.top =
                    this.top; d.Ha = this.em(); d.jb = this.get("centerCoords"); d.rotation = a.get("rotateEnable") && parseInt(this.get("rotation")) || 0; d.pitch = this.get("pitch") || 0; d.xHa = this.get("yaw"); d.Df = a.get("crs"); d.S = Math.pow(2, 20 - c); d.De = Math.round(c); d.y6 = Math.floor(c); d.xg = Math.pow(2, 20 - d.De); d.Wta = Math.pow(2, 20 - d.y6); d.dg = this.dg; d.ad = this.ad; this.b7 = d.key = b
            } this.Nz.kh = this.get("center"); this.Nz.Pq = g.a.Vf(); this.Nz.Ko = this.Ko(); return this.Nz
        }, em: function () {
            var a = this.get("size"), b = a.width, a = a.height; if (!b || !a) return null;
            var c, d; d = 0; var e = new g.H(0, d); c = this.sg(e, !0); if (55 < this.Je.pitch || !c) for (; !c;)d += a / 40, e.y = d, c = this.sg(e, !0); this.top = d / a; e.x = b; d = this.sg(e, !0); var f = 0, h = this.Je.zoom; 50 <= this.Je.pitch && 18 <= h && (f = 0); e.y = a + f; f = this.sg(e, !0); e.x = 0; h = this.sg(e, !0); c = [c.rl(), d.rl(), f.rl(), h.rl(), c.rl()]; c = new g.n$(c); e.x = b / 2; e.y = a + 256; c.DP = this.sg(e, !0); return c
        }, od: function () { var a = this.em(); if (a) { for (var b = [], c = 0; c < a.path.length; c += 1) { var d = this.map.Td(new g.H(a.path[c][0], a.path[c][1])); b.push(d) } return new g.gp(b) } },
        ce: function (a, b, c) { a.z = c || 0; a = this.X5([a]); a = a[0]; return new g.H(a.x, a.y) }, q3: function (a) { var b = this.get("size"); a = new g.Al([a.x / b.width * 2 - 1, 1 - a.y / b.height * 2, -1, 1]); a.multiply(this.Xy); return this.dg.We.wh(a) }, sg: function (a, b, c) {
            var d; this.map ? (this.map.D = !0, d = this.map.getSize(!0), this.map.D = !1) : d = this.get("size"); var e = a.x / d.width * 2 - 1; d = 1 - a.y / d.height * 2; a = new g.Al([e, d, -1, 1]); a.multiply(this.Xy); if (!this.dg.We) return null; a = this.dg.We.wh(a); e = new g.Al([e, d, 1, 1]); e.multiply(this.rI); d = this.dg.We.wh(e);
            var f = this.ad.We, e = f.wh(a).elements; a = f.wh(d).elements; c = (e[2] - (-c || 0)) / (e[2] - a[2]); if (0 > a[2] || 0 > c || b && c > 2.5 * this.Ina) return null; b = e[0] - c * (e[0] - a[0]); c = e[1] - c * (e[1] - a[1]); return isNaN(b) || isNaN(c) ? null : (new g.H(b, c)).add(g.a.ac)
        }, X5: function (a) {
            for (var b = this.get("centerCoords"), c = g.a.ac.x, d = g.a.ac.y, e = this.get("size"), f = g.a.Ea, h = b.x + f / 2, b = b.x - f / 2, k = [], l = new g.Al([0, 0, 0, 1]), m = l.elements, n = new g.H(0, 0), p = g.Hc.multiply(this.dg, this.ad), q = 0, r = a.length; q < r; q++)if (a[q]) {
                a[q].concat ? (n.x = a[q][0], n.y = a[q][1],
                    n.z = -a[q][2] || 0) : (n.x = a[q].x, n.y = a[q].y, n.z = -a[q].z || 0); h < n.x ? n.x -= f : b > n.x && (n.x += f); m[0] = n.x - c; m[1] = n.y - d; m[2] = n.z; var s = p.wh(l); s.multiply(1 / s.elements[3]); k[q] = { x: (s.elements[0] + 1) / 2 * e.width, y: (-s.elements[1] + 1) / 2 * e.height, z: s.elements[2] }
            } return k
        }, dza: function (a) { var b = this.get("size"); a = this.dg.wh(this.ad.wh((new g.Al).copy(a))); a.multiply(1 / a.elements[3]); b = new g.H((a.elements[0] + 1) / 2 * b.width, (-a.elements[1] + 1) / 2 * b.height); b.z = a.elements[2]; return b }
    }); g.a.ac = new g.H(215440491, 106744817); g.Kb.zb({
        P1: function (a, b, c) { var d = this; d.QE ? (clearTimeout(d.QE), d.QE = null) : (d.pa("zoomstart", { zoom: a }), d.q("zoomstart")); d.QE = setTimeout(function () { d.QE = null; d.pa("zoomend", { zoom: a }); d.pa("zoomchange", { zoom: a }); d.q("zoomend") }, 150); a = g.a.hc(a, 2); d.Tz(a, !0, b, c) }, Tz: function (a, b, c, d) {
            var e = this.get("zoom"); if (e !== a) {
                var f = this.get("zooms"); "3D" !== this.C.view.type && (g.l.ba || g.l.ye) && (b = !0); a = a || e; a = Math.min(Math.max(a, f[0]), f[1]); var h = a !== e, k = !!c; this.ze && (this.ze.stop(), this.ze = null); c = c || this.get("centerCoords");
                var l = this.ce(c); c = function (c) { b || (c = g.a.hc(c, 2)); var d = this.sg(l); this.set("zoom", c); var e = this.sg(l), d = e && e ? e.Za(d) : new g.H(0, 0); this.set("centerCoords", this.get("centerCoords").Za(d).toFixed(3)); d.x && d.y && this.pa("mapmove"); c === a && a << 0 === a && (this.set("targetLevel", null), h && !this.QE && (this.pa("zoomchange"), this.pa("zoomend")), this.q("zoomend"), k && this.q("moveend"), this.Jf = null) }; var m; this.Bd && this.Bd.Hv && (this.Bd.stop(), this.Bd.JR && (d = !0), this.Bd.WC && (m = !0), this.Bd = null, this.set("targetLevel",
                    null)); this.Jf && this.Jf.Hv && (this.Jf.stop(), d = !0, this.Jf.WC && (m = !0), this.Jf = null, this.set("targetLevel", null)); h && !d && this.pa("zoomstart"); k && !m && this.pa("movestart"); this.q("zoomstart"); b ? c.call(this, a) : (this.Jf = new g.Cj(e, a, null, 0.04), this.Jf.JR = h, this.Jf.WC = k, this.Jf.transition = function (a, b, c) { return c >= g.w.xH ? b : (b - a) * (1 - Math.pow(1 - c / g.w.xH, 4)) + a }, this.Jf.rq = c, this.Jf.Dn(this, !0), this.set("targetLevel", a))
            }
        }, DK: function (a, b, c, d) {
            var e = null; a || (a = this.Bd ? this.Bd.jxa : this.get("targetLevel") || this.get("zoom"));
            var e = b ? this.Ab(b).toFixed(3) : this.Bd ? this.Bd.L8 : this.get("centerCoords"), f = a !== this.get("zoom"), h = !e.cb(this.get("centerCoords")), k = b = !1; this.Jf && this.Jf.Hv && (this.Jf.stop(), b = !0, this.Jf.WC && (k = !0), this.Jf = null, this.set("targetLevel", null)); this.Bd && this.Bd.Hv && (this.Bd.stop(), this.Bd.JR && (b = !0), this.Bd.WC && (k = !0), this.Bd = null, this.set("targetLevel", null)); this.ze && (this.ze.stop(), this.ze = null); if (f || h) {
                if (!this.C.view.em().contains(e) || f && "3D" !== this.C.view.type && (g.l.ba || g.l.ye)) c = !0; if (c) f && (b ||
                    (this.q("zoomstart"), this.pa("zoomstart")), this.set("zoom", a), this.pa("zoomchange"), this.pa("zoomend"), this.q("zoomend")), h && (k || d || (this.pa("movestart"), this.q("movestart")), this.set("centerCoords", e), this.pa("mapmove"), this.q("moveend", { b5: d })), this.set("targetLevel", null); else {
                        this.set("targetLevel", a); var l = a - this.get("zoom"), m = e.Za(this.get("centerCoords")).toFixed(3); this.Bd = new g.Cj(1, 0, null, 0.001); this.Bd.JR = f; this.Bd.WC = h; this.Bd.L8 = e; this.Bd.jxa = a; this.Bd.transition = function (a, b, c) {
                            return Math.pow(1 -
                                Math.min(g.w.xH, c) / g.w.xH, 2)
                        }; this.Bd.rq = function (b) { 0.02 > b ? (this.Bd && (this.Bd.stop(), this.Bd = null), f && (this.set("zoom", a), this.pa("zoomchange"), this.pa("zoomend"), f = !1, this.q("zoomend")), h && (this.set("centerCoords", e), this.q("mapmove"), this.q("moveend", { b5: d })), this.set("targetLevel", null)) : (f && this.set("zoom", a - l * b), h && (b = e.Za(m.Kd(b)).toFixed(3), this.set("centerCoords", b), this.pa("mapmove"))); this.set("display", 1) }; this.Bd.Dn(this); f && !b && (this.q("zoomstart"), this.pa("zoomstart")); !h || k || d || (this.q("movestart"),
                            this.pa("movestart"))
                }
            }
        }
    }); g.o = {};
    g.o.Tb = g.aa.extend({
        ka: [g.va, g.Re], r: function (a, b) { this.T = a; this.hb = [3, 18]; this.AF = g.a.vb(this); a && this.Se(["opacity", "visible", "zIndex", "zooms"], a); a.Bg = b.C.view.type; this.e = b; this.W("display", b) }, Ug: function () {
        this.yi && this.OP(); if (g.Ba && g.Ba.Tq && g.Ba.Tq.length) { var a = g.a.indexOf(g.Ba.Tq, this); -1 !== a && (g.Ba.Tq = g.a.uo(g.Ba.Tq, a)) } if (a = this.Lb) { if (a.length) for (var b = 0; b < a.length; b += 1)a[b].parentNode && a[b].parentNode.removeChild(a[b]); else a.parentNode && a.parentNode.removeChild(a); this.Lb = null } this.T.Ug && this.T.Ug();
            this.T.oi = !1; this.T.o = null; this.tl(); var c; this.M && (this.M.Tj(), this.M = null, c = "-" + this.ec); this.gg && (this.gg.Tj(), this.gg = null, c = "-" + this.ec); if (c) for (var d in g.Ba.yj) g.a.IC(d, c) && delete g.Ba.yj[d]
        }, pa: function (a, b) { this.T.q(a, b) }, visibleChanged: function () { this.set("display", 0) }, zIndexChanged: function () { this.set("display", 0) }, cU: function (a) { g.j.Eq(a, this.opacity) }, opacityChanged: function () {
            var a = this.get("opacity"); this.opacity = Math.min(Math.max(0, a), 1); if (a = this.Lb) if (a.length) for (var b = 0; b < a.length; b +=
                1)this.cU(a[b]); else this.cU(a); this.e && this.e.C && "3D" == this.e.C.view.type && this.set("display", 0)
        }, Bo: function () { return this.e.kd && !this.T.get("rejectMapMask") }, GI: function () {
            var a = this.get("bounds"); if (a) {
                if (a instanceof g.re) { var b = a.Wj(), a = a.Eo(), c = this.e.Ab(new g.U(180, 0)).x, d = this.e.Ab(b), e = this.e.Ab(a), f = this.e.get("center"); b.Q > a.Q && (0 < f.Q ? e.x += c : d.x -= c); this.I = [d.x, d.y, e.x, e.y] } else a instanceof g.Lf ? this.I = [a.Zb.x, a.Zb.y, a.Jd.x, a.Jd.y] : a instanceof g.wF && "3D" === this.T.Bg && (b = a.path[1], d =
                    this.e.Ab(a.path[0]), e = this.e.Ab(b), this.I = [d.x, d.y, e.x, e.y, a.V7, a.height]); return this.I
            } return null
        }
    }); var Nc = function () { function a(a) { this.zF[g.a.vb(a)] = a; return this } function b(a) { this.zF[g.a.vb(a)] = null; return this } return function () { function c() { var a = c.zF, b, f = [], h; for (h in a) a.hasOwnProperty(h) && f.push(a[h]); for (a = f.length - 1; 0 <= a; a -= 1)h = f[a].apply(this, arguments), void 0 !== h && (b = h); return b } c.zF = {}; c.f1 = a; c.MFa = b; return c } }();
    g.kg = g.aa.extend({
        ka: [g.va], r: function (a, b) { this.up = a | 0; this.DF = !!b; this.count = 0; this.RJ = Nc(); this.clear(); this.fB = [] }, qh: function () { return !this.count }, cEa: function () { return this.count >= this.up }, uGa: function (a) { this.up !== a && (this.up = a | 0) && this.P0(this.up) }, Hd: function (a) { return !!this.e[a] }, get: function (a, b) { var c = this.VX(a); return c ? c.value : b }, set: function (a, b) { var c = this.VX(a); c ? c.value = b : (c = new g.kg.cr(a, b), this.e[a] = c, this.YA(c), this.count += 1, this.count > this.up && this.P0(this.up)) }, ew: function (a) { this.remove(a) },
        remove: function (a) { return this.e.hasOwnProperty(a) && this.xB(this.e[a]) ? !0 : !1 }, forEach: function (a, b) { for (var c = this.Xc.next; c !== this.Xc; c = c.next)a.call(b, c.value, c.key, this) }, XJ: function (a, b) { return this.e.hasOwnProperty(a) ? this.e[a].value : b }, oFa: function () { return this.Xc.next.value }, pFa: function () { return this.Xc.Ga.value }, shift: function () { return this.J_(this.Xc.next) }, Z1: function () { this.fB.length = 0 }, H5: function (a) { this.fB.push(a) }, push: function (a) {
            a = new g.kg.cr("", a); 0 === this.count ? (this.Xc.Ga = null,
                a.Ga = this.Xc, this.Xc.next = a) : (this.NB.next = a, a.Ga = this.NB); this.count += 1; this.NB = a
        }, rya: function (a) { a = new g.kg.cr("", a); 0 === this.count ? (this.Xc.Ga = null, a.Ga = this.Xc, this.NB = this.Xc.next = a) : (this.Xc.next.Ga = a, a.next = this.Xc.next, a.Ga = this.Xc, this.Xc.next = a); this.count += 1 }, mta: function () { if (this.count) { this.count -= 1; var a = this.Xc.next; a.next ? (a.next.Ga = this.Xc, this.Xc.next = a.next) : (this.Xc.next = null, this.NB = this.Xc.Ga = null); a.next = null; a.Ga = null; return a.value } return null }, pop: function () { return this.J_(this.Xc.Ga) },
        VX: function (a) { if (this.e.hasOwnProperty(a)) return a = this.e[a], this.DF && (a.remove(), this.YA(a)), a }, YA: function (a) { this.DF ? (a.next = this.Xc.next, a.Ga = this.Xc, this.Xc.next = a, a.next.Ga = a) : (a.Ga = this.Xc.Ga, a.next = this.Xc, this.Xc.Ga = a, a.Ga.next = a) }, P0: function (a) {
            if (!(this.count <= a || this.count < 2 * this.fB.length)) {
                for (var b = this.DF ? this.Xc.Ga : this.Xc.next, c = {}, d = 0, e = this.fB.length; d < e; d++)c[this.fB[d]] = !0; for (a = Math.ceil(2 * a / 3); b && this.count > a && (d = this.DF ? b.Ga : b.next, b.key && !c[b.key] && this.xB(b) && this.RJ(b.value),
                    b = d, b !== this.Xc && b !== this.NB););
            }
        }, xB: function (a) { if (this.aC && !1 == this.aC(a.value)) return !1; a.remove(); delete this.e[a.key]; this.count -= 1; return !0 }, J_: function (a) { this.Xc !== a && (this.aC && console.log("Warnning!!!"), this.xB(a)); return a.value }, clear: function () { this.e = {}; this.Xc = new g.kg.cr("", null); this.Xc.Ga = this.Xc.next = this.Xc; this.count = 0 }
    }); g.kg.cr = function (a, b) { this.key = a; this.value = b }; g.kg.cr.prototype.Ga = null; g.kg.cr.prototype.next = null;
    g.kg.cr.prototype.remove = function () { this.Ga.next = this.next; this.next.Ga = this.Ga; this.next = this.Ga = null }; function Oc(a, b, c) { this.url = a; this.Jc = b; this.NQ = c; this.hn = this.tK = !1 } function Pc(a, b, c) { var d = Qc; return function () { return d.call(this, a, b, c) } } function Qc(a, b, c) { a.ICa = +new Date; a.loaded = b; clearTimeout(a.yxa); var d = a.Csa; d.Bn.remove(a.url) && d.Zfa(); d = a.Kra ? a.fa : a.ya; a.fa = null; (c || b || a.NQ) && a.Jc(b ? d : null, a); a.i5 ? (a.i5.ri(), a.i5 = null) : d && (d.onload = null, d.onerror = null, d.onabort = null, a.ya = null) }
    g.eF = g.aa.extend({
        KAa: "assets/image/blank.gif", r: function (a, b, c) { this.timeout = b || 15E3; this.xq = new g.kg(1024); this.Bn = new g.kg(1024); this.j2 = a; this.yQ = c }, tM: function (a) { a && this.Bn.count >= this.j2 && (a = this.Bn.Xc.Ga.value, a.hn && (this.Bn.remove(a.url), this.FW(a))); for (; this.xq.count && !(this.Bn.count >= this.j2);)this.jda(this.xq.shift()) }, Zfa: function () { if (!this.nX) { this.nX = !0; var a = this; setTimeout(function () { a.nX = !1; a.tM() }, 0) } }, jda: function (a) {
            var b = document.createElement("img"); a.hpa && (b.crossOrigin =
                "anonymous"); b.src = a.url; a.ya = b; a.Csa = this; a.startTime = +new Date; a.tK = !0; b.complete ? Qc(a, !0) : (this.Bn.set(a.url, a), b.onload = Pc(a, !0), b.onerror = Pc(a, !1, !0), b.onabort = Pc(a, !1), a.yxa = setTimeout(Pc(a, !1, !0), this.timeout))
        }, FW: function (a) { a.tK && (Qc(a, !1), a.hn = !0, a.CBa = !0) }, BEa: function (a, b, c) { return this.Sy(a.url, b, c, !0, a.ta.z + "_" + a.ta.x + "_" + a.ta.y) }, Sy: function (a, b, c, d, e) {
            var f = this.Bn.get(a); if (f && f.hn) f.hn = !1, f.Jc = b, f.NQ = c; else {
                f = new Oc(a, b, c); f.Kra = d; f.key = e; if (this.xq.get(g.a.vb(f))) return; this.xq.set(g.a.vb(f),
                    f); this.tM(!0)
            } return f
        }, ssa: function (a, b, c) { var d = this.Bn.get(a); if (d && d.hn) d.hn = !1, d.Jc = b, d.NQ = c; else { d = new Oc(a, b, c); d.hpa = !0; if (this.xq.get(g.a.vb(d))) return; this.xq.set(g.a.vb(d), d); this.tM(!0) } return d }, M1: function (a) { a.hn || (a.hn = !0, this.xq.remove(g.a.vb(a))) }, clear: function (a) { this.xq.forEach(function (a) { a.hn = !0 }); this.xq.clear(); if (a) for (; 0 < this.Bn.length;)a = this.Bn.pop(), this.FW(a); else this.Bn.forEach(function (a) { a.hn = !0 }) }
    }); function Rc(a, b, c) { this.z = a; this.x = b; this.y = c } Rc.prototype.lb = function () { return new Rc(this.z, this.x, this.y) }; Rc.prototype.toString = function () { return this.z + "/" + this.x + "/" + this.y }; g.ob = function (a) { var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1; this.ta = a; this.key = a.toString(); this.Ae = b }; g.Yq = Rc; g.o.ob = g.o.Tb.extend({
        r: function (a, b, c, d, e) {
            arguments.callee.la.apply(this, arguments); this.W("tileSize", a); this.W("tiles", a); this.Se(["zooms", "type", "detectRetina", "errorUrl"], a); a.oG && (this.W("lang", b, !0), this.W("mapStyle", b, !0), this.W("style", b, !0), this.W("features", b, !0)); var f = "overlayer" === a.get("type") || !1 === a.get("blend"); this.Ek = !f && !g.l.ba; if (g.l.ye || g.l.qHa) this.Ek = !1; var h = b.get("size"), h = h.width * h.height / 65536; this.ja = g.l.ba && g.l.ja && this.get("detectRetina"); g.l.Mc && g.l.ba && 9 < h && (this.Ek =
                !1); this.Ri = !f && !a.kk; this.Si = !f && !a.kk; this.OK = c; this.W("reload", a); a.Gra ? this.W("createTile", a) : this.W("tileFun", a); this.Ye = d; this.SR = e
        }, langChanged: function () { this.set("reload"); this.T.Ns() }, styleChanged: function () { this.e.yd || (this.set("reload"), this.T.Ns()) }, featuresChanged: function () { this.set("reload"); this.T.Ns() }, reloadChanged: function () { this.set("display", 0) }, tileFunChanged: function () {
            var a = this.OK || this.get("tileFun"); this.po = function (b, c, d) {
                var e = a(b.ta.x, b.ta.y, b.ta.z); if (!b.ss || b.ss.hn) b.loaded =
                    !1, b.ss = ("3D" === this.e.C.view.type ? g.lm.ssa : g.lm.Sy).call(g.lm, e, function (a) { b.ss = null; a ? c(a) : d() }, !1)
            }
        }, createTileChanged: function () { this.T.D = !0; var a = this.T.getCreateTile(); this.T.D = !1; this.po = function (b, c, d) { a.call(this.f.T, b.ta.x, b.ta.y, b.ta.z, c, d, b) }; this.set("reload") }, he: function () {
            var a = this.T.get("zooms", null, !0); this.T.Fra && (a = [Math.min(a[0], 18), Math.min(a[1], 18)]); return {
                Ad: this.T.get("tileSize"), visible: this.T.get("visible"), I: this.GI(), hb: a, GH: this.Ek, Ri: this.Ri, Si: this.Si, opacity: this.T.get("opacity"),
                po: this.T.get("createTile"), Fo: this.OK || this.T.get("tileFun"), Mc: this.T.mq ? !1 : this.T.get("detectRetina") && g.l.ja && g.l.ba, kd: this.Bo()
            }
        }, Ul: function (a) { if (g.M.Yd.Mi) return new g.M.Yd.Mi(this, a) }
    }); g.lm = new g.eF(6, null); g.o.bd = g.o.Tb.extend({
        r: function (a, b) { this.Va = Math.min(2, window.devicePixelRatio || 1); this.Mc = g.l.ja && !a.sj; this.map = b; this.Nq = 0; this.im = !1; this.eg = this.rf = 0; this.Tg = []; arguments.callee.la.apply(this, arguments); this.rv = []; this.Zl = new g.o.v$; a && (this.W("style", a), this.W("cursor", a, !0), this.Wwa = a.get("stable") || !1, this.W("dataSources", a), this.W("bubble", a)); this.W("display", b); this.Fba() }, he: function () {
            return {
                visible: this.get("visible"), hb: this.get("zooms"), opacity: this.get("opacity"), zIndex: this.get("zIndex"),
                Lx: this.T.get("alwaysRender") || !1, kd: this.Bo()
            }
        }, dataSourcesChanged: function () { var a = this.get("dataSources"); a && a.length ? "string" === typeof a ? (new g.fb.wb(a)).h("complete", function (a) { this.G6(a.data); this.Vr = a.data; this.im = !0; this.set("display"); this.Ka = !0; this.T.q("complete") }, this) : a.length && (this.G6(a), this.Vr = a, this.im = !0, this.set("display"), this.Ka = !0, this.T.q("complete")) : this.clear() }, getDatas: function () { return this.Vr }, wya: function () { if (this.T.sj) { var a = this.xm; this.rf = a.rf; this.eg = a.eg } },
        pa: function (a, b) { var c = { type: a, data: "mouseout" === a ? this.Wfa || null : b.au.eb, target: this.T }; this.Wfa = "mouseout" === a ? null : b.au.eb; this.T.q(a, c) }, pc: function (a) { this.pa(a.type, a) }, Fba: function () { this.h("click", this.pc); this.h("dblclick", this.pc); this.h("mousedown", this.pc); this.h("mouseup", this.pc); this.h("mouseover", this.pc); this.h("mouseout", this.pc); this.h("touchstart", this.pc); this.h("touchend", this.pc) }, zBa: function () {
            this.G("click", this.pc); this.G("dblclick", this.pc); this.G("mousedown", this.pc);
            this.G("mouseup", this.pc); this.G("mouseover", this.pc); this.G("mouseout", this.pc); this.G("touchstart", this.pc); this.G("touchend", this.pc)
        }, styleChanged: function () { this.xm = this.get("style"); this.wya(); this.set("display", 0) }, G6: function (a) { if (a) { this.clear(); for (var b = 0; b < a.length; b += 1) { var c = a[b].lnglat; a[b].lnglat = g.a.Ia(c); c = this.map.Ab(c); c = new g.ai({ name: "point-" + g.a.vb(this), ha: new g.Ca.Cg([c.x, c.y], !0) }); c.tr = this; c.eb = a[b]; this.vH(c) } } }, dqa: function (a) {
            if ("geojson" === a) return new g.B$({ map: this.map });
            if ("topjson" === a) return new g.fAa({ map: this.map }); if ("subway" === a) return new g.aAa({ map: this.map })
        }, Bua: function (a) {
            if (a) {
                var b = [], b = [], c = {}; if (a.rules) { for (var b = a.rules, d = 0, e = b.length; d < e; d += 1) { for (var f = [], h = b[d].symbolizers, k = 0, l = h.length; k < l; k += 1)h[k].fill && (f[k] = new g.style.Dg.DV(h[k].fill)), h[k].stroke && (f[k] = new g.style.Dg.hW(h[k].stroke)); h = f; b[d].MK = h; b[d] = new g.style.saa(b[d]) } c.rules = b } if (a.symbolizers) {
                    b = a.symbolizers; a = 0; for (d = b.length; a < d; a += 1)b[a].fill && (b[a] = new g.style.Dg.DV(b[a].fill)),
                        b[a].stroke && (b[a] = new g.style.Dg.hW(b[a].stroke)); c.MK = b
                } a = new g.QL(c)
            } else a = new g.QL({}); this.set("style", a); return a
        }, wBa: function (a, b) { var c = new g.fb.wb(a); c.h("complete", function (c) { c = this.fa[a] = this.dqa(b).rT(c); this.Ix(c); this.pa("complete") }, this); c.h("error", this.fc, this) }, dva: function (a) { "px" === a.target.get("unit") ? (this.rf = Math.max(a.nl, this.rf), this.eg = Math.max(a.nl, this.eg)) : a.nl > this.As && (this.As = a.nl, this.Uy = this.As / this.map.C.hj.Xp(20)) }, vH: function (a) {
            this.Zl.add(a); if (!this.BC &&
                !this.T.sj) { if (0 === a.name.indexOf("circle") || 0 === a.name.indexOf("ellipse")) { a.h("rad", this.dva, this); var b = a.get("radius"); b.length && (b = Math.max.apply(null, b)); "px" === a.get("unit") ? (this.rf = Math.max(b, this.rf), this.eg = Math.max(b, this.eg)) : this.As ? b > this.As && (this.As = b, this.Uy = this.As / this.map.C.hj.Xp(20)) : (this.As = b, this.Uy = this.As / this.map.C.hj.Xp(20)) } b = a.get("strokeWeight") || 0; if (!this.Vy || b > this.Vy) this.Vy = b } this.Wwa || a.W("feature", this, !0)
        }, Ix: function (a) {
        this.im = !0; for (var b = 0, c = a.length; b <
            c; b += 1)this.vH(a[b])
        }, clear: function () { this.im = !0; this.Vr = []; this.Zl.clear(); this.set("display", 0) }, pn: function (a) { var b, c; b = this.Zl.pn([a[0] + g.a.Ea, a[1], a[2] + g.a.Ea, a[3]]); c = this.Zl.pn([a[0] - g.a.Ea, a[1], a[2] - g.a.Ea, a[3]]); a = this.Zl.pn(a); return g.extend(a, g.extend(b, c)) }, vDa: function (a) { var b, c = this.get("style"), d = a.pl; c instanceof g.QL || (c = this.Bua(c)); if (d && 0 < d.length) b = c.o2(d, a); else { if (c.P7.length || c.pl.length) b = c.vna(a); b || (b = a.Gpa()) } return b }, yR: function (a) {
            function b(a, b) { return a.$l - b.$l }
            var c = [], d, e, f, h, k, l = {}; for (d in a) if (a.hasOwnProperty(d)) { f = a[d]; h = f.get("zIndex"); for (e in l) if (l.hasOwnProperty(e) && (k = c[l[e]][2], k === h)) break; "undefined" === typeof l[h] && (c.push([[], [], h]), l[h] = c.length - 1); h = c[l[h]]; h[0].push(f) } c.sort(this.Swa); a = 0; for (d = c.length; a < d; a += 1)c[a][0].sort(b); return c
        }, featureChanged: function (a) { this.im = !0; var b = a.target, c = b.cc(); 0 !== this.Zl.Lpa([g.a.vb(b)]).length && (this.Zl.remove(b, a.uv), c && !a.Ona && this.Zl.add(b)) }, s7: function (a) {
        this.im = !0; for (var b, c = 0, d = a.length; c <
            d; c += 1)b = a[c], b.ha.uv = null, b.bs(!0), b.sl("feature")
        }, AGa: function (a, b) { return a[1].zIndex === b[1].zIndex ? g.a.vb(a[1]) - g.a.vb(b[1]) : a[1].zIndex - b[1].zIndex }, Swa: function (a, b) { return a[2] - b[2] }, mGa: function (a) { return a.BDa() === g.o.kAa.Uza }, Ul: function (a) { return this.BC ? new g.M.Ce.Bl(this, a) : "c" === this.map.get("overlayRender") && g.M.canvas.Bl ? new g.M.canvas.Bl(this, a) : g.M.Yd.Bl && "d" === this.map.get("overlayRender") ? new g.M.Yd.Bl(this, a) : null }
    });
    g.o.bd.zb({ Vl: function (a) { return this.BC ? new g.Da.Ce.Bl(this, a) : this.T.sj ? new g.Da.baa(this, a) : new g.Da.Bl(this, a) } }); g.o.v$ = g.aa.extend({
        r: function () { this.clear() }, clear: function () { this.$p = []; this.nT = new g.Dk }, add: function (a) { var b = g.a.vb(a), c = a.cc(); this.$p[b] || (this.count += 1, this.$p[b] = a, c && !g.I.cb(c.od(), [Infinity, Infinity, -Infinity, -Infinity]) && this.nT.ps(c.od(), a)) }, qDa: function () { return this.$p }, pn: function (a) { return this.nT.ewa(a) }, Lpa: function (a) { var b = a.length, c = [], d; for (d = 0; d < b; d += 1)this.$p[a[d]] && c.push(this.$p[a[d]]); return c }, remove: function (a, b) {
            var c = g.a.vb(a).toString(), d = a.cc(); this.$p[c] && (this.$p[c] =
                null, d && (c = "undefined" !== typeof b ? b : d.od(), this.nT.remove(c, a)))
        }
    }); g.Dk = g.aa.extend({
        r: function (a) { this.N5 = "undefined" !== typeof a ? a : 6; this.BJ = Math.floor(this.N5 / 2); this.yK = { I: [Infinity, Infinity, -Infinity, -Infinity], Gb: [] }; this.count = 0 }, zma: function (a, b) {
            var c = -1, d = [], e; d.push(b); var f = b.Gb; do {
            -1 !== c && (d.push(f[c]), f = f[c].Gb, c = -1); for (var h = f.length - 1; 0 <= h; h -= 1) {
                var k = f[h]; if ("undefined" !== typeof k.Oe) { c = -1; break } var l = g.Dk.uz(k.I[2] - k.I[0], k.I[3] - k.I[1], k.Gb.length + 1), k = g.Dk.uz((k.I[2] > a.I[2] ? k.I[2] : a.I[2]) - (k.I[0] < a.I[0] ? k.I[0] : a.I[0]), (k.I[3] > a.I[3] ? k.I[3] : a.I[3]) -
                    (k.I[1] < a.I[1] ? k.I[1] : a.I[1]), k.Gb.length + 2); if (0 > c || Math.abs(k - l) < e) e = Math.abs(k - l), c = h
            }
            } while (-1 !== c); return d
        }, ps: function (a, b, c) { a = { I: a, Oe: b }; "undefined" !== typeof c && (a.type = c); this.M4(a, this.yK); this.count += 1 }, M4: function (a, b) {
            var c; if (0 === b.Gb.length) b.I = g.I.lb(a.I), b.Gb.push(a); else {
                var d = this.zma(a, b), e = a; do {
                    if (c && "undefined" !== typeof c.Gb && 0 === c.Gb.length) { var f = c; c = d.pop(); for (var h = 0, k = c.Gb.length; h < k; h += 1)if (c.Gb[h] === f || 0 === c.Gb[h].Gb.length) { c.Gb.splice(h, 1); break } } else c = d.pop(); f =
                        e instanceof Array; if ("undefined" !== typeof e.Oe || "undefined" !== typeof e.Gb || f) { if (f) { f = 0; for (h = e.length; f < h; f += 1)g.I.extend(c.I, e[f].I); c.Gb = c.Gb.concat(e) } else g.I.extend(c.I, e.I), c.Gb.push(e); if (c.Gb.length <= this.N5) if (0 < d.length) e = { I: g.I.lb(c.I) }; else break; else e = f = this.hsa(c.Gb), 1 > d.length && (c.Gb.push(f[0]), d.push(c), e = f[1]) } else g.I.extend(c.I, e.I), e = { I: g.I.lb(c.I) }
                } while (0 < d.length)
            }
        }, hsa: function (a) { for (var b = this.Gua(a); 0 < a.length;)this.Hua(a, b[0], b[1]); return b }, Gua: function (a) {
            for (var b =
                a.length - 1, c = 0, d = a.length - 1, e = 0, f = a.length - 2; 0 <= f; f -= 1) { var h = a[f]; h.I[0] > a[c].I[0] ? c = f : h.I[2] < a[b].I[1] && (b = f); h.I[1] > a[e].I[1] ? e = f : h.I[3] < a[d].I[3] && (d = f) } Math.abs(a[b].I[2] - a[c].I[0]) > Math.abs(a[d].I[3] - a[e].I[1]) ? b > c ? (b = a.splice(b, 1)[0], c = a.splice(c, 1)[0]) : (c = a.splice(c, 1)[0], b = a.splice(b, 1)[0]) : d > e ? (b = a.splice(d, 1)[0], c = a.splice(e, 1)[0]) : (c = a.splice(e, 1)[0], b = a.splice(d, 1)[0]); return [{ I: g.I.lb(b.I), Gb: [b] }, { I: g.I.lb(c.I), Gb: [c] }]
        }, Hua: function (a, b, c) {
            for (var d = g.Dk.uz(b.I[2] - b.I[0], b.I[3] - b.I[1],
                b.Gb.length + 1), e = g.Dk.uz(c.I[2] - c.I[0], c.I[3] - c.I[1], c.Gb.length + 1), f, h, k, l = a.length - 1; 0 <= l; l -= 1) {
                    var m = a[l], n = [b.I[0] < m.I[0] ? b.I[0] : m.I[0], b.I[2] > m.I[2] ? b.I[2] : m.I[2], b.I[1] < m.I[1] ? b.I[1] : m.I[1], b.I[3] > m.I[3] ? b.I[3] : m.I[3]], n = Math.abs(g.Dk.uz(n[1] - n[0], n[3] - n[2], b.Gb.length + 2) - d), m = [c.I[0] < m.I[0] ? c.I[0] : m.I[0], c.I[2] > m.I[2] ? c.I[2] : m.I[2], c.I[1] < m.I[1] ? c.I[1] : m.I[1], c.I[3] > m.I[3] ? c.I[3] : m.I[3]], m = Math.abs(g.Dk.uz(m[1] - m[0], m[3] - m[2], c.Gb.length + 2) - e), p = Math.abs(m - n); if (!h || !f || p < f) h = l, f = p, k = m < n ? c :
                        b
            } d = a.splice(h, 1)[0]; b.Gb.length + a.length + 1 <= this.BJ ? (b.Gb.push(d), g.I.extend(b.I, d.I)) : c.Gb.length + a.length + 1 <= this.BJ ? (c.Gb.push(d), g.I.extend(c.I, d.I)) : (k.Gb.push(d), g.I.extend(k.I, d.I))
        }, remove: function (a, b) { var c = []; c[0] = { I: a }; (c[1] = b) || (c[1] = !1); c[2] = this.yK; this.count -= 1; if (!1 === c[1]) { var d = 0, e = []; do d = e.length, e = e.concat(this.w7.apply(this, c)); while (d !== e.length); return e } return this.w7.apply(this, c) }, w7: function (a, b, c) {
            var d = [], e = [], f = []; if (!a || !g.I.Og(a.I, c.I)) return f; a = g.I.lb(a.I); var h;
            e.push(c.Gb.length); d.push(c); do {
                c = d.pop(); var k = e.pop() - 1; if ("undefined" !== typeof b) for (; 0 <= k;) { var l = c.Gb[k]; if (g.I.Og(a, l.I)) if (b && "undefined" !== typeof l.Oe && l.Oe === b || !b && ("undefined" !== typeof l.Oe || g.I.k2(a, l.I))) { "undefined" !== typeof l.Gb ? (f = this.oz(l, !0, [], l), c.Gb.splice(k, 1)) : f = c.Gb.splice(k, 1); g.Dk.xT(c); b = void 0; c.Gb.length < this.BJ && (h = this.oz(c, !0, [], c)); break } else "undefined" !== typeof l.Gb && (e.push(k), d.push(c), c = l, k = l.Gb.length); k -= 1 } else if ("undefined" !== typeof h) {
                    c.Gb.splice(k + 1, 1);
                    0 < c.Gb.length && g.Dk.xT(c); k = 0; for (l = h.length; k < l; k += 1)this.M4(h[k], c); h.length = 0; 0 === d.length && 1 >= c.Gb.length ? (h = this.oz(c, !0, h, c), c.Gb.length = 0, d.push(c), e.push(1)) : 0 < d.length && c.Gb.length < this.BJ ? (h = this.oz(c, !0, h, c), c.Gb.length = 0) : h = void 0
                } else g.Dk.xT(c)
            } while (0 < d.length); return f
        }, search: function (a, b) { return this.oz({ I: a }, !1, [], this.yK, b) }, ewa: function (a, b) { return this.oz({ I: a }, !1, [], this.yK, b, !0) }, oz: function (a, b, c, d, e, f) {
            var h = {}, k = []; if (!g.I.Og(a.I, d.I)) return f ? h : c; k.push(d.Gb); do {
                d = k.pop();
                for (var l = d.length - 1; 0 <= l; l -= 1) { var m = d[l]; if (g.I.Og(a.I, m.I)) if ("undefined" !== typeof m.Gb) k.push(m.Gb); else if ("undefined" !== typeof m.Oe) if (b) c.push(m); else if ("undefined" === typeof e || m.type === e) m = m.Oe, "undefined" !== typeof f ? h[g.a.vb(m)] = m : c.push(m) }
            } while (0 < k.length); return "undefined" !== typeof f ? h : c
        }
    }); g.Dk.xT = function (a) { var b = a.Gb.length, c = a.I; if (0 === b) g.I.empty(c); else { var d = a.Gb[0].I; c[0] = d[0]; c[2] = d[2]; c[1] = d[1]; c[3] = d[3]; for (d = 1; d < b; d += 1)g.I.extend(c, a.Gb[d].I) } };
    g.Dk.uz = function (a, b, c) { var d = (a + b) / 2; a *= b; return a * c / (a / (d * d)) }; g.A = g.A || {};
    g.A.Bh = g.aa.extend({
        ka: [g.va, g.Re], lua: ["position", "altitude", "visible", "clickable", "bubble"], r: function (a, b) { this.map = b; this.Se(this.lua, a); this.W("zIndex", a); this.W("draggable", a); g.l.Hf && this.Mba(); g.l.ba || this.lM(); this.Yb = a; this.Yb.A = this }, draggableChanged: function () { this.get("draggable") ? this.kM() : this.cO() }, pa: function (a, b) { var c; c = b ? { type: a, pixel: b.ub, target: this.Yb, lnglat: b.Zf } : { type: a }; this.Yb && this.Yb.q(a, c) }, pc: function (a) {
        ("click" !== a.type && "rightclick" !== a.type && "dblclick" !== a.type &&
            "longclick" !== a.type || this.get("clickable")) && this.pa(a.type, a)
        }, jM: function () { this.h("click", this.pc); this.h("rightclick", this.pc); this.h("longclick", this.pc); this.h("longpress", this.pc); this.h("dblclick", this.pc) }, R0: function () { this.G("click", this.pc); this.G("rightclick", this.pc); this.G("longclick", this.pc); this.G("longpress", this.pc); this.G("dblclick", this.pc) }, lM: function () {
            this.get("clickable") && this.jM(); this.h("mousemove", this.pc); this.h("mouseout", this.pc); this.h("mouseover", this.pc); this.h("mousedown",
                this.pc); this.h("mouseup", this.pc)
        }, ABa: function () { this.R0(); this.G("mousemove", this.pc); this.G("mouseout", this.pc); this.G("mouseover", this.pc); this.G("mousedown", this.pc); this.G("mouseup", this.pc) }, clickableChanged: function () { this.get("clickable") ? this.jM() : this.R0() }, Mba: function () { this.get("clickable") && this.jM(); this.h("touchstart", this.pc, this); this.h("touchmove", this.pc, this); this.h("touchend", this.pc, this) }, kM: function () {
            this.h("dragstart", this.Qt); this.h("dragging", this.Ot); this.h("dragend",
                this.Pt)
        }, Qt: function (a) { this.map.zS(a); this.Yf = a.ub; this.m5 = a.Pa; this.l5 = a.Zf; this.pa("dragstart", a) }, Ot: function (a) {
            var b = this.map.C.view.type; if ("2D" == b) { var c = a.ub.Za(this.Yf), b = c.x, c = c.y; this.Yf = a.ub; var d = this.map.get("rotation") * Math.PI / 180, e = b * Math.cos(d) + Math.sin(d) * c, b = -Math.sin(d) * b + Math.cos(d) * c; this.Qo(new g.H(e, b)); this.pa("dragging", a) } else "3D" == b && a.Pa && (c = a.ub.Za(this.Yf), b = c.x, c = c.y, e = a.Pa.Za(this.m5), a.Zf.Za(this.l5), this.Yf = a.ub, "function" === typeof this.Wy && this.Wy(b, c, e), this.m5 =
                a.Pa, this.l5 = a.Zf, this.pa("dragging", a))
        }, Pt: function (a) { this.map.bw(); "3D" == this.map.C.view.type && this.Yb.reset && this.Yb.reset(); this.pa("dragend", a) }, cO: function () { this.G("dragstart", this.Qt); this.G("dragging", this.Ot); this.G("dragend", this.Pt) }, dN: function (a) { var b, c, d = []; if (a) for (b = 0, c = a.length; b < c; b += 1)d.push(this.eN(a[b])); return d }, eN: function (a) { a = this.map.Ab(a); return [a.x, a.y] }, cg: function (a) {
            var b = this.L.kb || this.map.get("centerCoords"), c = Math.pow(2, 20 - this.map.get("zoom")); return [(a[0] -
                b.x) / c, (a[1] - b.y) / c]
        }, QA: function (a, b) { var c = this.map.C, d = [], e = !1; a[0] instanceof Array && "number" !== typeof a[0][0] && (e = !0); if (e) for (var e = 0, f = a.length; e < f; e++) { for (var h = [], k = 0, l = a[e].length; k < l; k++) { var m = c.Ab(a[e][k]); m.x += b[0]; m.y += b[1]; h.push(c.Td(m)) } d.push(h) } else for (e = 0, f = a.length; e < f; e++)h = c.Ab(a[e]), h.x += b[0], h.y += b[1], d.push(c.Td(h)); return d }
    }); g.A.sb = g.A.Bh.extend({
        KD: "content contentDom icon opacity angle autoRotation offset textAlign verticalAlign shadow title label isTop shape topWhenClick topWhenMouseOver noSelect anchor".split(" "), nla: { AMAP_ANIMATION_NONE: !1, AMAP_ANIMATION_DROP: g.Cj.Easing.Bounce, AMAP_ANIMATION_BOUNCE: g.Cj.Easing.Cubic }, r: function (a, b) {
            arguments.callee.la.apply(this, arguments); this.Se(this.KD, a); this.W("move", a); this.cma(); this.nu(); this.set("AnimationOffset", new g.H(0, 0), !0); this.W("raiseOnDrag", a); this.W("animation",
                a)
        }, vN: function (a, b, c) { var d = this.get("animation"); if (d && "AMAP_ANIMATION_NONE" !== d) { var e = this; this.xn = new g.Cj; this.xn.transition = function (c, h, k) { if ("AMAP_ANIMATION_NONE" === d) return 0; if (a && 600 <= k) return e.xn.stop(), 0; c = 0 === Math.floor(k / 600) % 2 ? "Out" : "In"; "out" === b ? c = "Out" : "in" === b && (c = "In"); return e.nla[d][c](k % 600 / 600) }; c = c || 40; this.xn.rq = function (a) { e.set("AnimationOffset", e.eO.add(new g.H(0, -1 * c * a))) }; this.eO = new g.H(0, 0); this.xn.Dn() } }, AnimationOffsetChanged: function () { this.positionChanged() },
        T_: function () { this.xn && (this.xn.stop(), this.set("AnimationOffset", this.eO)); this.set("AnimationOffset", new g.H(0, -40)); if (this.Vq) this.Vq.set("position", this.get("position")); else { var a = new z.A.sb({ zIndex: this.get("zIndex") - 1, icon: new z.A.ci({ image: g.w.yb + "/theme/v1.3/dragCross.png", size: new g.xd(14, 11), innerOverlay: !0 }), offset: new g.H(-4, -5), position: this.get("position"), innerOverlay: !0 }); a.Aa = !0; this.Vq = a } this.Vq.D = !0; this.Vq.setMap(this.map.C); this.Vq.D = !1 }, JX: function () {
            this.set("animation", "AMAP_ANIMATION_DROP",
                !0); this.vN(!0, "in"); this.Vq.D = !0; this.Vq.D = !1
        }, animationChanged: function () { this.xn && (this.xn.stop(), this.set("AnimationOffset", this.eO), this.xn = null); var a = this.get("animation"); a && "AMAP_ANIMATION_NONE" !== a && ("AMAP_ANIMATION_DROP" === a ? this.vN(!0, "in", 100) : this.vN()) }, bh: function () { this.Vq && this.Vq.set("position", this.get("position")) }, raiseOnDragChanged: function () {
            this.get("raiseOnDrag") ? (this.h("dragstart", this.T_, this), this.h("dragging", this.bh, this), this.h("dragend", this.JX, this)) : (this.G("dragstart",
                this.T_, this), this.G("dragging", this.bh, this), this.G("dragend", this.JX, this))
        }, Qo: function (a) { var b = this.get("position"); a = this.map.Ab(b).add(a.Kd(Math.pow(2, 20 - this.map.get("zoom")))); b instanceof g.U ? this.set("position", this.map.Td(a)) : this.set("position", a) }, Wy: function (a, b) { var c = this.get("position"), d = this.get("altitude"), c = this.map.ws(c, d), d = this.map.Kp(new g.H(c.x + a, c.y + b), null, d); this.set("position", d) }, cma: function () {
            var a = this.get("content"), b = this.get("shadow"), c = this.get("offset"), d = this.get("label"),
            e, f = this; e = a ? this.z1(a, c) : this.xP(this.get("icon"), function () { f.L && f.L.ca ? (g.l.vi && g.a.iepngFix(e), f.offsetChanged(), f.$K()) : f.map && f.map.set("display") }); this.set("contentDom", e, !0); b && (a = this.F1(b, c), this.set("shadowDom", a, !0)); d && d.content && this.set("labelDom", this.yP(d.content), !0)
        }, yP: function (a) { var b = document.createElement("div"); b.className = "amap-marker-label"; b.innerHTML = a; return b }, nu: function () {
            var a = this.get("position"); if (this.map && a && !this.L) {
                var b = this.map, a = this.map.Ab(a), a = this.L =
                    new g.ai({ name: "marker-" + g.a.vb(this), map: b, ha: new g.Ca.Cg([a.x, a.y]) }); a.Fp = this.Yb.CLASS_NAME; a.tr = this; this.W("coords", a, !0); a.Se("offset textAlign verticalAlign isTop zIndex params noSelect".split(" "), this)
            }
        }, getParams: function () {
            return {
                zIndex: this.get("zIndex"), Dp: this.get("angle"), Jg: this.get("contentDom"), oJ: this.get("labelDom"), k8: this.get("shadowDom"), opacity: this.get("opacity"), altitude: this.get("altitude"), title: this.get("title"), label: this.get("label"), VE: this.get("AnimationOffset"),
                verticalAlign: this.get("verticalAlign"), textAlign: this.get("textAlign"), offset: this.get("offset"), f5: this.get("isTop"), shape: this.get("shape"), visible: this.get("visible") && !this.Yb.get("outOfZooms"), anchor: this.get("anchor")
            }
        }, offsetChanged: function () {
            function a(a) {
                var c = b.get("offset"), f = b.get("AnimationOffset"), h = b.get("verticalAlign"), k = b.get("textAlign"), l = Math.round(a.x) + c.x + f.x; a = Math.round(a.y) + c.y + f.y; var f = b.get("anchor"), m = b.L.Pj || g.j.yo(b.L.Jg); b.L.Pj = m; c = m[0]; m = m[1]; f && (f = f.split("-"),
                    2 === f.length ? (k = f[1], h = f[0]) : 1 === f.length && "center" === f[0] && (k = "center", h = "middle")); switch (k) { case "center": l -= c / 2; break; case "right": l -= c }switch (h) { case "middle": a -= m / 2; break; case "bottom": a -= m }b.L.ca.style.left = l + "px"; b.L.ca.style.top = a + "px"
            } if (this.map) if (this.L && this.L.ca) {
                var b = this, c = this.map.C.view.type; "2D" == c ? (c = this.map.Ab(this.get("position")), c = c.Za(this.L.La).gd(Math.pow(2, 20 - this.map.get("zoom"))), this.L.ca && (this.L.ca.oB && this.L.ca.parentNode !== this.L.ca.oB ? this.map.set("display") :
                    a(c))) : "3D" == c && (c = this.get("position"), c = this.map.ws(c, this.get("altitude")), this.L.ca && (this.L.ca.oB && this.L.ca.parentNode !== this.L.ca.oB ? this.map.set("display") : a(c)))
            } else this.map.set("display")
        }, altitudeChanged: function () { this.offsetChanged() }, positionChanged: function () { if (this.L) { var a = this.map.Ab(this.get("position")); this.set("coords", [a.x, a.y]); this.map && (this.L.laa = !0, this.offsetChanged()) } }, anchorChanged: function () { this.BF() }, textAlignChanged: function () { this.BF() }, verticalAlignChanged: function () { this.BF() },
        BF: function () { this.L && (this.L.Pj = null, this.L.ge = !0, this.map && (this.map.sd.hm = !0, this.map.set("display"))) }, contentChanged: function () {
            if (this.L) {
                this.L.Pj = null; this.map.sd.hm = !0; -1 === g.a.indexOf(this.map.sd.Tg, this.L) && this.map.sd.Tg.push(this.L); var a = this.get("contentDom"); this.L.ca && this.L.ca === a.parentNode && this.L.ca.removeChild(a); var a = this.get("content"), b = this.get("offset"), a = this.z1(a, b); this.set("contentDom", a); this.L.ca ? (g.l.vi && g.a.iepngFix(a), this.L.ca.appendChild(a), this.L.Jg = a, this.offsetChanged(),
                    this.$K()) : this.map && this.map.set("display"); this.titleChanged()
            }
        }, iconChanged: function () {
            if (this.L && this.L.ca && !this.get("content")) {
                this.L.Pj = null; this.map.sd.hm = !0; -1 === g.a.indexOf(this.map.sd.Tg, this.L) && this.map.sd.Tg.push(this.L); this.L.ca && this.get("contentDom") && this.L.ca.removeChild(this.get("contentDom")); var a = this.get("icon"); this.get("offset"); var b = this, c = this.xP(a, function () { b.L && b.L.ca ? (g.l.vi && g.a.iepngFix(c), b.offsetChanged(), b.$K()) : b.map && b.map.set("display") }); this.set("contentDom",
                    c); this.L.ca && (this.L.ca.appendChild(c), this.L.Jg = c); this.titleChanged()
            }
        }, shadowChanged: function () { if (this.L && this.L.ca) { var a = this.get("shadowDom"); this.L.ca && a && a.parentNode === this.L.ca && this.L.ca.removeChild(a); if (a = this.get("shadow")) { var b = this.get("offset"), a = this.F1(a, b); this.set("shadowDom", a); this.L.ca && this.L.ca.appendChild(a) } } }, titleChanged: function () { this.L && this.L.Jg && "string" === typeof this.get("title") && this.L.Jg && this.get("title") && (this.L.Jg.title = this.get("title")) }, $K: function (a,
            b) { a = a || this.get("label"); b = b || this.get("labelDom"); if (a && b) { var c = a.direction, d = this.L.Pj || g.j.yo(this.L.Jg), e = d[0], d = d[1], f = g.j.yo(b), h = f[0], k = f[1]; this.L.kv = f; var l = f = 0; switch (c) { case "top": f = -k; l = (e - h) / 2; break; case "right": f = (d - k) / 2; l = e; break; case "bottom": f = d; l = (e - h) / 2; break; case "left": f = (d - k) / 2; l = -h; break; case "center": f = (d - k) / 2, l = (e - h) / 2 }a.offset && (f += a.offset.y, l += a.offset.x); b.style.top = f + "px"; b.style.left = l + "px" } }, labelChanged: function (a) {
                a = a || this.get("label"); if (this.L && this.L.ca) {
                    this.L.kv =
                    null; var b = this.L.ca, c = this.get("labelDom"); c && c.parentNode === b && b.removeChild(c); a && a.content && (c = "", a.content && (c = this.yP(a.content), b.appendChild(c), this.$K(a, c)), this.set("labelDom", c))
                } else a && a.content ? this.set("labelDom", this.yP(a.content), !0) : this.set("labelDom", null)
            }, isTopChanged: function () {
                var a = this.map.sd.QK, b = this.get("isTop"), c = this.get("zIndex"); a ? a === this ? this.L && this.L.ca && (this.L.ca.style.zIndex = b ? this.map.sd.Nq + 10 : c, this.map.sd.QK = b ? this : null) : (a.L && a.L.ca && (a.L.ca.style.zIndex =
                    b ? a.get("zIndex") : this.map.sd.Nq + 10), this.L && this.L.ca && (this.L.ca.style.zIndex = b ? this.map.sd.Nq + 10 : c), this.map.sd.QK = b ? this : a) : (this.map.sd.QK = this, this.L && this.L.ca && (this.L.ca.style.zIndex = b ? this.map.sd.Nq + 10 : c))
            }, visibleChanged: function () { this.L && this.L.ca && (this.get("visible") && !this.Yb.get("outOfZooms") ? this.L.ca.style.display = "block" : this.L.ca.style.display = "none") }, cua: function () { this.visibleChanged() }, angleChanged: function () {
                if (!g.l.ye && this.L && this.L.ca) {
                    var a = this.L, b = a.get("params"), c =
                        b.textAlign, d = b.verticalAlign, e = b.offset, b = e.x, e = e.y; this.BF(); if ("AMap.Text" == a.Fp) { var e = b = 0, f = a.Pj || g.j.yo(a.Jg), h = f[0], k = f[1]; a.Pj = f; switch (c) { case "center": b = h / 2; break; case "right": b = h }switch (d) { case "middle": e = k / 2; break; case "bottom": e = k } } else b = -b, e = -e; g.j.rotate(this.L.ca, this.get("angle") || 0, { x: b, y: e })
                }
            }, zIndexChanged: function () {
                var a = this.get("zIndex"); if (a > this.map.sd.Nq) { this.map.sd.Nq = a; var b = this.map.sd.QK; b && b.L && b.L.ca && (b.L.ca.style.zIndex = a + 10) } this.L && this.L.ca && (this.L.ca.style.zIndex =
                    this.get("isTop") ? this.map.sd.Nq + 10 : this.get("zIndex"))
            }, opacityChanged: function () { var a = this.get("contentDom"), b = this.get("shadowDom"); a && g.j.Eq(a, this.get("opacity")); b && g.j.Eq(b, this.get("opacity")) }, z1: function (a) { var b; b = document.createElement("div"); b.className = "amap-marker-content"; "string" !== typeof a ? b.appendChild(a) : (b.innerHTML = a, b.childNodes[0] && !b.childNodes[0].style && (b.style["white-space"] = "pre")); g.j.Eq(b, this.get("opacity")); return b }, xP: function (a, b) {
                var c, d = 0, e = 0, f, h, k, l, m, n; a ? ("string" ===
                    typeof a ? (c = a, n = !0) : (c = a.get("image"), e = a.get("size"), f = a.get("imageSize"), d = e.width, e = e.height, f && (l = f.width, m = f.height)), f = "string" !== typeof a ? a.get("imageOffset") : { x: 0, y: 0 }) : (c = g.w.Ai + "/mark_bs.png", f = { x: 0, y: 0 }, d = 19, e = 33, l = 19, m = 33); h = document.createElement("div"); h.className = "amap-icon"; h.style.position = "absolute"; h.style.overflow = n ? "inherit" : "hidden"; d && (h.style.width = d + "px"); e && (h.style.height = e + "px"); k = document.createElement("img"); l && m && (k.style.width = l + "px", k.style.height = m + "px"); k.style.top =
                        f.y + "px"; k.style.left = f.x + "px"; h.appendChild(k); g.j.Eq(g.l.ye && n ? k : h, this.get("opacity")); d && e || (h.cM = !1); g.F.h(k, "load", function q() { this.L && (this.L.Pj = null); this.map && this.map.sd && (this.map.sd.hm = !0); g.F.G(k, "load", q, this); if (this.L && this.L.ca) { var a = this.get("labelDom"); a && this.L.ca.appendChild(a) } h.cM = !0; b && b() }, this); k.src = c; return h
            }, F1: function (a) { a = this.xP(a); a.style.zIndex = -1; return a }, moveChanged: function () {
                var a = this.get("move"); if (!1 === a) return this.cxa(); void 0 !== a && ("pause" === a.action ?
                    this.Eua() : "[object Array]" === Object.prototype.toString.call(a.Zf) ? a.Zf && ("resume" === a.action && this.wG ? this.moveTo(a.Zf[a.Zf.wp || 0], a.speed, a.tb) : (this.wG && this.q("movestop"), a.Zf.wp = 0, this.set("position", a.Zf[0]), this.gta(a.Zf, a.speed, a.tb, a.Dma))) : this.moveTo(a.Zf, a.speed, a.tb, !0))
            }, moveTo: function (a, b, c, d) {
                if (!(0 >= b)) {
                    var e = this.get("position"); a.Za(e); var f = Math.round(a.we(e) / 1E3 / b * 36E5); if (0 === f) return this.q("moveend"); this.uh && (this.uh.stop(), this.uh = null); this.uh = new g.Cj(e, a); c = c || function (a) { return a };
                    this.uh.transition = function (a, b, d) { if (d >= f) return b; var e = (b.Q - a.Q) * c(d / f) + a.Q; a = (b.P - a.P) * c(d / f) + a.P; return new g.U(e, a) }; this.uh.rq = function (b) { this.set("position", b); d && this.Yb.q("moving", { passedPath: [this.uh.start, this.get("position")] }); this.q("moving"); b.cb(a) && (this.uh && (this.uh.stop(), this.uh = null), this.Yb.q("moveend"), this.q("moveend")) }; this.get("autoRotation") && !g.l.ye && (b = "2D" == (this.map.C.view.type || "2D") ? this.cea(e, a) : this.dea(e, a), this.set("angle", b)); this.uh.Dn(this)
                }
            }, cxa: function () {
            this.uh &&
                (this.uh.stop(), this.uh = null, this.q("movestop"))
            }, Eua: function () { this.uh && (this.uh.stop(), this.uh = null, this.q("movepause")) }, gta: function (a, b, c, d) {
                function e() { var b = a.slice(0, a.wp || 0); b.push(this.get("position")); this.Yb.q("moving", { passedPath: b }) } function f() { a.wp < a.length - 1 ? (a.wp += 1, this.moveTo(a[a.wp], b, c)) : (this.pa("movealong"), d ? (a.wp = 0, this.set("position", a[0]), this.moveTo(a[a.wp], b, c)) : this.q("movestop")) } var h = Math.min(a.wp || 0, a.length - 1); this.wG || (this.wG = !0, this.h("moving", e, this), this.h("moveend",
                    f, this), this.h("movestop", function l() { this.wG = !1; this.G("moveend", f, this); this.G("moving", e, this); this.G("movestop", l, this) }, this)); this.moveTo(a[h], b, c)
            }, dea: function (a, b) { var c = this.map, d = c.ws(a), c = c.ws(b), e = 0; c.we(d); var f = c.y - d.y, h = c.x - d.x; 0 !== c.x - d.x ? (e = Math.atan((c.y - d.y) / (c.x - d.x)), 0 <= f && 0 > h ? e = Math.PI + e : 0 > f && 0 >= h ? e = Math.PI + e : 0 > f && 0 <= h && (e = 2 * Math.PI + e)) : e = c.y > d.y ? Math.PI / 2 : 3 * Math.PI / 2; return g.a.hc(180 * e / Math.PI, 1) }, cea: function (a, b) {
                var c = this.map, d = c.Ab(a), c = c.Ab(b), e = 0; c.we(d); var f = c.y -
                    d.y, h = c.x - d.x; 0 !== c.x - d.x ? (e = Math.atan((c.y - d.y) / (c.x - d.x)), 0 <= f && 0 > h ? e = Math.PI + e : 0 > f && 0 >= h ? e = Math.PI + e : 0 > f && 0 <= h && (e = 2 * Math.PI + e)) : e = c.y > d.y ? Math.PI / 2 : 3 * Math.PI / 2; return g.a.hc(180 * e / Math.PI, 1)
            }
    }); g.A.Jn = g.A.Bh.extend({
        r: function (a, b) { arguments.callee.la.apply(this, arguments); this.W("items", a, !0); this.W("content", a, !0); this.W("resolution", b); this.W("centerCoords", b); this.Ep = a }, $y: function (a) {
            this.Ng(); this.gt(); this.zm(); this.sl("resolution"); this.sl("centerCoords"); this.sl("render"); this.W("resolution", a); this.W("centerCoords", a); this.W("render", a); this.map.h("movestart", this.Um, this); this.map.h("mapmove", this.Um, this); this.map.h("zoomstart", this.Um, this); this.map.h("click", this.Um, this);
            this.map.h("closeOverlays", this.Um, this); this.map.h("rotate", this.Um, this)
        }, Um: function () { this.Ep.map && (this.Ep.D = !0, this.Ep.close(), this.Ep.D = !1) }, mapChanged: function () { }, positionChanged: function () { this.zm() }, renderChanged: function () { this.zm() }, Ng: function () { this.K && (this.K.parentNode && this.K.parentNode.removeChild(this.K), this.K = null); var a = g.j.create("div", null, "amap-menu"); g.F.h(a, "mousedown", function (a) { g.F.stopPropagation(a) }, this); this.K = a; this.map.Ta.A.appendChild(this.K) }, gt: function () {
            var a =
                this, b = this.K; b.innerHTML = ""; var c = this.get("content"); if ("object" === typeof c) b.appendChild(c); else if ("string" === typeof c) b.innerHTML = c; else if ((c = this.get("items")) && c.length) { var d = g.j.create("ul", b, "amap-menu-outer"); c.sort(function (a, b) { return isNaN(a.SJ) || isNaN(b.SJ) ? 0 : a.SJ - b.SJ }); for (b = 0; b < c.length; b += 1)(function (b) { var c = b.Gn, h = b.tb, k = g.j.create("li", d); k.innerHTML = c; g.F.h(k, "click", function () { h.call(k); a.Ep.D = !0; a.Ep.close(); a.Ep.D = !1 }, k) })(c[b]) } else this.K.innerHTML = ""
        }, zm: function () {
            var a =
                this.map, b = this.K; a && b && (this.map.get("zoom"), b = this.get("position"), b = a.ws(b), a = b.y, b = b.x, this.K.style.right = "", this.K.style.bottom = "", this.K.style.left = b + "px", this.K.style.top = a + "px")
        }, Ug: function () { this.K && (this.map.G("click", this.QAa, this), this.map.Ta.A.removeChild(this.K), this.Ep.oi = !1, this.K = this.Ep.Je.map = null, this.map.G("movestart", this.Um, this), this.map.G("zoomstart", this.Um, this), this.map.G("click", this.Um, this), this.map.G("closeOverlays", this.Um, this), this.map.G("rotate", this.Um, this)) },
        visibleChanged: function () { this.K && (this.get("visible") ? this.K.style.display = "block" : this.K.style.display = "none") }, itemsChanged: function () { this.K && this.gt() }
    }); g.A.Qe = g.A.Bh.extend({
        r: function (a, b) { arguments.callee.la.apply(this, arguments); this.Se("content contentDom position contentU altitude isCustom autoMove showShadow closeWhenClickMap size offset anchor".split(" "), a); this.W("retainWhenClose", a, !0); a.W("toBeClose", this); this.ff = a }, $y: function (a) {
        this.ena || (this.Ng(), this.gt()); this.sl("resolution"); this.sl("centerCoords"); this.sl("render"); this.W("resolution", a); this.W("centerCoords", a); this.W("render", a); this.map = a; a.Ta.A.appendChild(this.$b); this.$U();
            this.zm(); this.NW(); this.ena = !0; this.Uma(); this.Yb.q("onAdd", { type: "onAdd", target: this.Yb })
        }, Ng: function () {
            var a = g.j.create("div"); a.className = "amap-info"; var b = g.j.create("div", a, "amap-info-shadowContainer"), c = g.j.create("div", a), d = this.get("anchor"), e = "amap-info-contentContainer"; d && (e = d + " amap-info-contentContainer"); d = g.j.create("div", c, e); a.style.position = "absolute"; c.style.position = "absolute"; c.style.bottom = "0px"; c.style.left = "0px"; b.style.position = "absolute"; this.$b = a; this.Xf = c; this.gU = b; this.lh =
                d; this.set("contentDom", this.lh, !0)
        }, gt: function () {
            var a = this.get("contentU"); if (a) {
                var b = this.get("isCustom"), c = this.lh, d = this.gU; c.innerHTML = ""; var e = null; if (b) { if ("string" === typeof a) c.innerHTML = a; else if (a instanceof Array) for (e = 0; e < a.length; e += 1)c.appendChild(a[e]); else c.appendChild(a); e = c; d.parentNode && d.parentNode.removeChild(d) } else {
                    e = "amap-info-content amap-info-outer"; g.l.ye && (e += " amap-info-content-ie8"); e = this.kra = d = g.j.create("div", c, e); "string" === typeof a ? d.innerHTML = a : d.appendChild(a);
                    this.gna = d; a = g.j.create("a", this.kra, "amap-info-close"); a.innerHTML = "\u00d7"; this.NP = a; a.href = "javascript: void(0)"; g.l.Hf && (g.F.h(a, "touchstart", function (a) { g.F.stop(a) }, this), g.F.h(a, "touchend", function (a) { g.F.stop(a); this.ff.D = !0; this.ff.close(); this.ff.D = !1 }, this), g.F.h(a, "click", function (a) { g.F.stop(a); this.ff.D = !0; this.ff.close(); this.ff.D = !1 }, this)); g.l.ba || (g.F.h(a, "mousedown", function (a) { g.F.stop(a) }, this), g.F.h(a, "click", function (a) { g.F.stop(a); this.ff.D = !0; this.ff.close(); this.ff.D = !1 },
                        this)); if (a = this.get("size", !0)) 0 !== a.width && (d.style.width = a.width + "px"), 0 !== a.height && (d.style.height = a.height + "px"); this.get("anchor"); g.j.create("div", c, g.l.ye ? "amap-info-sharp-old" : "amap-info-sharp"); this.gU.style.display = "block"
                } g.F.axa(e)
            }
        }, $U: function () {
            var a = this.get("isCustom"), b = this.get("showShadow"); if (!a && b) {
                var a = this.gU, b = g.j.TI(this.lh), c = b.height - 23, d = b.width; if (g.l.vi || g.l.av) c = this.lh.childNodes[0].offsetHeight, d = this.lh.childNodes[0].offsetWidth + 26; b = "background-image:url(" + g.w.yb +
                    (g.l.vi ? "/theme/v1.3/iws.gif);" : "/theme/v1.3/iws.png);"); a.innerHTML = ""; var e = [], f; f = e[1] = {}; f.height = 0.5 * c + 4; f.width = d; f.offsetX = 400; f.offsetY = 16; f.top = -f.height - 10 - 15; f.left = 23; f = e[2] = {}; f.height = e[1].height; f.width = e[1].height; f.offsetX = 1075 - f.width; f.offsetY = e[1].offsetY; f.top = e[1].top; f.left = 23 + e[1].width; f = e[3] = {}; f.height = 10; f.width = 22; f.offsetX = 30; f.offsetY = 445; f.top = -25; f.left = 23 + (g.l.av || g.l.vi ? 5 : 0); f = e[4] = {}; f.height = 10; f.width = d / 2 - 15 - e[3].left - e[3].width; f.offsetX = 132; f.offsetY = 445; f.top =
                        -25; f.left = e[3].left + e[3].width; f = e[5] = {}; f.height = 10; f.width = 70; f.offsetX = 80; f.offsetY = 445; f.top = -25; f.left = e[4].left + e[4].width; f = e[6] = {}; f.height = 10; f.width = d - e[5].left - e[5].width; f.offsetX = 132; f.offsetY = 445; f.top = -25; f.left = e[5].left + e[5].width; f = e[7] = {}; f.height = 10; f.width = 30; f.offsetX = 621; f.offsetY = 445; f.top = -25; f.left = d; f = e[8] = {}; f.height = 15; f.width = 70; f.offsetX = 47; f.offsetY = 470; f.top = -15; f.left = d / 2 - 15; for (c = 1; 8 >= c; c += 1)d = g.j.create("div", a), f = [], f.push("position:absolute;"), f.push(b), f.push("top:" +
                            e[c].top + "px;"), f.push("left:" + e[c].left + "px;"), f.push("width:" + e[c].width + "px;"), f.push("height:" + e[c].height + "px;"), f.push("background-position:" + -e[c].offsetX + "px " + -e[c].offsetY + "px;"), d.style.cssText = f.join("")
            }
        }, cHa: function () { }, zm: function () {
            var a = this.map, b = this.$b, c = this.get("position"), d = this.get("anchor"); if (a && b && c) {
                a = a.ws(c, this.get("altitude")); d && (this.lh.className = d + " amap-info-contentContainer"); var e = g.j.TI(this.lh); if (g.l.vi || g.l.av) e.width = this.lh.childNodes[0].offsetWidth + 14;
                b = e.height; c = this.get("offset"); this.get("isCustom"); e = e.width; this.$b.style.left = Math.round(a.x - e / 2 + (c.x || 0)) + "px"; this.$b.style.top = Math.round(a.y + (c.y || 0)) + "px"; if (d) {
                    var f; "center" == d ? (d = "center", f = "middle") : (f = d.split("-"), d = f[1], f = f[0]); switch (f) { case "middle": this.$b.style.top = Math.round(a.y + b / 2 + (c.y || 0)) + "px"; break; case "top": this.$b.style.top = Math.round(a.y + b + (c.y || 0)) + "px" }switch (d) {
                        case "left": this.$b.style.left = Math.round(a.x + (c.x || 0)) + "px"; break; case "right": this.$b.style.left = Math.round(a.x -
                            e + (c.x || 0)) + "px"
                    }
                } d = this.gna; if (this.NP && d.childNodes[0]) { for (b = a = 0; b < d.childNodes.length; b += 1)a += d.childNodes[0].clientHeight || 0; a > (this.get("size").height || d.clientHeight) ? this.NP.style.right = "20px" : this.NP.style.right = "5px" }
            }
        }, Gca: function () {
            var a = new g.H(2 - this.lh.offsetWidth / 2, 2 - this.lh.offsetHeight), b = this.get("offset") || new g.H(0, 0), c = this.get("anchor"); if (c) {
                var a = this.lh.offsetWidth, d = this.lh.offsetHeight, e, f, h = 2 - a / 2, k = 2 - d; c && (c = c.split("-"), 2 === c.length ? (e = c[1], f = c[0]) : 1 === c.length && "center" ===
                    c[0] && (e = "center", f = "middle")); switch (e) { case "left": h = 2; break; case "right": h = -a }switch (f) { case "middle": k = -d / 2; break; case "top": k = -2 }a = new g.H(h, k)
            } this.get("isCustom") || (a = a.add(new g.H(0, -23))); return a.add(b)
        }, altitudeChanged: function () { this.zm() }, NW: function () {
            if (this.get("position") && this.get("autoMove") && this.lh) {
                for (var a = this.map, b = new g.xd(this.lh.offsetWidth, this.lh.offsetHeight), c = a.ws(this.get("position"), this.get("altitude")).add(this.Gca()), d = c.add(b.uE()), e = a.get("size"), f = a.ypa(),
                    h = 0, k = 0, l = 0; l < f.length; l += 1) { var m = f[l], n = 0, p = 0; 0 === m[1] && 0 === m[2] ? (n = m[3] - (c.x + h), p = m[0] - (c.y + k), 0 < n && 0 < p && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : 0 === m[2] && 0 === m[3] ? (n = e.qj() - m[1] - (d.x + h), p = m[0] - (c.y + k), 0 > n && 0 < p && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : 0 === m[0] && 0 === m[3] ? (n = e.qj() - m[1] - (d.x + h), p = e.oj() - m[2] - (d.y + k), 0 > n && 0 > p && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : 0 === m[0] && 0 === m[1] && (n = m[3] - (c.x + h), p = e.oj() - m[2] - (d.y + k), 0 < n && 0 > p && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) } c = c.add(new g.H(h, k)); d = d.add(new g.H(h,
                        k)); l = f = 0; 0 > c.x || b.qj() > e.qj() ? f = 20 - c.x : e.qj() < d.x && (f = e.qj() - d.x - 25); 0 > c.y || b.oj() > e.oj() ? l = 5 - c.y : e.oj() < d.y && (l = e.oj() - d.y - 15); f += h; l += k; if (f || l) a.C.D = !0, a.C.panBy(f, l), a.C.D = !1
            }
        }, Uma: function () { this.get("closeWhenClickMap") && (this.map.h("clickstart", this.WZ, this, !1), this.map.h("clickend", this.VZ, this, !1)) }, WZ: function () { this.ff.oi && (this.ff.D = !0, this.ff.getIsOpen() && (this.ff.PK = !0), this.ff.D = !1) }, VZ: function () { this.ff.oi && (this.ff.PK && (this.ff.D = !0, this.ff.close(), this.ff.D = !1), this.ff.PK = !1) },
        Ug: function () { this.$b && this.map && (this.ff.PK = !1, this.get("closeWhenClickMap") && (this.map.G("clickstart", this.WZ, this), this.map.G("clickend", this.VZ, this)), this.get("retainWhenClose") ? this.map.Gl.appendChild(this.$b) : (this.$b.parentNode === this.map.Ta.A && this.map.Ta.A.removeChild(this.$b), this.ff.A = null), this.map = null, this.ff.oi = !1, this.Yb.q("close", { type: "close", target: this.Yb })) }, $Aa: function () {
            if (!this.get("isCustom")) return this.lh.offsetWidth; for (var a = this.fi, b = a.firstChild, c = a.lastChild; b && c &&
                b.style && c.style && b === c;)a = b, b = a.firstChild, c = a.lastChild; a = g.j.Yc(a, "width"); return a = parseInt(a.replace("px", ""), 10)
        }, renderChanged: function () { this.zm() }, positionChanged: function () { this.map && this.$b && (this.zm(), this.NW()) }, anchorChanged: function () { this.positionChanged() }, offsetChanged: function () { this.positionChanged() }, contentChanged: function () { this.gt(); this.$U(); this.zm() }, sizeChanged: function () { this.gt(); this.$U(); this.zm() }
    }); g.Ca = {};
    g.Ca.He = g.aa.extend({ ka: [g.va, g.Re], r: function () { }, Nu: function () { var a = this.od(); a.kh || (a.kh = g.I.ti(a)); return a.kh }, lb: function () { return new this.r(this.xa) }, XQ: function () { return this.xa }, setCoords: function (a) { this.swa(a) }, swa: function (a) { this.uv = this.od(); this.rg = null; if (g.Ca.zc && this instanceof g.Ca.zc) { var b = a.length; this.Ef = Array(b); for (var c, d, e = 0; e < b; e += 1)if (c = a[e], d = new g.Ca.yL(c), this.Ef[e] = d, 0 === e) { if (0 === c.length) break; d.cq(c) || c.reverse() } else 0 !== c.length && d.cq(c) && c.reverse() } else this.xa = a } });
    g.Ca.Ie = g.extend({}, { Cw: "point", uL: "linestring", PV: "linearring", lF: "polygon", FL: "multipoint", EL: "multilinestring", iF: "multipolygon", Eza: "geometrycollection" }); g.ai = g.aa.extend({
        ka: [g.va, g.Re], r: function (a) { a = a || {}; a.aB && (this.aB = a.aB); a.xN && (this.xN = a.xN); a.fZ && (this.fZ = a.fZ); this.map = a.map; this.$l = a.ZM || g.a.vb(this); this.name = a.name || ""; this.ge = !1; this.set("visible", !0, !0); this.$T(a.ha); this.pl = a.MK; this.style = a.style }, Xna: function () { this.name = this.map = null; this.style = this.pl = this.tr = this.t5 = this.ha = this.ha.Oa = null; this.tl(); this.ri() }, uqa: function () { return this.pl }, Gwa: function (a) { this.pl = a; this.zIndex = this.pl[0].Ak || this.zIndex }, cc: function () { return this.ha },
        $T: function (a) { a && (this.ha = a, this.W("coords", a, !0), this.aB || this.xN) && (a.W("radius", this), a.W("center", this), a.W("resolution", this), a.W("strokeWeight", this)) }, setStyle: function (a) { this.Gwa(a); this.bs() }, coordsChanged: function () { this.bs() }, radiusChanged: function () { this.ha.uv = this.ha.od(); this.ha.rg = null; this.bs() }, bs: function (a) { this.set("feature", { target: this, Ona: a, uv: this.ha.uv || this.ha.od(), lta: this.ha.od() }); this.ha.uv = this.ha.od() }, visibleChanged: function () { this.bs() }, GDa: function (a) {
            for (var b =
                0; b < this.pl.length; b += 1) { var c = this.pl[b]; if (a.cb(c.Wx(this))) return c }
        }, Gpa: function () {
            var a = this.cc(), b = []; a.ui() === g.Ca.Ie.lF || a.ui() === g.Ca.Ie.iF ? b.push(new g.style.se.zc({ fillColor: "#78cdd1", be: 0.2, strokeColor: "#122e29", mb: 0.5, nc: 1 })) : a.ui() === g.Ca.Ie.uL || a.ui() === g.Ca.Ie.PV || a.ui() === g.Ca.Ie.EL ? b.push(new g.style.se.jp({ color: "#888888", width: 1, zIndex: 10 })) : a.ui() !== g.Ca.Ie.Cw && a.ui() !== g.Ca.Ie.FL || b.push(new g.style.se.ci({
                url: g.w.yb + "/theme/v1.3/markers/0.png", width: 36, height: 36, rotation: 0,
                uHa: -12, wHa: -36, zIndex: 100
            })); return b
        }
    }); g.ai.zza = "geometry"; g.Ca.Cg = g.Ca.He.extend({ r: function (a, b) { this.xa = a; this.sj = b; this.rg = null }, od: function () { if (!this.rg) { var a = this.xa[0], b = this.xa[1]; if (this.sj) this.rg = [a, b, a, b]; else { var c = this.get("radius"), d = this.get("resolution") * this.get("strokeWeight") || 0, c = c ? c / Math.cos(Math.PI * this.get("center").P / 180) : 0; this.rg = [a - c - d, b - c - d, a + c + d, b + c + d] } } return this.rg }, ui: function () { return g.Ca.Ie.Cw } }); g.M = { canvas: {}, Yd: {}, Pe: {}, Ce: {} }; g.M.Tb = g.aa.extend({
        ka: [g.va, g.Re], r: function (a, b) { this.f = a; this.sj = a.T.sj; this.J = b; this.e = b.e; this.W("display", b) }, Tj: function () { this.pq && this.pq(); this.tl(); this.e = this.J = this.f = null }, Pu: function (a, b, c, d) {
            var e = this.zoom; c = []; var f = this.f; if (Math.floor(e) !== e) b(c, f); else {
                a = [a.x, a.y]; if (f.hm) {
                    for (var e = f.Tg, h = !0, k = [], l = 0; l < e.length; l += 1) {
                        var m = e[l].Jg; if (m) if (m.parentNode && m.parentNode.parentNode && this.J && m.parentNode.parentNode !== this.J.Gl && "none" !== m.parentNode.style.display) {
                            var n = g.j.yo(m), m =
                                n[0], n = n[1]; if (m && n) { var p = Math.max(Math.abs(e[l].get("offset").x), Math.abs(e[l].get("offset").y)) + Math.max(m, n); f.rf = Math.max(f.rf, p); f.eg = Math.max(f.eg, p); e[l].width = m; e[l].height = n } else h = !1, k.push(e[l])
                        } else h = !1, k.push(e[l])
                    } h ? (f.hm = !1, f.Tg = []) : f.Tg = k
                } e = Math.max(f.rf, f.Vy || 0) * this.S; h = Math.max(f.eg, f.Vy || 0) * this.S; k = 0; f.Uy && (k = f.Uy / Math.cos(Math.PI * this.e.get("center").P / 180)); h = Math.max(h, k || 0); e = Math.max(e, k || 0); if (e = f.pn([a[0] - e, a[1] - h, a[0] + e, a[1] + h])) {
                    for (var q in e) if (e.hasOwnProperty(q) &&
                        (h = e[q], h.get("visible") && !h.get("noSelect"))) if (k = h.cc(), k instanceof g.Ca.Cg) if (this.sj) {
                            l = this.f.xm; l instanceof Array && (l = "number" === typeof h.eb.style && l[h.eb.style] ? l[h.eb.style] : l[0]); var m = l.size.width * this.S, n = l.size.height * this.S, p = l.anchor.x * this.S, r = l.anchor.y * this.S, k = k.xa, s = l.rotation_, u = [a[0], a[1]]; if (s) { var v = (a[0] - k[0]) / this.S, w = (a[1] - k[1]) / this.S, t = s, s = Math.cos(-t), x = Math.sin(-t), t = v * s - w * x, v = v * x + w * s; u[0] = k[0] + t * this.S; u[1] = k[1] + v * this.S } m = g.I.uP([[u[0] - m + p, u[1] - n + r], [u[0] + p, u[1] +
                                r]]); g.I.Qd(m, k) && c.push(h)
                        } else if ("undefined" !== typeof k.get("radius")) l = k.xa, l = new g.H(l[0], l[1]), m = new g.H(a[0], a[1]), k = k.get("radius"), "px" === h.get("unit") ? m.we(l) / Math.pow(2, 20 - this.zoom) < k && c.push(h) : m.we(l) * Math.cos(h.get("center").P * Math.PI / 180) <= k / this.kq * Math.pow(2, 20 - this.zoom) && c.push(h); else if ("AMap.Text" == h.Fp) l = h.get("params"), l.visible && h.ca && g.j.kD(d, h.ca, "amap-markers") && c.push(h); else {
                            if (l = h.get("params"), l.visible && h.ca) if (l.shape) for (k = k.xa, s = l.Dp % 360, u = [a[0], a[1]], s && (v = (a[0] -
                                k[0]) / this.S, w = (a[1] - k[1]) / this.S, t = Math.PI * s / 180, s = Math.cos(-t), x = Math.sin(-t), t = v * s - w * x, v = v * x + w * s, u[0] = k[0] + t * this.S, u[1] = k[1] + v * this.S), m = h.width * this.S, n = h.height * this.S, p = l.offset.x * this.S, r = l.offset.y * this.S, m = g.I.uP([[u[0] - m - p, u[1] - n - r], [u[0] - p, u[1] - r]]), k[0] instanceof Array || (k = [k]), n = k.length - 1; 0 <= n; n -= 1) { if (g.I.Qd(m, k[n])) { l.shape ? this.jD(h, u, k) && c.push(h) : c.push(h); break } } else g.j.kD(d, h.ca, "amap-markers") && c.push(h)
                        } else k.Qd ? k.Qd(a) && c.push(h) : k.gy && 1.8 * k.gy(a) <= h.get("strokeWeight") *
                            this.S && c.push(h); this.sj ? c.sort(function (a, b) { return a.$l > b.$l ? -1 : 1 }) : c.sort(function (a, b) { return a.get("isTop") ? -1 : b.get("isTop") ? 1 : a.get("zIndex") > b.get("zIndex") || a.get("zIndex") === b.get("zIndex") && a.$l > b.$l ? -1 : 1 }); b(c, f)
                } else b([], f)
            }
        }, jD: function (a, b, c) {
            var d = (b[0] - c[0][0]) / this.S; b = (b[1] - c[0][1]) / this.S; a = a.get("params"); c = a.offset; var d = [d - c.x, b - c.y], e; a = a.shape; if ("circle" === a.B.type) { if (b = a.B.coords[0], c = a.B.coords[1], Math.sqrt((d[0] - b) * (d[0] - b) + (d[1] - c) * (d[1] - c)) <= a.B.coords[2]) return !0 } else {
                if ("poly" ===
                    a.B.type) return e = a.B.coords, e = this.NH(e), g.wd.Qd(d, e); if ("rect" === a.B.type) return e = a.B.coords, a = e[0], b = e[1], c = e[2], e = e[3], e = [[a, b], [c, b], [c, e], [a, e]], g.wd.Qd(d, e)
            } return !1
        }, NH: function (a) { for (var b = [], c = 0; c / 2 < a.length / 2; c += 2)b.push([a[c], a[c + 1]]); return b }, A3: function (a, b, c, d, e, f, h) {
            var k = ["position:absolute;"]; k.push("top:" + Math.round(c) + "px;"); k.push("left:" + Math.round(b) + "px;"); k.push("width:" + Math.round(d) + "px;"); k.push("height:" + Math.round(e) + "px;"); 1 > f && ("opacity" in a.style ? (k.push("opacity"),
                k.push(":"), k.push(f), k.push(";")) : 8 <= document.documentMode ? (k.push("-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(opacity="), k.push(Math.ceil(100 * f)), k.push(")';")) : (k.push("filter:alpha(opacity="), k.push(Math.ceil(100 * f)), k.push(");"))); k.push("z-index:" + h + ";"); k.join(""); g.j.Z7(a, k.join(""))
        }
    }); g.M.Kb = g.aa.extend({
        ka: [g.va, g.Re], r: function (a) { this.e = a; this.type = "2D"; this.pk = g.a.hc(a.get("zoom"), 1); this.Gl = a.Gl; this.K = a.Ta.o; this.W("display", a); this.W("rotateEnable", a); this.W("style", a); this.W("zoom", a); this.W("hightlight", a) }, MS: function (a) { this.ue = a || g.a.Rk("ff" + this.e.ue.slice(1)) }, Pu: function (a, b, c, d, e) {
            function f(a, d) { a.length && (k[g.a.indexOf(b, d)] = a); l -= 1; 0 >= l && (c(k), l = 0) } for (var h = b.length, k = [], l = 0, m, n = [], p = 0; p < h; p += 1)m = b[p], m instanceof g.o.bd && m.get("visible") && (n.push(this.Ru(m)),
                l += 1); for (h = 0; h < n.length; h += 1)n[h].Pu(a, f, d, e)
        }
    }); g.s2 = {
        QC: function (a, b, c) { for (var d = null, e = null, f = 0, h = 0, k = 0, l = b.length; k < l; k++) { var m = b[k]; if (m < a) d = c[m], f = m; else { e = c[m]; h = m; break } } null === d ? (d = e, f = h) : null === e && (e = d, h = f); return { iz: f, JJ: h, vq: d, AD: e } }, xqa: function (a) { var b = this, c = g.a, d = [], e = {}; c.Nb(a.nodes, function (a) { !1 !== a.value && null !== a.value && (e[a.zoom] = g.w.Fc + "://" + a.value, d.push(a.zoom)) }); return function (a) { a = c.hc(a, 1); void 0 === e[a] && (e[a] = b.QC(a, d, e).vq); return e[a] } }, cqa: function (a) {
            var b = this, c = g.a, d = [], e = {}, f = a.transitional; c.Nb(a.nodes,
                function (a) { null !== a.value && !1 !== a.value && (e[a.zoom] = a.value, d.push(a.zoom)) }); return function (a) { a = c.hc(a, 1); if (void 0 === e[a]) { var k = b.QC(a, d, e); e[a] = f && "none" !== f && k.JJ !== k.iz && k.vq !== k.AD ? c.V3(k.vq, k.AD, (a - k.iz) / (k.JJ - k.iz), f) : k.vq } return e[a] }
        }, ppa: function (a) { var b = this, c = g.a, d = [], e = {}; c.Nb(a.nodes, function (a) { null !== a.value && (e[a.zoom] = a.value, d.push(a.zoom)) }); return function (a) { a = c.hc(a, 1); void 0 === e[a] && (e[a] = b.QC(a, d, e).vq); return e[a] } }, bqa: function (a) {
            var b = this, c = g.a, d = [], e = {}; c.Nb(a.nodes,
                function (a) { null !== a.value && (e[a.zoom] = a.value, d.push(a.zoom)) }); return function (a) { a = c.hc(a, 1); void 0 === e[a] && (e[a] = b.QC(a, d, e).vq); return e[a] }
        }, xpa: function (a, b, c) {
            var d = this, e = g.a, f = [], h = {}, k = a.transitional; e.Nb(a.nodes, function (a) { a.value && (h[a.zoom] = e.qla(a.value, c ? "rgba" : "webgl"), f.push(a.zoom)) }); return function (a) {
                var b = null; a = e.hc(a, 1); if (void 0 === h[a]) {
                    var b = d.QC(a, f, h), n = b.vq; if (k && "none" !== k && b.iz !== b.JJ && b.vq.join("") !== b.AD.join("")) for (var n = n.slice(0), p = (a - b.iz) / (b.JJ - b.iz), q = 0, r =
                        b.AD.length; q < r; q++)n[q] = e.V3(b.vq[q], b.AD[q], p, k); h[a] = n
                } b = h[a]; return c && b ? "rgba(" + b.join(",") + ")" : b || ""
            }
        }, ND: function (a, b, c, d) { var e = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : {}, f; for (f in c) if (c.hasOwnProperty(f)) { var h = c[f]; void 0 !== b[h] ? (b[h].nodes && 1 < b[h].nodes.length && b[h].nodes.sort(function (a, b) { return a.zoom - b.zoom }), a[f] = e.Bra ? { Pe: d.call(this, b[h], c[f]), canvas: d.call(this, b[h], c[f], !0) } : d.call(this, b[h], c[f])) : e.Ara && (a[f] = !0) } }, Dr: function (a, b) {
            for (var c = [], d = 0, e = a.length; d <
                e; d += 2) { var f = 0, f = "str" === b ? g.a.hc(parseInt(a.substr(d, 2), 16) / (0 === d ? 255 : 1), 3) : g.a.hc(parseInt(a.substr(d, 2), 16) / 255, 3); c.push(f) } return c.length ? (c.push(c.shift()), "str" === b ? "rgba(" + c.join(",") + ")" : c) : ""
        }, J6: function (a, b, c) {
            if (b[c]) console.log("customType repeat!!", c); else {
                var d = {}, e = { visible: "visible", iU: "showLabel", ok: "showIcon" }, f = [["color", { color: "color" }, { opacity: "opacity" }], ["fillColor", { fillColor: "fillColor" }, { be: "fillOpacity" }], ["strokeColor", { strokeColor: "strokeColor" }, { mb: "strokeOpacity" }],
                ["textFillColor", { nxa: "textFillColor" }, { oxa: "textFillOpacity" }], ["textStrokeColor", { qxa: "textStrokeColor" }, { rxa: "textStrokeOpacity" }], ["backgroundColor", { backgroundColor: "backgroundColor" }, { zla: "backgroundOpacity" }]], h = { fontSize: "fontSize" }; if (a.styles) {
                    a = a.styles; this.ND(d, a, e, this.ppa, { Ara: !0 }); this.ND(d, a, h, this.bqa, { jEa: !0 }); for (var h = 0, k = f.length; h < k; h++)e = f[h], a[e[0]] ? this.ND(d, a, e[1], this.xpa, { Bra: !0 }) : this.ND(d, a, e[2], this.cqa); a.texture && (this.ND(d, a, { Ua: "texture" }, this.xqa), d.ld = [], g.a.Nb(a.texture.nodes,
                        function (a) { a.value && d.ld.push(g.w.Fc + "://" + a.value) }))
                } else { for (var l in e) if (e.hasOwnProperty(l)) { var m = e[l]; d[l] = void 0 === a[m] ? !0 : a[m] } e = 0; for (l = f.length; e < l; e++) { var n = f[e], m = g.a.keys(n[1])[0], p = n[1][m], q = g.a.keys(n[2])[0], n = n[2][q]; void 0 !== a[p] ? d[m] = { canvas: this.Dr(a[p], "str"), Pe: this.Dr(a[p]) } : d[q] = a[n] } for (k in h) h.hasOwnProperty(k) && void 0 !== a[k] && (d[k] = a[k]); a.texture && (d.Ua = g.w.Fc + "://" + a.texture) } b[c] = d
            }
        }, bT: function (a, b, c, d) {
            if (a) for (var e in a) if (a.hasOwnProperty(e) && g.a.bk(a[e], "object")) {
                var f =
                    a[e], h = e; c && (h = c + ":" + e); if (f.detailedType) this.J6(f, b, h), this.bT(f.detailedType, b, h, f); else if (f.subType) this.bT(f.subType, b, h); else { if (void 0 !== f.code) { for (var k in d) d.hasOwnProperty(k) && !g.a.ka(["isDetailed", "detailedType", "styles"], k) && void 0 === f[k] && void 0 !== d[k] && (f[k] = d[k]); h = c + ":" + f.code } this.J6(f, b, h) }
            }
        }, WU: function (a) {
            if (!this.$x || this.$x.zoom != a) {
                var b = g.a.Oh, c = { zoom: a }, d; for (d in this.Tf) if (this.Tf.hasOwnProperty(d)) {
                    var e = this.Tf[d]; c[d] = {}; for (var f in e) if (e.hasOwnProperty(f)) {
                        var h =
                            e[f]; h ? h.Pe ? (c[d][f] = {}, b(h.Pe) ? c[d][f].Pe = h.Pe(a) : c[d][f].Pe = h.Pe, b(h.canvas) ? c[d][f].canvas = h.canvas(a) : c[d][f].canvas = h.canvas) : b(h) ? c[d][f] = h(a) : c[d][f] = h : c[d][f] = h
                    }
                } this.$x = c
            }
        }, styleChanged: function () {
            if (this.e.C.xi) {
                var a = this.get("style"); this.fm.tA || (this.fm = g.a.bind(this.fm, this), this.Vp = g.a.bind(this.Vp, this), this.fm.tA = !0); var b = g.a; if (a) { var c = {}; this.bT(a, c); this.Tf = c } else this.Tf = null; var d, e, f, h; this.Tf && (d = this.Tf["regions:land"], e = this.Tf.water, f = this.Tf.sky, h = this.Tf.buildings);
                var k, l, m, n, p, a = this.pk; if (d) { c = "rgba(0, 0, 0, 0)"; if (d.visible) { var q = this.Vp(b.I7(this.e.ue.substr(1)), d.opacity, d.color, !0, a); q && (c = this.Qz(q, d.visible, "rgba(0, 0, 0, 0)"), q = this.fm(b.Qs(this.e.ue.substr(1)), d.opacity, d.color, !0, a), k = this.Qz(q, d.visible)) } this.e.wu = c } else this.e.wu = ""; e && e.visible && (l = this.fm(b.Qs(this.e.rH.substr(1)), e.opacity, e.color, !0, a), l = this.Qz(l, e.visible)); f && f.visible && (m = this.fm(b.Qs(this.e.HB.substr(1)), void 0, f.color, !0, a), m = this.Qz(m, f.visible)); h && (h.visible ? (n =
                    this.fm(b.Rk(this.e.EF[0]), void 0, h.fillColor, !0, a), n = this.Qz(n, h.visible), p = this.fm(b.Rk(this.e.EF[1]), void 0, h.strokeColor, !0, a), p = this.Qz(p, h.visible)) : (n = [1, 1, 1, 0], p = [1, 1, 1, 0])); this.MS && this.MS(k, l, m, [n, p]); this.y9 ? this.y9(this.Tf) : this.set("display"); delete this.$x; this.WU(a)
            }
        }, Qz: function (a, b) { var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [0, 0, 0, 0], d = g.a.Oh; if (d(a) && d(b)) { var e = a; a = function (a) { return b(a) ? e(a) : c } } return a }, Vp: function (a, b, c, d, e) {
            if (a) {
                if (void 0 !== b) return a =
                    a.split(","), c = b, "function" === typeof b && (c = b(e)), a[3] = g.a.hc(c, 3) + ")", a.join(","); if (c) return "function" === typeof c.canvas ? d ? c.canvas : c.canvas(e) : c.canvas
            } return a
        }, fm: function (a, b, c, d, e) { if (a) { if (b) return c = b, "function" === typeof b && (c = b(e)), [a[0], a[1], a[2], g.a.hc(c, 3)]; if (c) return "function" === typeof c.Pe ? d ? c.Pe : c.Pe(e) : c.Pe } return a }, NI: function (a, b, c) { var d = this.Tf; if (d) { this.$x && c && c == this.$x.zoom && (d = this.$x); if (b || 0 === b) if (b = d[a + ":" + b]) return b; return d[a] } }, dm: function (a, b, c, d, e) {
            var f = null,
            h = a; d = d ? this.Vp : this.fm; e = e || this.pk; if (f = this.NI(b, void 0, e)) if ("function" === typeof f.visible && !f.visible(e) || !1 === f.visible) h = ""; else { var h = 1, k = ""; if (c) if (f.fillColor || f.be) h = f.be, k = f.fillColor; else { if (f.color || f.opacity) h = f.opacity, k = f.color } else if (f.strokeColor || f.mb) h = f.mb, k = f.strokeColor; else if (f.color || f.opacity) h = f.opacity, k = f.color; h = d(a, h, k, !1, e) } this.ls === b && (h = this.Qu(h || a)); return h
        }, hs: function (a, b, c, d) {
            c = c ? this.Vp : this.fm; var e = null, f = a; d = d || this.pk; (e = this.NI(b, void 0, d)) && (f = "function" ===
                typeof e.visible && !e.visible(d) || !1 === e.visible ? "" : c(a, e.opacity, e.color, !1, d)); this.ls === b && (f = this.Qu(f || a)); return f
        }, ry: function (a, b, c, d, e, f) {
            var h = a, k = b, l = c, m = !0, n = !0, p, q = 1; f = f || this.pk; var r = this.NI(d, e, f); r && ("function" === typeof r.visible && !r.visible(f) || !1 === r.visible || "function" === typeof r.iU && !r.iU(f) || !1 === r.iU ? (n = m = !1, h = k = l = "") : (h = this.Vp(a, r.oxa, r.nxa, !1, f), k = this.Vp(b, r.rxa, r.qxa, !1, f), l = this.Vp(c, r.zla, r.backgroundColor, !1, f), m = "function" === typeof r.ok ? r.ok(f) : r.ok, r.fontSize && (p = "function" ===
                typeof r.fontSize ? r.fontSize(f) : r.fontSize, p = 12 <= p ? p : 12, p = 22 >= p ? p : 22), p && g.l.Mc && (p *= 2))); f = !1; this.ls === d ? f = !0 : void 0 !== e && this.ls === d + "-" + e && (f = !0); f && (h = this.Qu(h || a), k = this.Qu(k || b), l = this.Qu(l || c), q = 1 - 1.6 * this.bD, n = m = !0); return [h, k, l, m, n, q, p]
        }, qy: function (a, b, c, d, e) {
            var f = null, h = a, k = b; d = d ? this.Vp : this.fm; var l = e || this.pk; if (f = this.NI(c, void 0, e)) "function" === typeof f.visible && !f.visible(l) || !1 === f.visible ? h = k = "" : (h = d(a, f.be, f.fillColor, !1, l), k = d(b, f.mb, f.strokeColor, !1, l)); this.ls === c && (b = k ||
                b, h = this.Qu(h || a), k = this.Qu(b)); return [h, k]
        }
    }; g.M.Kb.zb(g.s2); g.M.canvas.Kb = g.M.Kb.extend({
        r: function (a) { arguments.callee.la.apply(this, arguments) }, Ru: function (a) { if (!a.M) { var b = a.Ul(this); b && !b.rna && (a.M = b) } return a.M }, mc: function (a) {
            var b = this.e.i3(); b && this.vT !== b && this.e.C.xi && (this.e.Y7(b), this.vT = b); this.e.Ta.Jr.style.cssText = ""; var c = a.za, b = a.R, d = this.e.C.get("features"), e = a.size.width, f = a.size.height; this.pk = "vw" === this.e.C.Je.baseRender ? g.a.hc(b.zoom, 1) : a.R.De; this.S = b.S; if (!this.La || 1E4 < Math.abs(b.jb.x - this.La.x) / this.S || 1E4 < Math.abs(b.jb.y - this.La.y) /
                this.S) this.La = b.jb; this.La.x - b.jb.x < -g.a.Ea / 2 ? this.La = new g.H(this.La.x + g.a.Ea, this.La.y) : this.La.x - b.jb.x > g.a.Ea / 2 && (this.La = new g.H(this.La.x - g.a.Ea, this.La.y)); for (var h = 0; h < c.length; h += 1) {
                    var k = c[h], l = this.Ru(k), m = c[h].he(); if (l && l.f) if (!m.visible || k.BD || m.hb[0] > b.zoom || m.hb[1] < b.zoom || k.fa && 0 === k.fa.length) { if (l = l.pj()) if (l.length) for (m = 0; m < l.length; m += 1)l[m].parentNode === this.K && this.K.removeChild(l[m]); else l.parentNode === this.K && this.K.removeChild(l) } else if (this.hS(k, d)) {
                        l.mc(a, m); l.un &&
                            (a.jf = l.jf); var k = l.pj(), n, p, q = l.transform; if (!q || !k || l.Qg && !this.e.C.Ka) c[h].al && k.parentNode !== this.K && (this.K.appendChild(k), c[h].Lb = k); else {
                                c[h].Lb = k; k.length || (k = [k], q = [q]); for (var r = 0; r < k.length; r += 1)if (n = k[r], p = q[r], !p.Cy) {
                                    var s = p.translate.x, u = p.translate.y; c[h].mJ || (s = g.a.hc(s, 2), u = g.a.hc(u, 2)); var v = p.scale; 1E-5 > Math.abs(s) && (s = 0); 1E-5 > Math.abs(u) && (u = 0); var w = []; w.push("position:absolute"); w.push("z-index:" + (p.Ak || c[h].get("zIndex"))); c[h].BC ? (w.push("top:" + Math.floor(f / 2 + u) + "px"), w.push("left:" +
                                        Math.floor(e / 2 + s) + "px")) : n.Z4 ? (w.push("height:" + n.height * v + "px"), w.push("width:" + n.width * v + "px"), w.push("top:" + (f / 2 - u * v) + "px"), w.push("left:" + (e / 2 - s * v) + "px")) : (1 !== v && (w.push(g.j.at[g.j.lg] + "-origin:" + s + "px " + u + "px"), w.push(g.j.at[g.j.lg] + ":scale3d(" + v + "," + v + ",1)")), w.push("top:" + Math.floor(f / 2 - u) + "px"), w.push("left:" + Math.floor(e / 2 - s) + "px"), l.dk && (w.push("height:" + n.height + "px"), w.push("width:" + n.width + "px"))); l.mJ || 1 === m.opacity || "number" !== typeof m.opacity || w.push(g.j.H3(n, m.opacity)); n.parentNode !==
                                            this.K && this.K.appendChild(n); g.j.Z7(n, w.join(";"))
                                }
                            }
                    }
                } a = this.e.Ta.Jr; k = this.e.Ta.o; c = this.e.Ta.A; g.j.lg && "number" === typeof b.rotation && 0 !== b.rotation ? (a.style[g.j.lg + "Origin"] = e / 2 + "px " + f / 2 + "px", a.style[g.j.lg] = "rotate(" + b.rotation + "deg)", a.style.overflow = "visible", k.style.overflow = "visible", c.style.overflow = "visible") : (a.style.cssText = "", k.style.cssText = "-webkit-transform: translateZ(0);", c.style.cssText = ""); this.e.Mv = !1
        }, hS: function (a, b) {
            if ("all" === b || void 0 === a.Ql) return !0; for (var c = 0, d = a.Ql.length; c <
                d; c++)if (g.a.ka(b, "region" === a.Ql[c] ? "bg" : a.Ql[c])) return !0; return !1
        }, zoomChanged: function () { var a = this.e.get("zoom"); this.pk = "vw" === this.e.C.Je.baseRender ? g.a.hc(a, 1) : Math.round(a); this.Tf && this.WU(this.pk) }
    }); g.M.Mi = g.M.Tb.extend({
        r: function (a, b) { arguments.callee.la.apply(this, arguments); this.W("reload", a, !0); var c = a.T.get("cacheSize"); if (this.e && this.e.C) { var d = this.e.C.get("tileCacheSize"); d && 0 < d && (c = d) } this.na = new g.kg(c); var e = this; this.na.RJ.f1(function (a) { e.EA(a) }); this.na.aC = function (a) { return a.Sb ? (a.Sb.cj -= 1, 0 == a.Sb.cj && (a.hv = !1), delete a.Sb, !0) : a.hv ? a.cj ? !1 : !0 : !0 }; this.cd = 1; this.Pn = 50; this.PW = !0; this.f.na = this.na; this.lm = new g.eF(6, null, a.yQ); new g.eF(5, null, a.yQ) }, pq: function () {
            this.clear();
            this.zg = null; this.na.clear(); this.na.aC = null; this.na = this.na.RJ.zF = null; this.Gc && (this.Gc.G("tiles", this.GD, this), this.Gc.G("ack", this.FD, this), this.Gc.G("disable", this.DD, this), this.Gc = null); this.e.G("zoomend", this.Vj, this); this.e.G("moveend", this.Vj, this)
        }, reloadChanged: function () { this.f && (this.f.Ka = !1); this.na.clear(); this.reload = !0; this.set("display") }, th: function (a, b, c) {
            function d(b) { a.loaded = !0; e.f && (a.status = "loaded", a.ya = !0, a.Ne = b, e.set("display", 0), "function" === typeof c && c()) } var e = this;
            a.status = "loading"; this.f.po && this.f.po.call(this, a, d, function () { a.loaded = !0; e.f && (a.status = "loaded", a.ya = !0, "function" === typeof c && c()) })
        }, VGa: function (a, b, c, d) { var e = []; c = c || 18; b = Math.pow(2, b - c); for (var f = 0; f < a.length; f += 1) { var h = a[f].ta, k = Math.floor(h.x / b), h = Math.floor(h.y / b); if (d) { if (k = c + "/" + k + "/" + h, (h = this.na.get(k)) && "loaded" == h.status) continue } else h = new g.Yq(c, k, h), k = h + "", h = new g.ob(h); !e[k] && h && (e.push(h), e[k] = 1) } return e }, sI: function (a, b) {
            var c = this, d = this; if (this.f.cH) {
                var e, f, h, k, l, m,
                n, p = function () { var p = 0; for (e = a.length - 1; 0 <= e; e -= 1)f = a[e], p += f.length; if (0 == p) return b.call(c, a), { aL: void 0 }; d.DU = a; for (e = a.length - 1; 0 <= e; e -= 1)for (f = a[e], h = [], k = [], f.wT = h, f.sv = k, l = f.length - 1; 0 <= l; l -= 1)m = f[l], n = m.ta, c.f.e.Ch.Cz(n.x, n.y, n.z, function () { var c = l; return function (e) { e ? h.push(f[c]) : k.push(f[c]); p -= 1; if (0 == p) { for (e = a.length - 1; 0 <= e; e -= 1) { var l = a[e]; a[e] = l.wT; if (l.sv) for (var m = l.sv.length - 1; 0 <= m; m -= 1) { var n = l.sv[m]; n.status = "loaded"; n.loaded = !0; n.ya = !0 } } b.call(d, a) } } }()) }(); if ("object" === typeof p) return p.aL
            } else b.call(this,
                a)
        }, Yv: function (a, b, c) { if (a = this.na.get(a + "/" + b + "/" + c)) { if (a.hv) return a; if (a.Sb) return a.Sb; a.hv = !0; a.cj = 0; return a } }, QI: function (a) { var b = a.ta; a = b.x; var c = b.y, b = b.z, d = Math.pow(2, b), e = (a + d) % d, f = e + d, d = e - d, h = null; e !== a && (h = this.Yv(b, e, c)); h || d === a || (h = this.Yv(b, d, c)); h || f === a || (h = this.Yv(b, f, c)); return h }, wn: function (a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1; if (a.length) if (this.oK) this.HJ = !0; else {
                for (var c = a.length - 1; 0 <= c; c -= 1) {
                    var d = a[c]; if (d.length) for (var e = Math.pow(2, 20 -
                        d[0].ta.z), c = d.length - 1; 0 <= c; c--) { var f = d[c], h = f.ta; h.S = e; f.sa = {}; f.kn = 0; if (10 > h.z) { var k = this.QI(f); k && (f.Sb = k, f.status = "loaded", f.ya = !0, k.cj += 1, f.kn = (h.x - k.ta.x) / Math.pow(2, h.z), d.splice(c, 1), this.set("display", 0)) } this.na.set(f.key, f); !b && f.Ae ? f.Ae = !1 : f.status = "loading" }
                } var l = this; this.sI(a, function (a) {
                    for (var c = a.length - 1; 0 <= c; c -= 1) {
                        var d = a[c]; if (d.length) if (l.yi) { if (l.e.Iz) break; var e = d[0].ta.z; l.Nv(d, l.dk ? 1 : 0); for (var f = 0, h = 0; f < d.length;)l.yS(d.slice(10 * h, 10 * h + 10), e, b), f += 10, h += 1 } else for (e =
                            function () { var a = d.length; return function () { if (0 === --a) { var b = { key: "rb", index: 0, id: l.e.C.id }; l.f.T.kk || (g.te.af.end(b), g.te.af.end(g.extend(b, { index: 1 }))) } } }(), l.Nv(d), l.hq += d.length, f = d.length - 1; 0 <= f; f -= 1)l.th(d[f], l.lm, e)
                    }
                })
            }
        }, wy: function (a, b) { var c = this.na.get(a + ""); c || b || (c = new g.ob(a.lb())); return c }, HK: function (a, b) { return this.Ad * Math.pow(2, a - b) }, EA: function (a) { a.ss && this.lm.M1(a.ss); a.tK = !1; a.loaded = !1; this.Af && this.Af(a) }, Ux: function (a, b) {
            var c = (2 < arguments.length && void 0 !== arguments[2] ?
                arguments[2] : 0) || this.bb, d = a.Jd.x, e = a.Jd.y, f = a.Zb.x, h = a.Zb.y; new g.H(0, 0); var k = this.HK(20, c); b && (f = Math.max(b[0], f) - b[0], h = Math.max(b[1], h) - b[1], d = Math.min(b[2], d) - b[0], e = Math.min(b[3], e) - b[1], new g.H(Math.floor(b[0] / k), Math.floor(b[1] / k))); d /= k; e /= k; d = { Dc: 0 === d % 1 ? d - 1 : Math.floor(d), qc: 0 === e % 1 ? e - 1 : Math.floor(e), Ec: Math.floor(f / k), dc: Math.floor(h / k) }; d.WD = d.Dc - d.Ec + 1; d.gK = d.qc - d.dc + 1; d.z = c; d.S = this.S * Math.pow(2, this.zoom - c); d.yy = Math.ceil(d.WD / 2); return d
        }, bv: function (a, b, c) {
            return b < a.Ec || b > a.Dc ||
                c < a.dc || c > a.qc ? !1 : !0
        }, Nv: function (a, b) { if (a.length) { var c = this.jb.gd(this.Ad << 20 - a[0].ta.z), d = Math.floor(c.x), e = Math.floor(c.y); a.sort(function (a, c) { var k = a.ta, l = c.ta, m = k.x - d, k = k.y - e, n = l.x - d, l = l.y - e; return (b ? -1 : 1) * (n * n + l * l - (m * m + k * k)) }) } }, clear: function () { this.lm.clear() }, Wo: function (a, b) {
        this.pg = !1; this.clear(); this.Si = b.Si; this.Ri = b.Ri; this.Ad = b.Ad; var c = a.R; this.Df = b.Df || a.R.Df; this.kh = c.kh; this.size = a.size; this.rotation = c.rotation; this.jb = c.jb; this.Ha = a.R.Ha; this.Kf = a.Kf; this.Ge = a.Ge; this.$f = a.$f;
            this.zoom = c.zoom; this.De = c.De; this.bb = !1 === this.yi && !this.f.SR && this.f.ja ? this.De + 1 : this.De; this.Ye && this.bb > this.Ye && (this.bb = this.Ye); this.Po && this.bb < this.Po && (this.bb = this.Po); this.S = c.S; this.xg = c.xg; c = a.R.Ha; this.hk = this.Ux(c, b.I); this.ow = c.W9 ? this.Ux(c.W9, b.I) : null; var c = this.hk, d = this.Ha.M8, e = null, e = d < this.zoom && this.ow ? this.ow : c, f = [], h = [], k, l = [], m = [], n = [], p = new g.Yq(0, 0, 0), q, r = this.zoom, m = this.Hk || "", s = {}, u = {}, v, w, t, x, y, D; this.$d = 1E6 * Math.random() << 0; for (q = m.length - 1; 0 <= q; q -= 1)if (k = m[q], !(k.Ow <
                b.opacity)) if (p.z = k.ta.z, p.x = k.ta.x, p.y = k.ta.y, p.z === this.bb) s[p + ""] |= 16; else if (p.z < this.bb) { if (s[p + ""] |= 64, this.Si) for (x = this.bb - p.z, v = Math.max(c.Ec, p.x << x), r = Math.min(c.Dc, (p.x + 1 << x) - 1), w = Math.max(c.dc, p.y << x), t = Math.min(c.qc, (p.y + 1 << x) - 1), p.z = this.bb, x = v; x <= r; x += 1)for (p.x = x, y = w; y <= t; y += 1)p.y = y, D = p + "", s[D] |= 32, u[D] = u[D] ? Math.max(k.ta.z, u[D]) : k.ta.z } else if (this.Ri) for (v = 1; p.z >= this.bb;) {
                s[p + ""] |= v; v = p.x >> 1; w = p.y >> 1; r = v << 1; t = w << 1; k = 0; for (x = 2; 0 < x; x -= 1)for (p.x = r + x, y = 2; 0 < y; y -= 1)p.y = t + y, s[p + ""] & 5 &&
                    (k += 1); p.z -= 1; p.x = v; p.y = w; v = 4 === k ? 4 : 2
                } m = []; p.z = this.bb; q = !0; this.na.Z1(); for (x = e.Ec; x <= e.Dc; x += 1)for (p.x = x, y = e.dc; y <= e.qc; y += 1)p.y = y, k = this.wy(p), this.Mt(k), v = !1, k.ya ? (k.$d = this.$d, this.bv(c, x, y) && (m.push(k), this.Ek && (k.cd !== this.cd || 1 > k.Ow) && (v = !0))) : (q = !1, this.bv(c, x, y) && (v = !0), k.status && !k.Ae || this.De !== d || this.ow && !this.bv(this.ow, x, y) || l.push(k)), v && n.push(k); q ? (this.KC || (this.KC = !0), this.f.Ka || (k = { key: this.f.Qg ? "rl" : "rb", index: 1, id: this.e.C.id }, this.f.T.kk || (g.te.af.end(k), g.te.af.push({
                    key: "ftc",
                    vf: m.length, id: this.e.C.id
                })))) : this.f.Ka = !1; this.pg = q; m.length && this.KC && (f.push(m), m.pg = q); h.push(l); d = !1; if (this.Ri) {
                    n = n.slice(0); e = []; for (q = n.length - 1; 0 <= q; q -= 1)k = n[q], s[k.key] & 4 || e.push(k); k = b.hb[1]; for (r = this.bb + 1; n.length && r <= k; r += 1) {
                        m = []; l = n; n = []; p.z = r; for (q = l.length - 1; 0 <= q; q -= 1)if (x = l[q], v = s[x.key], v & 7) for (v = x.ta.x << 1, w = x.ta.y << 1, x = 1; 0 <= x; x -= 1)for (p.x = v + x, y = 1; 0 <= y; y -= 1)p.y = w + y, D = p + "", t = this.na.XJ(D), s[D] & 5 && t && t.ya ? (t.kB = !0, t.$d = this.$d, m.push(t), this.Mt(t)) : n.push(new g.ob(p.lb())); m.length &&
                            (d = !0, f.push(m))
                    } n = e
                } if (!d && this.Si) for (x = !f.length || this.dk ? b.hb[0] : Math.max(b.hb[0], this.bb - 2), Math.max(x, this.bb - this.jga), r = this.bb - 1; n.length && r >= x; r -= 1) {
                    m = []; y = {}; l = n; n = []; for (q = l.length - 1; 0 <= q; q -= 1)k = l[q], p.z = r, p.x = k.ta.x >> 1, p.y = k.ta.y >> 1, k = this.wy(p), y[k.key] || (y[k.key] = 1, v = !1, k.ya && (!this.mia || s[k.key] & 64) ? (p.x = Math.min(c.Dc, Math.max(c.Ec, p.x << this.bb - r)), p.y = Math.min(c.qc, Math.max(c.dc, p.y << this.bb - r)), p.z = this.bb, D = p + "", "number" === typeof u[D] && k.ta.z > u[D] ? v = !0 : k.kB = !0, k.$d = this.$d, m.push(k),
                        this.Mt(k)) : v = !0, v && n.push(k)); m.length && f.push(m)
                } this.DU = h; this.nv = this.hq = 0; this.wn(h); this.zg = f; this.f.set("tiles", f); this.Av(a, b)
        }, Mt: function (a) { this.na.H5(a.yEa) }, mR: function (a, b) { for (var c = [], d = this.e.C.getCoordsBoundByZoom(a), d = this.Ux(d, b, a), e = d.Ec; e < d.Dc; e++)for (var f = d.dc; f < d.qc; f++) { var h = [a, e, f].join("/"); this.na.Hd(h) || c.push(new g.ob(new g.Yq(a, e, f), !0)) } return c }, qM: function () {
            var a = this.e.C; return a.e7 && a.get("preloadMode") && 200 <= this.na.up && this.f.T.dq() && "stable" != this.Kf && this.Fx &&
                this.Fx() && this.zoom !== this.bb
        }, Av: function (a, b) { var c = b.I, d = b.hb; if (this.qM() && this.bb >= d[0] + 1) { var d = [], e = null, e = "zoomOut" === this.Kf ? Math.floor(this.zoom) : Math.ceil(this.zoom), e = this.mR(e, c); e.length && d.push(e); d.length && this.wn(d, !0) } }
    }); g.M.Yd.Mi = g.M.Mi.extend({
        r: function (a, b) { arguments.callee.la.apply(this, arguments); this.Pn = 120; this.yi = !1; this.Ng(); this.Ye = a.Ye; this.Po = a.Po }, pj: function () { return this.Lb }, Ng: function () { this.Lb = document.createElement("div"); this.Lb.className = this.f.T.get("className") || "amap-layer"; this.Lu = document.createDocumentFragment() }, Fv: function (a) { var b = Math.pow(2, a.R.zoom - this.sf), c = a.R.jb.Za(this.us).gd(this.sm); this.transform = { translate: this.transform.translate.add(c), scale: b, rotate: 0 }; this.jb = a.R.jb },
        rP: function (a, b) { this.La = this.J.La; this.sf = this.De; this.sm = this.xg; this.ne = !1; this.currentTime = +new Date; this.cV = b.cV; var c = this.hk; this.Ek = this.Pn && b.GH; var d = this.zg, e = 256 * c.WD, c = 256 * c.gK; this.Ge = this.zoom << 0 !== this.zoom; var f = this.jb.Za(this.La); f.x < -g.a.Ea / 2 ? f.x += g.a.Ea : f.x > g.a.Ea / 2 && (f.x -= g.a.Ea); this.GP = f.gd(this.xg); return [d, e, c, b] }, mz: function (a, b) {
            var c = this.rP(a, b); this.Os.apply(this, c); this.Fe(a); this.pg && !this.f.Ka && (c = this.f, c.T.kk || g.te.af.end({ key: "rb", index: 2, id: this.e.C.id }), c.Ka =
                !0, c.Gd ? c.pa("renderComplete") : (c.Gd = !0, c.pa("complete")))
        }, mc: function (a, b) { this.Xq = a.Xq; this.$f = a.$f; this.Wo(a, b); this.us && g.l.Rl && (a.Ge || a.$f) ? this.Fv(a, b) : this.mz(a, b); this.us = this.jb; this.ne && this.set("display", 0) }, Ev: function () { for (var a = this.Lb.childNodes, b = a.length - 1; 0 <= b; b -= 1)a[b] && a[b].cd !== this.cd && this.Lb.removeChild(a[b]) }, VD: function (a, b) { return a.dc === b.dc && a.Ec === b.Ec && a.qc === b.qc && a.Dc === b.Dc }, Os: function (a) {
            var b = this.cd; this.cd += 1; var c = !1, d, e, f; e = !1; var h = [], k, l; for (d = a.length -
                1; 0 <= d; d -= 1)if (f = a[d], f.length) {
                    e = f[0].ta.z; var m, n, p = this.HK(this.De, e), q = !1; this.un && f.pg && f[0].ta.z == this.bb && (k = [], l = [], q = !0); for (var r = f.length - 1; 0 <= r; r -= 1) {
                        n = f[r]; q && n.fa && (k.push.apply(k, n.fa), l.push(n.ta + "")); this.MT(n); if (this.La === n.La && n.sf === this.sf) { var s = n.Ne; if (s && s.parentNode === this.Lb && 1 === n.Ow) { h.push(n); s.cd = this.cd; n.cd = this.cd; continue } } n.La = this.La; n.sf = this.sf; m = n.ta; var c = !0, u = (new g.H((m.x << 20 - e) * this.Ad, (m.y << 20 - e) * this.Ad)).Za(this.La), u = u.gd(this.xg); u.x = g.a.hc(u.x, 1);
                        u.y = g.a.hc(u.y, 1); var v = 1; if (!n.KX || this.PW && n.cd !== b) n.KX = this.currentTime; this.Ek && !n.kB ? (s = Math.max(0, Math.abs(m.z - this.zoom) - 1), v = Math.min(1, (this.currentTime - n.KX) / (1 / Math.pow(1.32, s) * this.Pn)), 1 !== v && (this.ne = !0)) : n.kB = !1; n.cd = this.cd; n.Ow = v; n.ya ? (s = n.Ne, !s && n.Sb && n.Sb.Ne && (s = n.Sb.Ne), 0 !== v && s && (this.A3(s, u.x, u.y, p, p, v, m.z), s.parentNode !== this.Lb && (g.l.vi && "overlayer" === this.f.get("type") && (s.style.display = "none"), this.Lu.appendChild(s)), s.cd = this.cd, n.De = this.De, h.push(n))) : n.$d = null
                    } e = !0
                } this.un &&
                    k && (r = l.sort().join(";"), k.mS = r, r !== this.jf.mS && (this.jf = k)); 1 < a.length && (this.ne = !0); this.Hk = h; this.Ev(); this.Lb.appendChild(this.Lu); return c || !e
        }, MT: function () { }, Fe: function () { this.transform = { translate: this.GP, scale: Math.pow(2, this.zoom - this.De), rotate: 0 } }
    }); window.CanvasRenderingContext2D && (window.CanvasRenderingContext2D.prototype.dQ = function (a, b, c, d, e) {
    "undefined" === typeof e && (e = [10, 10]); this.moveTo(a, b); var f = c - a, h = d - b, k = Math.floor(Math.sqrt(f * f + h * h)); d = f / k; c = h / k; e.wg = 0; for (var l = [], f = this.ZH, m = 0, n = 0, p = !1, q = h = 0; q < e.length; q += 1)e.wg += e[q], l[q] = { GC: e[q] * d, HC: e[q] * c, Ky: h += e[q] }, f -= e[q], 0 > f && !p && (m = q, n = -f, p = !0); for (p = 0; n + p <= k;)n < e[m] ? (f = n * d, h = n * c) : (f = l[m].GC, h = l[m].HC), a += f, b += h, this.mE ? this.moveTo(a, b) : this.lineTo(a, b), p += n, this.mE = !this.mE, n = e[(m + 1) %
        e.length], m = (m + 1) % e.length; k -= p; a += k * d; b += k * c; this.mE ? this.moveTo(a, b) : this.lineTo(a, b); this.ZH = (this.ZH + p + k) % e.wg
    }, window.CanvasRenderingContext2D.prototype.Ena = function (a, b, c, d) { "undefined" === typeof d && (d = [10, 10]); var e = 2 * Math.PI * c, f = 0 >= d ? e : Math.round(e / (d[0] + d[1])), h = (d[0] + d[1]) / e * 2 * Math.PI; d = d[0] / e * 2 * Math.PI; for (e = 0; e < f; e += 1)this.beginPath(), this.arc(a, b, c, e * h, e * h + d), this.stroke() }); g.M.Ce.Bl = g.M.Mi.extend({
        r: function (a, b) { arguments.callee.la.apply(this, arguments); this.Ng() }, qR: function () { return this.Xa.tU }, pj: function () { return this.Lb }, Ng: function () { this.Lb = document.createElement("div"); this.Lb.className = "amap-markers"; this.Xa = new g.M.Ce.bd(this.Lb); this.Xa.f = this.f; this.J.K.appendChild(this.Lb) }, ht: function (a, b) {
        this.Lu = b.Lu; this.Ny = b; this.Df = a.R.Df; this.S = a.R.S; this.zoom = a.R.zoom; this.size = a.size; this.Ha = a.R.Ha; this.kq = a.S; this.kb = a.R.jb; this.kh = a.R.kh; var c = !1; if (!this.La ||
            500 < Math.abs(this.kb.x - this.La.x) / this.S || 500 < Math.abs(this.kb.y - this.La.y) / this.S) c = !0; if (c || this.zoom << 0 !== this.zoom || this.sf !== this.zoom) this.La = this.kb, this.sf = this.zoom
        }, Uu: function (a) { var b = a.R.Ha.xc.y * this.S; a = a.R.Ha.xc.x * this.S; return [this.kb.x - a, this.kb.y - b, this.kb.x + a, this.kb.y + b] }, Ev: function () { if (this.Rh && this.Rh) for (var a in this.Rh) if (this.Rh.hasOwnProperty(a)) { var b = this.Rh[a]; b.$d !== this.$d && b.ca && this.J.Gl.appendChild(b.ca) } }, mc: function (a, b) {
        this.$d = 1E6 * Math.random() << 0; this.ht(a,
            b); this.R = a.R; this.size = a.size; var c = this.f; this.Ad = 256; var d, e; e = this.Uu(a); var f = 0; c.hm && (f = 50 * this.S); e[0] -= this.f.rf * this.S + f; e[1] -= this.f.eg * this.S + f; e[2] += this.f.rf * this.S + f; e[3] += this.f.eg * this.S + f; c = c.pn(e); for (d in c) c.hasOwnProperty(d) && (c[d].$d = this.$d, c[d].t5 = this); this.Ev(c); this.ht.call(this.Xa, a, b); this.Xa.bE(c); this.Rh = c; this.Fe(a)
        }, Fe: function () { var a = Math.pow(2, this.zoom - this.De); this.transform = { translate: this.La.Za(this.kb).gd(this.S), scale: a, rotate: 0 } }
    }); g.M.Ce.bd = g.aa.extend({
        r: function (a) { this.jl = a }, bE: function (a, b) {
            var c = document.createDocumentFragment(), d = b && b.dS ? null : {}, e = !0, f; for (f in a) if (a.hasOwnProperty(f)) {
                var h = a[f], k, l = h.get("params"); if (h.ca) k = h.ca; else { k = g.j.create("div"); k.className = "amap-marker"; var m = l.Jg, n = l.k8, p = l.oJ; m && k.appendChild(m); n && k.appendChild(n); p && !1 !== m.cM && k.appendChild(p); h.ca = k; h.Jg = m; if (n = l.title) m.title = n; this.f.hm = !0; -1 === g.a.indexOf(this.f.Tg, h) && this.f.Tg.push(h); h.ge = !0 } var p = l.offset, q = p.x, r = p.y, s = l.textAlign,
                    u = l.verticalAlign, n = l.anchor, m = !1, v, w; n && (n = n.split("-"), 2 === n.length ? (s = n[1], u = n[0]) : 1 === n.length && "center" === n[0] && (s = "center", u = "middle")); var t, n = t = 0; if ("AMap.Text" == h.Fp || "AMap.Marker" == h.Fp) { if (w = v = 0, k.parentNode !== this.jl && d && (m = !0, d[f] = h, e = !1), !m) { h.ge || !h.Pj ? (t = g.j.yo(h.Jg), h.Pj = t) : t = h.Pj; n = t[0]; t = t[1]; switch (s) { case "center": v = n / 2; break; case "right": v = n }switch (u) { case "middle": w = t / 2; break; case "bottom": w = t }q -= v; r -= w } } else v = -q, w = -r; var x, y; if (!m) if (h.ge) {
                        var D = []; x = this.tu(h.ha.xa); h.La =
                            this.La; y = l.VE; r = Math.round(x[1] + r + y.y); q = Math.round(x[0] + q + y.x); D.push("top:" + r + "px"); D.push("left:" + q + "px"); D.push("z-index:" + (l.f5 ? this.f.Nq + 10 : l.zIndex)); if (!g.l.ye) { r = v; q = w; if ("AMap.Marker" == h.Fp) { r = -p.x; q = -p.y; switch (s) { case "center": r = -p.x + n / 2; q = -p.y + t / 2; break; case "right": r = -p.x + n }switch (u) { case "middle": q = -p.y + t / 2; break; case "bottom": q = -p.y + t } } D.push(g.j.S3(k, l.Dp, { x: r, y: q })) } D.push("display:" + (l.visible ? "block" : "none") + ";"); k.style.cssText = D.join(";"); if ((p = l.label) && p.content) {
                                l = l.oJ; s =
                                    p.direction; r = null; h.kv || (r = g.j.yo(l), h.kv = r); u = (r = h.kv) && r[0]; w = r && r[1]; q = r = 0; if (s && u && w) switch (s) { case "top": r = -w; q = (n - u) / 2; break; case "right": r = (t - w) / 2; q = n; break; case "bottom": r = t; q = (n - u) / 2; break; case "left": r = (t - w) / 2; q = -u; break; case "center": r = (t - w) / 2, q = (n - u) / 2 }p.offset ? (r = r + p.offset.y + "px", q = q + p.offset.x + "px") : (r += "px", q += "px"); l.style.top = r; l.style.left = q
                            }
                    } else if (h.laa || this.zoom << 0 !== this.zoom || h.zoom !== this.zoom || k.parentNode !== this.jl || h.La !== this.La) x = this.tu(h.ha.xa), h.La = this.La, y = l.VE,
                        r = Math.round(x[1] + r + y.y), q = Math.round(x[0] + q + y.x), k.style.top = r + "px", k.style.left = q + "px"; h.zoom = this.zoom; k.parentNode !== this.jl && (g.l.vi && g.a.iepngFix(k), c.appendChild(k)); h.ge = m; k.oB = this.jl
            } this.jl.appendChild(c); e || this.bE(d, { dS: !0 })
        }, tu: function (a) { var b = a[0] - this.La.x; b > g.a.Ea / 2 ? b -= g.a.Ea : b < -g.a.Ea / 2 && (b += g.a.Ea); return [b / this.S, (a[1] - this.La.y) / this.S] }
    }); var Kc = g.w, Sc = g.l, ec = g.aa.Au, Tc = g.Kua, fa = document, Uc = !0, Vc = []; Sc.Hf && Vc.push("touch"); Sc.ba || Vc.push("mouse"); Sc.KK && (Vc.push("vectorlayer", "overlay"), Sc.Jq ? Vc.push("wgl") : Vc.push("cgl")); if (Tc) { for (var Wc = [], Xc = Tc.split(","), xc = 0; xc < Xc.length; xc += 1) { var Yc = Xc[xc]; ec[Yc] && Wc.push.apply(Wc, ec[Yc]); Wc.push(Yc) } Vc = Vc.concat(Wc) } Vc.push("sync");
    if (Sc.xs) { var Zc = !0, $c = [], ad = []; try { for (var xc = 0, bd = Vc.length; xc < bd; xc++) { var cd = JSON.parse(localStorage.getItem("_AMap_" + Vc[xc])); if (cd && cd.version === Kc.Bj) $c.push(cd.script), cd.css && ad.push(cd.css); else { $c = void 0; Zc = !1; break } } } catch (dd) { $c = ad = void 0, Zc = !1 } if (Zc) try { ad.length && ed(); var fd = $c.join(";"); eval(fd) } catch (gd) { Uc = !1 } else Uc = !1 } else Uc = !1; if (Uc) for (xc = 0; xc < Vc.length; xc += 1)g.rb.uC(Vc[xc]).status = 1; else Kc.rD = !1, hd();
    function id() { for (var a = fa.getElementsByTagName("script"), b, c = 0; c < a.length; c += 1)if (0 === a[c].src.indexOf(Kc.yb + "/maps?")) { b = a[c]; break } return Kc.Jc || b && b.async } function hd() { var a = Kc.yb + "/maps/modules?v=" + Kc.yr + "&key=" + Kc.key + "&vrs=" + Kc.Bj + "&m=" + Vc.join(","); id() ? jd(a) : (fa.write('<script crossorigin="anonymous" id="amap_plus_js" src="' + a + '" type="text/javascript">\x3c/script>'), setTimeout(function () { fa.getElementById("amap_plus_js") || jd(a) }, 1)) }
    function jd(a) { var b = fa.createElement("script"); b.charset = "utf-8"; b.src = a; b.id = "amap_plus_js"; (a = fa.head || fa.getElementsByTagName("head")[0] || fa.body) && a.appendChild(b) }
    function ed() { var a = ad.join("\n"), b = fa.createElement("style"); b.type = "text/css"; -1 === Kc.yb.indexOf("webapi.amap.com") && (a = a.replace(/webapi.amap.com/gi, Kc.yb.split("://")[1])); "https" === Kc.Fc && (a = a.replace(/http:/gi, "https:")); if (b.styleSheet) { var c = function () { try { b.styleSheet.cssText = a } catch (c) { } }; b.styleSheet.disabled ? setTimeout(c, 10) : c() } else b.appendChild(fa.createTextNode(a)); c = fa.head || fa.getElementsByTagName("head")[0]; 2 > c.childNodes.length ? c.appendChild(b) : c.insertBefore(b, c.childNodes[1]) }
    ;
})(["d6650630f54056fea838e11e1654e8dc", [102.992886, 30.094297, 104.892795, 31.435334, 104.065735, 30.659462], "https://webapi.amap.com", 1, "1.4.15", null, "510100", "", true, false, false, true, "1568726473-20190807-1", false])