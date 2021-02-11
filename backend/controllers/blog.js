const blogRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

//getall
blogRouter.get('/', async (req, res) => {
  const blog = await Blog.find({}).populate('user', {
    username: 1,
    name: 1,
  })
  if (blog) {
    res.json(blog)
  } else {
    res.statusCode(404).end()
  }
})

// getOne
blogRouter.get('/:id', async (req, res) => {
  const blog = await Blog.findById(req.params.id)
  if (blog) {
    res.json(blog)
  } else {
    res.statusCode(404).end()
  }
})

// post
blogRouter.post('/', async (req, res) => {
  const body = req.body
  const token = req.token
  const decodedToken = jwt.verify(token, process.env.SECRET)
  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: 'Token missing or invalidd' })
  }
  const user = await User.findById(decodedToken.id)

  const newBlog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
    user: user._id,
  })

  const savedBlog = await newBlog.save()
  user.blogs = user.blogs.concat(savedBlog._id)
  await user.save()
  res.status(201).json(savedBlog)
})

// put
blogRouter.put('/:id', async (req, res) => {
  const blog = req.body
  const updatedblog = await Blog.findByIdAndUpdate(req.params.id, blog, {
    new: true,
  })
  res.json(updatedblog)
})

// delete
blogRouter.delete('/:id', async (req, res) => {
  const token = req.token
  const decodedToken = jwt.verify(token, process.env.SECRET)
  const blog = await Blog.findById(req.params.id)
  const user = await User.findById(decodedToken.id)
  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: 'Token missing or invalidd' })
  }
  if (blog.user.toString() === user.id.toString()) {
    await Blog.findByIdAndRemove(req.params.id)
    res.status(204).end()
  } else {
    res.status(401).json({ error: 'Unauthorized' })
  }
})

module.exports = blogRouter
