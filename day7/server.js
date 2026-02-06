const app = require("./src/app.js");

const connectToDb = require("./src/config/database.js");

require('dotenv').config()

app.listen(3000, () => {
  console.log("server is working in 3000");
});

connectToDb();
