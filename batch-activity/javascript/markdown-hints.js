$(document).ready(function() {
	$('#toggle-hints').click(function() {
			$('.previewer__hints, .previewer__content, .previewer__history').addClass('is-hidden');
		    $('.previewer__hints').removeClass('is-hidden');
	})
})