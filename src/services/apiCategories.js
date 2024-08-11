import { collection, getDocs } from "firebase/firestore/lite"
import db from "../firebase/config"

export async function getCategories() {
	const querySnapshot = await getDocs(collection(db, "categories"))
	const categories = []
	querySnapshot.forEach((doc) => {
		categories.push(doc.data())
	})
	return categories
}
