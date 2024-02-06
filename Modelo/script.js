let num = document.querySelector('input#txtnum')
let lista = document.querySelector('select#txtlist')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true 
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Número ${num.value} adicionado`
    lista.appendChild(item)
    
}else{
    alert('Numero incorreto ou já na lista !')
}
num.value = ''
num.focus()
}

function finalizar(){
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    soma = 0
    media = 0
    
    for(let pos in valores){
    soma += valores[pos]
    media += valores[pos]/tot
    if(valores[pos] > maior)
    maior = valores[pos]
    if(valores[pos] < menor)
    menor = valores[pos]

    res.innerHTML = ''
    res.innerHTML += `<p>O menor numero é o ${menor} e o maior é o ${maior}</p>`
    res.innerHTML += `A quantidade de numeros adicionados foi ${tot}`
    res.innerHTML += `<p>Todos os valores somados da ${soma}</p>`
    res.innerHTML += `<p>A media de valores adicionados da ${media}</p>`
    }
}


