const { join } = require("path");
const env = require("dotenv");

env.config({ path: join(__dirname, "..", ".env") });

module.exports = {
  PORT: process.env.PORT || 5000,
  MONGO: {
    uri: `mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DB}`,
  },
};