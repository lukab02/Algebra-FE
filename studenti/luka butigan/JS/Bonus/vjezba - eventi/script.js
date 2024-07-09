var btnEl = document.getElementById('btn');
var pEl = document.querySelector('p');
var inpEl = document.getElementById('input');

//

function onClickHandler() {
  console.log('Click');
}
function onpClickHandler() {
  console.log('Click on pharagraph');
}
function onInputHandler(event) {
  console.log(event.target.value);
}

btnEl.addEventListener('click', onClickHandler);
pEl.addEventListener('click', onpClickHandler);
inpEl.addEventListener('input', onInputHandler);
