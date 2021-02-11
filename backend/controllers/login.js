const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../models/user')

// post
loginRouter.post('/', async (req, res) => {
  const body = req.body
  const user = await User.findOne({ username: body.username })
  const passwordCorrect =
    user === null
      ? false
      : await bcrypt.compare(body.password, user.passwordHash)

  if (!user) {
    return res.status(401).json({ error: 'incorrect user' })
  }

  if (!passwordCorrect) {
    return res.status(401).json({ error: 'incorrect password' })
  }

  const userFormToken = {
    username: user.username,
    id: user._id,
  }

  const token = jwt.sign(userFormToken, process.env.SECRET)
  res.status(200).send({ token, username: user.username, name: user.name })
})

module.exports = loginRouter
