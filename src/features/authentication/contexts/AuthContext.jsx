import { createContext, useContext, useState } from "react"

const AuthContext = createContext()

export function AuthProvider({ children }) {
	const [isAuthenticated,setIsAthenticated]=useState(false)

	const value = { isAuthenticated,setIsAthenticated }

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
	const context = useContext(AuthContext)
	if (context === undefined) {
		throw new Error("AuthContext was used outside AuthProvider")
	}
	return context
}
