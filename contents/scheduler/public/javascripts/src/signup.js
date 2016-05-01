(function($){
	function htmlEscape(text) {
    text = $("<div>").text(text).html();
    return text.toUpperCase();
  }
  function hasError(){
  	$(".errorInput").show();
  	setTimeout(function(){
  		$(".errorInput").fadeOut();
  	},4000);
  }
  var sim;
	$(".add").on("click",function(){
		var subj = $(".inputText").val();
		var roomNum = $(".inputNum").val();
		if(subj == "" || roomNum == ""){
			hasError();
			return;
		}
		subj = htmlEscape(subj);
		var data = {
			subject: subj,
			room: roomNum
		}
		$("."+sim).text(subj);
		$(".inputText,.inputNum").val("");
	});
	$(".table td").on("touchend",function(){
		$(".inputSchedule").removeClass("hidden");
		sim = $(this).attr("class");
		$(".inputSchedule").removeClass("hidden");
		var name = $(this).attr("name");
		$(".days").text(name);
	});
	$(".end").on("click",function(){
		$.ajax({
			type: "POST",
			url: "/save",
			data: {
				end: true
			},
			success: function(){
				location.href = "/";
			}
		});
	});
})(jQuery);