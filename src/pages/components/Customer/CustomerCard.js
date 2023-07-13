import { deleteCustomer, indexCustomers, updateOneCustomer } from "../../../utilities/customer-api"
import { useState } from "react"
import UpdateCustomerForm from "./UpdateCustomerForm"

export default function CustomerCard({ customer, index, setCustomerArr }) {

    console.log(customer.prints)
    // console.log(customer.owner)

    const [showCustomerDetails, setDetailVisiblity] = useState(false)

    //this just changes the text inside the show detail button 
    const [btnText, setBtnText] = useState(true)

    let detailBtnText = "Show Details"

    function changeShowDetailsText() {
        if (btnText === true) {
            detailBtnText = "Show Details"
        }
        if (btnText === false) {
            detailBtnText = "Close"
        }
    }
    changeShowDetailsText()


    const [updateCustomer, setUpdateCustomer] = useState({
        // _id: `${customer._id}`,
        firstName: `${customer.firstName}`,
        lastName: `${customer.lastName}`,
        contact: `${customer.contact}`,
        description: `${customer.description}`,
    })

    console.log(customer._id)

    function toggleCustomerDetails() {
        setDetailVisiblity(!showCustomerDetails)
        setBtnText(!btnText)
    }



    function handleChange(event) {
        setUpdateCustomer({
            ...updateCustomer,
            // _id : `${customer._id}`,
            [event.target.name]: event.target.value,
        })
    }


    async function handleUpdateCustomer(event) {
        event.preventDefault()
        try {
            // const custId = customer.owner._id 
            // console.log(custId)
            const formData = { ...updateCustomer }
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
            <h3>{customer.firstName}  {customer.lastName}</h3>

            <button
                onClick={toggleCustomerDetails}
                className="btn-primary"
            >{detailBtnText}</button>

            {showCustomerDetails && (
                <>
                    <h4>Contact:</h4>
                    <p>{customer.contact}</p>
                    <h4>Customer Job Description:</h4>
                    <p>{customer.description}</p>
                    <h4>Prints Available:</h4>
                    <p>{customer.prints.length} Prints</p>

                    <button
                        onClick={handleDeleteCustomer}
                        className="btn-danger"
                    >Delete Customer
                    </button>


                    <UpdateCustomerForm
                        customer={customer}
                        setCustomerArr={setCustomerArr}
                    />
                </>
            )}
        </>
    )
} 