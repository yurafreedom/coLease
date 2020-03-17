$('.settings-block__card-heading').click( function () {
	$(this).toggleClass('in').next().stop().slideToggle(200).parent().toggleClass('active');
});