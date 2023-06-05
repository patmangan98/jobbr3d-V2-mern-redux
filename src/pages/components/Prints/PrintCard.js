import { useState } from "react"



export default function PrintCard({customerName}) {
   
    // const [showCustomer, setShowCustomer] = useState()
    return (
        <div>
        <p>{customerName.customerName}</p> 

        <p>Description: {customerName.print.description}</p>
        <p>Weight: {customerName.print.weight} grams</p>
        <p>{customerName.print.hoursToPrint} hours</p>
        <p>Completed: {customerName.print.isDone.toString()}</p>
     
        
        </div>
    )
}