var dotenv = require("dotenv");

var node_env = process.env.NODE_ENV;

const config = () => {
  if (node_env === "development") {
    dotenv.config({ path: ".env.dev" });
  } else {
    dotenv.config({ path: ".env" });
  }
  return {
    PORT: process.env.PORT,
    SECRET_KEY: process.env.SECRET_KEY,
    NODE_MAILER_USER: process.env.NODE_MAILER_USER,
    NODE_MAILER_PASS: process.env.NODE_MAILER_PASS,
  };
};

module.exports = config();
