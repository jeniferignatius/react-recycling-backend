
const MONGOOSE_USER = "localhost"
const MONGOOSE_PASSWORD = ""
const MONGOOSE_DATABASE = "recycling"
var MongoClient = require('mongodb').MongoClient;

module.exports = {
  MONGOOSE_CONNECTION :"mongodb://localhost:27017/recycling",
  //MONGOOSE_CONNECTION : `mongodb+srv://${MONGOOSE_USER}:${MONGOOSE_PASSWORD}@cluster0-rl2ot.mongodb.net/${MONGOOSE_DATABASE}?retryWrites=true&w=majority`,
  SERVER_PORT : process.env.PORT || 3333
}
