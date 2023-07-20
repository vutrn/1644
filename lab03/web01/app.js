const http = require("http");
const port = 3000;
const fs = require("fs"); //* file system
const server = http.createServer((req, res) => {
  // res.write("<h1>This is homepage</h1>")
  if (req.url === "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.write(data);
        res.end();
      }
    });
  } else if (req.url === "/about") {
    fs.readFile("about.html", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.write(data);
        res.end();
      }
    });
  }else{
    res.write("<h1>404 not found</h1>");
    res.end()
  }
});
server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
