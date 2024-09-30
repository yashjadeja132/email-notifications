var express = require("express");
var logger = require("morgan");
var cors = require("cors");

const config = require("./config/config");

const authRoute = require("./modules/Auth/route");

const app = express();

app.use(express.json());
app.use(logger("dev"));
app.use(cors());

app.use("/auth", authRoute);

app.listen(config.PORT, (err) => {
  if (err) throw err;
  console.log("Server Listning on PORT: ", config.PORT);
});
