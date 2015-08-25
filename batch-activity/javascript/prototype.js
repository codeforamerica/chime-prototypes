$(document).ready(function() {
	$('#editor').keyup(function(e) {
		$('#save').removeClass('is-hidden');
	})

	$('#publish').click(function(event) {
		event.preventDefault();
		$('.edit-article__header .button').addClass('is-hidden');
	});

	$('.previewer__bar .button').click(function(e) {
		$('.previewer__bar .button').removeClass('is-selected');
		$(this).addClass('is-selected');
	});

	$("#toggle-history").click(function(event) {
		event.preventDefault();
			$('.previewer__hints, .previewer__content, .previewer__history').addClass('is-hidden');
		    $('.previewer__history').removeClass('is-hidden');
	});
});