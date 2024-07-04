import Logo from "../../components/Logo"
import Button from "../../components/Button"

export default function Register() {
  function handleRegister(e) {
		e.preventDefault()
		//code for logging in and redirect to dashboard
	}
  //write some message for successfully register?
  return (
    <div className='h-dvh bg-black px-3'>
			<Logo />
			<form className='flex flex-col text-center mt-10'>
      <label className='text-blue-200 my-3'>
					user name<br></br>
					<input
						className='bg-black border border-blue-200 mt-3 h-10 w-72'
						type='text'
					/>
				</label>
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
					onClick={handleRegister}
					style={{ backgroundColor: "#88FFB6", width: "130px", height: "40px",fontFamily:"kanit" }}
				>
					Register
				</Button>
			</div>
		</div>
  )
}
