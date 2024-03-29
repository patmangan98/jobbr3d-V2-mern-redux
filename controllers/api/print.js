const customer = require('../../models/customer')
const Customer = require('../../models/customer')
const Print = require('../../models/print')
//create a print 
// function createPrint(req, res, next) {
function createPrint(req, res, next) {
   
    const printData = req.body
    console.log(printData)
    const customerId = req.params.customerId
    console.log(customerId)
    Customer.findById(customerId)
        .then((customer) => {
            customer.prints.push(printData)
            return customer.save()
        })
        .then((customer) => res.status(204).json({ customer: customer }))
        .catch(next)
}


// index all prints 
function indexAllPrints(req, res, next) {
    //find the customers 
  
    let printsArr = []
    Customer.find({})
        .then((customers) => {
            customers.forEach((customer) => {
                
                customer.prints.forEach((print) => {
                    let printObj = {
                        "customerName" : customer.firstName + " " + customer.lastName,
                        "uniqueKey": print._id,
                        "print" : print
                    }
                    printsArr.push(printObj)
                })
            })
        })
        .then((prints) => {
            return printsArr.map((print) => print)
        })
        .then((prints) => {
            res.status(200).json({ prints: prints })
        })
        .catch(next)
}

module.exports = {
    createPrint,
    indexAllPrints,
}