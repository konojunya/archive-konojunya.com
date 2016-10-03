(var express = require("express")
var app = express()
var fs = require("fs")
// var MilkCocoa = require('milkcocoa')
// var milkcocoa = new MilkCocoa('vueitibpplk.mlkcca.com');
// var ds = milkcocoa.dataStore("like_count")
var PORT = 3000

app.use(express.static(__dirname + '/public'));

app.get("/",function(req,res){
	res.sendfile("index.html")
})
app.get("/api",function(req,res){
	var id = req.query.type;
	var html = "";
	fs.readFileSync(__dirname + "/public/contents/"+req.query.type+".html").toString().split('\n').forEach(function(line){
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
	console.log("app listen in ",PORT)
})