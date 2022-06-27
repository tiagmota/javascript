let num = [5, 8, 2, 9, 3]

num.push(1) /*Adiciona o valor no final do vetor*/

num.sort() /*Poem os números em Ordem Crescente */

console.log(`Nosso vetor é um ${num}.`)

console.log(`O vetor tem ${num.length} posições.`) /* Mostra quantas posições */

console.log(`o primeiro valor do vetor é ${num[0]}.`) 


let pos = num.indexOf(7)/*Mostra onde o valor está */
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}

 
