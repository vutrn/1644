//1. khai báo module http  
const http = require('http')
//2. khai báo host (optional)
const host = 'localhost'  //127.0.0.1
//3. khai báo server port
const port = 1234 // 3000: default port of NodeJS server
//4. tạo web server
const server = http.createServer((request, respond) => {
   respond.write("<iframe width='560' height='315' src='https://www.youtube.com/watch?v=khnr4-ehwKA'></iframe>")
   respond.write("<h1 style='font-style: italic'>Hello Greenwich students ! </h1>")
   respond.end("<h1 style='color: red'>Setup NodeJS web server succeed !</h1>")
})
//5. chạy server
server.listen(port, () => {
   console.log('http://' + host + ":" + port)
})

// server.listen(port)