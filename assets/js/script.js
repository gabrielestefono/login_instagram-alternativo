/* Pegar valores do DOM*/

let email = document.getElementById('email');
let pass = document.getElementById('pass');
let inputEmail = document.getElementById('input-email');
let inputPass = document.getElementById('input-pass');
let inputPassSpace = document.getElementById('space');

/* Criar novos valores */

// span 1
let span1 = document.createElement('span');
span1.className = 'login__form--form_email-span';
span1.textContent = 'Telefone, nome de usuário ou email';

// span2
let span2 = document.createElement('span');
span2.className = 'login__form--form_pass-span';
span2.textContent = 'Senha';

// Botao
let button = document.createElement('button');
button.className = 'login__form--form_pass-button';
button.textContent = 'Mostrar';
button.id = 'show-hide';
button.type = 'button'

/* Chamar Eventos */

pass.addEventListener('input', ()=>{
    if(inputPass.value != ''){
        inputPassSpace.insertBefore(span2, inputPass);
        inputPass.className = 'login__form--form_pass-input1';
        inputPass.placeholder = '';
        pass.className = 'login__form--form_pass1'
        pass.appendChild(button);
    }else{
        inputPassSpace.removeChild(span2)
        button.remove();
        inputPass.placeholder = 'Senha';
        inputPass.className = 'login__form--form_pass-input';
    }
})


email.addEventListener('input', ()=>{
    if(inputEmail.value != ''){
        email.insertBefore(span1, inputEmail);
        inputEmail.className = 'login__form--form_email-input1';
        inputEmail.placeholder = '';
    }else{
        email.removeChild(span1)
        inputEmail.placeholder = 'Telefone, nome de usuário ou email';
        inputEmail.className = 'login__form--form_email-input';
    }
})

button.addEventListener('click', ()=>{
    if(button.textContent == 'Mostrar'){
        button.textContent = 'Ocultar';
        inputPass.type = 'text'
    }else{
        button.textContent = 'Mostrar';
        inputPass.type = 'password'
    }
})



//-----------------------------------------------------------------------------------------------------------------------------------------//

/* Imagens dinâmicas no telefone do display */


let display = document.getElementById('display');
var click = 0;

let img1 = 'url(assets/img/screenshot1.png)';
let img2 = 'url(assets/img/screenshot2.png)';
let img3 = 'url(assets/img/screenshot3.png)';
let img4 = 'url(assets/img/screenshot4.png)';


let trocarImagem = ()=>{
    console.log('Sim')
    if(click == 0){
        display.style.backgroundImage = img1;
    }else if(click == 1){
        display.style.backgroundImage = img2;
    }else if(click == 2){
        display.style.backgroundImage = img3;
    }else if(click == 3){
        display.style.backgroundImage = img4;
    }else{
        click = 0
        display.style.backgroundImage = img1;
    }
    click = click + 1
}

trocarImagem();     

setInterval(trocarImagem, 4000)