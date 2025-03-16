export function updateQuestions(filterdeQuestions,categoryName){
    localStorage.setItem(`currentQuestions_${categoryName}`, filterdeQuestions);
}