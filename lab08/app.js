var createError = require("http-errors");
var express = require("express");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const studentRouter = require("./routes/student");

var app = express();

//! MONGOOSE
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://admin:admin@umbrellacluster.rpaolls.mongodb.net/gch1103"
)

//! BODY_PARSER
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

//! DATE FORMAT
var hbs = require('hbs');
hbs.registerHelper('dateFormat', require('handlebars-dateformat')); 


// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/student", studentRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(process.env.PORT || 3001)

module.exports = app;
