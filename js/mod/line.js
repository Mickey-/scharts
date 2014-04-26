(function() {
  $.fn.scharts._line = function(opt) {
    var buildTooltip, ret;
    ret = {
      lineData: {
        xAxis: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        xDate: ['2014/1/1-2014/1/31', '2014/2/1-2014/2/31', '2014/3/1-2014/3/31', '2014/4/1-2014/4/31', '2014/5/1-2014/5/31', '2014/6/1-2014/6/31', '2014/7/1-2014/7/31', '2014/8/1-2014/8/31', '2014/9/1-2014/9/31', '2014/10/1-2014/10/31', '2014/11/1-2014/11/31', '2014/12/1-2014/12/31'],
        seriesData: [22, 44, 22, 55, 66, 88, 33, 55, 99, 17, 48, 96]
      }
    };
    buildTooltip = function(bg, h4, p) {
      var html;
      html = "<div class='chart-tooltip' style='background: " + bg + ";'>\n  <h4>" + h4 + "</h4>\n  <p>" + p + "</p>\n</div>";
      return html;
    };
    return $(this).highcharts({
      chart: {
        marginTop: 50
      },
      colors: ["#6cc573"],
      title: {
        text: opt.title,
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          color: '#000'
        }
      },
      tooltip: {
        formatter: function() {
          var bg, date;
          bg = this.point.series.color;
          date = ret.lineData.xDate[ret.lineData.xAxis.indexOf(this.x)];
          return buildTooltip(bg, this.y, date);
        }
      },
      xAxis: {
        categories: ret.lineData.xAxis
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
      series: [
        {
          name: 'sss',
          data: ret.lineData.seriesData
        }
      ]
    });
  };

}).call(this);
