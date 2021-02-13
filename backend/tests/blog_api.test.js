const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const helper = require('./test_helper')

const Blog = require('../models/blog')

beforeEach(async () => {
  await Blog.deleteMany({})

  for (let blog of helper.innitialBlogs) {
    let blogs = new Blog(blog)
    await blogs.save()
  }
})
describe('HTTP GET request to the /api/blogs', () => {
  test('blogs are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('there are four blogs', async () => {
    const res = await api.get('/api/blogs')
    expect(res.body).toHaveLength(helper.innitialBlogs.length)
  })

  test('the first blog title is Post 1', async () => {
    const res = await api.get('/api/blogs')
    expect(res.body[0].title).toBe('Post 1')
  })
})

describe('Blog ID', () => {
  test('Blog unique identifier is named id', async () => {
    const blogs = await helper.blogInDb()
    const id = blogs.map((b) => b.id)
    expect(id).toBeDefined()
  })
})

describe('HTTP POST request to the /api/blogs', () => {
  test('a valid blog can be added', async () => {
    const newblog = {
      title: 'Post random',
      author: 'Vincent K',
      url: 'https://github.com/LimoVincent',
    }
    await api
      .post('/api/blogs')
      .set('Authorization', `Bearer ${helper.token}`)
      .send(newblog)
      .expect(201)
      .expect('Content-Type', /application\/json/)
    const blogsEnd = await helper.blogInDb()
    expect(blogsEnd).toHaveLength(helper.innitialBlogs.length + 1)
    const title = blogsEnd.map((b) => b.title)
    expect(title).toContain('Post random')
  })

  test('a invalid blog cannot be added- without title and url', async () => {
    const newblog = {
      author: 'vincent Limo',
      likes: 12,
    }
    await api
      .post('/api/blogs')
      .set('Authorization', `Bearer ${helper.token}`)
      .send(newblog)
      .expect(404)
    const blogsEnd = await helper.blogInDb()
    expect(blogsEnd).toHaveLength(helper.innitialBlogs.length)
  })

  test('if likes is missing its default to 0', async () => {
    const newblog = {
      title: 'Post random',
      author: 'Vincent K',
      url: 'https://github.com/LimoVincent',
    }
    await api
      .post('/api/blogs')
      .set('Authorization', `Bearer ${helper.token}`)
      .send(newblog)

    const blogsEnd = await helper.blogInDb()
    expect(blogsEnd[helper.innitialBlogs.length].likes).toBe(0)
  })
  test('adding a blog fails with 401 Unauthorized', async () => {
    const newblog = {
      title: 'Post random',
      author: 'Vincent K',
      url: 'https://github.com/LimoVincent',
    }
    await api.post('/api/blogs').send(newblog)
    const blogsEnd = await helper.blogInDb()
    expect(blogsEnd[helper.innitialBlogs.length].likes).toBe(0)
  })
})

afterAll(() => {
  mongoose.connection.close()
})
