const app = require("./src/app");
// dns.setServers(["8.8.8.8", "8.8.4.4"]);

const port = 3000;

app.listen(port, () => {
  console.log(`this server is running on port ${port}`);
});
