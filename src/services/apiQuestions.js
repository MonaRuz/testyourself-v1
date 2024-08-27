import {
	query,
	getDocs,
	deleteDoc,
	doc,
	addDoc,
	collection,
} from "firebase/firestore/lite"
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

export async function createQuestion({ selectedCategoryId, newQuestion }) {
	const qRef = collection(db, "categories", selectedCategoryId, "questions")
	try {
		await addDoc(qRef, {
			question: newQuestion.question,
			answer: newQuestion.answer,
		})
	} catch (err) {
		console.error(err)
		throw new Error("Question could not be created.")
	}

	return newQuestion
}

export async function deleteQuestion(categoryId,questionId) {
	const qRef=doc(db,"categories",categoryId,"questions",questionId)
	try{
		await deleteDoc(qRef)
	}catch(err){
		console.error(err)
		throw new Error("Question could not be deleted.")
	}
	
}
