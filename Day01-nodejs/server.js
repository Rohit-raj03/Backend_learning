const http = require("http");

const server = http.createServer((req, res) => {
  res.end("this is my fist server");
});

server.listen(3100, () => {
  console.log("http://localhost:3100");
});

localStorage.setItem("key",JSON.stringify("keyval"))
