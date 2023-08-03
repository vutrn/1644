var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
//! 4a. Tạo router cho từng model
var mobileRouter = require("./routes/mobile")
var laptopRouter = require("./routes/laptop")

var app = express();

var hbs = require('hbs');
hbs.registerHelper('dateFormat', require('handlebars-dateformat')); 

//! 1. Cấu hình body-parser (lấy input data từ form)
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

//! 2. Cấu hình mongoose (tương tác DB)
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://admin:admin@umbrellacluster.rpaolls.mongodb.net/gch1103"
  )
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.log("error"));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter)
//! 4b
app.use("/mobile", mobileRouter)
app.use("/laptop", laptopRouter)

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

//! 3. PORT
app.listen(process.env.PORT || 3001);

module.exports = app;
