var svgHeight = 160,
        svgWidth = 160;

    var svg = d3.select('#server-circle').append('svg')
        .attr({
                
                width: svgWidth,
                height: svgHeight,
                fill: 'purple',
                'opacity':.6,
                'stroke-width': 10,
                'stroke-opacity': 1,
                stroke: 'orange'
           }).append("circle")
                         .attr("cx", 30)
                          .attr("cy", 30)
                         .attr("r", 20);;