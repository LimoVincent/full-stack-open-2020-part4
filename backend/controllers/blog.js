const blogRouter = require('express').Router()
const Blog = require('../models/blog')

//getall
blogRouter.get('/', async (req, res) => {
  const blog = await Blog.find({})
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
  const blog = new Blog(req.body)
  const savedBlog = await blog.save()
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
  await Blog.findByIdAndRemove(req.params.id)
  res.status(204).end()
})

module.exports = blogRouter
