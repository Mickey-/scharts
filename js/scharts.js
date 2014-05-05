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
