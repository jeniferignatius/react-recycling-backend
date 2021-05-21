
const MONGOOSE_USER = "mandelli"
const MONGOOSE_PASSWORD = "mandelli"
const MONGOOSE_DATABASE = "productsell"

module.exports = {
  MONGOOSE_CONNECTION : `mongodb+srv://${MONGOOSE_USER}:${MONGOOSE_PASSWORD}@cluster0-rl2ot.mongodb.net/${MONGOOSE_DATABASE}?retryWrites=true&w=majority`,
  SERVER_PORT : process.env.PORT || 3333
}