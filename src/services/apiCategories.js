import { collection, getDocs,doc,getDoc, query, where } from "firebase/firestore/lite"
import db from "../firebase/config"
//todo: handling errors
export async function getCategories() {
	const querySnapshot = await getDocs(collection(db, "categories"))
	const categories = []
	querySnapshot.forEach((doc) => {
		categories.push({ id: doc.id, ...doc.data() })
	})
	return categories
}

export async function getCategory(category) {

	
	const q = query(
		collection(db, "categories"),
		where("category", "==", category)
	)
	let selectedCategory={}
	const data = await getDocs(q)
	data.forEach((doc) => {
		selectedCategory={id:doc.id,...doc.data()}
		return selectedCategory
	})

	return selectedCategory
}

