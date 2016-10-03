import $ from "jquery"
import { TweenMax } from "gsap"

// var milkcocoa = new MilkCocoa('vueitibpplk.mlkcca.com')
// var ds = milkcocoa.dataStore("like_count")

var _data = {}

export default class EventFunctions{

	opening(){
		setTimeout(()=>{
			$(".about-trigger").fadeIn()
		},2000)
		TweenMax.staggerTo([".top .title",".top .calm"],2,{alpha: 1,ease: Expo.easeInOut},0.2)
		TweenMax.to(".top",1,{width: "75%",delay: 2,ease: Expo.easeInOut})
		TweenMax.staggerTo(".product",1,{scale: 1,alpha: 1,ease: Expo.easeInOut,delay: 2.5},0.2)
	}

	aboutmeBtnFunc(){
		TweenMax.to(".about",1,{left: "0%",ease: Expo.easeInOut})
	}

	aboutmeCloseFunc(){
		TweenMax.to(".about",1,{left: "-75%",ease: Expo.easeInOut})
	}

	productFunc(){
		TweenMax.to(".top",1,{width: "100%",ease: Expo.easeInOut})
		TweenMax.to(".product",0.5,{scale: 0,ease: Expo.easeInOut})
		$.ajax({
			url: "/api",
			type: "get",
			data: {
				type: $(this).data("product-name")
			},
			success: function(data){
				TweenMax.to("#detail",1,{bottom: "0%",ease: Expo.easeInOut,delay: 1})
				setTimeout(()=>{
					$(".detail-close-btn").fadeIn();
				},1500)
				EventFunctions.prototype.setDetail(data)
			}
		})
	}

	detailCloseFunc(){
		$("#detail").animate({
			scrollTop: 0
		},500)
		$(".detail-close-btn").hide();
		TweenMax.to(".product",0.5,{scale: 1,ease: Expo.easeInOut,delay: 1.5})
		TweenMax.to(".top",1,{width: "75%",ease: Expo.easeInOut,delay: 1})
		TweenMax.to("#detail",1,{bottom: "-100%",ease: Expo.easeInOut})
	}

	setDetail(data){
		var $detail = $("#detail");
		$detail.css("background-image","url("+data.bgUrl+")")
		$("#detail .content").html(data.html)
		// ds.stream().next((err,mes)=>{
		// 	if(mes.length > 0){
		// 		_data = mes[mes.length -1].value.data;
		// 		if(mes[mes.length -1].value.data[data.id]){
		// 			$(".like_count_number").text(mes[mes.length -1].value.data[data.id])
		// 		}else{
		// 			$(".like_count_number").text("0")
		// 		}
		// 	}
		// })
	}

	loveFunc(){
		var _id = $(this).data("product-name")
		_data[_id] = parseInt($(".like_count_number").text()) + 1
		$(".like_count_number").text(_data[_id])
		EventFunctions.prototype._save(_data)
	}

	_save(data){
		// ds.push({ data: data })
		console.log(data)
	}

}