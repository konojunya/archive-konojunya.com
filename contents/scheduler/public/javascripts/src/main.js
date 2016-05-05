(function($){
	// 一限目始まり： 9:00
	// 二限目始まり： 10:45
	// 三限目始まり： 13:05
	// 四限目始まり： 14:50
	// 五限目始まり： 16:30
	(function time(){
		setTimeout(function(){
			var now = new Date();
			var hour = now.getHours();
			var min = now.getMinutes();
			var sec = now.getSeconds();
			$("#view_clock").text(hour + ":" + min + ":" + sec);

			if(hour < 9){
				msg("次は一限目！");
			}else if(hour > 9 && hour <= 10){
				msg("次は二限目！"); //二限目始まり
			}else if(hour > 10 && hour <= 13){
				msg("次は三限目！"); //三限目始まり
			}else if(hour > 13 && hour <= 14){
				msg("次は四限目！"); //四限目始まり
			}else if(hour > 14 && hour <= 16){
				msg("次は五限目！"); //五限目始まり
			}else{
				msg("お疲れ様でした");
			}
			function msg(text){
				$(".msg").text(text);
			}
			time();
		},500);
	})();
})(jQuery);