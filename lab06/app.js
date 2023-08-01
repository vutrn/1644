var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

//* Khai báo mongoose
const mongoose = require("mongoose");

//! Cần ghi rõ tên của DB ở cuối url, ví dụ "dbTest"
//! Chỉ có thể connect 1 DB
const db =
  "mongodb+srv://admin:admin@umbrellacluster.rpaolls.mongodb.net/dbTest";

mongoose
  .connect(db)
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.log("error"));

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

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

module.exports = app;
