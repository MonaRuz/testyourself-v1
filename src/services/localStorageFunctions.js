//getting testQuestions

export function saveTestQuestions(testQuestions,correctAttempts,wrongAttempts, category) {
	localStorage.setItem(
		`savedTest_${category}`,
		JSON.stringify({testQuestions,correctAttempts,wrongAttempts})
	)
}

export function getSavedTest(category) {
	const data = localStorage.getItem(`savedTest_${category}`)
	return data
}

//correctAttempts

// export function updateCorrectAttempts(correctAttempts, category) {
// 	localStorage.setItem(
// 		`correctAttempts_${category}`,
// 		JSON.stringify(correctAttempts)
// 	)
// }

// export function getCorrectAttempts(category) {
// 	const data = localStorage.getItem(`correctAttempts_${category}`)
// 	return data
// }

//wrongAttempts

// export function updateWrongAttempts(wrongAttempts, category) {
// 	localStorage.setItem(
// 		`wrongAttempts_${category}`,
// 		JSON.stringify(wrongAttempts)
// 	)
// }

// export function getWrongAttempts(category) {
// 	const data = localStorage.getItem(`wrongAttempts_${category}`)
// 	return data
// }

//reset test

// export function resetTest(category) {
// 	localStorage.clear(`currentQuestions_${category}`)
// 	localStorage.clear(`correctAttempts_${category}`)
// 	localStorage.clear(`wrongAttempts_${category}`)
// }
