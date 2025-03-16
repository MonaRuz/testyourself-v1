export function updateCurrentQuestions( filterdeQuestions,category) {
    console.log(filterdeQuestions);
    
	localStorage.setItem(`currentQuestions_${category}`, JSON.stringify(filterdeQuestions))
}

export function getCurrentQuestions(categoryName) {
	const data=localStorage.getItem(`currentQuestions_${categoryName}`)
    return data
}
