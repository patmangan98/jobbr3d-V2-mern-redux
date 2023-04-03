import { deleteCustomer, indexCustomers } from "../../../utilities/customer-api"


export default function CustomerCard ({customer, index, setCustomerArr}) {

    function handleDeleteCustomer(event) {
        const id = customer._id
        // console.log(id)
        deleteCustomer(id)
            .then(() => {
                return indexCustomers()
            })
            .then((res) => res.json())
            .then((resData) => setCustomerArr(resData.customers))
    }


    return (
        <>
        <h3>{customer.firstName} {customer.lastName}</h3>
        <p>Contact: {customer.contact}</p>
        <p>Customer Job Description: {customer.description}</p>
        <button
            onClick={handleDeleteCustomer}
        >Delete Customer</button>
        </>
    )
}