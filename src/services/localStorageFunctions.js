//getting testQuestions

export function saveTestQuestions(
	testQuestions,
	correctAttempts,
	wrongAttempts,
	categoryId
) {
	localStorage.setItem(
		`savedTest_${categoryId}`,
		JSON.stringify({ testQuestions, correctAttempts, wrongAttempts })
	)
}

export function getSavedTest(categoryId) {
	const data = localStorage.getItem(`savedTest_${categoryId}`)
	return data
}
