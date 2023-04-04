import { getToken } from "./users-service"

const BASE_URL = "http://localhost:3001"


export function indexCustomers() {
    const token = getToken()
    return fetch(`${BASE_URL}/api/customers/all`, {
        method : "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export function createCustomer (data) {
    const token = getToken()
    return fetch(`${BASE_URL}/api/customers/new`, {
        method: "POST",
        headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data)
    })
}

export function deleteCustomer (customerId) {
    const token = getToken() 
    return fetch(`${BASE_URL}/api/customers/${customerId}`, {
        method : "DELETE", 
        headers : {
            Authorization: `Bearer ${token}`
        },
    })
}

export function updateOneCustomer (data, customerId) {
    const token = getToken() 
    return fetch(`${BASE_URL}/api/customers/${customerId}`, {
        method : "PATCH", 
        headers : {
            Accept: "application/json",
			"Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data),
    })

}