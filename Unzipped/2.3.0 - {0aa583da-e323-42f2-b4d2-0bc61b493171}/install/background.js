'use strict';

const isFirefox = /Firefox/.test(navigator.userAgent);

chrome.runtime.onMessage.addListener((request, sender) => {
  if (request.method === 'loaded' || request.method === 'resize') {
    chrome.tabs.sendMessage(sender.tab.id, request);
  }
  else if (request.method === 'open') {
    chrome.tabs.create({
      url: request.url
    });
  }
});
console.log('context');

(callback => {
  chrome.runtime.onInstalled.addListener(callback);
  chrome.runtime.onStartup.addListener(callback);
})(() => {
  chrome.storage.local.get({
    'use-pointer': true,
    'google-page': true,
    'bing-page': false
  }, prefs => {
    if (prefs['use-pointer'] === false) {
      chrome.contextMenus.create({
        id: 'open-panel',
        title: 'Translate Selection',
        contexts: ['selection'],
        documentUrlPatterns: ['*://*/*']
      });
    }
    if (prefs['google-page']) {
      chrome.contextMenus.create({
        id: 'open-google',
        title: 'Translate with Google',
        contexts: ['page', 'link'],
        documentUrlPatterns: ['*://*/*']
      });
    }
    if (prefs['bing-page']) {
      chrome.contextMenus.create({
        id: 'open-bing',
        title: 'Translate with Bing',
        contexts: ['page', 'link'],
        documentUrlPatterns: ['*://*/*']
      });
    }
  });
});

var onClicked = (info, tab) => {
  if (info.menuItemId === 'open-panel') {
    chrome.tabs.sendMessage(tab.id, {
      method: 'open-panel',
      phrase: info.selectionText
    }, {
      frameId: info.frameId
    });
  }
  else {
    chrome.storage.local.get({
      engine: 0,
      hash: '#auto/en'
    }, prefs => {
      const [sl, tl] = prefs.hash.replace('#', '').split('/');
      let link = info.linkUrl || info.pageUrl;
      if (link.startsWith('about:reader?url=')) {
        link = decodeURIComponent(link.replace('about:reader?url=', ''));
      }
      let url = `https://translate.google.${prefs.engine === 1 ? 'cn' : 'com'}/translate` +
        `?hl=en&sl=${sl}&tl=${tl}&u=${encodeURIComponent(link)}`;
      if (info.menuItemId === 'open-bing') {
        url = `http://www.microsofttranslator.com/bv.aspx?from=${sl}&to=${tl}&a=${encodeURIComponent(link)}`;
      }
      //chrome.tabs.create({url});
    });
  }
};
chrome.contextMenus.onClicked.addListener(onClicked);
chrome.browserAction.onClicked.addListener(tab => onClicked({
  menuItemId: 'open-google',
  pageUrl: tab.url
}));

// http manipulations
chrome.webRequest.onHeadersReceived.addListener(details => {
  const responseHeaders = details.responseHeaders;
  for (let i = responseHeaders.length - 1; i >= 0; --i) {
    const header = responseHeaders[i].name.toLowerCase();
    if (header === 'x-frame-options' || header === 'frame-options') {
      responseHeaders.splice(i, 1);
    }
  }
  return {responseHeaders};
},
  {
    urls: [
      '*://*.lexico.com/*'
    ],
    types: ['sub_frame']
  },
  ['blocking', 'responseHeaders']
);
chrome.webRequest.onHeadersReceived.addListener(details => {
  const responseHeaders = details.responseHeaders;
  for (let i = responseHeaders.length - 1; i >= 0; --i) {
    const header = responseHeaders[i].name;
    if (header === 'Content-Security-Policy' || header === 'content-security-policy') {
      responseHeaders[i].value = responseHeaders[i].value
        .replace(/frame-src\s*([^;]*);/, 'frame-src $1 lexico.com;');
    }
  }
  return {responseHeaders};
},
  {
    urls: ['<all_urls>'],
    types: ['main_frame']
  },
  ['blocking', 'responseHeaders']
);

chrome.storage.local.get({
  'version': null,
  'faqs': true
}, prefs => {
  const version = chrome.runtime.getManifest().version;

  if (prefs.version ? (prefs.faqs && prefs.version !== version) : true) {
    chrome.storage.local.set({version}, () => {
      /*chrome.tabs.create({
        url: 'http://' + version +
          '&type=' + (prefs.version ? ('upgrade&p=' + prefs.version) : 'install')
      });*/
    });
  }
});
{
  const {name, version} = chrome.runtime.getManifest();
  //chrome.runtime.setUninstallURL('http://' + name + '&version=' + version);
}
