const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const helper = require('./test_helper')

const User = require('../models/user')

beforeEach(async () => {
  await User.deleteMany({})

  for (let user of helper.innitialUsers) {
    let users = new User(user)
    await users.save()
  }
})

describe('HTTP GET requests to /api/users', () => {
  test('users are returned as json', async () => {
    await api
      .get('/api/users')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('there are four users', async () => {
    const res = await api.get('/api/users')
    expect(res.body).toHaveLength(helper.innitialUsers.length)
  })
})

afterAll(() => {
  mongoose.connection.close()
})
