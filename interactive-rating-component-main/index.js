function submitted(event, rating) {
  event.preventDefault();

  var x = document.getElementById("thankyou");
  var y = document.getElementById("firstcard");

  x.style.display = "flex";
  y.style.display = "none";

  var score = document.getElementById("score");
  score.textContent = rating.value;
}