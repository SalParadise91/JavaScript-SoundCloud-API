// SC.initialize({
//   client_id: '47159083054685525f6b73d25e2560b9'
// });

// SC.initialize({
//   client_id: '47159083054685525f6b73d25e2560b9'
// });

// $(document).ready(function() {
//   SC.get('/tracks', { genres: 'foo' }, function(tracks) {
//      $(tracks).each(function(index, track) {
//        $('#results').append($('<li></li>').html(track.title + ' - ' + track.genre));
//      });
//   });
// });

// SC.initialize({
//   client_id: '47159083054685525f6b73d25e2560b9',
//   redirect_uri: 'http://31.200.238.29/SoundCloud/'
// });

// $(document).ready(function() {
//   $('a.connect').click(function(e) {
//     e.preventDefault();
//     SC.connect(function() {
//       SC.get('/me', function(me) {
//         $('#username').html(me.username);
//       });
//     });
//   });
// });

// SC.initialize({
//   client_id: '47159083054685525f6b73d25e2560b9'
// });

// $(document).ready(function() {

// });

// SC.initialize({
//     client_id: '47159083054685525f6b73d25e2560b9'
// });

// $(document).ready(function() {
//     SC.get('/tracks/293',function(track){ 
//         $('#player').html(track.title);
//     });
// });

// SC.initialize({
//   client_id: '47159083054685525f6b73d25e2560b9'
// });

// $(document).ready(function() {
//      SC.get('/tracks/293', function(track) {
//        SC.oEmbed(track.permalink_url, document.getElementById('player'));
//      });
// });

// SC.initialize({
// 	client_id: '47159083054685525f6b73d25e2560b9'
// });

// $(document).ready(function() {
// 	SC.stream('/tracks/293', function(sound) {
// 		$('#start').click(function(e) {
// 			e.preventDefault();
// 			sound.start();
// 		});
// 		$('#stop').click(function(e) {
// 			e.preventDefault();
// 			sound.stop();
// 		});
// 	});
// });

SC.initialize({
	client_id: '47159083054685525f6b73d25e2560b9',
	redirect_uri: 'http://31.200.238.29/SoundCloud/'
});

$(document).ready(function() {
	$('#startRecording a').click(function(e) {
		$('#startRecording').hide();
		$('#stopRecording').show();
		e.preventDefault();
		SC.record({
			progress: function(ms, avgPeak) {
				updateTimer(ms);
			}
		});
	});

	$('#stopRecording a').click(function(e) {
		e.preventDefault();
		$('#stopRecording').hide();
		$('#playBack').show();
		$('#upload').show();
		SC.recordStop();
	});

	$('#playBack a').click(function(e) {
		e.preventDefault();
		updateTimer(0);
		SC.recordPlay({
			progress: function(ms) {
				updateTimer(ms);
			}
		});
	});

	$('#upload').click(function(e) {
	e.preventDefault();
	SC.connect({
		connected: function() {
			$('.status').html('Uploading...');
			SC.recordUpload({
				track: {
					title: 'My Recording',
					sharing: 'public'
				}
			}, function(track) {
				$('.status').html("Uploaded: <a href='" + track.permalink_url + "'>" + track.permalink_url + "</a>");
			});
		}
	});
});
});

// Helper methods for our UI.

function updateTimer(ms) {
	// update the timer text. Used when we're recording
	$('.status').text(SC.Helper.millisecondsToHMS(ms));
}
