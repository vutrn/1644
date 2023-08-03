const mongoose = require("mongoose");
//schema: khai báo, định nghĩa cấu trúc của bảng (tên các cột, kiểu đữ liệu tương ứng)
const mobileSchema = mongoose.Schema({
  brandName: String,
  phoneModel: String,
  quantity: Number,
  price: Number,
  date: Date,
  image: String,
});

const mobile = mongoose.model("mobile", mobileSchema, "mobile");

module.exports = mobile