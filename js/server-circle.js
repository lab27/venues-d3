// var svgHeight = 160,
//     svgWidth = 160;

   d3.select('#server-circle-holder').append('svg')
        .attr({
                
                width: 160,
                height: 160,
                
           }).append("circle")
                 .attr({
                 	"cx": 80,
                 	"cy": 80,
                 	"r": 76,
                 	fill: "none",
	                'opacity':1,
	                'stroke-width': 6,
	                'stroke-opacity': 1,
	                stroke: 'black'
             });

    d3.select('#server-circle-holder svg').append("circle")
                 .attr({
                 	"cx": 80,
                 	"cy": 80,
                 	"r": 76,
                 	fill: "none",
	                'opacity':1,
	                'stroke-width': 6,
	                'stroke-opacity': 1,
	                stroke: '#54c6c6',
	                'stroke-dasharray': '300,60'

             })

                 