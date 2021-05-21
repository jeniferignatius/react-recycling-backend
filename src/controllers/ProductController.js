const Product = require("../models/Product")

module.exports = {

  async add(request, response) {

    const { idReference, name, description, value, url } = request.body

    const existProduct = await Product.findOne({ idReference: idReference }, (error) => {
      if (error) {
        return response.json(error)
      }
    })

    if (existProduct) {
      return response.json({ error: `Product exist: ${idReference}` })
    }

    await Product.create({
      idReference: idReference,
      name: name,
      description: description,
      value: value,
      url: url,
      likes: 0
    }, (error, result) => {
      if (error) {
        return response.json(error)
      }
      return response.json(result)
    })
  },

  async updateProduct(request, response) {

    const { _id, idReference, name, description, value, url } = request.body

    const productUpdate = await Product.findById(_id, (error) => {
      if (error) {
        return response.json(error)
      }
    })

    if (!(productUpdate.idReference === idReference)) {
      const existProduct = await Product.findOne({ idReference: idReference }, (error) => {
        if (error) {
          return response.json(error)
        }
      })

      if (existProduct) {
        return response.json({ error: `Product exist: ${idReference}` })
      }
    }

    productUpdate.idReference = idReference
    productUpdate.name = name
    productUpdate.description = description
    productUpdate.value = value
    productUpdate.url = url

    productUpdate.save((error) => {
      return response.json(error)
    })

    return response.json(productUpdate)

  },

  async findById(request, response) {
    await Product.findById(request.params.id, (error, result) => {
      if (error) {
        return response.json(error)
      }
      return response.json(result)
    })
  },

  async likeById(request, response) {

    const selectProduct = await Product.findById(request.params.id, (error) => {
      if (error) {
        return response.json(error)
      }
    })

    selectProduct.likes++

    await selectProduct.save((error, result) => {
      if (error) {
        return response.json(error)
      }
      return response.json(result)
    })
  },

  async findAll(request, response) {
    await Product.find((error, result) => {
      if (error) {
        return response.json(error)
      }
      return response.json(result)
    })
  },

  async deleteById(request, response) {
    await Product.deleteOne({ _id: request.params.id }, (error, result) => {
      if (error) {
        return response.json(error)
      }
      return response.json(result)
    })
  },

  async deleteAll(request, response) {
    await Product.deleteMany((error, result) => {
      if (error) {
        return response.json(error)
      }
      return response.json(result)
    })
  }
}