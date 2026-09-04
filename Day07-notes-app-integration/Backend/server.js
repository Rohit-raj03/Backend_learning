require("dotenv").config();
const app = require("./Src/app");

const port =  process.env.PORT || 3100;

app.listen(port, () => {
  console.log(`The server running on port ${port}`);
});
