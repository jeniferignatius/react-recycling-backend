const mongoose = require("mongoose")
const express = require("express")
const routes = require("./routes")
const multer = require("multer")
const cors = require("cors")

//define storage for the images

const storage = multer.diskStorage({
  //destination for files
  destination: function (request, file, callback) {
    callback(null, './assert');
  },

  //add back the extension
  filename: function (request, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

//upload parameters for multer
const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 1024 * 1024 * 3,
  },
});

const DataBaseConstants = require("./configurations/constants/DataBaseContants")

const server = express()

mongoose.connect(DataBaseConstants.MONGOOSE_CONNECTION, { useNewUrlParser: true })

server.use(cors())
server.use(express.json())

server.use((request, response, next) => {
  if (process.env.PORT) {
    if (request.path === "/product" && request.method === "GET") {
      next()
    } else {
      response.json({ status: "No authorization is granted." })
    }
  } else {
    next()
  }
})

server.use(routes)

server.listen(DataBaseConstants.SERVER_PORT, () => {
  console.log(`Server started on Port ${DataBaseConstants.SERVER_PORT}`)
})