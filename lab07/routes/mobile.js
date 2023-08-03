var express = require("express");
const MobileModel = require("../models/MobileModel");
const router = express.Router();

router.get("/", async (req, res) => {
  //! Read -> function 'FIND'
  const mobile = await MobileModel.find();
  // res.send(mobile)
  res.render("mobile/index", { mobile });
});

//! :id
router.get("/delete/:id", async (req, res) => {
  //! Delete -> function 'findByIdAndDelete'
  // cach 1
  await MobileModel.findByIdAndDelete(req.params.id)
    .then(() => console.log("delete succeed"))
    .catch((error) => console.log("delete failed"));

  // cach 2
  // var mobile = await MobileModel.findById(req.params.id);
  // await MobileModel.deleteOne(mobile)
  //   .then(() => console.log("delete succeed"))
  //   .catch((error) => console.log("delete failed"));

  res.redirect("/mobile");
});

router.get("/deleteall", async (req, res) => {
  await MobileModel.deleteMany()
    .then(() => console.log("delete succeed"))
    .catch((error) => console.log("delete failed"));
  res.redirect("/mobile");
});

router.get("/detail/:id", async (req, res) => {
  const mobile = await MobileModel.findById(req.params.id);
  res.render("mobile/detail", { mobile });
});

//! Form có method post
router.post("/order", async (req, res) => {
  const data = req.body;
  const id = data.id;
  const mobile = await MobileModel.findById(id);
  
  const price = data.price;
  const quantity = data.quantity;
  const total = price * quantity;
  const text = `You have ordered ${quantity} ${mobile.phoneModel}`;
  console.log(text);
  res.render("mobile/order", { mobile, quantity, total });
});

module.exports = router;
