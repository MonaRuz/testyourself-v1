import {
	collection,
	getDocs,
	getDoc,
	addDoc,
	deleteDoc,
	doc,
	query,
	where,
	updateDoc,
	orderBy,
} from "firebase/firestore/lite"
import db from "../firebase/config"
import { getAuth } from "firebase/auth"

// export async function getCategories() {
// 	console.log(user.uid);

// 	const categories = []
// 	try {
// 		const querySnapshot = await getDocs(collection(db, "categories"),where("uid", "==", user.uid),
// 		orderBy("__name__"))

// 		querySnapshot.forEach((doc) => {
// 			categories.push({ id: doc.id, ...doc.data() })
// 		})
// 	} catch (err) {
// 		console.error(err)
// 		throw new Error("Categories could not by fetched.")
// 	}
// 	return categories
// }

export async function getCategories() {
	const auth = getAuth()
	const user = auth.currentUser

	if (!user) throw new Error("No authenticated user.")

	const categories = []

	try {
		const q = query(
			collection(db, "categories"),
			where("uid", "==", user.uid),
			orderBy("__name__")
		)

		const querySnapshot = await getDocs(q)

		querySnapshot.forEach((doc) => {
			categories.push({ id: doc.id, ...doc.data() })
		})
	} catch (err) {
		console.error(err)
		throw new Error("Categories could not be fetched.")
	}

	return categories
}



export async function getCategory(categoryId) {
	try {
		const docRef = doc(db, "categories", categoryId);
		const docSnap = await getDoc(docRef);

		if (!docSnap.exists()) {
			throw new Error("Category not found");
		}

		return { id: docSnap.id, ...docSnap.data() };
	} catch (err) {
		console.error(err);
		throw new Error("Failed to fetch the category.");
	}
}

export async function createCategory(newCategory) {
	try {
		await addDoc(collection(db, "categories"), {
			category: newCategory.categoryName,
			highscore: 0,
			uid: newCategory.uid,
		})
	} catch (err) {
		console.error(err)
		throw new Error("New category was not created")
	}
	return newCategory
}

export async function deleteCategory(categoryId) {
	try {
		await deleteDoc(doc(db, "categories", categoryId))
		return categoryId
	} catch (err) {
		console.error(err)
		throw new Error("Category was not deleted")
	}
}

export async function updateHighscore(categoryId, percentage) {
	console.log(percentage)
	console.log(categoryId)

	const qRef = doc(db, "categories", categoryId)
	try {
		await updateDoc(qRef, {
			highscore: percentage,
		})
	} catch (err) {
		console.error(err)
		throw new Error("Your highscore could not be set")
	}
	return percentage
}
