const express = require("express");
const app = express();
const taskRoute = require('./router/routes')
const mongoose = require('mongoose')
const path = require('path')

mongoose.connect('mongodb://127.0.0.1:27017/TaskManager').then(()=>{
    console.log("Database connected")
}).catch((err)=>{
    console.log(err)
})

const Port = 3040;

app.get("/",(req,res)=>{
    return res.render("home", { tasks: [], showtask:false})
})

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use('/api/v1/tasks',taskRoute)
app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

app.listen(Port,console.log(`server is running at this ${Port}`));
