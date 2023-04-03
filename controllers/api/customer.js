const Customer = require("../../models/customer")


//make a new customer 
function createCustomer(req, res, next){
    const user = req.user._id
    // console.log(user)
    const customer = req.body
    // console.log(customer)
    customer.owner = user
    // console.log(customer.owner)
    Customer.create(customer)
        .then((customer) => {
            res.status(201).json({customer :customer})
        })
        .catch(next)
}

//index the user's customers 
// function indexCustomers(req, res, next){
//     const user = req.user._id
//     console.log(user)
//     Customer.find({"owner": user})
//         .then((customers) => {
//             return customers.map((customer) => customer)
//         })
//     .then((customers) => res.status(200).json({ customers : customers }))
//     .catch(next)
// }

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

module.exports = {
    createCustomer,
    indexCustomers
}