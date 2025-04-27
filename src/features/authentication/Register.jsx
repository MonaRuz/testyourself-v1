import { useForm } from "react-hook-form"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import toast from "react-hot-toast"
import Logo from "../../components/Logo"
import Button from "../../components/Button"

export default function Register() {
	const auth = getAuth()
	const { register, handleSubmit, reset, formState } = useForm()
	const { errors } = formState

	const navigate = useNavigate()

	const [isLoading, setIsLoading] = useState(false)

	async function onSubmit(data) {
		if(data.password!==data.passwordConfirm){
			toast.error("Passwords do not match")
			reset()
			return
		}
		if(data.age){
			toast.error("Access denied")
			reset()
			return
		}
		setIsLoading(true)

		createUserWithEmailAndPassword(auth, data.email, data.password)
			.then((userCredential) => {
				const user = userCredential.user
				const userName = user.email.substring(0, user.email.indexOf("@"))
				toast.success(`Account ${userName} was successfully created`)
				navigate("/dashboard")
			})
			.catch((error) => {
				const errorMessage = error.message
				toast.error(errorMessage)
			})

		reset()
		setIsLoading(false)
	}

	return (
		<div className='h-dvh bg-black px-3'>
			<Logo />

			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col text-center mt-5'
			>
				<label className='text-blue-200 my-2'>
					email<br></br>
					<input
						className='bg-black border border-blue-300 mt-3 h-10 w-72'
						id='email'
						type='email'
						{...register("email", {
							required: "This field must be filled!",
						})}
					/>
					{errors?.email?.message && (
						<p className='text-red-300 text-sm'>{errors.email.message}</p>
					)}
				</label>
				<label className='text-blue-200 my-2'>
					password<br></br>
					<input
						className='bg-black border border-blue-300 mt-3 h-10 w-72'
						id='password'
						type='password'
						{...register("password", {
							required: "This field must be filled!",
						})}
					/>
					{errors?.password?.message && (
						<p className='text-red-300 text-sm'>{errors.password.message}</p>
					)}
				</label>
				<label className='text-blue-200 my-2'>
					confirm password<br></br>
					<input
						className='bg-black border border-blue-300 mt-3 h-10 w-72'
						type='password'
						id='passwordConfirm'
						{...register("passwordConfirm", {
							required: "This field must be filled!",
						})}
					/>
					{errors?.passwordConfirm?.message && (
						<p className='text-red-300 text-sm'>
							{errors.passwordConfirm.message}
						</p>
					)}
				</label>
				{/* honeypot */}
				<label className='hidden'>
					age<br></br>
					<input
						className='bg-black border border-blue-300 mt-3 h-10 w-72'
						type='text'
						id='age'
						{...register("age", { max: 0 })}
					/>
				</label>

				<div className='flex justify-center mt-10'>
					<Button
						disabled={isLoading}
						type='submit'
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
			<div className='text-blue-300 text-sm text-center mt-2 hover:underline cursor-pointer'>
				<Link to='/login'>Back to Login</Link>
			</div>
		</div>
	)
}
