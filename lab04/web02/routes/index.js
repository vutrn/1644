var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//* Use get method to render login page for form input
router.get("/login", (req, res) => {
  res.render("login");
});

//* Use post method to receive input page from form input
router.post("/login", (req, res) => {
  //Get data from form
  const data = req.body; //! body -> html body
  let username = data.username;
  let password = data.password;
  // console.log(username);
  // console.log(password);
  // res.send(data);
  if (username === "admin" && password === "admin") {
    res.send("Gioi");
  } else {
    res.send("Ngu");
    // res.redirect('/')
  }
});

router.get("/input", (req, res) => {
  res.render("add_student");
});

router.post('/output', (req, res) => {
  res.render('view_student', {student : req.body})
})

module.exports = router;
