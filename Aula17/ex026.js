var addnum = window.document.querySelector("input#addnum")
    var add = window.document.querySelector("input#add")
    var res = window.document.querySelector('div#res')
    var loop = 0
    let maiornum = ""
    let menornum = 100
    let somando = 0
    let media = ""

    var fim = window.document.querySelector("input#fim")
    var todo = window.document.querySelector("div#todo")


function guardar(){
    loop++
    var num = Number(addnum.value)
    res.innerHTML += `valor ${num} adicionado`
 
    if (num >= maiornum) {
        maiornum = num
    }

    if (num <= menornum) {
        menornum = num
    }

    somando = (somando + num)
   
}


function finalizar(){ 
     todo.innerHTML += `Ao todo temos ${loop} números adicionados`
     todo.innerHTML += `este é ${maiornum} o maior número`
     todo.innerHTML += `este é ${menornum} o menor número`
     todo.innerHTML += `somando tudo temos: ${somando}`

     media = (somando / loop)

     todo.innerHTML += `A média dos valores é: ${media}`
}
