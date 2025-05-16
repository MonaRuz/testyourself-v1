import {
	query,
	getDocs,
	getDoc,
	setDoc,
	deleteDoc,
	doc,
	addDoc,
	collection,
	where,
} from "firebase/firestore/lite"
import { getAuth } from "firebase/auth"
import db from "../firebase/config"

// export async function getQuestions(categoryId) {

// 	const q = query(collection(db, "categories", categoryId, "questions"))
// 	let questions = []
// 	try {
// 		const querySnapshot = await getDocs(q)
// 		querySnapshot.forEach((doc) => {
// 			questions.push({ id: doc.id, ...doc.data() })
// 			return questions
// 		})
// 	} catch (err) {
// 		console.error(err)
// 		throw new Error("Questions cannot be fetched.")
// 	}

// 	return questions
// }

const auth = getAuth()
const user = auth.currentUser

export async function getQuestions(categoryId) {
	if (!user) throw new Error("Not authenticated")

	const questionsRef = collection(db, "categories", categoryId, "questions")
	const q = query(questionsRef, where("uid", "==", user.uid))

	const snapshot = await getDocs(q)
	const questions = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))

	console.log(questions);
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
	console.log(categoryId,questionId,editedQuestion);
	
	const qRef = doc(db, "categories", categoryId, "questions", questionId)
	try {
		await setDoc(qRef, editedQuestion)
		return editedQuestion
	} catch (err) {
		console.error(err)
		throw new Error("Question could not be edited.")
	}
}
