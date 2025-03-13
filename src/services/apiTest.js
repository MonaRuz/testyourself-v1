import {
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

export async function setHighscore(categoryId, percentage) {
	const categoryRef = doc(db, "categories", categoryId)
	try {
		await updateDoc(categoryRef, {
			highscore: percentage,
		})
	} catch (err) {
		console.error(err)
		throw new Error("Your highscore could not be set")
	}
	return percentage
}
export async function updateWrongAnswers(categoryId, wrongAnswers) {
	const categoryRef = doc(db, "categories", categoryId)
	try {
		await updateDoc(categoryRef, {
			wrongAnswers: wrongAnswers,
		})
	} catch (err) {
		console.error(err)
		throw new Error("Your answer could not be saved")
	}
	return wrongAnswers
}

export async function updateCorrectAnswers(categoryId, correctAnswers) {
	const categoryRef = doc(db, "categories", categoryId)
	try {
		await updateDoc(categoryRef, {
			correctAnswers: correctAnswers,
		})
	} catch (err) {
		console.error(err)
		throw new Error("Your answer could not be saved")
	}
	return correctAnswers
}
