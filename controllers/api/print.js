const Customer = require('../../models/customer')
const Print = require('../../models/print')
//create a print 
function createPrint (req, res, next) {
    const customerId = req.body.print.customerId
    const print = req.body.print 
    Customer.findById(customerId)
        .then((customer) => {
            customer.prints.push(print)
            return customer.save()
        })
    .then((customer) => res.status(204).json({customer: customer}))
    .catch(next)
}

//index all prints 

function indexAllPrints (req, res, next) {
    
}

module.exports = {
    createPrint
}