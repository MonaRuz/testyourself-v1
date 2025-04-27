import { useNavigate } from "react-router-dom"
import Logo from "../../components/Logo"
import Button from "../../components/Button"
import { useForm } from "react-hook-form"

export default function Login() {
	const navigate = useNavigate()
	const {register,handleSubmit,formState,reset}=useForm()
	function handleLogin(e) {
		e.preventDefault()
		navigate("/dashboard")
	}

	return (
		<div className='h-dvh bg-black px-3'>
			<Logo />
			<form className='flex flex-col text-center mt-10'>
				<label className='text-blue-200 my-3'>
					email<br></br>
					<input
					id="email"
						className='bg-black border border-blue-200 mt-3 h-10 w-72'
						type='email'
						{...register("email",{required:"This field must be filled!"})}
					/>
				</label>
				<label className='text-blue-200 my-3'>
					password<br></br>
					<input
					id="password"
						className='bg-black border border-blue-200 mt-3 h-10 w-72'
						type='password'
						{...register("password",{required:"This field must be filled!"})}
					/>
				</label>
				<label className='hidden'>
					password<br></br>
					<input
					id="age"
						className='bg-black border border-blue-200 mt-3 h-10 w-72'
						type='text'
						{...register("age",{required:"This field must be filled!"})}
					/>
				</label>
			</form>
			<div className='flex justify-center mt-10'>
				<Button
					onClick={handleLogin}
					style={{
						backgroundColor: "#88FFB6",
						width: "130px",
						height: "40px",
						fontFamily: "kanit",
					}}
				>
					Login
				</Button>
			</div>
			<p
				onClick={() => navigate("/register")}
				className='text-blue-300 text-sm text-center mt-2 hover:underline cursor-pointer'
			>
				Create new account
			</p>
		</div>
	)
}
