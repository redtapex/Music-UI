$(document).ready(function(){

	$('#player').youTubeEmbed('http://www.youtube.com/watch?v=quwebVjAEJA');

	$('form').submit(function(){
		$('#player').youTubeEmbed($('#url').val());
		$('#url').val('');
		return false;
	});

});
