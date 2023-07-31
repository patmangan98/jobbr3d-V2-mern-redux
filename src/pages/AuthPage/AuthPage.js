import SignUpForm from "../components/SignUpForm/SignUpForm";
import LoginForm from '../components/LoginForm/LoginForm'
import {useState} from 'react'

export default function AuthPage({ setUser }) {

const [toggleForms, setToggleForms] = useState(true)

let buttonText = 'Login'
let userMsg = "Log-in to Jobbr3d"

function changeButtonText (arg) {
	if (arg === false) {
		buttonText = "Sign-Up"
		userMsg = "Log-in to Jobbr3d"
	}

	if (arg === true) {
		buttonText = "Login"
		userMsg = "Sign-up for Jobber3d"
	}
}


function toggleVisible () {
	setToggleForms(!toggleForms)
}

changeButtonText(toggleForms)
// let btnText = "Sign-Up"

// function changeButtonText () {
// 	if (buttonText === false) {
// 		btnText = "Login"
// 	}

// 	if (buttonText = true) {
// 		btnText = "Sign-up"
// 	}
// }
// changeButtonText()

console.log(toggleForms)

	return (


		<>
			<h2>{userMsg}</h2>
		

			{toggleForms ? <SignUpForm setUser={setUser}/> : <LoginForm setUser={setUser}/>}

			<p>Or</p>
			<button onClick={toggleVisible} className="btn-primary">{buttonText}</button>
            {/* <SignUpForm setUser={setUser} />
			<LoginForm setUser={setUser} /> */}
		</>
	)
}
