const mongoose = require('mongoose')

let commentSchema = new mongoose.Schema({
    author: { type: String, default: 'Anonymous' },
    rant: { type: Boolean, default: false },
    rating: { type: Number, required: true },
    content: { type: String, default: '' }
})

module.exports = mongoose.model('Comment', commentSchema)