const cardPassword = document.getElementById('senha-usuario')
const cardPasswordConfirm = document.getElementById('senha-usuario-confirmar')
const cardButton = document.querySelector('.button-entrar')
cardButton.addEventListener('click', confimarSenha)
console.log(cardPassword, cardPasswordConfirm)

function confimarSenha(){
    if(cardPassword.value!= cardPasswordConfirm.value){
        alert("As senhas não conferem")
    }
    else{
        alert("O usuário está logado")
    }
} 
