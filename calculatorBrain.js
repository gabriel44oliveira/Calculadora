var result = document.getElementById("result");
var number1
var number2
var operacao

function onNumberClicked(numberButton){
    
    if(result.innerHTML == "0"){
        result.innerHTML = numberButton.innerHTML;
    }
    else{
        result.innerHTML += numberButton.innerHTML;
    }
}
function onClearClicked(){
    result.innerHTML = "0";
    number2 ="0"
    number1 = "0"
    operacao = "0"
}

function onAddClicked(){
    number1 = Number(result.innerHTML)
    operacao = 1
    onClearClicked()
}
function onSubtractClicked(){
    number1 = Number(result.innerHTML)
    operacao = 2
    onClearClicked()
}

function onDivideClicked(){
    number1 = Number(result.innerHTML)
    operacao = 3
    onClearClicked()
}

function onMultiplyCliked(){
    number1 = Number(result.innerHTML)
    operacao = 4
    onClearClicked()
}

function onEqualsClicked(){
    if (operacao == 1){
        number2 = Number(result.innerHTML)
        result.innerHTML = number1+number2
    }
    if (operacao == 2){
        number2 = Number(result.innerHTML)
        result.innerHTML = number1-number2
    }
    if (operacao == 3){
        number2 = Number(result.innerHTML)
        if (number2 == 0){
            result.innerHTML = "Não é possível dividir por 0"
        } else {
            result.innerHTML = number1/number2
        }
    }
    if (operacao == 4){
        number2 = Number(result.innerHTML)
        result.innerHTML = number1*number2
    }
} 