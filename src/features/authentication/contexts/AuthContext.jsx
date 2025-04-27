import { createContext, useContext, useEffect, useState } from "react"
// import { auth } from "../firebase/config"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()

export function useAuth() {
	return useContext(AuthContext)
}

export function AuthProvider({ children }) {
	const auth = getAuth()
	const navigate=useNavigate()

	const [currentUser, setCurrentUser] = useState()
	const[error,setError]=useState("")
	// const[isLoading,setIsLoading]=useState(false)

	async function signup(email, password) {
		// setIsLoading(true)
		setError("")
		await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            setCurrentUser(userCredential.user);
			// setIsLoading(false)
            // console.log(user);
            navigate("/login")
            // ...
        })
        .catch((error) => {
			setError(error.message)
            // ..
        })
		// .finally (setIsLoading(false));
	}

	async function login(email, password) {
		// setIsLoading(true)
		setError("")
		await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            setCurrentUser(userCredential.user);
			// setIsLoading(false)
            // console.log(user);
            navigate("/dashboard")
            // ...
        })
        .catch(() => {
			setError("failed to log in")
            // ..
        })
		// .finally (setIsLoading(false));
	}


	useEffect(function () {
		const unsubscriber = auth.onAuthStateChanged((user) => {
			setCurrentUser(user)
		})
		return unsubscriber
	}, [auth])

	const value = {
		currentUser,
		signup,
		login,
		error
	}
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
