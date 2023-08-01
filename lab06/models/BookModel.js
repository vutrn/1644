const mongoose = require("mongoose");

var bookSchema = mongoose.Schema({
  //* Khai báo tên của các field (column) ở đây cùng các kiểu dữ liệu
  name: String,
  age: Number,
  email: String,
  bbb: String
});

//* khai báo tên của collection (table) ở đây
//* model('ten-tuỳ-ý', 'schema', 'collection')
var bookModel = mongoose.model("test", bookSchema, "student");

module.exports = bookModel;
