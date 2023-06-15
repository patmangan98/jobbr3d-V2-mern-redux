import { useState, useEffect } from "react"
import { indexCustomers } from "../../../utilities/customer-api"



export default function CreatePrintForm() {

    const [options, setOptions] = useState([])


    useEffect(() => {
        indexCustomers()
            .then((res) => res.json())
            .then((resData) => setOptions(resData.customers))
    }, [])


    const [selection, SetSelection] = useState('')

    const optionsMap = options.map((customer) => (
        <option
            name= {customer._id}
            value ={customer._id}
            key={customer._id}
            >
            {customer.firstName} {customer.lastName}
        </option>

    ))

    const [newPrintData, setNewPrintData] = useState({
        weight: "",
        hoursToPrint: "",
        description: "",
        isDone: "",
        customerId :`${selection}`,
    })

    function handleChange(event) {
      
        setNewPrintData({
            ...newPrintData,
            [event.target.name]: event.target.value,
            customerId:`${selection}`,    
        })
        
    }

    function handleSelectionChange (event) {
        if (event.target.value != "") {
            SetSelection(event.target.value)
        }
       
    }


     console.log(newPrintData)
     console.log(selection)
    return (

        <>
            <form>
            <label>Select Customer</label>
                <select onChange={handleSelectionChange}>
                   <option>Please select a customer</option>
                    {optionsMap}
                </select>
                <label> Weight of the part</label>
                <input
                    type="number"
                    name="weight"
                    placeholder="weight of print"
                    value={newPrintData.weight}
                    onChange={handleChange}
                />
                <label>Hours to Print</label>
                <input
                    type="number"
                    name="hoursToPrint"
                    placeholder="hours to print"
                    value={newPrintData.hoursToPrint}
                    onChange={handleChange}
                />
                <label>Description</label>
                 <input
                    type="text"
                    name="description"
                    placeholder="Notes About Customer Job"
                    value={newPrintData.description}
                    onChange={handleChange}
                />
                <label>Is it completed?</label>
                <input
                    type="text"
                    name="isDone"
                    placeholder="is customer job completed"
                    value={newPrintData.isDone}
                    onChange={handleChange}
                />
               
               
                <button
                    type="submit"
                // onClick = {handleSubmit}

                >Add Print</button>
            </form>


        </>

    )
}