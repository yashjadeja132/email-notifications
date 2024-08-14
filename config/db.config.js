var mongoose = require("mongoose");

const config = require("./config");

const connection = mongoose
  .connect(config.MONGO_URL)
  .then(() => {
    console.log(`MongoD Connection Successfully`);
  })
  .catch((error) => {
    console.error("Error to connect MongoDB: ", error.message);
  });

module.exports = connection;
