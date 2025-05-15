import { createContext, useContext, useState } from "react"
import PropTypes from "prop-types"

AuthProvider.propTypes = {
	children: PropTypes.element,
}

const AuthContext = createContext()

export function AuthProvider({ children }) {
	const [isAuthenticated,setIsAuthenticated]=useState(false)

	const value = { isAuthenticated,setIsAuthenticated }

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
	const context = useContext(AuthContext)
	if (context === undefined) {
		throw new Error("AuthContext was used outside AuthProvider")
	}
	return context
}
