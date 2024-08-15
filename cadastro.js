//VERIFICVAÇÃO DE CADASTRO
const form = document.getElementById('form')
const nome = document.getElementById('nome')
const nasc = document.getElementById('nascimento')
const email = document.getElementById('email')
const fone = document.getElementById('fone')
const user = document.getElementById('username')
const pass1 = document.getElementById('senha1')
const pass2 = document.getElementById('senha2')
const foto = document.getElementById('foto')
let cadastro = 0



function checkingInputs () {
    //VALIDAÇÃO DO NOME COMPLETO
    nome.addEventListener("blur", (e) => {
        console.log(nome.value);
        if (nome.value.length < 3) {
            alert("No Mínimo 03 Letras...")
        } else{

        }
    
    })

    //VALIDAÇÂO DA DATA DE NASCIMENTO
    nasc.addEventListener("blur", (e) => {
        console.log(nasc.value);
    
    })

    //VALIDAÇÃO DO EMAIL
    email.addEventListener("blur", (e) => {
        console.log(email.value);
    
    })

    //VALIDAÇÃO DE FONE
    fone.addEventListener("blur", (e) => {
        console.log(fone.value);
    
    })

    //VALIDAÇÃO DE USERNAME
    user.addEventListener("blur", (e) => {
        console.log(user.value);
    
    })

    //VALIDAÇÃO DA 1° SENHA
    pass1.addEventListener("blur", (e) => {
        console.log(pass1.value);
    
    })

    //VALIDAÇÃO DA 2° SENMHA
    pass2.addEventListener("blur", (e) => {
        console.log(pass2.value);
    
    })

    foto.addEventListener("blur", (e) => {
        console.log(foto.value);
    
    })



    //CADASTRAR
  
}

checkingInputs()
form.addEventListener('submit', (e) => {
    e.preventDefault()
    //checkInputs()
    //confere()
    })