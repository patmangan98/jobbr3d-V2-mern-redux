import { indexCustomers } from "../../utilities/customer-api";
import PrintCard from "../components/Prints/PrintCard";
import { useEffect, useState } from "react";


export default function PrintPage() {

	const [printArr, setPrintArr] = useState([])

	useEffect(() => {
		indexCustomers()
		.then((res) => res.json())
		.then((resData) => setPrintArr(resData.customers))
	}, [])

	let isolatedPrints = []




	return(
		<>
		<h2>Prints Page</h2>
		<PrintCard/>
		</>
	) 
}
