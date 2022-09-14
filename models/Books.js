const mongoose = require('mongoose')

const BookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author:{
        type:String,
        required: true
    },
    isbn:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    publisher:{
        type:String,
    },
    published_Date:{
        type:Date
    },
    updatedDate:{
        type:Date,
        default: Date.now
    }
})

module.exports = Books = mongoose.model('book')

