const { Schema, model } = require("mongoose")

const UserSchema = new Schema({

  name: {
    type: String,
    required: true,
  },

  user: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  phone: {
    type: Number,
    required: true,
  },
}, {
    timestamps: true,
  })

module.exports = model('User', UserSchema)