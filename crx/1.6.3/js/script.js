chrome.extension.sendRequest({action:"getData"},function(response) {
	var data = response.data;
	if(data.shortcut == "true") {
		var shortcut = JSON.parse(data.shortcutArr);
		document.addEventListener("keydown", function(e){
			shortcut[e.which] = true;
		})
		document.addEventListener("keyup", function(e){
			if(e.which==data.shortcut2) {
				if(shortcut[data.shortcut1]==true || data.shortcut1==-1) {
					chrome.extension.sendRequest({
						action:		"panic",
						noCallback:	true
					});
				}
			} else {
				shortcut[e.which] = false;
			}
		});
	}
});

