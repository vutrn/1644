var express = require("express");
var router = express.Router();

router.get("/hn", (req, res) => {
  var hanoi = "Ha Noiii"
  res.render("hanoi", {hn: hanoi});
});

router.get('/hcm', (req,res) =>{
  res.render('hcm')
})

module.exports = router;
