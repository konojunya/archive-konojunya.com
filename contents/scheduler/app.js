var express = require('express'),
    app = express(),
    ECT = require('ect'),
    ectRenderer = ECT({ watch: true, root: __dirname + '/views', ext: '.ect' }),
    mongoose = require('mongoose'),
    port = process.env.PORT || 1337,
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    User = require("./models/users"),
    Schedules = require("./models/schedules"),
    COOKIE_SECRET = "o1u23hpuihw42309hfpo2u13r",
    server = require('http').Server(app);

mongoose.connect('mongodb://localhost/schedules');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser(COOKIE_SECRET));
app.use(session({
  secret: COOKIE_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ect');

app.engine('ect', ectRenderer.render);

app.get('/', function (req, res) {
	if(req.cookies.token){
		res.render("main.ect");
	}else{
		res.render("index.ect");
	}
});

app.get('/signup', function (req, res) {
  res.render("signup.ect");
});

app.post("/addSchedules",function(req,res){
	var user = new User();
	user.id = req.body.id;
	user.password = req.body.password;
	user.save(function(err){
		if(err)
			res.send(err);
	});
	res.render("signup-schedule.ect");
});
app.get("/addSchedules",function(req,res){
	res.redirect("/signup");
});

app.post("/login",function(req,res){
	var inputId = req.body.id;
	User.find({},{_id: false,id: true},function(err,users){
		for(var i = 2; i < users.length; i++){
			if(users[i].id == inputId){
				res.cookie('token', inputId, {maxAge: 6000, httpOnly:true});
				res.redirect("/");
			}else{
				res.redirect("/signup");
			}
		}
	});
	res.redirect("/signup");
});
app.get("/login",function(req,res){
	if(req.cookies.token){
		res.redirect("/");
	}else{
		res.redirect("/signup");
	}
});

app.post("/save",function(req,res){
	if(req.body.end){
		res.cookie('token', req.body.id, {maxAge:10000, httpOnly:true});
		res.redirect("/");
	}
});
app.get("/save",function(req,res){
	res.redirect("/");
});
// app.get("/test",function(req,res){
// 	TestUser.find(function(err,users){
// 		if(err)
// 			res.send(err);
// 		console.log(users);
// 		res.send(users);
// 	});
// });
// app.post("/test",function(req,res){
// 	var user = new TestUser();
// 	user.name = req.body.id;
// 	user.password = req.body.password;
// 	user.save(function(err){
// 		if(err)
// 			res.send(err);
// 		console.log("add user!");
// 	});
// 	res.redirect("/");
// });
server.listen(port);
console.log('listening on port: ' + port);
