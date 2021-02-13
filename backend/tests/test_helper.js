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
const innitialUsers = [
  {
    notes: [],
    username: 'Vincent1',
    name: 'Vincent1',
    id: '601fd65654b92231586be047',
  },
  {
    notes: [],
    username: 'Vincent2',
    name: 'Vincent2',
    id: '601fd68354b92231586be048',
  },
  {
    notes: [],
    username: 'Vincent3',
    name: 'Vincent3',
    id: '601fd6a354b92231586be049',
  },
  {
    notes: [],
    username: 'Vincent4',
    name: 'Vincent4',
    id: '601fd9249cc1b7119c45f7e7',
  },
]

const blogInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map((blog) => blog.toJSON())
}

const usersInDb = async () => {
  const users = await Blog.find({})
  return users.map((user) => user.toJSON())
}

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlZpbmNlbnQxIiwiaWQiOiI2MDFmZWVkMmE0MjYyZTQ1NzAwZWVmMjIiLCJpYXQiOjE2MTMwMzkyNzV9.zGzRBIy_8apJ0C0phg2hG8qNmhNNbd4oZ1QUkJTJIjE'

module.exports = { innitialBlogs, blogInDb, usersInDb, innitialUsers, token }
