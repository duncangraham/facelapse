Template.signedIn.rendered = function() {

	// Normalize the various vendor prefixed versions of getUserMedia.
  	navigator.getUserMedia = (navigator.getUserMedia ||
                            navigator.webkitGetUserMedia ||
                            navigator.mozGetUserMedia || 
                            navigator.msGetUserMedia);

  	// Check that the browser supports getUserMedia.
	if (navigator.getUserMedia) {
	  // Request the camera.
	  navigator.getUserMedia(
	    // Constraints
	    {
	      video: true
	    },

	    // Success Callback
	    function(localMediaStream) {
	    	var vid = document.getElementById('camera-stream');
	    	// Create an object URL for the video stream and use this 
				// to set the video source.
				vid.src = window.URL.createObjectURL(localMediaStream);
	    },

	    // Error Callback
	    function(err) {
	      // Log the error to the console.
	      console.log('The following error occurred when trying to use getUserMedia: ' + err);
	    }
	  );

	} else {
	  alert('Sorry, your browser does not support getUserMedia');
	}

	var video = document.querySelector('video');
	var canvas = document.querySelector('canvas');
	var ctx = canvas.getContext('2d');
	var localMediaStream = null;

	function snapshot() {
		console.log('hi');
	  if (localMediaStream) {
	    ctx.drawImage(video, 0, 0);
	    // "image/webp" works in Chrome 18. In other browsers, this will fall back to image/png.
	    document.querySelector('img').src = canvas.toDataURL('image/webp');
	  }
	}

	video.addEventListener('click', snapshot, false);

	// Not showing vendor prefixes or code that works cross-browser.
	navigator.getUserMedia({video: true}, function(stream) {
	  video.src = window.URL.createObjectURL(stream);
	  localMediaStream = stream;
	}, function());
}













