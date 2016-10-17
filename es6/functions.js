import $ from "jquery"
import { TweenMax } from "gsap"

// var milkcocoa = new MilkCocoa('vueitibpplk.mlkcca.com')
// var ds = milkcocoa.dataStore("like_count")

var _data = {}

var calms = [
	"I'm Engineer.",
	"I'm Student.",
	"I'm 19 years old.",
	"I am people.",
]

export default class EventFunctions{

	opening(){
		TweenMax.staggerTo([".top .title",".top .calm"],1,{alpha: 1,ease: Expo.easeInOut},0.5)
		TweenMax.to(".menu-button",1,{delay: 1.5,right: "0%",ease: Expo.easeInOut})
		$(".top .calm").text(calms[~~(Math.random() * calms.length)])
	}

	/*
	*		menu button
	*/
	hide_menu_button(){
		TweenMax.to(".menu-button",0.8,{right: "-20%",ease: Expo.easeInOut})
	}

	show_menu_button(){
		TweenMax.to(".menu-button",0.8,{delay: 0.5,right: "0%",ease: Expo.easeInOut})
	}

	/*
	*		menu
	*/
	open_menu(){
		TweenMax.to(".menu",0.8,{delay: 0.5,right: "0%",ease: Expo.easeInOut})
	}

	close_menu(){
		TweenMax.to(".menu",0.8,{right: "-20%",ease: Expo.easeInOut})
	}

	/*
	*		show target view
	*/
	toPage(target){
		window.history.pushState(null,null,"/"+target)
		target = "."+target
		$(target).fadeIn()
		TweenMax.to(target,1,{delay: 0.5,top: "0%",ease: Expo.easeInOut})
	}

	/*
	*		view close
	*/
	close_view(target){
		window.history.pushState(null,null,"/")
		TweenMax.to("."+target,1,{top: "100%",ease: Expo.easeInOut})
		setTimeout(()=>{
			$("."+target).fadeOut()
		},300)
	}

	direct_product_detail(target){
		$.ajax({
			url: "/portfolio",
			type: "post",
			data: {
				type: target
			},
			success: (data)=>{
				TweenMax.to("#detail",1,{bottom: "0%",ease: Expo.easeInOut})
				setTimeout(()=>{
					$(".detail-close-btn").fadeIn();
				},1000)
				this.setDetail(data)
				window.history.pushState(null,null,"/portfolio/"+data.id)
			}
		})
	}

	show_product_detail(e){
		var self = this;
		$.ajax({
			url: "/portfolio",
			type: "post",
			data: {
				type: e.target.dataset.productName
			},
			success: (data)=>{
				TweenMax.to("#detail",1,{bottom: "0%",ease: Expo.easeInOut})
				setTimeout(()=>{
					$(".detail-close-btn").fadeIn();
				},1000)
				self.setDetail(data)
				window.history.pushState(null,null,"/portfolio/"+data.id)
			}
		})
	}

	close_detail(){
		$("#detail").animate({
			scrollTop: 0
		},500)
		$(".detail-close-btn").hide();
		TweenMax.to(".product",0.5,{scale: 1,ease: Expo.easeInOut,delay: 1.5})
		TweenMax.to("#detail",1,{bottom: "-100%",ease: Expo.easeInOut})
		window.history.pushState(null,null,"/portfolio")
	}

	setDetail(data){
		var $detail = $("#detail");
		$detail.css("background-image","url("+data.bgUrl+")")
		$("#detail .content").html(data.html)
	}

}