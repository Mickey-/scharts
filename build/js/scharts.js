(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
(function() {
  var donutsChartsStyle;

  Highcharts.setOptions({
    credits: {
      enabled: false
    },
    colors: ['#6cc573', '#71a9df', '#ffc809', '#fd7394', '#13dac0', '#fd5634', '#feb800', '#dc3d79'],
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