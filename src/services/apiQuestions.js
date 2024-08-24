import { query, getDocs, getDoc, collection } from "firebase/firestore/lite"
import db from "../firebase/config"

export async function getQuestions(categoryId) {
	const q = query(collection(db, "categories", categoryId, "questions"))
	let questions = []
	try {
		const querySnapshot = await getDocs(q)
		querySnapshot.forEach((doc) => {
			questions.push({ id: doc.id, ...doc.data() })
			return questions
		})
	} catch (err) {
		console.error(err)
		throw new Error("Questions cannot be fetched.")
	}

	return questions
}

export async function getQuestion(selectedCategory,questionId){
	const q = query(collection(db, "categories", questionId, "questions",questionId))

	try {
		const querySnapshot = await getDoc(q)
		// querySnapshot.forEach((doc) => {
		// 	questions.push({ id: doc.id, ...doc.data() })
		// 	return questions
		// })
		console.log(querySnapshot);
		
	} catch (err) {
		console.error(err)
		throw new Error("Question cannot be fetched.")
	}

	return question
}
