import { createContext, useContext, useEffect, useState } from "react"
// import { auth } from "../firebase/config"
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";

const AuthContext = createContext()

export function useAuth() {
	return useContext(AuthContext)
}

export function AuthProvider({ children }) {
	const auth = getAuth()

	const [currentUser, setCurrentUser] = useState()
	const[error,setError]=useState("")

	async function signup(email, password) {
		setError("")
		await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            setCurrentUser(userCredential.user);
            // console.log(user);
            // navigate("/login")
            // ...
        })
        .catch((error) => {
			// const errorCode = error.code;
            const errorMessage = error.message;
			setError(errorMessage)
            // ..
        });
	}


	// useEffect(function () {
	// 	const unsubscriber = auth.onAuthStateChanged((user) => {
	// 		setCurrentUser(user)
	// 	})
	// 	return unsubscriber
	// }, [auth])

	const value = {
		currentUser,
		signup,
		error
	}
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
