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
let inputCvc = document.getElementById('cvc');

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
    if (inputCard.value.match(/[a-z]/i)) {
        let erro = document.getElementById('card-erro-msg');
        erro.innerHTML = "Wrong format, numbers only."
        inputCard.classList.add('erro');
    } else {
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
        } if (inputCvc.value == "") {
            let erro = document.getElementById('cvc-erro-msg');
            erro.innerHTML = "can't be blank";
            inputCvc.classList.add('erro');
        } else {
            document.getElementById('container-card-1').style.display = "none";
            document.getElementById('box2').style.display = "flex";
        }
    }
    //  else {
    //     let erroRemove = document.getElementsByClassName('erro');
    //     if (erroRemove.length >= 0) {
    //         erroRemove[0].classList.remove('erro');
    //         erroRemove[0].classList.remove('erro');
    //     }
    // }
}