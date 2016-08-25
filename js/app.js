

var brdcst = $("#stream-circle");
var pauseBtn = document.getElementsByClassName("pause");
var startBtn = $('#logo');
var panelSize = $('.panelbox').outerWidth();
var serverCirclePos = $('#server-circle-svg').offset()
var listOpen = false

//Spotlight
var sl = [{left: "50%", top: "30px", diameter: 300, msg:"This is the name of your stage."},
		{left: "24px", top: "24px", diameter: 150, msg: "See all your stages."}];

//slCounter 
var slCounter = -1;

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
	//$('#stream-circle').addClass('success')
	//$(this).addClass('hide')
	//renderChart()
});




$(window).on('resize', function(){
	//console.log('resize windw')
	panelSize = $('.panelbox').outerWidth();
	console.log('panelSize: '+panelSize)

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
		TweenMax.to(nextMsgBox,.5,{autoAlpha:1,marginTop:"0%",ease:Power2.easeOut, onComplete:function(){
					nextMsg += 1
		currentMsg += 1
		}})
	}})
};

//temp trigger with Logo
$('.avatar').on('click',function(){
	$('#server-button').removeClass('hide').addClass('pulse')
	showNextMsg()
});



//start server
$('#server-button').on('click',function(){
	TweenMax.to($(this),.5,{autoAlpha:0,scaleX:0,scaleY:0,ease:Power2.easeOut})
	//showNextMsg()
	tl.play()
})

//launch device selector 
$('#source-button').on('click',function(){
	TweenMax.to($(this),.2,{autoAlpha:0})
	launchDeviceSelector()
});

$('.box-select').on('click',function(){
	dstl.play()
})

$('.box2-select').on('click',function(){
	dstl.play()
})

$('#stream-button').on('click',function(){
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

var listToggle = new TimelineMax(tmax_options),
				listBox = $('#talkbar');

//listToggle.fromTo(listBox,.3,{height: "100vh"},{height:"60px"})

$('#list-toggle').on('click', function(){
	if (listOpen == false) {
	//open the list
	TweenMax.to(listBox,.3,{height:"100vh",ease:Power2.easeOut,onComplete:function(){
		listOpen = true
	}})
	} else {
		//close the list
	TweenMax.to(listBox,.3,{height:"60px",ease:Power2.easeOut,onComplete:function(){
		listOpen = false
	}})
	}
})

$('.list-open').on('click',function(){
	//close the list
	console('close this list!')
	TweenMax.to(listBox,.3,{height:"60px",ease:Power2.easeOut})
})

var tl = new TimelineMax(tmax_options),
				  serverCircle = $('#server path#overlay'),
				  spotlight = $('#spotlight'),
				  spotlightMsg = $('#spotlight-msg'),
				  connectionCircle = $('#source path#overlay'),
				  broadcastCircle = $('#stream path#overlay'),
				  panelCircle = $('.panelbox svg')
				  serverCheck = $('#server polyline#check'),
				  connectionCheck = $('#source polyline#check'),
				  connectionMeter = $('#source-circle-svg circle'),
				  broadcastMeter = $('#stream-circle-svg circle'),
				  broadcastCheck = $('#stream polyline#check'),
				  serverBtn = $('#server-button'),
				  connectionBtn = $('#source-button'),
				  broadcastBtn = $('#stream-button'),
				  deviceSelectorLi = $('#devices ul li'),
				  deviceSelectorUl = $('#devices ul'),
				  devices = $('#devices'),
				  spokes1 = $('#source-circle-svg #spokes'),
				  spokes2 = $('#stream-circle-svg #spokes'),
				  dstl = new TimelineMax(tmax_options2);


TweenMax.set(panelCircle,{strokeWidth:0,autoAlpha: 0})
TweenMax.set(serverCircle,{drawSVG: "0%",transformOrigin: "50% 50%", svgOrigin: "83 83",stroke:vrLtBlue,rotation:-90})
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

spotlightTl = new TimelineMax(tmax_options);



//Spotlight Timeline:
var showSpotlight = function(o) {

	console.log("object: " + JSON.stringify(o))
	o.width=o.diameter;
	o.height=o.diameter;
	o.marginLeft = (-1*(o.diameter/2))
	o.marginTop = (-1*(o.diameter/2))
	msg = o.msg
	o.onComplete = function(){
		$('#spotlight-msg p').html(msg)
	}
	TweenMax.to($("#spotlight"),.2,o);
	TweenMax.to(spotlightMsg,.2,{top: o.top,left:o.left})
}

var nextSpotlight = function(){
	slCounter ++;
	showSpotlight(sl[slCounter])
}



var checkCheck = function(){
	setInterval(justChecking(), 1000)

}

//go to next spotlight 
$('.spotlight-btn').on('click',nextSpotlight);


//TweenMax.staggerTo(panelCircle,1,{scaleX: 1, scaleY: 1, autoAlpha:1, ease: Power2.easeOut},.2)

tl
	.staggerTo(panelCircle,1,{strokeWidth:5, autoAlpha:1, ease: Power2.easeOut},.2)
	.addPause()
	//.to(serverCircle,2,{drawSVG:"100%"})
	// .to(serverCircle,.5,{stroke:vrRed})
	// .set(serverBtn,{className:'-=hide',onComplete:showNextMsg})
	// .to(serverBtn,.5,{autoAlpha:1,scaleX:1,scaleY:1,ease:Power2.easeOut})
	//.addPause()
	//.set(serverCircle,{drawSVG:"0%",stroke:vrLtBlue})
	.to(serverCircle,2,{drawSVG:"100%"})
	.to(serverCircle,.5,{stroke:vrGreen,onComplete:showNextMsg})
	.to(serverCheck,.2,{drawSVG:"100%", ease: Power2.easeOut,onComplete:function(){
		showNextMsg()
		$('#server-button').remove()
		$('#stopwatch-server').removeClass('hide')
		startTimer()
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
		renderChart("#source-circle-svg")
	}})
	.set(broadcastBtn,{className:"-=hide"})
	.to(broadcastCircle,.5,{autoAlpha: 1, stroke:vrYellow},"+=5")
	.set(broadcastBtn,{className:"-=success"})
	.set(broadcastBtn,{className:"+=warning"})
	.set(broadcastBtn,{className:"+=pulse"})
	.addPause()
	.to(broadcastCircle,.2,{stroke:vrGreen})
	.to(broadcastCheck,.2,{drawSVG:"100%", ease: Power2.easeOut,onComplete:function(){
		showNextMsg()
		TweenMax.set(broadcastMeter,{stroke:vrGreen,autoAlpha:.5})
		renderChart("#stream-circle-svg")
		//turnSpokes2()
		TweenMax.to(broadcastBtn,.2,{autoAlpha:0})
	}});

	$(document).ready(function(){
		$('.svg-circle').attr("class", "svg-circle");
		tl.play()

	})

