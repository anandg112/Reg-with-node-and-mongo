var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {User} = require('./models/user');
var {checkPwd} = require('./utils/check-pwd');
var {checkUname} = require('./utils/check-uname')

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

//Routing registration page
app.get("/", (req, res) => {
  res.render("user-reg.ejs");
});

//Getting form data and posting to the user database
app.post("/", (req, res) => {
  if(checkPwd(req.body.password) && checkUname(req.body.username)){

    var user = new User({
      username: req.body.username,
      password: req.body.password
    });

    user.save().then((doc) => {
      res.status(200).send("User successfully registered!");
    }, (err) => {
      res.status(400).send(err);
    });

  } else {
    res.send("Your password and/or Username did not meet criteria!");
  };
});

app.listen(3000, () => {
  console.log(`Example app listening on port 3000!`);
});
