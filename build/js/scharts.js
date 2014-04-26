(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
(function() {
  var donutsChartsStyle;

  Highcharts.setOptions({
    credits: {
      enabled: false
    },
    legend: {
      enabled: false
    },
    colors: ['#6cc573', '#71a9df', '#ffc809', '#fd7394'],
    tooltip: {
      useHTML: true,
      borderWidth: 0,
      shadow: false,
      backgroundColor: null
    }
  });

  donutsChartsStyle = {
    colors: {
      buyerLevel: ['#ffdd58', '#ffc809', '#f79a02', '#eb8200', '#ff6f42', '#d05126', '#9c3d1c', '#c12b14'],
      consumeLevel: ['#82e3ff', '#69c8ff', '#55b0ff', '#37a0f6', '#167dd4', '#1d6bbb', '#1160aa', '#16508c'],
      buyerAge: ['#ffc809', '#65c008', '#13dac0', '#ff6f42', '#2794ee', '#ff4489', '#8825ff', '#ccd6de'],
      sex: ['#2794ee', '#fd7394']
    }
  };

  $.fn.scharts = function(type, opt) {
    return $.fn.scharts['_' + type].call(this, opt);
  };

  require('./mod/line');

}).call(this);

},{"./mod/line":1}]},{},[2])