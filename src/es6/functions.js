import $ from "jquery"
import { TweenMax } from "gsap"

var calms = [
	"If you can dream it, you can do it.",
	"Stay hungry, stay foolish.",
	"Focus on Impact.",
	"Done is better than perfect.",
	"Code wins arguments.",
	"Move fast and break things.",
	"The riskiest thing is to take no risks."
]

export default class EventFunctions{

	opening(){
		TweenMax.staggerTo([".top .title",".top .calm"],1,{alpha: 1,ease: Expo.easeInOut},0.5)
		TweenMax.to(".menu-button",1,{delay: 1.5,right: "0%",ease: Expo.easeInOut})
		$(".top .calm").text(calms[~~(Math.random() * calms.length)])
		this.initTweetPosition()
	}

	/*
	*		init position tweets
	*/
	initTweetPosition(){
		var colors = ["#FF0000","#FF7505","#FFF000","#B3FF00","#3BFF00","#00FF48","#00FFB0","#00FFFF","#0095FF","#0032FF","#4F00FF","#CA00FF","#FF00DC","#FF0078"]
		$.ajax({
			url: "/tweet",
			type: "POST",
		}).done((texts)=>{
			for(var i = 0; i < texts.tweets.length; i++){
				var element = document.createElement("li")
				element.className = "tweet"
				element.style.color = colors[i]
				element.innerText = texts.tweets[i]
				element.style.top = ~~(Math.random() * window.innerHeight * 0.7)+"px"
				element.style.left = ~~(Math.random() * window.innerWidth * 0.7)+"px"
				element.style.fontSize = ~~(Math.random() * 200)+20+"px"
				$(".tweets").append(element)
			}
			$(".tweet").show(1500)
		})
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

	/*
	*		直接プロダクトページに来た場合
	*/
	direct_product_detail(target){
		$(".portfolio").show()
		TweenMax.to(".portfolio",1,{delay: 0.5,top: "0%",ease: Expo.easeInOut})
		$(".portfolio").css({
			"overflow": "hidden",
			"height": "100%"
		})
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

	/*
	*		show product detail
	*/
	show_product_detail(e){
		var self = this;
		$(".portfolio").css({
			"overflow": "hidden",
			"height": "100%"
		})
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

	/*
	*		close detail view
	*/
	close_detail(){
		$(".portfolio").css({
			"overflow": "scroll",
			"height": "auto"
		})
		$("#detail").animate({
			scrollTop: 0
		},500)
		$(".detail-close-btn").hide()
		TweenMax.to(".product",0.5,{scale: 1,ease: Expo.easeInOut,delay: 1.5})
		TweenMax.to("#detail",1,{bottom: "-100%",ease: Expo.easeInOut})
		window.history.pushState(null,null,"/portfolio")
	}

	/*
	*		set html data -> detail view
	*/
	setDetail(data){
		var $detail = $("#detail");
		$detail.css("background-image","url("+data.bgUrl+")")
		$("#detail .content").html(data.html)
	}

}