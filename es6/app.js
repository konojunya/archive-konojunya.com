import EventFunctions from "./functions.js"
import $ from "jquery"

var evfunc = new EventFunctions()

/*
*		opening
*/
var calms = [
	"I'm Engineer.",
	"I'm Student.",
	"I'm 19 years old.",
	"I am people.",
]
var s = Math.floor(Math.random() * calms.length);
window.onload = () => {
	evfunc.opening()
	$(".top .calm").text(calms[s])
}
window.onerror = () => {
	window.location.reload()
}

/*
*		about me
*/
$(".close-btn").on("click",evfunc.aboutmeCloseFunc)
$(".about-trigger").on("click",evfunc.aboutmeBtnFunc)

/*
*		product
*/
$(".product").on("click",evfunc.productFunc)
$(".detail-close-btn").on("click",evfunc.detailCloseFunc)

/*
*		like button
*/
$(".like_btn").on("click",evfunc.loveFunc)