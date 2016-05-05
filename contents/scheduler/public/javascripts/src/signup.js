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
  var sim,col = [],data = [];
  $("td").each(function(i) {
    col.push($(this).attr("class"));
  });
  for(var i = 0; i < col.length; i++){
  	data[i] = {wday:col[i],subject:null,roomNum:null}
  }
	$(".add").on("click",function(){
		var subj = $(".inputText").val();
		var roomNum = $(".inputNum").val();
		if(subj == "" || roomNum == ""){
			hasError();
			return;
		}
		subj = htmlEscape(subj);
		$("."+sim).text(subj);
		$(".inputText,.inputNum").val("");
		for(var i=0;i<data.length;i++){
			if(data[i].wday == sim){
				data[i].subject = subj;
				data[i].roomNum = roomNum;
			}
		}
	});
	$(".table td").on("touchend",function(){
		$(".inputSchedule").removeClass("hidden");
		sim = $(this).attr("class");
		$(".inputSchedule").removeClass("hidden");
		var name = $(this).attr("id");
		$(".days").text(name);
	});
	$(".end").on("click",function(){
		if(window.confirm('データを送信し、登録を完了します。')){
			var id = $(this).attr("name");
			$.ajax({
				type: "POST",
				url: "/addSchedules",
				data: {
					data: data,
					id: id
				},
				success: function(){
					location.href = "/";
				}
			});
		}
	});
})(jQuery);