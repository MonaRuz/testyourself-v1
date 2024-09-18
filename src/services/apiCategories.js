import {
	collection,
	getDocs,
	addDoc,
	deleteDoc,
	doc,
	query,
	where,
} from "firebase/firestore/lite"
import db from "../firebase/config"

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


//debug:
export async function createCategory(newCategory){

	
	try{
		await addDoc(collection(db,"categories"),{
			attempts:0,
			category:newCategory,
			currentScore:0,
			highscore:0,
			progress:0,
			questionsAmount:0
		})
		
	}catch(err){
		console.error(err)
		throw new Error("New category was not created")
	}
	return newCategory
}

export async function deleteCategory(categoryId) {
	try{
		await deleteDoc(doc(db, "categories", categoryId))
		return categoryId
	}catch(err){
		console.error(err)
		throw new Error("Category was not deleted")
	}
	
}

