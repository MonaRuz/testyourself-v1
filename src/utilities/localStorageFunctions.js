export function resetAttempts(category) {
    localStorage.setItem(`${category}_attempts`, JSON.stringify(0))
}

export function resetCorrectAttempts(category) {
    localStorage.setItem(`${category}_correctAttempts`, JSON.stringify(0))
}