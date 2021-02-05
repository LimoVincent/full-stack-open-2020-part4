var _ = require('lodash')
const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  let sum = 0
  blogs.map(({ likes }) => {
    sum = sum + likes
  })
  return blogs.length === 0 ? 0 : sum
}

const favoriteBlog = (blogs) => {
  if (blogs.length > 0) {
    blogs.sort((a, b) => b.likes - a.likes)
    const x = {
      title: blogs[0].title,
      author: blogs[0].author,
      likes: blogs[0].likes,
    }
    return x
  } else return 0
}

const mostBlogs = (blogs) => {
  if (blogs.length > 0) {
    const partitioned = _(blogs).groupBy('author').values().value()
    const sorted = _.sortBy(partitioned, (o) => o.length)
    const x = {
      author: sorted[sorted.length - 1][0].author,
      blogs: sorted[sorted.length - 1].length,
    }
    return x
  } else return 0
}

module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs }
