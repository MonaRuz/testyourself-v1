import { collection, getDocs } from "firebase/firestore/lite"
import db from "../firebase/config"

export async function getCategories() {
	const querySnapshot = await getDocs(collection(db, "categories"))
	const categories = querySnapshot.forEach((doc) => {
		// doc.data() is never undefined for query doc snapshots
		console.log(doc.id, " => ", doc.data())
	})
	return categories
}
