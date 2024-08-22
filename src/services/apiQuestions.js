import { query, getDocs, collection } from "firebase/firestore/lite"
import db from "../firebase/config"

export async function getQuestions(categoryId) {
	const q = query(collection(db, "categories", categoryId, "questions"))
	const querySnapshot = await getDocs(q)
	let questions = []
	querySnapshot.forEach((doc) => {
		questions.push({id:doc.id,...doc.data()})
        return questions[0]
	})

	return questions
}
