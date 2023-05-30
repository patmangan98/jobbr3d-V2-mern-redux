import { getToken } from "./users-service"

const BASE_URL = "http://localhost:3001"

export function indexAllPrints () {
    const token = getToken()
    return fetch(`${BASE_URL}/api/prints/all`, {
        method : "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export function createPrint (data) {
    const token = getToken()
    return fetch(`${BASE_URL}/api/prints/new`,  {
        methon: "POST",
        headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data)
    })
}