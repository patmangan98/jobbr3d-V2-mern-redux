const Customer = require("../../models/post")


//make a new customer 
function createCustomer(req, res, next){
    const user = req.user._id
    const customer = req.body.customer 
    customer.owner = user._id 
    Customer.create(customer)
        .then((customer) => {
            res.status(201).json({customer :customer})
        })
        .catch(next)
}

//index the user's customers 
function indexCustomers(req, res, next){
    const user = req.user._id
    Customer.find({"owner": user})
        .then((customers) => {
            return customers.map((customer) => customer)
        })
    .then((customers) => res.status(200).json({ customers : customers }))
    .catch(next)
}