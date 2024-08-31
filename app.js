// DOM Selectors

const billValue = document.getElementById("bill-input");
const pepoleValue = document.getElementById("persons-input");
const tipAmountValue = document.getElementById("tip-amount");
const totalTipValue = document.getElementById("Total-resault");
const tips = document.querySelectorAll("#tipValue");
const customTip = document.querySelector("#customTip");
const resetButton = document.querySelector(".Reset");
const error = document.querySelector(".wrong");

// logics

billValue.addEventListener("input", billValueFunc);
pepoleValue.addEventListener("input", pplValueFunc);
customTip.addEventListener("input", customTipFunc);
tips.forEach(function (val) {
    val.addEventListener('click', handleClick);
});
resetButton.addEventListener('click', reset);

billValue.value = "0.0"
pepoleValue.value = "1"
tipAmountValue.innerHTML = "$" + (0.0).toFixed(2)
totalTipValue.innerHTML = "$" + (0.0).toFixed(2)

let billInputs = 0.0;
let peopleInputs = 1;

// function setup

function billValueFunc(){
    billInputs = parseFloat(billValue.value)
    calculating()
}

function pplValueFunc() {
    peopleInputs = parseFloat(pepoleValue.value)

    if (peopleInputs < 1){
        error.classList.add("error")
        pepoleValue.style.border = '2px solid red'
    }else {
        error.classList.remove("error")
        pepoleValue.style.border = '2px solid #26c0ab'
    }
    calculating()
}

function customTipFunc() {
    tipValue = parseFloat(customTip.value / 100)
    tips.forEach(function(val) {
        val.classList.remove("true");
    })
    calculating()
}

function handleClick(event){
    tips.forEach(function(val){
        val.classList.remove("true")
        if(event.target.innerHTML == val.innerHTML){
            val.classList.add("true");
            tipValue = parseFloat(val.innerHTML) / 100;
        }
    })
    calculating()
}

function calculating(){
    if (peopleInputs >= 1) {
        let tipAmount = (billInputs * tipValue) / peopleInputs;
        let total = (billInputs + tipAmount) / peopleInputs;
        tipAmountValue.innerHTML = "$" + tipAmount.toFixed(2)
        totalTipValue.innerHTML = "$" + total.toFixed(2)
    }
}

function reset(){
    billValue.value = "0.0"
    pepoleValue.value = "1"
    billValueFunc()
    pplValueFunc()
    customTip.value = ""
}

// tips loop click
