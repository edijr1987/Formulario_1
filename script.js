window.console.log("eu sou o console")

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const telephoneInput = document.querySelector('#telephone');
const addressInput = document.querySelector('#address');
const submitButton = document.querySelector("#submit-button");


const errorMessage = document.querySelector(".msg");

const items = document.querySelector(".items");

submitButton.addEventListener("click", (e) => {
    e.preventDefault()

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const telephoneValue = telephoneInput.value
    const addressValue = addressInput.value

    if(nameValue === "") {
        errorMessage.textContent = "Favor preencher o seu nome"
        errorMessage.classList = "error"
    } else if (emailValue === "") {
        errorMessage.textContent = "Favor preencher o seu email"
        errorMessage.classList = "error"
    } else if (telephoneValue === '') {
        errorMessage.textContent = 'Favor preencher o seu telefone'
        errorMessage.classList = "error"
    } else if (addressValue === '') {
        errorMessage.textContent = 'Favor preencher o seu endereço'
        errorMessage.classList = "error"
    }

    // Ou também pode fazer assim, porém, o erro não aparece de forma individual, mas sim de maneira genérica...

    // if (nameValue === "" || emailValue === "" || telephoneValue === "" || addressValue == "") {
    //     errorMessage.textContent = "Favor preencher todos os campos!!!";
    //     errorMessage.classList = "error"; //busca na classe error
        
    //     //tempo para a faixa error ficar em tela
    //     setTimeout(() => {
    //         errorMessage.textContent = "";
    //         errorMessage.classList = "";
    //     }, 3000);        
    //     return;  //sai da função      
    // }

    //cria <li>
    const li = document.createElement("li");
    li.classList = "item";
    li.innerHTML = `Nome: ${nameValue}<br> Email: ${emailValue}<br> Telephone: ${telephoneValue}<br> 
    Address: ${addressValue}`;

    //adiciona <li>
    items.appendChild(li);

    //limpa todos os campos no final
    nameInput.value = "";
    emailInput.value = "";
    telephoneInput.value = '';
    addressInput.value = ''
});
