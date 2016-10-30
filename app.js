var express = require("express")
var bodyParser = require("body-parser")
var fs = require("fs")
var Twit = require("twit")
var PORT = 3000

var app = express()

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var twitter = new Twit({
	consumer_key: "N0oGyQiyYyVNGlwebOTqGMLMF",
  consumer_secret: "28f3HX0KEuZ6O3ZM4kGNrtmDLsCbv3mAsNhjj4opRDX68Q9gwN",
  access_token: "2533007911-gMRbVch4lZXnYTQRQhI37XSY35oQ4gXPkdsLs56",
  access_token_secret: "fNpjdUFE4hA17WybI0ytQ0q8xcp72U1qTQRXIYYvCCo3m",
  timeout_ms: 60*1000,
});

var contents = [
	"saisen_go",
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

app.post("/tweet",function(req,res){
	var datas = [];
	twitter.get("statuses/user_timeline",{count: 15,trim_user: true,exclude_replies: true},function(err,data,response){
		Promise.all(data.map(function(status){
			return datas.push(status.text)
		}))
		.then(function(){
			res.json({
				tweets: datas
			})
		})
		.catch(function(err){
			console.log(err)
		})
	})
})

app.get("/*",function(req,res){
	res.redirect("/")
})

app.listen(PORT,function(){
	console.log(`app listen in http://localhost:${PORT}`)
})