import {
	arrayUnion,
	collection,
	addDoc,
	getDocs,
	query,
	setDoc,
	where,
	updateDoc,
	doc,
	getDoc,
} from "firebase/firestore/lite"
import db from "../firebase/config"

export async function getCorrectAnsweredIds(categoryId) {
	const qRef = doc(db, "categories", categoryId, "correctAnsweredIds")
	
	console.log("test");

	try {
		const qSnap = await getDoc(qRef)
		const correctAnsweredIds = qSnap.data()
		return correctAnsweredIds
	} catch (err) {
		console.error(err)
		throw new Error("Something went wrong with fetching correctAnsweredIds")
	}
}

export async function updateCorrectAnsweredIds(categoryId, currentQuestionId) {
	const qRef = doc(db, "categories", categoryId)
	// console.log(categoryId,currentQuestionId);

	try {
		await updateDoc(qRef, {
			correctAnsweredIds: arrayUnion(currentQuestionId),
		})
	} catch (err) {
		console.error(err)
		throw new Error("Your answer could not be saved")
	}
	return currentQuestionId
}

export async function updateHighscore(categoryId, percentage) {
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

export async function updateCorrectAnswers(categoryId, correctAnswers) {
	// console.log(categoryId,correctAnswers);

	const qRef = doc(db, "categories", categoryId)
	try {
		await updateDoc(qRef, {
			correctAnswers: correctAnswers,
		})
	} catch (err) {
		console.error(err)
		throw new Error("Your answer could not be saved")
	}
	return correctAnswers
}

export async function updateWrongAnswers(categoryId, wrongAnswers) {
	// console.log(categoryId,wrongAnswers);

	const qRef = doc(db, "categories", categoryId)
	try {
		await updateDoc(qRef, {
			wrongAnswers: wrongAnswers,
		})
	} catch (err) {
		console.error(err)
		throw new Error("Your answer could not be saved")
	}
	return wrongAnswers
}


