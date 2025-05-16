// import { useState } from "react"
import { IoMdLogOut } from "react-icons/io"
import { useNavigate } from "react-router-dom"
import { getAuth, signOut } from "firebase/auth"
import toast from "react-hot-toast"
// import Spinner from "../../components/Spinner"
import { useAuth } from "./contexts/AuthContext"

export default function Logout() {
	const navigate = useNavigate()
	const auth = getAuth()

	const { setIsAuthenticated, setUser } = useAuth()
  
	// const [isLoading, setIsLoading] = useState(false)

	function handleSignOut() {
		try {
			await signOut(auth)
			setIsAuthenticated(false)
			setUser(null)
			toast.success("You have been logged out.")
			navigate("/login")
		} catch (error) {
			toast.error("Logout failed: " + error.message)
		}
	}
	// if (isLoading) return <Spinner>Sign out...</Spinner>
	return (
		<div className='text-red-300 text-3xl hover:text-red-500 hover:cursor-pointer'>
			<IoMdLogOut onClick={handleSignOut} />
		</div>
	)
}
