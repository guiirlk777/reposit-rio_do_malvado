
 let vetor = []
 let somaValoresVetor = 0

 for(let i = 0; i < 5; i++){
     vetor[i] = Number(prompt(`Digite um valor`))
     somaValoresVetor = somaValoresVetor + vetor[i]
 }

 document.write(`<h3>${vetor}</h3>`)
document.write(`<h4>A soma dos valores ${somaValoresVetor}</h4>`)
