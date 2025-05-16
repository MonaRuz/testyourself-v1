import {
	query,
	getDocs,
	getDoc,
	updateDoc,
	deleteDoc,
	doc,
	addDoc,
	collection,
	where,
} from "firebase/firestore/lite"
import db from "../firebase/config"


export async function getQuestions(categoryId,uid) {
	const questionsRef = collection(db, "categories", categoryId, "questions")
	const q = query(questionsRef, where("uid", "==", uid))

	const snapshot = await getDocs(q)

	const questions = []
	snapshot.forEach((doc) => {
		questions.push({ id: doc.id, ...doc.data() })
	})
	return questions
	
}

export async function getQuestion(categoryId, questionId) {
	
	const qRef = doc(
		db,
		"categories",
		categoryId,
		"questions",
		questionId
	)

	try {
		const qSnap = await getDoc(qRef)
		const question = qSnap.data()
		return question
	} catch (err) {
		console.error(err)
		throw new Error("Question was not found.")
	}
}

export async function createQuestion({ categoryId, newQuestion, uid }) {
	const qRef = collection(db, "categories", categoryId, "questions")

	try {
		await addDoc(qRef, {
			question: newQuestion.question,
			answer: newQuestion.answer,
			uid,
		})
	} catch (err) {
		console.error(err)
		throw new Error("Question could not be created.")
	}

	return newQuestion
}

export async function deleteQuestion(categoryId, questionId) {
	const qRef = doc(
		db,
		"categories",
		categoryId,
		"questions",
		questionId
	)
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
		await updateDoc(qRef, editedQuestion)
		return editedQuestion
	} catch (err) {
		console.error(err)
		throw new Error("Question could not be edited.")
	}
}
