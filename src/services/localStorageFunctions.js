export function updateCurrentQuestions( filterdeQuestions,category) {
	localStorage.setItem(`currentQuestions_${category}`, JSON.stringify(filterdeQuestions))
}

export function getCurrentQuestions(categoryName) {
	const data=localStorage.getItem(`currentQuestions_${categoryName}`)
    return data
}
