
let vetor1 = [1,3,5,7,9]
let vetor2 = [2,4,6,8,10]
let vetor3 = []

let j = 0

for(let i = 0 ; i < 5; i++){
    vetor3[j] = vetor1[i]
    j++
    vetor3[j] = vetor2[i]
    j++
}
console.log(vetor3)