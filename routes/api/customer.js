const express = require("express")
const router = express.Router()
const customerCtrl = require("../../controllers/api/customer")

router.post("/new", customerCtrl.createCustomer)
router.get("/all", customerCtrl.indexCustomers)
router.get("/:printId", customerCtrl.showCustomer)
router.delete("/:id", customerCtrl.deleteCustomer)
router.patch("/:id", customerCtrl.updateCustomer)

module.exports = router