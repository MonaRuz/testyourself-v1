import { useNavigate } from "react-router-dom"
import { useAuth } from "../features/authentication/contexts/AuthContext"
import { useEffect } from "react"

export default function ProtectedRoute({ children }) {
	const { isAuthenticated } = useAuth()
	const navigate = useNavigate()

	useEffect(
		function () {
			if (!isAuthenticated) navigate("/login")
		},
		[isAuthenticated, navigate]
	)
	// error page
	return isAuthenticated?children:null
}
