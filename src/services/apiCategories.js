import {
	collection,
	getDocs,
	doc,
	getDoc,
	query,
	where,
} from "firebase/firestore/lite"
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
	const selectedCategory = await getDocs(q);
selectedCategory.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});



	// const docRef = doc(db, "categories", category);

	// const docSnap = await getDoc(docRef);
	// const selectedCategory=docSnap.data()

	return selectedCategory
}
