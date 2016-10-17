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
	}else if(path == "/about" || path == "/portfolio"){
		setTimeout(()=>{
			ef.opening()
		},1000)
		ef.toPage(path.slice(1,path.length))
		ef.hide_menu_button()
	}else if(path.match(/\/portfolio\//)){
		setTimeout(()=>{
			ef.opening()
		},1000)
		var id = path.replace(/\portfolio\//,"")
		ef.direct_product_detail(id.slice(1,id.length))
		ef.hide_menu_button()
		ef.toPage("portfolio")
	}
}

/*
*		menu button
*/
$(".menu-button").on("click",()=>{
	ef.hide_menu_button()
	ef.open_menu()
})
$(".menu .cancel").on("click",()=>{
	ef.close_menu()
	ef.show_menu_button()
})

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
	ef.hide_menu_button()
	ef.close_menu()
})

/*
*		view close
*/
$(".close-btn").on("click",(e)=>{
	ef.close_view(e.target.parentElement.className)
	ef.show_menu_button()
})

/*
*		product select
*/
$(".product").on("click",ef.show_product_detail.bind(ef))
$(".detail-close-btn").on("click",ef.close_detail)
