const { Schema, model } = require("mongoose")

const ProductSchema = new Schema({

  idReference: {
    type: Number,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  value: {
    type: Number,
    required: true,
  },

  url: {
    type: String,
    required: true,
  },

  likes: {
    type: Number,
    required: true,
  },

}, {
    timestamps: true,
  })

module.exports = model('Product', ProductSchema)