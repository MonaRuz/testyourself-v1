import { useForm } from "react-hook-form"
import { useAuth } from "../../contexts/AuthContext"
import Logo from "../../components/Logo"
import Button from "../../components/Button"
import { useState } from "react"
import toast from "react-hot-toast"

export default function Register() {
	const { register, handleSubmit, formState } = useForm()
	const { signup } = useAuth()

	const [error, setError] = useState("")
	const [isLoading, setIsLoading] = useState(false)

	// function handleRegister(e) {
	// 	e.preventDefault()

	// 	//code for logging in and redirect to dashboard
	// }

	async function onSubmit(data) {
		console.log(data.password)
		if (data.password !== data.password - confirm) {
			toast.error("Passwords do not match")
			return setError("Passwords do not match")
		}
		try {
			setError("")
			setIsLoading(true)
			await signup(data.email, data.password)
		} catch {
			setError("Failed to create an account")
		}
		setIsLoading(false)
	}
	//write some message for successfully register?
	return (
		<div className='h-dvh bg-black px-3'>
			<Logo />
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col text-center mt-10'
			>
				{/* <label className='text-blue-200 my-2'>
					user name<br></br>
					<input
						className='bg-black border border-blue-200 mt-3 h-10 w-72'
						id='userName'
						type='text'
						{...register("userName", {
							required: "This field must be filled!",
						})}
					/>
				</label> */}
				<label className='text-blue-200 my-2'>
					email<br></br>
					<input
						className='bg-black border border-blue-200 mt-3 h-10 w-72'
						id='email'
						type='email'
						{...register("email", {
							required: "This field must be filled!",
						})}
					/>
				</label>
				<label className='text-blue-200 my-2'>
					password<br></br>
					<input
						className='bg-black border border-blue-200 mt-3 h-10 w-72'
						id='password'
						type='password'
						{...register("password", {
							required: "This field must be filled!",
						})}
					/>
				</label>
				<label className='text-blue-200 my-2'>
					confirm password<br></br>
					<input
						className='bg-black border border-blue-200 mt-3 h-10 w-72'
						type='password'
						id='password-confirm'
						{...register("password-confirm", {
							required: "This field must be filled!",
						})}
					/>
				</label>
				{/* honeypot */}
				<label className='hidden'>
					age<br></br>
					<input
						className='bg-black border border-blue-200 mt-3 h-10 w-72'
						type='text'
						id='age'
						{...register("age", { max: 0 })}
					/>
				</label>

				<div className='flex justify-center mt-10'>
					<Button
						disabled={isLoading}
						// type="submit"
						style={{
							backgroundColor: "#88FFB6",
							width: "130px",
							height: "40px",
							fontFamily: "kanit",
						}}
					>
						Register
					</Button>
				</div>
			</form>
		</div>
	)
}
