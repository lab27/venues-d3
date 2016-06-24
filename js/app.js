var brdcst = $("#broadcast-circle");
var pauseBtn = document.getElementsByClassName("pause");
var startBtn = $('#logo');

//colors: 
var vrBlue 		= "#2c46b0",
	vrLtBlue 	= "#54c6c6",
	vrRed 		= "#f82847",
	vrGreen 	= "#60BD70",
	vrYellow 	= "#ffed00",
	vrPurple 	= "#a339cd",
	vrBeige 	= "#fef1de";

$(startBtn).on('click',function(){
	$('#audioElement').trigger('play');
	//$('#broadcast-circle').addClass('success')
	//$(this).addClass('hide')
	//renderChart()
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

//Set up the messages:
var msgBox = $('.messagebox')
TweenMax.set(msgBox, {autoAlpha:0,marginTop:"100px"})

//message counter
var currentMsg = 0;
var nextMsg = 1;

//show the next msg
var showNextMsg = function() {
	console.log("show next message called")
	//console.log("next msg: " + nextMsg.attr('id'))


	var targetMsgBox = $('#messagebox'+currentMsg)
	var nextMsgBox = $('#messagebox'+nextMsg)
	console.log("target: " + targetMsgBox.attr('id'))
	$(nextMsgBox).removeClass('hide')
	//tl.play()
	TweenMax.to(targetMsgBox,.5,{autoAlpha:0,ease:Power2.easeOut, onComplete:function(){
		$(targetMsgBox).remove()
		TweenMax.to(nextMsgBox,.5,{autoAlpha:1,marginTop:0,ease:Power2.easeOut, onComplete:function(){
					nextMsg += 1
		currentMsg += 1
		}})
	}})
};

//temp trigger with Logo
$('.msg-action').on('click',function(){
	$('#server-button').removeClass('hide').addClass('pulse')
	showNextMsg()
});



//start server
$('#server-button').on('click',function(){
	TweenMax.to($(this),.5,{autoAlpha:0,scaleX:0,scaleY:0,ease:Power2.easeOut})
	showNextMsg()
	tl.play()
})

//launch device selector 
$('#connection-button').on('click',function(){
	TweenMax.to($(this),.2,{autoAlpha:0})
	launchDeviceSelector()
});

$('.box-select').on('click',function(){
	dstl.play()
})

$('.box2-select').on('click',function(){
	dstl.play()
})

$('#broadcast-button').on('click',function(){
	tl.play()
})
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
    showNextMsg();
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

var tmax_options2 = {
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
    //showNextMsg();
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
				  broadcastCircle = $('#broadcast path#overlay'),
				  panelCircle = $('.panelbox svg')
				  serverCheck = $('#server polyline#check'),
				  connectionCheck = $('#connection polyline#check'),
				  connectionMeter = $('#connection-circle-svg circle'),
				  broadcastMeter = $('#broadcast-circle-svg circle'),
				  broadcastCheck = $('#broadcast polyline#check'),
				  serverBtn = $('#server-button'),
				  connectionBtn = $('#connection-button'),
				  broadcastBtn = $('#broadcast-button'),
				  deviceSelectorLi = $('#devices ul li'),
				  deviceSelectorUl = $('#devices ul'),
				  devices = $('#devices'),
				  spokes1 = $('#connection-circle-svg #spokes'),
				  spokes2 = $('#broadcast-circle-svg #spokes'),
				  dstl = new TimelineMax(tmax_options2);


TweenMax.set(panelCircle,{scaleX: 0, scaleY: 0,autoAlpha: 0})
TweenMax.set(serverCircle,{drawSVG: "0%",transformOrigin: "50% 50%",stroke:vrLtBlue,rotation:-90})
TweenMax.set($('polyline#check'),{drawSVG: "0%",stroke:vrGreen})
TweenMax.set(deviceSelectorLi,{autoAlpha:0,paddingTop:"60px"})
TweenMax.set(devices,{autoAlpha:0})
TweenMax.set($('#screen2'),{x:"100%"})
TweenMax.set($('svg circle'),{autoAlpha:0})

function turnSpokes1(){
	//TweenMax.set(spokes,{rotation:0})
	TweenMax.fromTo(spokes1,20,{transformOrigin:"50% 50%",rotation:0, ease: Power0.easeNone},{rotation:360, repeat:-1})
}

function turnSpokes2(){
	//TweenMax.set(spokes,{rotation:0})
	TweenMax.fromTo(spokes2,20,{transformOrigin:"50% 50%",rotation:0, ease: Power0.easeNone},{rotation:360, repeat:-1})
}
//animate the device selector:
var launchDeviceSelector = function(){

TweenMax.set(deviceSelectorLi,{className:"-=hide"})
TweenMax.set(devices,{className:"-=hide"})
dstl.to(devices,.5,{autoAlpha:1})
	.staggerTo(deviceSelectorLi,.5,{autoAlpha:1,paddingTop:0},.2)
	.addPause()
	.to($('#screen1'),.3,{x:"-100%",ease:Power2.easeOut, onComplete:function(){
		$('#screen1').remove()
	}})
	.set($('#screen2'),{className:'-=hide'})
	.to($('#screen2'),.3,{x:"0%",ease:Power2.easeOut})
	.addPause()
	.to(devices,.3,{y:"-150%",ease:Power2.easeOut, onComplete:function(){
		tl.play()
	}});
}

//TweenMax.staggerTo(panelCircle,1,{scaleX: 1, scaleY: 1, autoAlpha:1, ease: Power2.easeOut},.2)

tl.staggerTo(panelCircle,1,{scaleX: 1, scaleY: 1, autoAlpha:1, ease: Power2.easeOut},.2)
	.addPause()
	.to(serverCircle,2,{drawSVG:"100%"})
	.to(serverCircle,.5,{stroke:vrRed})
	.set(serverBtn,{className:'-=hide',onComplete:showNextMsg})
	.to(serverBtn,.5,{autoAlpha:1,scaleX:1,scaleY:1,ease:Power2.easeOut})
	.addPause()
	.set(serverCircle,{drawSVG:"0%",stroke:vrLtBlue})
	.to(serverCircle,2,{drawSVG:"100%"})
	.to(serverCircle,.5,{stroke:vrGreen})
	.to(serverCheck,.2,{drawSVG:"100%", ease: Power2.easeOut,onComplete:function(){
		showNextMsg()
		$('#server-button').remove()
	}})
	.set(connectionBtn,{className:'-=hide'})
	.set(connectionBtn,{className:'+=pulse'})
	.addPause()
	.to(connectionCircle,.2,{autoAlpha:1,stroke:vrGreen})
	.to(connectionCheck,.2,{drawSVG:"100%", ease: Power2.easeOut,onComplete:function(){
		showNextMsg()
		$('#audioElement').trigger('play');
		TweenMax.set(connectionMeter,{stroke:vrGreen,autoAlpha:.5})
		//turnSpokes1()
		renderChart("#connection-circle-svg")
	}})
	.set(broadcastBtn,{className:"-=hide"})
	.to(broadcastCircle,.5,{autoAlpha: 1, stroke:vrYellow},"+=5")
	.set(broadcastBtn,{className:"-=success"})
	.set(broadcastBtn,{className:"+=warning"})
	.set(broadcastBtn,{className:"+=pulse", onComplete:showNextMsg})
	.addPause()
	.to(broadcastCircle,.2,{stroke:vrGreen})
	.to(broadcastCheck,.2,{drawSVG:"100%", ease: Power2.easeOut,onComplete:function(){
		showNextMsg()
		TweenMax.set(broadcastMeter,{stroke:vrGreen,autoAlpha:.5})
		renderChart("#broadcast-circle-svg")
		//turnSpokes2()
		TweenMax.to(broadcastBtn,.2,{autoAlpha:0})
	}});

