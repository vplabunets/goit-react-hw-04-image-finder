buttonStartEl = document.querySelector('[data-start]');
buttonStopEl = document.querySelector('[data-stop]');
console.log(buttonStartEl);

bodyEl = document.querySelector('body');
console.log(bodyEl);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
buttonStartEl.addEventListener('click', onStartButtonClick);
buttonStopEl.addEventListener('click', onStopButtonClick);

function onStartButtonClick() {
  timerId = setInterval(function aaa() {
    bodyEl.style.backgroundColor = getRandomHexColor();
    buttonStartEl.setAttribute('disabled', true);
  }, 1000);
  console.log(buttonStartEl);
}

function onStopButtonClick() {
  clearInterval(timerId);
  buttonStartEl.removeAttribute('disabled');
  console.log(buttonStartEl);
}
