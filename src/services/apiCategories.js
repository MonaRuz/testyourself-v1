import {
	collection,
	getDocs,
	query,
	where,
} from "firebase/firestore/lite"
import db from "../firebase/config"
//todo: handling errors
export async function getCategories() {
	const categories = []
	try {
		const querySnapshot = await getDocs(collection(db, "categories"))
		querySnapshot.forEach((doc) => {
			categories.push({ id: doc.id, ...doc.data() })
		})
	} catch (err) {
		console.error(err)
		throw new Error("Categories could not by fetched.")
	}
	return categories
}

export async function getCategory(category) {
	const q = query(
		collection(db, "categories"),
		where("category", "==", category)
	)
	let selectedCategory = {}
	try {
		const data = await getDocs(q)
		data.forEach((doc) => {
			selectedCategory = { id: doc.id, ...doc.data() }
			return selectedCategory
		})
	} catch (err) {
		console.error(err)
		throw new Error("Selected category was not found.")
	}

	return selectedCategory
}
