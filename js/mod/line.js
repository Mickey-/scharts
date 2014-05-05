(function() {
  $.fn.scharts._line = function(opt) {
    return $(this).highcharts({
      chart: {
        marginTop: 50
      },
      title: {
        text: opt.title,
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          color: '#000'
        }
      },
      tooltip: {
        enabled: !(opt.tooltip === false),
        formatter: function() {
          var bg, html, inner, type;
          if (opt.tooltip === false) {

          } else {
            bg = this.point.series.color;
            type = typeof opt.tooltip;
            if (type === 'function') {
              inner = opt.tooltip.call(this);
            } else if (type === 'string') {
              inner = opt.tooltip;
            }
            html = "<div class='chart-tooltip' style='background: " + bg + ";'>\n" + inner + "\n</div>";
            return html;
          }
        }
      },
      xAxis: {
        categories: opt.xAxis,
        tickmarkPlacement: 'on'
      },
      yAxis: {
        gridLineColor: '#eee',
        title: {
          text: ''
        }
      },
      plotOptions: {
        line: {
          lineWidth: 1,
          marker: {
            fillColor: "#fff",
            lineColor: null,
            lineWidth: 3,
            states: {
              hover: {
                radius: 3.5,
                lineWidth: 7
              }
            }
          }
        }
      },
      series: opt.series,
      legend: {
        enabled: (function() {
          return opt.series.length > 1;
        })()
      }
    });
  };

}).call(this);
