import toast
 from "react-hot-toast";
 import { getAuth, signOut } from "firebase/auth"
import User from "../features/authentication/User";
import Logo from "./Logo";
import { IoMdLogOut } from "react-icons/io"
import { useAuth } from "../features/authentication/contexts/AuthContext";
import { useNavigate } from "react-router-dom"

export default function Header() {
  const navigate = useNavigate()
	const auth = getAuth()
	const { setIsAuthenticated, setUser } = useAuth()

	function handleLogout() {
		signOut(auth)
			.then(() => {
				setIsAuthenticated(false)
				setUser(null)
				toast.success("You have been logged out.")
				navigate("/login")
			})
			.catch((error) => {
				toast.error("Logout failed: " + error.message)
			})
	}
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between border-b border-purple-300">
        <div className="mb-5">
            <Logo/>
        </div>
        <div className="flex flex-row items-center gap-10 pb-5 md:pb-0">
            <User/>
            <div className='text-red-300 text-3xl hover:text-red-500 hover:cursor-pointer'>
                  <IoMdLogOut onClick={handleLogout} />
                </div>
        </div>
    </div>
  )
}
