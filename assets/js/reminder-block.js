$('.reminder-block__table-card').hover(function() {
  $(this).prev().toggleClass('hidden');
});

$.fn.datepicker.language['en'] = {
  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  daysMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  months: ['January','February','March','April','May','June', 'July','August','September','October','November','December'],
  monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  today: 'Today',
  clear: 'Clear',
  dateFormat: 'mm/dd/yyyy',
  timeFormat: 'hh:ii aa',
  firstDay: 0
};

$('.reminder-block__calendar').datepicker({
  autoClose: true,
  language: 'en',
});

$(document).on('click', '.reminder-block__calendar-link', function() {
  $(this).parent().find('.reminder-block__calendar').data('datepicker').show();
});