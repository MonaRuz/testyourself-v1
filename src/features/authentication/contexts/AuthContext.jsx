import { createContext, useContext, useState,useEffect } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import PropTypes from "prop-types"

AuthProvider.propTypes = {
	children: PropTypes.node,
}

const AuthContext = createContext()

export function AuthProvider({ children }) {
	const [isAuthenticated,setIsAuthenticated]=useState(false)
	const [user, setUser] = useState(null)
	const [isLoadingUser, setIsLoadingUser] = useState(true)

	useEffect(() => {
		const auth = getAuth()
		const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
			if (firebaseUser) {
				setIsAuthenticated(true)
				setUser(firebaseUser)
			} else {
				setIsAuthenticated(false)
				setUser(null)
			}
			setIsLoadingUser(false)
		})

		// Cleanup listener on unmount
		return () => unsubscribe()
	}, [])

	const value = {
		isAuthenticated,
		setIsAuthenticated,
		user,
		setUser,
		isLoadingUser,
	}

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
	const context = useContext(AuthContext)
	if (context === undefined) {
		throw new Error("AuthContext was used outside AuthProvider")
	}
	return context
}
