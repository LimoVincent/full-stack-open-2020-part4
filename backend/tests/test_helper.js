const Blog = require('../models/blog')

const innitialBlogs = [
  {
    author: 'Vincent Limo',
    url: 'https://github.com/LimoVincent',
    likes: 1,
    date: '2021-02-04T05:34:15.259Z',
    id: '601b887100b9b411d0de93bd',
    title: 'Post 1',
    v: 0,
  },
  {
    author: 'Vincent',
    url: 'https://github.com/LimoVincent',
    likes: 2,
    date: '2021-02-04T05:34:15.259Z',
    id: '601b884900b9b411d0de93b7',
    title: 'Post 2',
    v: 0,
  },
  {
    author: 'Vincent',
    url: 'https://github.com/LimoVincent',
    likes: 3,
    date: '2021-02-04T05:34:15.259Z',
    id: '601b885900b9b411d0de93b8',
    title: 'Post 3',
    v: 0,
  },
  {
    author: 'Vincent Limo',
    url: 'https://github.com/LimoVincent',
    likes: 4,
    date: '2021-02-04T05:34:15.259Z',
    id: '601b885f00b9b411d0de93b9',
    title: 'Post 4',
    v: 0,
  },
]

const blogInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map((blog) => blog.toJSON())
}

module.exports = { innitialBlogs, blogInDb }
