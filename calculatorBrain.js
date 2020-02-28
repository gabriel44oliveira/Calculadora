var result = document.getElementById("result");
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
}

function onDivideClicked(){
    result.innerHTML = result.innerHTML + "/"
}

function onAddClicked(){
    result.innerHTML = result.innerHTML + "+"
}

function onSubtractClicked(){
    result.innerHTML = result.innerHTML + "-"
}

function onMultiplyCliked(){
    result.innerHTML = result.innerHTML + "*"
}

function onEqualsClicked(){
    result = 
    result.innerHTML = "="
}
