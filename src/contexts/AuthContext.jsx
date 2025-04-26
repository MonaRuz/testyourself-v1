import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../firebase/config"
// import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext()

export function useAuth() {
	return useContext(AuthContext)
}

export function AuthProvider({ children }) {
	// const auth = getAuth()

	const [currentUser, setCurrentUser] = useState()

	function signup(email, password) {
		return auth.createUserWithEmailAndPassword(email, password)
	}

	useEffect(function () {
		const unsubscriber = auth.onAuthStateChanged((user) => {
			setCurrentUser(user)
		})
		return unsubscriber
	}, [])

	const value = {
		currentUser,
		signup,
	}
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
