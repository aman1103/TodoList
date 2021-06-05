const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    text:{
        type: String,
        required: true
    },
    dateCreated:{
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('todo',todoSchema)