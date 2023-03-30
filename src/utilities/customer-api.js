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