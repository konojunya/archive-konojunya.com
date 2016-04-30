(function($){
	function htmlEscape(text) {
    text = $("<div>").text(text).html();
    return text.toUpperCase();
  }
  var sim;
  var data = [];
	$(".add").on("click",function(){
		var subj = $(".inputText").val();
		var roomNum = $(".inputNum").val();
		if(subj == "" || roomNum == "") return;
		subj = htmlEscape(subj);
		$("."+sim).text(subj);
		$(".inputText,.inputNum").val("");
		data.push({
			days: sim,
			subject: subj,
			room: roomNum
		});
		console.log(data)
	});
	$(".table td").on("touchend",function(){
		sim = $(this).attr("class");
		$(".inputSchedule").removeClass("hidden");
		var name = $(this).attr("name");
		$(".days").text(name);
	});
})(jQuery);