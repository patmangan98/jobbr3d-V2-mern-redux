import { useState } from "react"


export default function PrintCard({print, index}) {

    const [showCustomer, setShowCustomer] = useState()

    return (
        <>
        <p>{print.description}</p>
        <p>{print.isDone}</p>
        <p>{print.weight}</p>
        <p>{print.hoursToPrint}</p>
        </>
    )
}