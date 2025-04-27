import { useForm } from "react-hook-form"
import { useAuth } from "../../contexts/AuthContext"
import Logo from "../../components/Logo"
import Button from "../../components/Button"
import Spinner from "../../components/Spinner"
// import { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { useState } from "react"


export default function Register() {
	const { register, handleSubmit, reset,formState } = useForm()
	const {errors}=formState
	const { signup,error } = useAuth()
	const navigate=useNavigate()


	const[isLoading,setIsLoading]=useState(false)

	// function handleRegister(e) {
	// 	e.preventDefault()

	// 	//code for logging in and redirect to dashboard
	// }
// console.log(currentUser);

	async function onSubmit(data) {
		// console.log(isLoading);
		setIsLoading(true)
		
		if (data.password !== data.passwordConfirm) {
			reset()
			toast.error("Passwords do not match")
			// return setError("Passwords do not match")
		}
		if(data.age===undefined){
			reset()
			toast.error("Failed to create an account")
			// return setError("Failed to create an account")
		}
		try {
			await signup(data.email, data.password)
		} catch {
			console.error(error)
			//debug toaster :
			// toast.error(error)
		}
		if(!error)toast.success("Your account was succesfully created")
		reset()
		setIsLoading(false)
	}

	// if(isLoading)return<Spinner/>

	return (
		<div className='h-dvh bg-black px-3'>
			<Logo />
			{/* toaster is not functioning, this line is instead of it */}
			{error&&<p className="text-red-300 text-center mt-5">{error}</p>}
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col text-center mt-5'
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
						className='bg-black border border-blue-300 mt-3 h-10 w-72'
						id='email'
						type='email'
						{...register("email", {
							required: "This field must be filled!",
						})}
					/>
					{errors?.email?.message&&<p className="text-red-300 text-sm">{errors.email.message}</p>}
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
					{errors?.password?.message&&<p className="text-red-300 text-sm">{errors.password.message}</p>}
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
					{errors?.passwordConfirm?.message&&<p className="text-red-300 text-sm">{errors.passwordConfirm.message}</p>}
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
						type="submit"
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
			<p onClick={()=>navigate("/login")} className="text-blue-300 text-sm text-center mt-2 hover:underline cursor-pointer">Back to Login</p>
		</div>
	)
}
