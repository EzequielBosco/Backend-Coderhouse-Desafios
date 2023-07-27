const numbers = {}

function random(min, max) {
    return randomNumber = Math.floor(Math.random() * (max - min +1)) + min
} 

function generateNumbers(min, max, quantity) {
    for (let i = 0; i < quantity; i++) {
        const randomNumber = random(min, max)
        const a = numbers[i]
        if (numbers[randomNumber]) {
            numbers[randomNumber]++
        } else {
            numbers[randomNumber] = 1
        }
    }
}

generateNumbers(1, 20, 1000)
console.log(numbers)

let totalSum = 0
for (const n in numbers) {
    totalSum += numbers[n]
}

console.log(totalSum)