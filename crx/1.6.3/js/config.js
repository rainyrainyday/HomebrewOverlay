var config = {
	shortcut: {
		value:	true,
		option:	"form"
	},
	shortcut1: {
		value:	-1,
		option:	"form"
	},
	shortcut2: {
		value:	115,
		option:	"form"
	},
	pwdProtect: {
		value:	false,
		option:	"form"
	},
	pwd:	{
		value:	"",
		option:	"form"
	},
	advancedProtection: {
		value:	false,
		option:	"checkable"
	},
	safePage: {
		value:	'[{"tab":-1,"url":"chrome://newtab"}]',
		option:	"json"
	},
	currentTab: {
		value:	-1,
		option:	"hidden"
	},
	hideIcon: {
		value:	false,
		option:	"form"
	}/*,
	noHideSafePages: {
		value:	false,
		option:	"checkable"
	},
	noHidePinnedTabs: {
		value:	false,
		option:	"checkable"
	}*/
}

function urlIndex(index,i) {
	switch(index) {
		case "newtab":
			return "chrome://newtab";
		case "blank":
			return "about:blank";
		case "custom":
			return safePages.o[i].url;
		case "chrome://newtab":
			return "newtab";
		case "about:blank":
			return "blank";
		default:
			return "custom";
	}
}

function JSONO(index) {
	if(index) this.index = index;
	this.o = (index) ? JSON.parse(localStorage[index]) : [];
	
	this.add = function(obj) {
		this.o.push(obj);
		this.save();
	}
	this.moveUp = function(i) {
		if(i>0) {
			temp = this.o[i];
			this.o[i] = this.o[i-1];
			this.o[i-1] = temp;
			this.save();
		}
	}
	this.updateUrl = function(i,val,isUrl) {
		this.o[i].url = (isUrl) ? val : urlIndex(val,i);
		this.save();
	}
	this.remove = function(i) {
		this.o.splice(i,1);
		this.save();
	}
	this.save = function() {
		localStorage[this.index] = JSON.stringify(this.o);
	}
	this.clear = function() {
		this.o = this.o.filter(function(){});
		this.save();
	}

	this.matches = function(url) {
		return this.o.some(function(e) {
			return url.indexOf(e.url) > -1;
		});
	}
}
var safePages = new JSONO();


var FOLDER_NAME = chrome.i18n.getMessage("folderName");
var CONFIG_VERSION = 0.15; // A.B.C.D => A.BBCCDD (0.1 = 0.01, 0.11.0.2 = 0.110002, ...)

function configure() {
	var isOldConfig = isNaN(localStorage["configured"]);
	for(i in config) {
		if(!localStorage[i]) {
			localStorage[i] = config[i].value;
		} else {
			if(isOldConfig) { //isNaN(...) <=> <0.12
				if(i=="safePage") {
					safePages.index = "safePage";
					safePages.add({tab:-1,url:localStorage["safePage"]});
				}
			}
		}
	}
	
	if(!localStorage["shortcutArr"]) {
		var shortcut = new Array();
		if(localStorage["shortcut1"] != -1) shortcut[localStorage["shortcut1"]] = true;
		else shortcut[localStorage["shortcut1"]] = false;
		shortcut[localStorage["shortcut2"]] = true;
		localStorage["shortcutArr"] = JSON.stringify(shortcut);
	}
	localStorage["configured"] = CONFIG_VERSION;
}
if(localStorage["configured"]) {
	if(localStorage["configured"] != CONFIG_VERSION) configure();
} else {
	configure();
}

safePages = new JSONO("safePage");