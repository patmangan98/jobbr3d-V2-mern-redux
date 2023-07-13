import { useState } from "react"



export default function PrintCard({customerName}) {
   
    // const [showCustomer, setShowCustomer] = useState()
    return (
        <div className="print-container">
        <h3>{customerName.customerName}</h3> 

        <p>Description: {customerName.print.description}</p>
        <p>Weight: {customerName.print.weight} grams</p>
        <p>{customerName.print.hoursToPrint} hours</p>
        <p>Completed: {customerName.print.isDone.toString()}</p>
     
        
        </div>
    )
}