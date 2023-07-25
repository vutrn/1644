const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  //* render ra view index hbs nằm trong thư mục laptop
  res.render("laptop/index");
});

module.exports = router;
