
const api_address = "https://api.adviceslip.com/advice";
const advice_id = document.getElementById("question-number");
const advice_quote = document.getElementById("advice-quote");
const diceBtn = document.getElementById("dice");

diceBtn.addEventListener("click", randomAdvice);

function randomAdvice(){
    fetch(api_address)
    .then(response => {
      if (response.ok) {
        return response.json(); // Parse the response data as JSON
      } else {
        throw new Error('API request failed');
      }
    })
    .then(data => {
      advice_id.innerHTML = data.slip.id;
      advice_quote.innerHTML = data.slip.advice;
    })
    .catch(error => {
      advice_id.innerHTML = "000";
      advice_quote.innerHTML = error;
    });
}
