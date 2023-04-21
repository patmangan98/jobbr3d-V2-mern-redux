const Customer = require('../../models/customer')


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



module.exports = {
    createPrint
}