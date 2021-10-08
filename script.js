let calcDeposit = 0;
let calcRate = 0;
let calcYears  = 0;
let calcAmount = 0;

// INPUTS
// Rate input
const rateInput = document.querySelector('.rate-show');
const updateRate = (value) => {
    rateInput.innerHTML = value + "%";
    calcRate = value;
}

// CALCULATIONS
// Get amount calculation
const getAmount = (investment, rate, years) => {
    let ratePercentage = rate / 100;
    console.log(ratePercentage);
    let amount = investment*(1+(ratePercentage*years))
    return amount;
}

// Get future year calculation
const getYearFuture = () => {
    let date =  new Date().getFullYear();
    return date + Number(calcYears);
}

// DATA FLOW
// Get Data from form
const addClass = (currentClass, newClass) => {
    document.querySelector(currentClass).classList.add(newClass)
}

const removeClass = (currentClass, newClass) => {
    document.querySelector(currentClass).classList.remove(newClass)
}

const getDataForm = () => {
    calcDeposit = document.querySelector('#deposit').value
    if (calcDeposit == "") {
        addClass(".error", "active")
        document.querySelector('.error').innerHTML = "Please add an Amount"
    } else {
        removeClass(".error", "active")
    }
    calcRate = document.querySelector('#rate').value
    calcYears = document.querySelector('#years').value
    calcAmount = getAmount(calcDeposit, calcRate, calcYears)
}

// Update phrase
const updatePhrase = () => {
    document.querySelector('.span-deposit').innerHTML = calcDeposit
    document.querySelector('.span-rate').innerHTML = calcRate
    document.querySelector('.span-amount').innerHTML = calcAmount
    document.querySelector('.span-year').innerHTML = getYearFuture()
    console.log(calcYears);
}

function compute() {
    addClass(".result", "active")
    getDataForm()
    updatePhrase()
}
        