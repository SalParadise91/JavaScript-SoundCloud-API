// SC.initialize({
//   client_id: '47159083054685525f6b73d25e2560b9'
// });

SC.initialize({
  client_id: '47159083054685525f6b73d25e2560b9'
});

$(document).ready(function() {
  SC.get('/tracks', { genres: 'foo' }, function(tracks) {
     $(tracks).each(function(index, track) {
       $('#results').append($('<li></li>').html(track.title + ' - ' + track.genre));
     });
  });
});
