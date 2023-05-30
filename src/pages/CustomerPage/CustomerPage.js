import { useEffect, useState } from "react";
import { indexCustomers } from "../../utilities/customer-api";

import CreateCustomerForm from "../components/Customer/CreateCust";
import CustomerCard from "../components/Customer/CustomerCard";



export default function CustomerPage({user}) {
// console.log(user)
const [customerArr, setCustomerArr] = useState([])


useEffect(() => {
    indexCustomers()
        .then(res => res.json())
        .then(resData => setCustomerArr(resData.customers) )
}, [])

console.log(customerArr)

const customerMap = customerArr.map((customer, index) =>(
    <CustomerCard 
        customer={customer}
        key ={index}
        setCustomerArr = {setCustomerArr}
    />))


    return (
        <>
            <h2>Customer Page</h2>
            <CreateCustomerForm  user={user} setCustomerArr ={setCustomerArr}/>
            {customerMap}
        </>
        )
}