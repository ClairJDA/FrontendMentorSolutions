const input = { bill: "", tip: "", people: "" };
const result = { tip: "", total: "" };
const state = { errState: "", selectedOption: "" };

const billAmount = document.getElementById("billAmountField");
const tipOptionSelected = document.getElementsByName("tip");
const customTip = document.getElementById("customTipField");
const peopleNum = document.getElementById("peopleNumField");
const msg = document.getElementById("zero");
const resetBtn = document.getElementById("reset");

billAmount.addEventListener("change", handelBillAmountField);
peopleNum.addEventListener("change", handlePeopleNUmField);
customTip.addEventListener("focus", handleCustomField);
resetBtn.addEventListener("click", reset);

window.addEventListener("click", function () {
  if (input.bill && input.tip && input.people) {
    calcTotal(input.bill, input.tip, input.people);
    displayResult();
  }
});

// ***************************************************************
// *********************Handle InputField************************
// ***************************************************************
// https://stackoverflow.com/questions/8922002/attach-event-listener-through-javascript-to-radio-button
tipOptionSelected.forEach(handleTipSelect);
function handleTipSelect(value, index, array) {
  tipOptionSelected[index].onclick = function () {
    state.selectedOption = index;
    if (customTip.value) {
      customTip.value = "";
    }
    input.tip = this.value;
  };
}

function handleCustomField() {
  clearTipOption();
  customTip.onchange = function () {
    input.tip = strChecked(customTip.value);
  };
}

function handlePeopleNUmField() {
  input.people = strChecked(peopleNum.value);
  if (state.errState) {
    state.errState = false;
    handleError();
  }
  if (peopleNum.value === "0") {
    state.errState = true;
    handleError(); // can't be zero
  }
}

function handelBillAmountField() {
  input.bill = strChecked(billAmount.value);
}

// ***************************************************************
// *********************Utilities function************************
// ***************************************************************
function calcTotal(billAmount, tipAmount, peopleNum) {
  totalTip = (tipAmount / 100) * billAmount;
  result.tip = (totalTip / peopleNum).toFixed(2);
  result.total = ((totalTip + billAmount) / peopleNum).toFixed(2);
}

function strChecked(str) {
  // If character string or empty string return false, else return number
  return !!+str && +str;
}

function handleError() {
  msg.classList.toggle("inactive");
  peopleNum.classList.toggle("error");
}

function clearTipOption() {
  let selectedOption = state.selectedOption;
  if (!!selectedOption || selectedOption === 0) {
    tipOptionSelected[selectedOption].checked = false;
  }
}

function displayResult() {
  document.getElementById("tip").innerHTML = result.tip;
  document.getElementById("total").innerHTML = result.total;
}

function reset() {
  //clear result
  result.tip = "0.00";
  result.total = "0.00";
  input.bill = "";
  input.bill = "";
  input.people = "";

  //clear input
  billAmount.value = "";
  customTip.value = "";
  peopleNum.value = "";

  //clear tip option
  clearTipOption();

  //reset flag
  state.errState = false;

  displayResult();
}
