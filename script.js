const frm = document.querySelector("form")
const nick = document.getElementById("nome")
const phone = document.getElementById("telefone")
const mail = document.getElementById("email")
const nomes = []
const telefones = []
const emails = []

let linhas = ""

frm.addEventListener("submit", function(e) {
    e.preventDefault()

    adicionaLinha()
    atualizaLista()
})

function adicionaLinha() {
    
    if(nomes.includes(nick.value) || telefones.includes(phone.value) || emails.includes(mail.value)) {
        alert(`ALGUM DESSES DADOS: NOME / TELEFONE / E-MAIL JÁ FOI CADASTRADO!!!`)
    }else {
    nomes.push(nick.value)
    telefones.push(phone.value)
    emails.push(mail.value)

    let linha = `<tr>`
    linha += `<td>${nick.value}</td>`
    linha += `<td>${phone.value}</td>`
    linha += `<td>${mail.value}</td>`
    linha+= `</tr>`

    linhas += linha
    }
    nick.value = ""
    phone.value = ""
    mail.value = ""
}

function atualizaLista() {
    const tabelaContatos = document.querySelector("tbody")
    tabelaContatos.innerHTML = linhas
}

