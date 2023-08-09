let cardNumer = 0
let nameChange = document.getElementById('name-sub');
let yearChange = document.getElementById('year-sub');
let monthChange = document.getElementById('month-sub');
let cardNumerChange = document.getElementById('card-number-change');
let cvcChange = document.getElementById('cvc-change');

let inputCard = document.getElementById('card');
let inputName = document.getElementById('name');
let inputDataMM = document.getElementById('mm');
let inputDataYY = document.getElementById('yy');


function setCardNumber() {
    let input = document.getElementById('card');
    cardNumerChange.innerHTML = `${input.value}`;
}

function setName() {
    let input = document.getElementById('name');
    nameChange.innerHTML = `${input.value}`;
}

function setMonth() {
    let input = document.getElementById('mm');
    monthChange.innerHTML = `${input.value}`;
}

function setYear() {
    let input = document.getElementById('yy');
    yearChange.innerHTML = `${input.value}`;
}

function setCvc() {
    let input = document.getElementById('cvc');
    cvcChange.innerHTML = `${input.value}`;
}

function contador() {
    let input1 = document.getElementById('card');
    if (input1.value.length == 4 || input1.value.length == 9 || input1.value.length == 14) {
        input1.value += " ";
    }
}

function confirm() {
    if (inputCard.value == "") {
        let erro = document.getElementById('card-erro-msg');
        erro.innerHTML = "can't be blank"
        inputCard.classList.add('erro');
    } if (inputName.value == "") {
        let erro = document.getElementById('name-erro-msg');
        erro.innerHTML = "can't be blank"
        inputName.classList.add('erro')
    } if (inputName.value == "") {
        let erro = document.getElementById('name-erro-msg');
        erro.innerHTML = "can't be blank"
        inputName.classList.add('erro')
    } if (inputDataMM.value == "") {
        let erro = document.getElementById('data-erro');
        erro.innerHTML = "can't be blank"
        inputDataMM.classList.add('erro')
    } if (inputDataYY.value == "") {
        let erro = document.getElementById('data-erro');
        erro.innerHTML = "can't be blank"
        inputDataYY.classList.add('erro')
    }


    let erroRemove = document.getElementsByClassName('erro');
    if(erroRemove.length >= 0){
    erroRemove[0].classList.remove('erro');
    erroRemove[0].classList.remove('erro');
    }
    console.log(document.getElementsByClassName('erro'));
}