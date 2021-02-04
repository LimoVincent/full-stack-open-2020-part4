const blogRouter = require('express').Router()
const Blog = require('../models/blog')

//getall
blogRouter.get('/', (req, res) => {
  Blog.find({}).then((blog) => {
    res.json(blog)
  })
  // .catch((error) => next(error))
})

// getOne
blogRouter.get('/:id', (req, res, next) => {
  Blog.findById(req.params.id)
    .then((blog) => {
      if (blog) {
        res.json(blog)
      } else {
        res.statusCode(404).end()
      }
    })
    .catch((error) => next(error))
})

// post
blogRouter.post('/', (req, res, next) => {
  const blog = new Blog(req.body)
  blog
    .save()
    .then((result) => {
      res.status(201).json(result)
    })
    .catch((error) => next(error))
})

// put
blogRouter.put('/:id', (req, res, next) => {
  const blog = req.body
  Blog.findByIdAndUpdate(req.params.id, blog, { new: true })
    .then((updatedblog) => {
      res.json(updatedblog)
    })
    .catch((error) => next(error))
})

// delete

module.exports = blogRouter
