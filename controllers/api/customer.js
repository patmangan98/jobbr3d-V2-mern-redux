const Customer = require("../../models/customer")


//make a new customer 
function createCustomer(req, res, next){
    const user = req.user._id
    console.log(user)
    const customer = req.body
    console.log(customer)
    customer.owner = user
    // console.log(customer.owner)
    Customer.create(customer)
        .then((customer) => {
            res.status(201).json({customer :customer})
        })
        .catch(next)
}

//index all customers that belong to the user 
function indexCustomers (req, res, next) {
    Customer.find({})
        .populate("owner")
        .then((customers) => {
            return customers.map((customer) => customer)
        })
        .then((customers) => {
            res.status(200).json({ customers : customers })
        })
        .catch(next)
}


//delete customer 
function deleteCustomer(req, res, next) {
    Customer.findById(req.params.id)
        .then((customer) => {
            customer.deleteOne()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
}

//update customer 

function updateCustomer(req, res, next) {
    Customer.findById(req.params.id)
        .then((customer) => {
            return customer.updateOne(req.body.customer)
        })
        .then(() => res.sendStatus(204))
        .catch(next)
}

module.exports = {
    createCustomer,
    indexCustomers,
    deleteCustomer, 
    updateCustomer,
}