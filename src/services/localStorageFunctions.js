//getting testQuestions

export function saveTestQuestions(testQuestions,correctAttempts,wrongAttempts, selectedCategory) {
	localStorage.setItem(
		`savedTest_${selectedCategory.id}`,
		JSON.stringify({testQuestions,correctAttempts,wrongAttempts})
	)
}

export function getSavedTest(selectedCategory) {
	console.log(selectedCategory);
	
	const data = localStorage.getItem(`savedTest_${selectedCategory.id}`)
	return data
}




