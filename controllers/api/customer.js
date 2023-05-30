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
    const user = req.user._id
    Customer.find({"owner" : user})
        // .populate("owner")
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
    // console.log(req.params.id)
    console.log(req.body)
    Customer.findById(req.params.id)
        .then((customer) => {
            console.log(customer)
            return customer.updateOne(req.body)
        })
        .then(() => res.sendStatus(204))
        .catch(next)
}


function showCustomer (req, res, next) {
    const printId = req.params.id
    Customer.findById(printId)
        .then((customer) => {
            return console.log(customer)
        })
        .then((customer) => {
            return res.status(204).json({ customer : customer})
        })
        .catch(next)
} 

module.exports = {
    createCustomer,
    indexCustomers,
    deleteCustomer, 
    updateCustomer,
    showCustomer,
}