chrome.contextMenus.create({
    id: "lookup",
    title: chrome.i18n.getMessage("contextMenu"),
    contexts: ["selection"]
});
chrome.contextMenus.onClicked.addListener(function(a) {
    chrome.tabs.create({
        url: ("https://en.oxforddictionaries.com/definition/"+a.selectionText)
    })
});