const express = require('express')
const {dataInDatabase,gettingAllData,deleteAllData} = require('../controllers/taskC')

const router = express.Router()

router.post("/",dataInDatabase)
router.get("/",gettingAllData)
router.delete("/:id",deleteAllData)
module.exports = router