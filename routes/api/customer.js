const express = require("express")
const router = express.Router()
const customerCtrl = require("../../controllers/api/customer")

router.post("/new", customerCtrl.createCustomer)
router.get("/all", customerCtrl.indexCustomers)

module.exports = router