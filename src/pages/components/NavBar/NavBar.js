import { Link } from "react-router-dom";
import * as userService from '../../../utilities/users-service'

export default function NavBar({ user, setUser }) {

	function handleLogOut() {
		// we should delgate the actual logging out to the users service
		userService.logOut()
		setUser(null)
	}

	return (
		<>
			<nav>
				<Link to='/prints'>Prints</Link>
				&nbsp; | &nbsp;
				<Link to='/customers'>Customers</Link>
				&nbsp;| &nbsp;
				<Link to="" onClick={handleLogOut}>Log Out</Link>
			</nav>
			<span>Welcome, {user.name}</span>
		</>
	)
}
