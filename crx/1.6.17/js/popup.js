var ACTION = "no-password";

function check(element) {
	if(element.value==localStorage.pwd) {
		ACTION = "password";
		window.close();
	}
}

//reacts to unload of new window popup but not to unload of browser action popup
window.addEventListener("beforeunload", function() {
	chrome.extension.sendRequest({
		action:		ACTION,
		noCallback:	false
	});
});

/*
//reacts to unload of browser action popup but not to window.close()
window.addEventListener("unload", function() {
	chrome.extension.getBackgroundPage().requestHandler(
		{action: ACTION},
		{id: chrome.app.getDetails().id},
		function() {}
	);
});
*/

document.addEventListener("DOMContentLoaded", function() {
	var title = document.getElementById("title");
	title.innerHTML = chrome.i18n.getMessage("popTitle");

	var input = document.getElementById("pwd");
	input.onkeyup = function() {
		check(this);
	}
});