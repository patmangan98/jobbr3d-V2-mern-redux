const express = require("express")
const router = express.Router()
const customerCtrl = require("../../controllers/api/customer")

router.post("/new", customerCtrl.createCustomer)
router.get("/all", customerCtrl.indexCustomers)
router.delete("/:id", customerCtrl.deleteCustomer)

module.exports = router