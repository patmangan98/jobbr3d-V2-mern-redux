import { useState } from "react"
import { indexCustomers, createCustomer } from "../../../utilities/customer-api"

export default function CreateCustomerForm ({ setCustomerArr, user }) {
    // console.log(user._id)
    
    const [customer, setCustomer] = useState({
        // _id : `${customer._id}`,
        firstName: "",
        lastName: "",
        contact: "",
        description: "",
        owner: `${user._id}`,
    })

    function handleChange(event) {
        setCustomer({
            ...customer,
            [event.target.name]: event.target.value,
        })
        
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const formData = { ...customer }
            await createCustomer(formData)
                .then(() => {
                    return indexCustomers()
                })
                .then((res) => res.json())
                .then((resData) => setCustomerArr(resData.customers))
            
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
       <div className="form-container">
       <form>

       <input
            type="text"
            name="firstName"
            placeholder="Customer First Name"
            value={customer.firstName}
            onChange={handleChange}
        />
        <label>First Name</label>

        <input
            type="text"
            name="lastName"
            placeholder="Customer Last Name"
            value={customer.lastName}
            onChange={handleChange}
        />
        <label>Last Name</label>

        <input
            type="text"
            name="contact"
            placeholder="Customer Contact Information"
            value={customer.contact}
            onChange={handleChange}
        />
        <label>Contact</label>

        <input
            type="text"
            name="description"
            placeholder="Notes About Customer Job"
            value={customer.description}
            onChange={handleChange}
        />
        <label>Notes</label>
        
        <button
            type="submit"
            onClick = {handleSubmit}
        
        >Add Customer</button>
       </form>
       </div>
        </>
    )
}