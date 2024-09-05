// Button Handling + Event Listeners
let clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", resetForm);

let calculateBtn = document.getElementById("calculateBtn");
calculateBtn.addEventListener("click", calculateMortgage);

let mortgageAmount = document.getElementById("mortgageAmount");
let mortgageTerm = document.getElementById("mortgageTerm");
let interestRate = document.getElementById("interestRate");
let repayment = document.getElementById("repayment");
let interestOnly = document.getElementById("interestOnly");

mortgageAmount.addEventListener("keyup", commaSeperateAuto);
mortgageTerm.addEventListener("keyup", acceptInt);
interestRate.addEventListener("keyup", acceptFloat)

mortgageAmount.addEventListener("click", ()=>{clearInputError(mortgageAmount,1)});
mortgageTerm.addEventListener("click", ()=>{clearInputError(mortgageTerm,2)});
interestRate.addEventListener("click", ()=>{clearInputError(interestRate,3)})
repayment.addEventListener("click", ()=>{document.getElementById("error4").style.display = "none";})
interestOnly.addEventListener("click", ()=>{document.getElementById("error4").style.display = "none";})



// Utilities
function resetError() {
  mortgageAmount.classList.remove("error");
  mortgageTerm.classList.remove("error");
  interestRate.classList.remove("error");
  document.getElementById("error1").style.display = "none";
  document.getElementById("error2").style.display = "none";
  document.getElementById("error3").style.display = "none";
  document.getElementById("error4").style.display = "none";
}

function clearInputError(id, num){
    id.classList.remove("error");
    document.getElementById(`error${num}`).style.display = "none";
}

function defaultResults() {
  document.getElementById("default").style.display = "block";
  document.getElementById("calculated-result").style.display = "none";
}

function acceptFloat(event){
  event.target.value = event.target.value.replace(/[^0-9\.]/g, "");
}

function acceptInt(event){
  event.target.value = event.target.value.replace(/[^0-9\.]/g, "").replace(/\./g, "");
}

function commaSeperateAuto(event) {
  // remove all non-numeric characters from the input
  let removeChars = event.target.value.replace(/[^0-9\.]/g, "");
  // remove dot if the first character is a dot
  let removeDot = removeChars.replace(/\./g, "");
  // format the number with commas
  let formattedNumber = removeDot.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  event.target.value = formattedNumber;
}

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

// Event Handlers
function resetForm() {
  document.getElementById("mortgageForm").reset();
  defaultResults();
  resetError();
}

function roundToTwo(num) {
  return  Math.round(+num * 100) / 100;
}

function calRepayment(mortgageAmount, interestRate, mortgageTerm) {  
  let numberOfPayments = mortgageTerm * 12;
  let total = (mortgageAmount * interestRate/100)+mortgageAmount*1;
  let monthlyRepayment = (total/numberOfPayments).toFixed(2);
  return {monthlyRepayment, total};
}

function calInterestOnly(mortgageAmount, interestRate, mortgageTerm) {
  let numberOfPayments = mortgageTerm * 12;
  let interestOnly = (mortgageAmount * (interestRate / 100)).toFixed(2);
  let interestPerMonth = interestOnly/numberOfPayments;
  return {interestOnly, interestPerMonth};
}

function calculateMortgage(event) {
  event.preventDefault();

  // remove comma before calculation
  let mortgageNumber = mortgageAmount.value.replace(/,/g, "");

  //  Check Empty Input
  let isValid = true;
  if (mortgageNumber === "") {
    mortgageAmount.classList.add("error");
    document.getElementById("error1").style.display = "block";
    isValid = false;
  }
  if (mortgageTerm.value === "") {
    mortgageTerm.classList.add("error");
    document.getElementById("error2").style.display = "block";
    isValid = false;
  }
  if (interestRate.value === "") {
    interestRate.classList.add("error");
    document.getElementById("error3").style.display = "block";
    isValid = false;
  }
  if(interestOnly.checked == false && repayment.checked == false) {
    document.getElementById("error4").style.display = "block";
    isValid = false;
  }

  // Calculate
  if (!isValid) {
    defaultResults();
  } else {
    resetError();
    if (repayment.checked) {
      let result = calRepayment(mortgageNumber, interestRate.value, mortgageTerm.value);
      document.getElementById("monthly").innerHTML 
        = `£${numberWithCommas(roundToTwo(result.monthlyRepayment))}`;
      document.getElementById("total").innerHTML 
        = `£${numberWithCommas(roundToTwo(result.total))}`;
      console.log("repayment cal");
      
    } else {
      let result = calInterestOnly(mortgageNumber, interestRate.value, mortgageTerm.value);
      document.getElementById("monthly").innerHTML 
        = `£${numberWithCommas(roundToTwo(result.interestPerMonth))}`;
      document.getElementById("total").innerHTML 
        = `£${numberWithCommas(roundToTwo(result.interestOnly))}`;
      console.log("another cal");
      
    }
    document.getElementById("default").style.display = "none";
    document.getElementById("calculated-result").style.display = "block";
  }
}
