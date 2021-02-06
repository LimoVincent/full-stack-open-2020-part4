const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true, default: 'Vincent Limo' },
  url: {
    type: String,
    required: true,
    default: 'https://github.com/LimoVincent',
  },
  likes: { type: Number, default: Math.floor(Math.random() * 100) },
  date: { type: Date, default: new Date() },
})

blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('Blog', blogSchema)
