let valores = [8, 1, 7, 4, 2, 9]
/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem valor ${valores[pos]}.`) /*Traducional
}
*/
for (let pos in valores) { /* Para cada posição dentro da variável / in (em ou dentro)*/
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} 

