const express = require("express")
const router = express.Router()
const printCtrl = require("../../controllers/api/print.js")


router.get('/all', printCtrl.indexAllPrints)
router.post('/new/:customerId', printCtrl.createPrint)


module.exports = router 


