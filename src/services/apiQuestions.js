import {
	query,
	getDocs,
	getDoc,
	setDoc,
	deleteDoc,
	doc,
	addDoc,
	collection,
} from "firebase/firestore/lite"
import db from "../firebase/config"

export async function getQuestions(selectedCategoryId) {
	const q = query(collection(db, "categories", selectedCategoryId, "questions"))
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

export async function getQuestion(selectedCategoryId, questionId) {
	const qRef = doc(db, "categories", selectedCategoryId, "questions", questionId)

	try {
		const qSnap = await getDoc(qRef)
		const question = qSnap.data()
		return question
	} catch (err) {
		console.error(err)
		throw new Error("Question was not found.")
	}
}

export async function createQuestion({ selectedCategoryId, newQuestion }) {
	const qRef = collection(db, "categories", selectedCategoryId, "questions")

	try {
		await addDoc(qRef, {
			question: newQuestion.question,
			answer: newQuestion.answer,
			correctAnswer:false,
		})
	} catch (err) {
		console.error(err)
		throw new Error("Question could not be created.")
	}

	return newQuestion
}

export async function deleteQuestion(selectedCategoryId, questionId) {
	const qRef = doc(db, "categories", selectedCategoryId, "questions", questionId)
	try {
		await deleteDoc(qRef)
	} catch (err) {
		console.error(err)
		throw new Error("Question could not be deleted.")
	}
}

export async function editQuestion({ categoryId, questionId, editedQuestion }) {
	
	const qRef = doc(db, "categories", categoryId, "questions", questionId)
	try {
		await setDoc(qRef, editedQuestion)
		return editedQuestion
	} catch (err) {
		console.error(err)
		throw new Error("Question could not be edited.")
	}
}
