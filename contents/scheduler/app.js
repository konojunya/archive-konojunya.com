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

mongoose.connect("mongodb://localhost/schedules");

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

// route
app.get("/",function(req,res){
  if(req.cookies.token){
    var id = req.cookies.token;
    Schedules.find({createUser:id},{_id: false,timetable:true},function(err,item){
      res.render("main.ect",{id:id,item:item[0].timetable});
    });
  }else{
    res.render("index.ect");
  }
});

app.post("/login",function(req,res){
  var id = req.body.id;
  User.find({id: id},function(err,user){
    if(user != ""){
      res.cookie("token",id,{maxAge: 6000,httpOnly: true});
      res.redirect("/");
    }else{
      res.redirect("/signup");
    }
  });
});
app.get("/login",function(req,res){
  if(req.cookies.token){
    res.redirect("/");
  }else{
    res.redirect("/");
  }
});

app.get("/signup",function(req,res){
  res.render("signup.ect");
});

app.post("/signup",function(req,res){
  var id = req.body.id;
  var password = req.body.password;
  if(id == "" || password == "" || id == password){
    res.render("signup.ect");
  }
  User.find({id: id},function(err,users){
    if(users == ""){
      var user = new User();
      user.id = id;
      user.password = password;
      user.save(function(err){
        if(err){
          res.send(err);
          next();
        }
        res.render("signup-schedule.ect",{id: id});
      });
    }else{
      res.render("signup.ect")
    }
  });
});

app.post("/addSchedules",function(req,res){
  if(req.body.data){
    var id = req.body.id;
    var data = req.body.data;
    var schedules = new Schedules();
    schedules.timetable = data;
    schedules.createUser = id;
    schedules.save(function(err){
      if(err){
        res.send(err);
        next();
      }
      res.cookie("token",id,{maxAge:10000,httpOnly:true});
      res.redirect("/");
    });
  }else{
    res.render("signup-schedule.ect");
  }
});

server.listen(port);
console.log("listening on port: "+port);