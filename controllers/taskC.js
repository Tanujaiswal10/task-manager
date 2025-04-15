const task = require('../modals/task')

async function dataInDatabase(req,res)
{
    const body = req.body;

    if(!body)
        {
        console.log("please enter the task")
        return res.status(404).json({error:"please enter some value"});
        }
    console.log(body)
     await task.create({
        userName: body.userName,
        taskName:body.taskName,
        priority:body.priority
    })

    const allData = await task.find({})
    return res.render("home",{tasks:allData, showtask:true})
}

async function gettingAllData(req,res)
{
    const find = await task.find({});
    return res.json(find)
}

async function deleteAllData(req,res)
{
    const del = await task.findOneAndDelete({})
    return res.send("its deleted")
}

module.exports = {dataInDatabase,gettingAllData,deleteAllData}