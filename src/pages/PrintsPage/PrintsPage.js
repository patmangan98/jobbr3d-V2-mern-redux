// import { indexCustomers } from "../../utilities/customer-api";
import { indexAllPrints } from "../../utilities/print-api";
import PrintCard from "../components/Prints/PrintCard";
import { useEffect, useState } from "react";
import { indexCustomers } from "../../utilities/customer-api";
import CreatePrintForm from "../components/Prints/CreatePrintForm";


export default function PrintPage() {

	const [customerNames, setCustomerNames] = useState([])

	const [printArr, setPrintsArr] = useState([])

	useEffect(() => {
		indexAllPrints()
		.then((res) => res.json())
		.then((resData) => setPrintsArr(resData.prints))
	}, []) 

console.log(printArr)




	// let printArr = []

	// custPrints.forEach((customer) => {
	// 	// console.log(customer.prints)
	// 	customer.prints.forEach((print) => {
	// 		printArr.push(print)
	// 		// console.log()
	// 	})
	// })


	// console.log(printArr)

	const printMap = printArr.map((customerName) => (
	<PrintCard
		key ={customerName.uniqueKey}
		customerName = {customerName}
	/>))

	return(
		<>
		<CreatePrintForm/>
		<h2>Prints Page</h2>
		{printMap}
		</>
	) 
}
