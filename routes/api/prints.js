const express = require("express")
const router = express.Router()
const printCtrl = require("../../controllers/api/print.js")



router.post('/new', printCtrl.createPrint)


module.exports = router 


