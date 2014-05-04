$.fn.scharts._line = (opt) ->

  $(this).highcharts
    chart:
      marginTop: 50
    colors: ["#6cc573"]
    title:
      text: opt.title
      style:
        fontSize: "14px"
        fontWeight: "bold"
        color: '#000'
    tooltip:
      enabled: !(opt.tooltip == false)
      formatter: () ->
        if opt.tooltip == false
          return
        else
          bg = this.point.series.color
          type = typeof opt.tooltip
          if type == 'function'
            inner = opt.tooltip.call(this)
          else if type == 'string'
            inner = opt.tooltip
          html = """
          <div class='chart-tooltip' style='background: #{bg};'>
          #{inner}
          </div>
          """
          return html
    xAxis:
      categories: opt.xAxis
      tickmarkPlacement: 'on'
    yAxis:
      gridLineColor: '#eee'
      title:
        text: ''
    plotOptions:
      line:
        lineWidth: 1
        marker:
          fillColor: "#fff"
          lineColor: null
          lineWidth: 3
          states:
            hover:
              radius: 3.5
              lineWidth: 7
    series: opt.series
    #数据项数大于1则显示，反之不显示
    legend:
      enabled: (() ->
        return opt.series.length > 1
      )()
