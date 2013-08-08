Template.signedIn.rendered = function() {


	//GeoLocation magic
	if (navigator.geolocation) {
		  var startPos;
		  navigator.geolocation.getCurrentPosition(function(position) {
		    startPos = position;
		    document.getElementById('startLat').innerHTML = startPos.coords.latitude;
		    document.getElementById('startLon').innerHTML = startPos.coords.longitude;
		  });
	}
	else {
	  alert('Geolocation not supported, Explore! (creation only allowed on geolocation supported browsers)');
	}

	//File Upload Magic
	// Check for the various File API support.
	if (window.File && window.FileReader && window.FileList && window.Blob) {
	  function handleFileSelect(evt) {
	    var files = evt.target.files; // FileList object

	    // files is a FileList of File objects. List some properties.
	    var output = [];
	    for (var i = 0, f; f = files[i]; i++) {
	      output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
	                  f.size, ' bytes, last modified: ',
	                  f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
	                  '</li>');
	    }
	    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
	  }

	  document.getElementById('files').addEventListener('change', handleFileSelect, false);
	} else {
	  alert('The File APIs are not fully supported in this browser.');
	}

/*	//Camera Magic
	function hasGetUserMedia() {
  	// Note: Opera is unprefixed.
	  return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
	            navigator.mozGetUserMedia || navigator.msGetUserMedia);
	}

	if (hasGetUserMedia()) {
		var onFailSoHard = function(e) {
			console.log('Reeeejected!', e);
		};

		window.URL = window.URL || window.webkitURL;
		navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;


		var video = document.querySelector('video');
		var canvas = document.querySelector('canvas');
		var ctx = canvas.getContext('2d');
		var localMediaStream = null;

		function snapshot() {
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
		}, onFailSoHard);

		var video = document.querySelector('video');
		var canvas = document.querySelector('canvas');
		var ctx = canvas.getContext('2d');
		var localMediaStream = null;

		function snapshot() {
		  if (localMediaStream) {
		    ctx.drawImage(video, 0, 0);
		    // "image/webp" works in Chrome 18. In other browsers, this will fall back to image/png.
		    document.querySelector('img').src = canvas.toDataURL('image/webp');
		  }
		}

		video.addEventListener('click', snapshot, false);

		if (navigator.getUserMedia) {
		  navigator.getUserMedia({video: true}, function(stream) {
	      	  video.src = window.URL.createObjectURL(stream);
		      localMediaStream = stream;
		  }, onFailSoHard);
		} else {
		  video.src = 'somevideo.webm'; // fallback.
		}


	} else {
	  alert('getUserMedia() is not supported in your browser');
	}

*/


}













