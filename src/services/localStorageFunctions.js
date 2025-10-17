//getting testQuestions

export function saveTestQuestions(testQuestions,correctAttempts,wrongAttempts, selectedCategory) {
	localStorage.setItem(
		`savedTest_${selectedCategory.category}`,
		JSON.stringify({testQuestions,correctAttempts,wrongAttempts})
	)
}

export function getSavedTest(category) {
	const data = localStorage.getItem(`savedTest_${category}`)
	return data
}




