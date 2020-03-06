$('[data-toggle="expand"]').on('click', function() {
  $(this).toggleClass('active');
  $(this).next().slideToggle(200);
});

$('.manager-block__controls-link').on('click', function () {
  $('.manager-block__wrapper').on('load').removeClass('loaded').toggleClass('loading');
  window.setTimeout(function () {
    $('.manager-block__wrapper').removeClass('loading');
    $('.manager-block__wrapper').toggleClass('loaded');
  }, 500);
});