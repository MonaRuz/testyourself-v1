export function getRandomQuestion(max){    
        const min = Math.ceil(0)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min) + min)    
}