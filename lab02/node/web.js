const http = require ('http');
const host = 'localhost'
const port = 3000
const server = http.createServer((req, res) => {
  res.write("<h1>HELLO</h1>")
  res.end("<h3>Cloud cpt</h3>")

})
server.listen(port, () =>{
  console.log(`Server is running on http://${host}:${port}`)
})