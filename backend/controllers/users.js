const bcrypt = require('bcrypt')
const UserRouter = require('express').Router()
const User = require('../models/user')

//getall
UserRouter.get('/', async (req, res) => {
  const users = await User.find({}).populate('blogs', {
    url: 1,
    title: 1,
    author: 1,
  })
  if (users) {
    res.json(users)
  } else {
    res.statusCode(404).end()
  }
})

// getOne
UserRouter.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id)
  if (user) {
    res.json(user)
  } else {
    res.statusCode(404).end()
  }
})

// post
UserRouter.post('/', async (req, res) => {
  const body = req.body
  const password = body.password

  if (password < 3) {
    return res
      .status(400)
      .json({ Error: 'User validation failed: password very short' })
  }
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)
  const user = new User({
    username: body.username,
    name: body.name,
    passwordHash,
  })
  const savedUser = await user.save()
  res.status(201).json(savedUser)
})

// put
UserRouter.put('/:id', async (req, res) => {
  const user = req.body
  const updatedUser = await User.findByIdAndUpdate(req.params.id, user, {
    new: true,
  })
  res.json(updatedUser)
})

// delete
UserRouter.delete('/:id', async (req, res) => {
  await User.findByIdAndRemove(req.params.id)
  res.status(204).end()
})

module.exports = UserRouter
