const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 3001;
const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      fs.readFile("index.html", (err, data) => {
        if (err) {
          console.log(err);
        } else {

          res.write(data);
          res.end();
        }
      });
      break;
    case "/login":
      fs.readFile("login.html", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.write(data);
          res.end();
        }
      });
      break;
    case "/contact":
      fs.readFile("contact.html", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.write(data);
          res.end();
        }
      });
      break;
    default:
      res.write("404");
      res.end();
      break;
  }
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
