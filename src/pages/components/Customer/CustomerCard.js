import { deleteCustomer, indexCustomers, updateOneCustomer } from "../../../utilities/customer-api"
import { useState } from "react"

export default function CustomerCard ({customer, index, setCustomerArr}) {

    // console.log(customer.owner)

    const [updateCustomer, setUpdateCustomer] = useState({
        // _id: `${customer._id}`,
        firstName: `${customer.firstName}`,
        lastName: `${customer.lastName}`,
        contact: `${customer.contact}`,
        description: `${customer.description}`,
    })

    console.log(customer._id)

    function handleChange (event) {
        setUpdateCustomer({
            ...updateCustomer,
            // _id : `${customer._id}`,
            [event.target.name]: event.target.value,
        })
    }


    async function handleUpdateCustomer (event) {
        event.preventDefault()
        try {
            // const custId = customer.owner._id 
            // console.log(custId)
            const formData = {...updateCustomer}
            console.log(formData)
            await updateOneCustomer(formData, customer._id)

        } catch (error) {
            console.error(error)
        }
    }


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
        <h3>{customer.firstName} &nbsp; {customer.lastName}</h3>
        <p>Contact: {customer.contact}</p>
        <p>Customer Job Description: {customer.description}</p>
        <button
            onClick={handleDeleteCustomer}
        >Delete Customer</button>
        <button>Show Details</button>


        <form>
        <input
            type="text"
            name="firstName"
            defaultValue={customer.firstName}
            onChange={handleChange}
        />
        <input
            type="text"
            name="lastName"
            defaultValue={customer.lastName}
            onChange={handleChange}
        />
        <input
            type="text"
            name="contact"
            defaultValue={customer.contact}
            onChange={handleChange}
        />
        <input
            type="text"
            name="description"
            defaultValue={customer.description}
            onChange={handleChange}
        />
        <button
            onClick ={handleUpdateCustomer}
        
        >Update Customer</button>

        </form>
        </>
    )
} 