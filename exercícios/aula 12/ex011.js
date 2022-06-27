var idade = 67
console.log(`Você tem ${idade} anos`)
if (idade < 16){
    console.log(`Não VOTA`)
}  else if (idade < 18 || idade > 65) {
    console.log('Voto Opicional')
} else if (idade >= 18) {
    console.log('Voto Obrigatório')
}