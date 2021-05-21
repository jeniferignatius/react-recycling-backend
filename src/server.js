const mongoose = require("mongoose")
const express = require("express")
const routes = require("./routes")
const cors = require("cors")

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
      response.json({ status: "Não ta autorizado meu parça." })
    }
  } else {
    next()
  }
})

server.use(routes)

server.listen(DataBaseConstants.SERVER_PORT, () => {
  console.log(`Server started on Port ${DataBaseConstants.SERVER_PORT}`)
})