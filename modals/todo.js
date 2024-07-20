const mongoose  = require('mongoose');

const TodoScheme = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    created_at:{
        type:Date,
        default: Date.now
    },
    updated_at:{
        type:Date,
        default: Date.now
    }
})

const Todo = mongoose.model('Todo', TodoScheme);

module.exports = Todo;