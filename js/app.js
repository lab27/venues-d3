var brdcst = $("#broadcast-circle");
var pauseBtn = document.getElementsByClassName("pause");
var startBtn = $('#start-talk');

//colors: 
var vrBlue 		= "#2c46b0",
	vrLtBlue 	= "#54c6c6",
	vrRed 		= "#f82847",
	vrGreen 	= "#d8f793",
	vrPurple 	= "#a339cd",
	vrBeige 	= "#fef1de";

$(startBtn).on('click',function(){
	$('#audioElement').trigger('play');
	$('#broadcast-circle').addClass('success')
	$(this).addClass('hide')
	renderChart()
});

//height of ring:
var sizeTheRings = function(){
	var ringWidth = $('.base-ring').outerWidth();
	$('.base-ring').css('height',ringWidth)
}

sizeTheRings()

$(window).on('resize', function(){
	console.log('resize windw')
	sizeTheRings()
});

//TL max:
var tmax_options = {
  delay: 0,
  paused: false,
  onComplete: function() {
    console.log('animation is complete');
  },
  onCompleteScope: {},
  tweens: [],
  stagger: 0,
  align: 'normal',
  useFrames: false,
  onStart: function() {
    console.log('on start called');
  },
  onStartScope: {},
  onUpdate: function() {
    console.log('on update called');
  },
  onUpdateScope: {},
  onRepeat: function() {
    console.log('on repeat called');
  },
  onRepeatScope: {},
  onReverseComplete: function() {
    console.log('on reverse complete');
  },
  onReverseCompleteScope: {},
  autoRemoveChildren: false,
  smoothChildTiming: false,
  repeat: 0,
  repeatDelay: 0,
  yoyo: false,
  onCompleteParams: [],
  onReverseCompleteParams: [],
  onStartParams: [],
  onUpdateParams: [],
  onRepeatParams: []
};

var tl = new TimelineMax(tmax_options),
				  serverCircle = $('#server path#overlay'),
				  connectionCircle = $('#connection path#overlay'),
				  braodcastCircle = $('#broadcast path#overlay'),
				  panelCircle = $('.panelbox svg')
				  serverCheck = $('#server polyline#check'),
				  connectionCheck = $('#connection polyline#check'),
				  broadcastCheck = $('#broadcast polyline#check');


TweenMax.set(panelCircle,{scaleX: 0, scaleY: 0,autoAlpha: 0})
TweenMax.set(serverCircle,{drawSVG: "0%",stroke:vrLtBlue})
TweenMax.set($('polyline#check'),{drawSVG: "0%",stroke:vrGreen})


//TweenMax.staggerTo(panelCircle,1,{scaleX: 1, scaleY: 1, autoAlpha:1, ease: Power2.easeOut},.2)

tl.staggerTo(panelCircle,1,{scaleX: 1, scaleY: 1, autoAlpha:1, ease: Power2.easeOut},.2)
	.to(serverCircle,5,{drawSVG:"100%"})
	.to(serverCircle,.5,{stroke:vrGreen})
	.to(serverCheck,.2,{drawSVG:"100%", ease: Power2.easeOut});

	//.to(serverCircle,1,{stroke: vrGreen})
	//.to(connectionCircle,1,{stroke: vrGreen})
	//.to(braodcastCircle,1,{stroke:vrGreen});