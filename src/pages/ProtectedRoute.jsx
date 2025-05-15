import { useNavigate } from "react-router-dom"
import { useAuth } from "../features/authentication/contexts/AuthContext"
import { useEffect } from "react"
import PropTypes from "prop-types"
import ErrorPage from "./ErrorPage"

ProtectedRoute.propTypes = {
	children:PropTypes.element
}

export default function ProtectedRoute({ children }) {
	const { isAuthenticated } = useAuth()
	const navigate = useNavigate()

	useEffect(
		function () {
			if (!isAuthenticated) navigate("/login")
		},
		[isAuthenticated, navigate]
	)

	return isAuthenticated?children:<ErrorPage>Access denied</ErrorPage>
}


