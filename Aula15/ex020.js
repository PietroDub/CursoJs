let num = [7 , 4, 9]

console.log(`o primeiro valor é ${num[0]}`)

console.log(`Nosso vetor é ${num}`)

num[3] = 6 //atribui a posição 3, o valor 6 (nesse caso cria)
console.log(`Nosso vetor é ${num}`)

num.push(7) //coloca um valor em outra posição
console.log(`Nosso vetor é ${num}`)

num.length //comprimento

num.sort() //coloca os elementos em ordem crescente
console.log(`Nosso vetor é ${num}`)

/*
for (let pos = 0;pos < num.length ; pos++) { //repete o aumento de posição enquanto for menor que o comprimento do array
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

for (let pos in num){ //para cada posição dentro de num
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
//busca um valor no vetor
console.log(num.indexOf(9))
console.log(`O valor 4 está na posição ${num.indexOf(4)}`)