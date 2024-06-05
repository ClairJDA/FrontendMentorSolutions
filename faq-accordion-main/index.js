document.addEventListener("click", handleClick);

function handleClick(event) {
  const index = indexInClass(event.target);
  const ans = document.getElementsByClassName("answer");
  const icon = document.getElementsByClassName("icons");
  ans[index].classList.toggle("inactive");
  icon[index].classList.toggle("minus");
}

// https://stackoverflow.com/questions/34910042/get-index-of-class
function indexInClass(node) {
  var collection = document.getElementsByClassName(node.className);
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] === node) return i;
  }
  return -1;
}
