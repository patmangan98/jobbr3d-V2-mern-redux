import { useState } from "react"


export default function CreatePrintForm () {
   return (



    <>
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
   
    
    </>

   ) 
}