const express = require("express");
const BookModel = require("../models/BookModel");
router = express.Router();

router.get("/", async (req, res) => {
  var books = await BookModel.find();

  // res.send(books)
  console.log(books);
  res.render("test", { books });
});

module.exports = router;
