const {model,Schema, default: mongoose} = require('mongoose')

const taskSchema = new Schema({
    userName:{
        type:String,
        required:true
    },
    taskName:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        required:true
    }
},{timestamps:true})

const taskM = mongoose.model("task", taskSchema)

module.exports = taskM