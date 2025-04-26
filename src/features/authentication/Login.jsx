import {  useNavigate } from "react-router-dom"
import Logo from "../../components/Logo"
import Button from "../../components/Button"


export default function Login() {
	const navigate=useNavigate()
	function handleLogin(e) {
		e.preventDefault()
		navigate("/dashboard")
		//code for logging in and redirect to dashboard 
	}
	//write some message for unsuccessful logging



	return (
		<div className='h-dvh bg-black px-3'>
			<Logo />
			<form className='flex flex-col text-center mt-10'>
				<label className='text-blue-200 my-3'>
					email<br></br>
					<input
						className='bg-black border border-blue-200 mt-3 h-10 w-72'
						type='text'
					/>
				</label>
				<label className='text-blue-200 my-3'>
					password<br></br>
					<input
						className='bg-black border border-blue-200 mt-3 h-10 w-72'
						type='text'
					/>
				</label>
			</form>
			<div className="flex justify-center mt-10">
				<Button
					onClick={handleLogin}
					style={{ backgroundColor: "#88FFB6", width: "130px", height: "40px",fontFamily:"kanit" }}
				>
					Login
				</Button>
			</div>
			<p onClick={()=>navigate("/register")} className="text-blue-300 text-sm text-center mt-2 hover:underline cursor-pointer">Create new account</p>
		</div>
	)
}
