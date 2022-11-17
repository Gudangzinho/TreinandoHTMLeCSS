/*------------------Validadorers------------------*/
let validaNome = false;
let validaEmail = false;
let validaAssunto = false;


/*----------------------Nome--------------------------*/

let nome = document.querySelector('#nome');
let erroNome = document.querySelector('#erroNome');

function validarNome(){
    if (nome.value.length < 3){
        erroNome.innerHTML = 'Nome Inválido';
        validaNome = false;
    } else {
        erroNome.innerHTML = '';
        validaNome = true;
    }
}

/*----------------------Email--------------------------*/

let email = document.querySelector('#email');
let erroEmail = document.querySelector('#erroEmail');

function validarEmail() {
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {erroEmail.innerHTML = 'Email Inválido'
    validaEmail = false;
    }else{
        erroEmail.innerHTML = '';
        validaEmail = true;
    }
}

/*----------------------Assunto--------------------------*/

let assunto = document.querySelector('#assunto');
let erroAssunto = document.querySelector('#erroAssunto');

function validarAssunto(){
    if (assunto.value.length > 100){
        erroAssunto.innerHTML = 'Numero de Caracteres excedido (max: 100)';
        validaAssunto = false;
    }else{
        erroAssunto.innerHTML = '';
        validaAssunto = true;
    }
}

/*----------------------Botão--------------------------*/

function valida() {
    if (validaNome == true && validaEmail == true && validaAssunto == true){
        alert('Enviado!')
}else{
    alert('Preencha todos os campos.')
    }
}