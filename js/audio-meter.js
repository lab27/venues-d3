(function() {
    'use strict';

    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    var audioElement = document.getElementById('audioElement');
    var audioSrc = audioCtx.createMediaElementSource(audioElement);
    var analyser = audioCtx.createAnalyser();

    // bind our analyser to the media element source.
    audioSrc.connect(analyser);
    audioSrc.connect(audioCtx.destination);


    // var frequencyData = new Uint8Array(analyser.frequencyBinCount);
    var frequencyData = new Uint8Array(5);

    var svgHeight = 108,
        svgWidth = 108;

    var svg = d3.select('#broadcast-circle').append('svg')
        .attr({
            height: svgHeight,
            width: svgWidth


        });

    // continuously loop and update chart with frequency data.
    function renderChart() {
        requestAnimationFrame(renderChart);

        // copy frequency data to frequencyData array.
        analyser.getByteFrequencyData(frequencyData);
        // console.log(frequencyData);

        // scale things to fit
        var radiusScale = d3.scale.linear()
            .domain([0, d3.max(frequencyData)])
            .range([0, svgHeight/2 -10]);

        var hueScale = d3.scale.linear()
            .domain([0, d3.max(frequencyData)])
            .range([0, 360]);

       // update d3 chart with new data
       var circles = svg.selectAll('circle')
           .data(frequencyData);

        circles.enter().append('circle');

        circles
            .attr({
                r: function(d) { return radiusScale(d); },
                cx: svgWidth / 2,
                cy: svgHeight / 2,
                fill: '#3adb76',
                'opacity':.2,
                'stroke-width': 0,
                'stroke-opacity': 0.2,
                stroke: function(d) { return d3.hsl(hueScale(d), 1, 0.5); }
           });

        circles.exit().remove(); 
    }

    // run the loop
    renderChart();
}());