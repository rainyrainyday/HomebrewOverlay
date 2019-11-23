var Animation = new (function() {
	var _rotation = 0;
	var _frames = 36;
	var _speed = 50;
	var _canvas = null;
	var _canvasContext = null;
	var _loadingIcon = null;

	this.init = function() {
		_loadingIcon = document.getElementById("loading");
		_canvas = document.getElementById("canvas");
		_canvasContext = _canvas.getContext("2d");
	}

	this.animateFlip = function() {
		if(!ACTION_IN_PROGRESS) {
			_rotation = 0;
			return;
		}
		
		_rotation += 1/_frames;
		drawIconAtRotation();
		
		if(_rotation > 1) _rotation = 0;
		setTimeout(function() {Animation.animateFlip();}, _speed);
	}

	function ease(x) {
	  return (1-Math.sin(Math.PI/2+x*Math.PI))/2;
	}

	function drawIconAtRotation() {
		_canvasContext.save();
		_canvasContext.clearRect(
			0,
			0,
			_canvas.width,
			_canvas.height
		);
		_canvasContext.translate(
			Math.ceil(_canvas.width/2),
			Math.ceil(_canvas.height/2)
		);
		_canvasContext.rotate(2*Math.PI*ease(_rotation));
		_canvasContext.drawImage(
			_loadingIcon,
			-Math.ceil(_canvas.width/2),
			-Math.ceil(_canvas.height/2)
		);
		_canvasContext.restore();

		chrome.browserAction.setIcon({
			imageData:	_canvasContext.getImageData(0, 0, _canvas.width, _canvas.height)});
	}
})();