import { checkToken } from '../../utilities/users-service'

export default function OrderHistoryPage() {

    async function handleCheckToken() {
        checkToken()
            .then(alert)
    }

    return (
        <>
            <h2>OrderHistoryPage</h2>
            <button onClick={handleCheckToken}>Check When My Login Expires</button>
        </>
        )
}