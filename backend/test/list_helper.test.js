const listHelper = require('../utils/list_helper')

const manyBlogs = [
  {
    author: 'Vincent Limo',
    url: 'https://github.com/LimoVincent',
    likes: 1,
    date: '2021-02-04T05:34:15.259Z',
    _id: '601b887100b9b411d0de93bd',
    title: 'Post 7',
    __v: 0,
  },
  {
    author: 'Vincent',
    url: 'https://github.com/LimoVincent',
    likes: 2,
    date: '2021-02-04T05:34:15.259Z',
    _id: '601b884900b9b411d0de93b7',
    title: 'Post 1',
    __v: 0,
  },
  {
    author: 'Vincent',
    url: 'https://github.com/LimoVincent',
    likes: 3,
    date: '2021-02-04T05:34:15.259Z',
    _id: '601b885900b9b411d0de93b8',
    title: 'Post 2',
    __v: 0,
  },
  {
    author: 'Vincent Limo',
    url: 'https://github.com/LimoVincent',
    likes: 4,
    date: '2021-02-04T05:34:15.259Z',
    _id: '601b885f00b9b411d0de93b9',
    title: 'Post 3',
    __v: 0,
  },
  {
    author: 'Vincent Limo',
    url: 'https://github.com/LimoVincent',
    likes: 5,
    date: '2021-02-04T05:34:15.259Z',
    _id: '601b886300b9b411d0de93ba',
    title: 'Post 4',
    __v: 0,
  },
  {
    author: 'Vinc',
    url: 'https://github.com/LimoVincent',
    likes: 6,
    date: '2021-02-04T05:34:15.259Z',
    _id: '601b886700b9b411d0de93bb',
    title: 'Post 5',
    __v: 0,
  },
  {
    author: 'Vinc',
    url: 'https://github.com/LimoVincent',
    likes: 7,
    date: '2021-02-04T05:34:15.259Z',
    _id: '601b886d00b9b411d0de93bc',
    title: 'Post 6',
    __v: 0,
  },
  {
    author: 'Vincent',
    url: 'https://github.com/LimoVincent',
    likes: 8,
    date: '2021-02-04T05:34:15.259Z',
    _id: '601b887100b9b411d0de93bd',
    title: 'Post 7',
    __v: 0,
  },
  {
    author: 'Vincent',
    url: 'https://github.com/LimoVincent',
    likes: 9,
    date: '2021-02-04T05:34:15.259Z',
    _id: '601b887800b9b411d0de93be',
    title: 'Post 8',
    __v: 0,
  },
  {
    author: 'Vinc',
    url: 'https://github.com/LimoVincent',
    likes: 10,
    date: '2021-02-04T05:34:15.259Z',
    _id: '601b887800b9b411d0de93be',
    title: 'Post 8',
    __v: 0,
  },
]

const oneBlog = [
  {
    author: 'Vincent Limo',
    url: 'https://github.com/LimoVincent',
    likes: 12,
    date: '2021-02-04T05:34:15.259Z',
    _id: '601b887800b9b411d0de93be',
    title: 'Post 7',
    __v: 0,
  },
]

const zeroBlog = []

describe('Dummy test  ', () => {
  test('returns one', () => {
    const blogs = []
    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
  })
})

describe('Total post likes   ', () => {
  test('oneBlog', () => {
    const result = listHelper.totalLikes(oneBlog)
    expect(result).toBe(12)
  })

  test('zeroBlog', () => {
    const result = listHelper.totalLikes(zeroBlog)
    expect(result).toBe(0)
  })

  test('more than one blog', () => {
    const result = listHelper.totalLikes(manyBlogs)
    expect(result).toBe(55)
  })
})

describe('Fevorite blog post : ', () => {
  test('oneBlog', () => {
    const result = listHelper.favoriteBlog(oneBlog)
    expect(result).toEqual({
      title: 'Post 7',
      author: 'Vincent Limo',
      likes: 12,
    })
  })

  test('zeroBlog', () => {
    const result = listHelper.favoriteBlog(zeroBlog)
    console.log(result)
    expect(result).toBe(0)
  })

  test('more than one blog', () => {
    const result = listHelper.favoriteBlog(manyBlogs)
    expect(result).toEqual({
      title: 'Post 8',
      author: 'Vinc',
      likes: 10,
    })
  })
})

describe('Most blog post : ', () => {
  test('oneBlog', () => {
    const result = listHelper.mostBlogs(oneBlog)
    expect(result).toEqual({
      author: 'Vincent Limo',
      blogs: 1,
    })
  })

  test('zeroBlog', () => {
    const result = listHelper.mostBlogs(zeroBlog)
    expect(result).toBe(0)
  })

  test('more than one blog', () => {
    const result = listHelper.mostBlogs(manyBlogs)
    expect(result).toEqual({
      author: 'Vincent',
      blogs: 4,
    })
  })
})
