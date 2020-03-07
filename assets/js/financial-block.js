$.fn.datepicker.language['en'] = {
  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  months: ['January','February','March','April','May','June', 'July','August','September','October','November','December'],
  monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  today: 'Today',
  clear: 'Clear',
  dateFormat: 'mm/dd/yyyy',
  timeFormat: 'hh:ii aa',
  firstDay: 0
};

$('#financial_datepicker').datepicker({
  language: 'en'
})

$("input").keydown(function(e) {
    var oldvalue=$(this).val();
    var field=this;
    setTimeout(function () {
        if(field.value.indexOf('R ') !== 0) {
            $(field).val(oldvalue);
        } 
    }, 1);
});

$('.financial-block__table-card').hover(function() {
  $(this).prev().toggleClass('hidden');
});