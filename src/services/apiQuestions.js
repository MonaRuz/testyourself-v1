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
	serverTimestamp,
	orderBy
} from "firebase/firestore/lite"
import db from "../firebase/config"


// export async function getQuestions(categoryId,uid) {
// 	const questionsRef = collection(db, "categories", categoryId, "questions")
// 	const q = query(questionsRef, where("uid", "==", uid))

// 	const snapshot = await getDocs(q)

// 	const questions = []
// 	snapshot.forEach((doc) => {
// 		questions.push({ id: doc.id, ...doc.data() })
// 	})
// 	return questions
	
// }

export async function getQuestions(categoryId, uid) {
	const qRef = collection(db, "categories", categoryId, "questions")
	const q = query(
		qRef,
		where("uid", "==", uid),
		orderBy("createdAt", "desc") // řadíme od nejnovější
	)

	const querySnapshot = await getDocs(q)

	const questions = querySnapshot.docs.map(doc => ({
		id: doc.id,
		...doc.data(),
	}))

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

	const questionWithMeta = {
		question: newQuestion.question,
		answer: newQuestion.answer,
		uid,
		createdAt: serverTimestamp(),
		updatedAt: serverTimestamp(),
	}

	// try {
	// 	await addDoc(qRef, {
	// 		question: newQuestion.question,
	// 		answer: newQuestion.answer,
	// 		uid,
	// 	})
	// } catch (err) {
	// 	console.error(err)
	// 	throw new Error("Question could not be created.")
	// }

	try {
		const docRef = await addDoc(qRef, questionWithMeta)
		return { id: docRef.id, ...questionWithMeta }
	} catch (err) {
		console.error(err)
		throw new Error("Question could not be created.")
	}
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
