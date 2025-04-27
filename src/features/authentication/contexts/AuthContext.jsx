import { createContext, useContext, useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import toast from "react-hot-toast"

const AuthContext = createContext()

export function AuthProvider({ children }) {

	const [isLoading, setIsLoading] = useState(false)

    const auth = getAuth()

	function signup(data) {
		setIsLoading(true)
		createUserWithEmailAndPassword(auth, data.email, data.password)
			.then((userCredential) => {
				const user = userCredential.user
				const userName = user.email.substring(0, user.email.indexOf("@"))
				toast.success(`Account ${userName} was successfully created`)
			})
			.catch((error) => {
				const errorMessage = error.message
				toast.error(errorMessage)
			})

		

		setIsLoading(false)
	}

	const value = {signup,isLoading}

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
	const context = useContext(AuthContext)
	if (context === undefined) {
		throw new Error("AuthContext was used outside AuthProvider")
	}
	return context
}


