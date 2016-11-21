import EventFunctions from "./functions.js"
import $ from "jquery"

var ef = new EventFunctions()

/*
*		opening
*/
window.onload = () => {
	var path = location.pathname
	if(path == "/"){
		ef.opening()
		setTimeout(()=>{
			ef.open_menu()
		},1000)
	}else if(path == "/about" || path == "/portfolio"){
		setTimeout(()=>{
			ef.opening()
		},1000)
		ef.toPage(path.slice(1,path.length))
	}else if(path.match(/\/portfolio\//)){
		setTimeout(()=>{
			ef.opening()
		},1000)
		var id = path.replace(/\portfolio\//,"")
		ef.direct_product_detail(id.slice(1,id.length))
		ef.toPage("portfolio")
	}
}

/*
*		menu item hover
*/
$(".menu-item").hover(
	(el)=>{
		// hover
		$(el.target).addClass("active")
	},
	(el)=>{
		// not hover
		$(el.target).removeClass("active")
	}
)

/*
*		menu item click
*/
$(".menu-item").on("click",(e)=>{
	ef.toPage($(e.target).data("menu"))
	ef.close_menu()
})

/*
*		view close
*/
$(".close-btn").on("click",(e)=>{
	ef.close_view(e.target.parentElement.className)
	ef.open_menu()
})

/*
*		product select
*/
$(".product").on("click",ef.show_product_detail)
$(".detail-close-btn").on("click",ef.close_detail)
