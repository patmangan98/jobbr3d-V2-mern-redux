import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import AuthPage from '../AuthPage/AuthPage';
import PrintPage from '../PrintsPage/PrintsPage';
import CustomerPage from '../CustomerPage/CustomerPage';
import NavBar from '../components/NavBar/NavBar';
import './App.css';

import { getUser } from '../../utilities/users-service'

export default function App() {
  const [user, setUser] = useState(getUser())

 return (
		<main className='App'>
			{user ? (
				<>
					<NavBar user={user} setUser={setUser}/>
					<Routes>
						<Route path='/prints' element={<PrintPage />} />
						<Route path='/customers' element={<CustomerPage user={user}/>} />
						<Route path='' element={<Navigate to ="/customers" />}/>
					</Routes>
				</>
			) : (
				<AuthPage setUser={setUser} />
			)}
		</main>
	)
}
