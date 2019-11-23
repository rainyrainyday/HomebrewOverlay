/*
const HTTPStatus
+ Object OK
...
+ Number STATUS_OK
...
*/
const HTTPStatus = new (function() {
	const _ENUM = {
		OK:					{code: 200, text: "OK"},
		NOT_MODIFIED:{code: 304, text: "Not Modified"},
		BAD_REQUEST:	{code: 400, text: "Bad Request"},
		FORBIDDEN:		{code: 403, text: "Forbidden"},
		NOT_FOUND:		{code: 404, text: "Not Found"},
		INTERNAL:		{code: 500, text: "Internal Server Error"}
	}
	
	this.__defineGetter__("OK", function() {return _ENUM.OK;});
	this.__defineGetter__("NOT_MODIFIED", function() {return _ENUM.NOT_MODIFIED;});
	this.__defineGetter__("BAD_REQUEST", function() {return _ENUM.BAD_REQUEST;});
	this.__defineGetter__("FORBIDDEN", function() {return _ENUM.FORBIDDEN;});
	this.__defineGetter__("NOT_FOUND", function() {return _ENUM.NOT_FOUND;});
	this.__defineGetter__("STATUS_INTERNAL", function() {return _ENUM.INTERNAL;});
	
	this.__defineGetter__("STATUS_OK", function() {return _ENUM.OK.code;});
	this.__defineGetter__("STATUS_NOT_MODIFIED", function() {return _ENUM.NOT_MODIFIED.code;});
	this.__defineGetter__("STATUS_BAD_REQUEST", function() {return _ENUM.BAD_REQUEST.code;});
	this.__defineGetter__("STATUS_FORBIDDEN", function() {return _ENUM.FORBIDDEN.code;});
	this.__defineGetter__("STATUS_NOT_FOUND", function() {return _ENUM.NOT_FOUND.code;});
	this.__defineGetter__("STATUS_INTERNAL", function() {return _ENUM.INTERNAL.code;});
})();