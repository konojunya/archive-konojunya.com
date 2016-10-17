var express = require("express")
var bodyParser = require("body-parser")
var fs = require("fs")
var PORT = 3000

var app = express()

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var contents = [
	"book_sharing",
	"markdown_editor",
	"saya_birthday",
	"web_radicon"
]

app.get("/",function(req,res){
	res.sendfile("index.html")
})
app.get("/about",function(req,res){
	res.sendfile("index.html")
})
app.get("/portfolio",function(req,res){
	res.sendfile("index.html")
})
app.get("/portfolio/:id",function(req,res){
	var id = req.params.id;
	if(contents.indexOf(id) >= 0){
		res.sendfile("index.html")
	}
	if(contents.indexOf(id) == -1){
		res.redirect("/")
	}
})
app.post("/portfolio",function(req,res){
	var id = req.body.type;
	console.log(id)
	var html = "";
	fs.readFileSync(__dirname + "/public/contents/"+id+".html").toString().split('\n').forEach(function(line){
		html += line;
	})
	res.json({
		id: id,
		bgUrl: "../images/"+id+"/screen.png",
		html: html
	})
})

app.get("/*",function(req,res){
	res.redirect("/")
})

app.listen(PORT,function(){
	console.log(`app listen in http://localhost:${PORT}`)
})