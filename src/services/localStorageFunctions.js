export function updateCurrentQuestions(filterdeQuestions, categoryName) {
	localStorage.setItem(`currentQuestions_${categoryName}`, filterdeQuestions)
}

export function getCurrentQuestions(categoryName) {
	localStorage.getItem(`currentQuestions_${categoryName}`)
}
