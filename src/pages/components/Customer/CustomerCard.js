export default function CustomerCard ({customer, index}) {
    return (
        <>
        <h3>{customer.firstName} {customer.lastName}</h3>
        <p>Contact: {customer.contact}</p>
        <p>Customer Job Description: {customer.description}</p>
        </>
    )
}