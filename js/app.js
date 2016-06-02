var brdcst = $("#broadcast-circle");
var pauseBtn = document.getElementsByClassName("pause");
var startBtn = $('#start-talk');

$(startBtn).on('click',function(){
	$('#audioElement').trigger('play');
	$('#broadcast-circle').addClass('success')
	$(this).addClass('hide')
	renderChart()
});