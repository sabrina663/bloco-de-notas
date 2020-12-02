/* gerar cor de background do table */
class Color{
    gerar(){
        let corbackground = Array('204, 204, 108','204, 127, 108','108, 193, 204')
        let cor = corbackground.length
        let gerarcor = Math.floor(Math.random() * cor)
        return `rgb(${corbackground[gerarcor]})`
    }
}

let color = new Color()
console.log(color.gerar())

/* funcão quando o user adicionar uma nova notação */
function adicionar(){
    let notacao = document.getElementById('notacao')
    if(notacao.value !== ''){
        /* criando tabela */
        let tablecriando = document.createElement('table')
        tablecriando.style.backgroundColor = color.gerar()      
        /* crinado a linha do table */
        let tabela = document.getElementById('note').appendChild(tablecriando)
        let linha = tabela.insertRow()
        /* desabilitar a notação como se tal coisa fosse cumprida */ 
        linha.onclick = function(){
            tablecriando.style.backgroundColor = '#141414'
            tablecriando.style.color = 'white'
        }
        /* inserido notação na tabela td */
        linha.insertCell().innerHTML = notacao.value
        notacao.value = ''
    }
    else{
        alert('Digite algo no Bloco para Ser Adicionado')
    }
}

/* fechar area de notação */
function exit(){
    let note = document.getElementById('new-note')
    /* note.style.position = 'absolute' */
    note.style.backgroundColor = 'red'
}