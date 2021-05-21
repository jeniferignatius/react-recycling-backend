const User = require('../models/User')

module.exports = {

  async add(request, response) {

    const { name, user, password, email, phone } = request.body

    const existUser = await User.findOne({ user: user }, (error, result) => {
      if (error) {
        return response.json(error)
      }
    })

    if (existUser) {
      return response.json({ menssage: 'Usuario informado já esta sendo utilizado.' })
    }

    await User.create({
      name,
      user,
      password,
      email,
      phone
    }, (error, result) => {
      if (error) {
        return response.json(error)
      }
      return response.json(result)
    })
  },

  async updateUser(request, response) {
    const { _id, name, user, password, email, phone } = request.body

    const updateUser = await User.findById(_id, (error) => {
      if (error) {
        return response.json(error)
      }
    })

    if (!(updateUser.user === user)) {
      const existUser = await User.findOne({ user: user }, (error, result) => {
        if (error) {
          return response.json(error)
        }
      })

      if (existUser) {
        return response.json({ menssage: 'Usuario informado já esta sendo utilizado.' })
      }
    }

    updateUser.name = name
    updateUser.user = user
    updateUser.password = password
    updateUser.emit = email
    updateUser.phone = phone

    updateUser.save((error) => {
      if (error) {
        return response.json(error)
      }
    })

    return response.json(updateUser)
  },

  async findAll(request, response) {
    await User.find((error, result) => {
      if (error) {
        return response.json(error)
      }
      return response.json(result)
    })
  },

  async findByUserPassword(request, response) {

    const { user, password } = request.headers

    returnUser = await User.findOne({ user: user, password: password }, (error, result) => {
      if (error) {
        return response.json(error)
      }
      return response.json(result)
    })
  }
}