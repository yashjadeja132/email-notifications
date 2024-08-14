var dotenv = require("dotenv");

var node_env = process.env.NODE_ENV;

const config = () => {
  if (node_env === "development") {
    dotenv.config({ path: ".env.dev" });
  } else {
    dotenv.config({ path: ".env" });
  }
  return {
    MONGO_URL: process.env.MONGO_URL,
    PORT: process.env.PORT,
    SECRET_KEY: process.env.SECRET_KEY,
  };
};

module.exports = config();
