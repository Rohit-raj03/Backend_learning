let http = require("http");

let server = http.createServer((req, res) => {
  console.log("this is server");
  res.end("this is respons");
});

server.listen(3100, ()=>{console.log("http://localhost:3100")})
