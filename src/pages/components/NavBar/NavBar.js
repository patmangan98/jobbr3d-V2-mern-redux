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
		<div className="navbar">
			<nav>
		
				<ul>
				
					<li>
					
					</li>
					<li>
						<Link to='/prints'>Prints</Link>
						{/* &nbsp; | &nbsp; */}
					</li>
					<li>
						<Link to='/customers'>Customers</Link>
						{/* &nbsp;| &nbsp; */}
					</li>
					<li>
						<Link to="" onClick={handleLogOut}>Log Out</Link>
					</li>
				</ul>
			</nav>
		</div>
			<span>Welcome, {user.name}</span>
		</>
	)
}
