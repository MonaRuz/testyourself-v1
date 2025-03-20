//getting testQuestions

export function updateTestQuestions(filterdeQuestions, category) {
	localStorage.setItem(
		`currentQuestions_${category}`,
		JSON.stringify(filterdeQuestions)
	)
}

export function getTestQuestions(category) {
	const data = localStorage.getItem(`currentQuestions_${category}`)
	return data
}

//correctAttempts

export function updateCorrectAttempts(correctAttempts, category) {
	localStorage.setItem(
		`correctAttempts_${category}`,
		JSON.stringify(correctAttempts)
	)
}

export function getCorrectAttempts(category) {
	const data = localStorage.getItem(`correctAttempts_${category}`)
	return data
}

//wrongAttempts

export function updateWrongAttempts(wrongAttempts, category) {
	localStorage.setItem(
		`wrongAttempts_${category}`,
		JSON.stringify(wrongAttempts)
	)
}

export function getWrongAttempts(category) {
	const data = localStorage.getItem(`wrongAttempts_${category}`)
	return data
}

//reset test

export function resetTest(category) {
	localStorage.clear(`currentQuestions_${category}`)
	localStorage.clear(`correctAttempts_${category}`)
	localStorage.clear(`wrongAttempts_${category}`)
}
