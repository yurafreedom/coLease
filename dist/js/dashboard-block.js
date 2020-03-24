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

$('.reminder-block__table-card').hover(function() {
  $(this).prev().toggleClass('hidden');
});

$(document).on('click', '.reminder-block__calendar-link', function() {
  $(this).parent().find('.reminder-block__calendar').data('datepicker').show();
});

Highcharts.chart('container', {
    chart: {
        type: 'spline',
    },
    title: {
        text: ''
    },

    subtitle: {
        text: ''
    },

    data: {
      rows: 10,
    },

    yAxis: {
      title: {
          text: ''
      },
      tickInterval: 100000,
      gridLineColor: '#F9F8FC',
      gridLineWidth: 4,
      breaks: [{
        from: 0,
        to: 1000000,
      }],
      labels: {
        format: 'R {value}',
        style: {
          color: '#9B9B9B',
          fontSize: '13px',
        },
      },
    },

    xAxis: {
      categories: [null, 'Aug 2019', 'Sep 2019', 'Oct 2019', 'Nov 2019', 'Dec 2019', 'Jan 2019'],
      labels: {
        style: {
          color: '#9B9B9B',
          fontSize: '13px',
        },
      },
      left: 0,
    },

    legend: {
        enabled: false,
    },

    plotOptions: {
        series: {
          pointStart: 0,
        },
        line: {
          color: '#53C7CD',
        },
    },

    series: [{
      name: 'R',
      data: [{
          y: 0,
          marker: {
              enabled: false
          }
      },{
        y: 900000
      },{
        y: 100000
      },{
        y: 200000
      },{
        y: 100000
      },{
        y: 600000
      },{
        y: 300000
      },],
      lineWidth: 7,
      color: '#53C7CD',
      marker: {
        width: 24,
        height: 23,
        symbol: 'url(img/point.svg)',
      },
      shadow: true,
    }],

    credits: {
      enable: false,
    },

    exporting: {
      enable: true,
      buttons: {
        contextButton: {
          menuItems: ["printChart", "separator", "downloadPNG", "downloadPDF"],
          enable: true,
          className: 'highcharts-button',
          width: 40,
          height: 40,
          symbol: 'url(img/download.svg)',
          symbolFill: '#ABD856',
          symbolSize: 40,
          symbolX: 40,
          symbolY: 40,
          x: 0.5,
          y: 0.5,
        },
      },
    },

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }],
    }
});