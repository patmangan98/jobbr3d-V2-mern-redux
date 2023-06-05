import { useState, useEffect } from "react"
import { indexCustomers } from "../../../utilities/customer-api"


export default function CreatePrintForm() {

    const [options, SetOptions] = useState([])

    useEffect(() => {
        indexCustomers()
            .then((res) => res.json())
            .then((resData) => SetOptions(resData.customers))
    }, [])



    const optionsMap = options.map((customer) => (
        <option
            value={customer._id}
            key={customer._id}>
            {customer.firstName} {customer.lastName}
        </option>

    ))


    return (



        <>



            <form>
                <select>
                    {optionsMap}
                </select>
                <input
                    type="text"
                    name="description"
                    placeholder="Customer First Name"
                // value={customer.firstName}
                // onChange={handleChange}
                />
                <label>Description</label>

                <input
                    type="text"
                    name="hoursToPrint"
                    placeholder="Customer Last Name"
                // value={customer.lastName}
                // onChange={handleChange}
                />
                <label>Hours to Print</label>

                <input
                    type="text"
                    name="isDone"
                    placeholder="Customer Contact Information"
                // value={customer.contact}
                // onChange={handleChange}
                />
                <label>Is it completed?</label>

                <input
                    type="text"
                    name="weight"
                    placeholder="Notes About Customer Job"
                // value={customer.description}
                // onChange={handleChange}
                />
                <label>Weight</label>

                <button
                    type="submit"
                // onClick = {handleSubmit}

                >Add Print</button>
            </form>


        </>

    )
}