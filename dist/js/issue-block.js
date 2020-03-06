$('.issue-block__textarea').on("focus", function() {
  $(this).parent().toggleClass('active');
});

$('.issue-block__textarea').mouseout("focus", function() {
  $(this).parent().removeClass('active');
});