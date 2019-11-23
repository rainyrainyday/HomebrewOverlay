var status = "empty";
var currentTab = -1;

//set badge color
chrome.browserAction.setBadgeBackgroundColor({
	color: [78, 195, 70, 128]
});

document.addEventListener("DOMContentLoaded", function() {
	Animation.init();
}, false);

var ACTION_IN_PROGRESS = false;
function refreshStatus(callback) {
	if(ACTION_IN_PROGRESS) return;
	
	//STORED ?
	chrome.bookmarks.getTree(function(result) {
		result = result[0].children[1].children;
		if(result != "") {
			for(i in result) {
				if(result[i].title == FOLDER_NAME) {
					//folder exists
					status = "stored";
					if (localStorage["hideIcon"] == "true") {
						chrome.browserAction.setIcon({ path: "images/favicon_hidden.ico" });
					} else {
						chrome.browserAction.setIcon({
							path: {
								"19" : "images/icon.restore.19.png",
								"38" : "images/icon.restore.38.png"
							}
						});
					}
					if(localStorage["pwdProtect"] == "true") {
						chrome.browserAction.setPopup({
							popup:	"popup.htm"
						})
					} else {
						chrome.browserAction.setPopup({
							popup:	""
						});
					}
					if(callback) callback();
					return;
				}
			}
		}
		//PANIC ?
		chrome.tabs.query({}, function(tabs) {
			if(!tabs) {
				status = "empty";
				if(callback) callback();
				return;
			}
			
			chrome.browserAction.setBadgeText({text:""});
			chrome.browserAction.setPopup({popup:""});
			if(
				tabs.length == 1
				&& (
					tabs[0].url.substr(0, 9) == "chrome://"
					|| safePages.matches(tabs[0].url)
				)
			) {
				//EMPTY
				status = "empty";
				chrome.browserAction.setIcon({
					path: {
						"19" : "images/icon.options.19.png",
						"38" : "images/icon.options.38.png"
					}
				});
			} else {
				status = "panic";
				chrome.browserAction.setIcon({
					path: {
						"19" : "images/icon.19.png",
						"38" : "images/icon.38.png"
					}
				});
			}
		});
		if(callback) callback();
	});
}

//initiate state
refreshStatus(function() {
	if(status=="stored" && localStorage["hideIcon"]=="false") {
		chrome.bookmarks.getTree(function(result) {
			result = result[0].children[1].children;
			if(result != "") {
				for(var i in result) {
					if(result[i].title == FOLDER_NAME) {
						chrome.browserAction.setBadgeText({
							text:	""+result[i].children.length+""
						});
					}
				}
			}
		});
	}
});


function action() {
	if (ACTION_IN_PROGRESS) return;
	
	ACTION_IN_PROGRESS = true;
	chrome.browserAction.setIcon({
		path: {
			"19" : "images/icon.options.19.png",
			"38" : "images/icon.options.38.png"
		}
	});
	Animation.animateFlip();
	switch(status) {
		case "empty":
			chrome.tabs.query({ active: true }, function(tab) {
				//if(tab.url == "chrome://newtab/" || safePages.matches(tab.url)) {
				if(false) {
					chrome.tabs.update(tab.id, {
						url:	"options.htm"
					});
				} else {
					chrome.tabs.create({
						url:	"options.htm"
					});
				}
				
				//finish
				refreshStatus();
			});
			break;
		case "stored":
			chrome.bookmarks.getTree(function(bmTree) {
				bmTree = bmTree[0].children[1].children;
				var storedTabsLength = 0;
				
				//open stored tabs
				for(var i in bmTree) {
					if(bmTree[i].title == FOLDER_NAME) {
						for(var j in bmTree[i].children) {
							var pinned = false;
							var url = bmTree[i].children[j].url;
							if(!url) continue;
							
							if(url.search(/pb:pinned=true/)>-1) {
								pinned = true;
								url = url.replace(/.pb:pinned=true/, "");
							}
							
							chrome.tabs.create({
								url:			url,
								pinned:		pinned,
								active:	false
							});
							storedTabsLength++;
						}
						chrome.bookmarks.removeTree(bmTree[i].id);
						break;
					}
				}
				
				//close safe pages
				for(var i in safePages.o) {
					chrome.tabs.remove(safePages.o[i].tab);
					safePages.o[i].tab = -1;
				}
				
				//select previously selected tab
				chrome.tabs.query({ currentWindow: true }, function(tabs) {
					var selected = tabs[tabs.length-storedTabsLength+currentTab];
					if(selected) {
						chrome.tabs.update(selected.id, {
							active:	true
						}, function() {
							currentTab = -1;
						});
					}
				});
				
				//finish
				refreshStatus();
			});
			break;
		case "panic":
			if(localStorage["pwdProtect"] == "true") {
				chrome.browserAction.setPopup({
					popup:	"popup.htm"
				})
			}
			
			chrome.tabs.query({ currentWindow: true }, function(tabs) {
				//save selected tab
				chrome.tabs.query({ active: true }, function(tab) {
					currentTab = tab.index;
				});
				chrome.bookmarks.getTree(function(bmTree) {
					bmTree = bmTree[0].children[1];
					
					chrome.bookmarks.create({
						parentId:	bmTree.id,
						title:			FOLDER_NAME
					}, function(folder) {
						//create safe pages
						var safePageCount = safePages.o.length;
						var c = 0;
						for(var i=0; i<safePageCount; i++) {
							chrome.tabs.create({
								index:		i,
								url:			safePages.o[i].url
							}, function(tab) {
								safePages.o[c++].tab = tab.id;
							});
						}
						
						//close stored tabs
						//var noHideSafePages = (localStorage["noHideSafePages"] == "true");
						//var noHidePinnedTabs = (localStorage["noHidePinnedTabs"] == "true");
						counter = 0;
						for(j in tabs) {
							var tab = tabs[j];
							if(!tab.url) continue;
							
							//check if tab should be closed
							/*
							if(noHidePinnedTabs && tab.pinned) continue;
							if(noHideSafePages) {
								var doContinue = false;
								for(var i in safePages.o) {
									var spHost = safePages.o[i].url.replace(/^(.+?):\/\/(.+?)$/, "$2").replace(/^(.+?)\/.*$/, "$1");
									var tabHost = tab.url.replace(/^(.+?):\/\/(.+?)$/, "$2").replace(/^(.+?)\/.*$/, "$1");
									if(spHost==tabHost) {
										doContinue = true;
										break;
									}
								}
								if(doContinue) continue;
							}
							*/
							
							var suffix = "";
							if(tab.pinned) {
								if(tab.url.search(/\?/)>-1) {
									suffix = "&pb:pinned=true";
								} else {
									suffix = "?pb:pinned=true";
								}
							}
							
							chrome.bookmarks.create({
								parentId:	folder.id,
								title:			tab.title,
								url:			tab.url + suffix
							});
							chrome.tabs.remove(tab.id);
							counter++;
						}
						
						//hide badge?
						if(counter > 0) {
							if(localStorage["hideIcon"]=="false") {
								chrome.browserAction.setBadgeText({
									text: ""+counter+""
								});
							}
						}
						
						//finish
						refreshStatus();
					});
				});
			});
			break;
	}
}

//event listeners
var biListener = 0;
chrome.browserAction.onClicked.addListener(function(){action()});
chrome.tabs.onCreated.addListener(function(){refreshStatus()});
chrome.tabs.onUpdated.addListener(function(){
	biListener++;
	if(biListener&=1) {
		ACTION_IN_PROGRESS = false;
		refreshStatus();
	}
});
chrome.tabs.onRemoved.addListener(function(){refreshStatus()});
chrome.bookmarks.onRemoved.addListener(function(){refreshStatus()});
chrome.windows.onFocusChanged.addListener(function(tabId){if(tabId>-1) refreshStatus()});


const WHITELIST = [
	chrome.app.getDetails().id,
	"nlbgcjdlgkhnnkcfijfbdplpbbonnelf"
	//"jfaaehckaifphnkecfmlpdcekcnkiaij"
];

var CALLBACKS = [];

function requestHandler(request, sender, sendResponse) {
	var _status;
	var _data;
	
	try {
		if(WHITELIST.filter(function(e) {if(sender.id == e) return e;}).length == 1) {
			switch(request.action) {
				case "check":
					_status = HTTPStatus.OK;
					break;
				case "getData":
					_data = (
							(localStorage["shortcut"] == "true") ?
							{
								shortcut:		localStorage["shortcut"],
								shortcut1:		localStorage["shortcut1"],
								shortcut2:		localStorage["shortcut2"],
								shortcutArr:	localStorage["shortcutArr"]
							}
							:
							undefined
					);
					_status = HTTPStatus.OK;
					break;
				case "panic":
					refreshStatus(function() {
						if(localStorage["pwdProtect"] == "true" && status == "stored") {
							window.open("popup.htm","_blank","menubar=0,resizable=0,width=256,height=116,location=0,toolbar=0");
						} else {
							action();
							_status = HTTPStatus.OK; //102 HTTPStatus.PROCESSING?
						}
					});
					break;
				//popup responses
				case "password":
					action();
					_status = HTTPStatus.OK; //102 HTTPStatus.PROCESSING?
					break;
				case "no-password":
					_status = HTTPStatus.NOT_MODIFIED;
					break;
				default:
					_status = HTTPStatus.BAD_REQUEST;
					break;
			}
		} else {
			_status = HTTPStatus.FORBIDDEN;
		}
	} catch(e) {
		_status = HTTPStatus.INTERNAL;
	}

	if(request.noCallback) return;

	CALLBACKS.push(sendResponse);
	
	if(_status) {
		/*
		sendResponse({
			status:	_status,
			data:	_data
		});
		*/
		var callback;
		while(callback = CALLBACKS.shift()) {
			callback({
				status:	_status,
				data:	_data
			});
		}
	}
}

chrome.extension.onRequest.addListener(requestHandler);
chrome.extension.onRequestExternal.addListener(requestHandler);