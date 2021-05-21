const express = require("express")

const ProductController = require("./controllers/ProductController")
const UserController = require("./controllers/UserConstroller")

const productRoutes = express.Router()
const userRoutes = express.Router()

productRoutes
  .post('/product', ProductController.add)
  .put('/product', ProductController.updateProduct)
  .post('/product/:id/like', ProductController.likeById)
  .get('/product', ProductController.findAll)
  .get('/product/:id', ProductController.findById)
  .delete('/product/:id', ProductController.deleteById)
  .delete('/product', ProductController.deleteAll)

userRoutes
  .post('/user', UserController.add)
  .put('/user', UserController.updateUser)
  .get('/user', UserController.findAll)
  .get('/user/login', UserController.findByUserPassword)

module.exports = [productRoutes, userRoutes]