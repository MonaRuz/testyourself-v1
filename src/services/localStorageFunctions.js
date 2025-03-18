//testQuestions

export function updateTestQuestions(filterdeQuestions, category) {
	localStorage.setItem(
		`currentQuestions_${category}`,
		JSON.stringify(filterdeQuestions)
	)
}

export function getTestQuestions(categoryName) {
	const data = localStorage.getItem(`currentQuestions_${categoryName}`)
	return data
}

//correctAttempts

export function updateCorrectAttempts(correctAttempts,category){
    localStorage.setItem(
		`correctAttempts_${category}`,
		JSON.stringify(correctAttempts)
	)
}

export function getCorrectAttempts(categoryName) {
	const data = localStorage.getItem(`correctAttempts_${categoryName}`)
	return data
}

//wrongAttempts

export function updateWrongAttempts(wrongAttempts,category){
    localStorage.setItem(
		`wrongAttempts_${category}`,
		JSON.stringify(wrongAttempts)
	)
}

export function getWrongAttempts(categoryName) {
	const data = localStorage.getItem(`wrongAttempts_${categoryName}`)
	return data
}

