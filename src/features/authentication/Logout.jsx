import { IoMdLogOut } from "react-icons/io"
import { useNavigate } from "react-router-dom"
import { getAuth, signOut } from "firebase/auth"
import toast from "react-hot-toast"
import { useState } from "react"

export default function Logout() {
  const[isLoading,setIsLoading]=useState(false)
  const navigate = useNavigate()
	const auth = getAuth()
	
  function handleSignOut(){
    setIsLoading(true)
    signOut(auth)
		.then(() => {
			toast.success("User successfilly logged out")
		})
		.catch((error) => {
			toast.error(error.message)
		})
    navigate("/login")
    setIsLoading(false)
  }

	return (
		<div className='text-red-300 text-3xl hover:text-red-500 hover:cursor-pointer'>
			<IoMdLogOut onClick={handleSignOut} />
		</div>
	)
}
