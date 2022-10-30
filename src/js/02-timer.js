// Importing Flatpickr
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
//Importing Notlifix
import Notiflix from 'notiflix';

refs = {
  buttonEl: document.querySelector('button'),
  daysQuantitySpanEl: document.querySelector('[data-days]'),
  hoursQuantitySpanEl: document.querySelector('[data-hours]'),
  minutesQuantitySpanEl: document.querySelector('[data-minutes]'),
  secondsdaysQuantitySpanEl: document.querySelector('[data-seconds]'),
};

let currentDate = new Date();
//Setting disabled attribute to button "button freezing"
refs.buttonEl.setAttribute('disabled', true);
let dif = 0;
const options = {
  maxDate: 1661659600000,
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < currentDate) {
      console.log('date is NOK');
      Notiflix.Report.failure(
        'Fatal Error',
        'Please choose a date in the future',
        'Push me to close'
      );
      // window.alert('Please choose a date in the future');
    } else {
      Notiflix.Notify.success('You are on the right track');
      refs.buttonEl.removeAttribute('disabled');
      console.log('date is OK');
      dif = selectedDates[0].getTime() - currentDate;
      // console.log(dif);
      // return dif;
    }
  },
};

//Flatpickr Initialising
flatpickr(' input#datetime-picker', options);

refs.buttonEl.addEventListener('click', onStartButtonClick);
function onStartButtonClick() {
  console.log('click working');
  console.log(dif);
  initializeClock(dif);
}
//
function addLeadingZero(value) {
  if (value.toString().length === 1) {
    value = `0${value}`;
    return value;
  } else return value;
}

function initializeClock(endtime) {
  // console.log(endtime);

  let timeinterval = setInterval(function () {
    // console.log(convertMs(endtime));
    // convertMs(endtime);
    const { days, hours, minutes, seconds } = convertMs(endtime);
    console.log(seconds);
    remainingSecondsQuantity = addLeadingZero(seconds);
    remainingMinutesQuantity = addLeadingZero(minutes);
    remainingHoursQuantity = addLeadingZero(hours);
    remainingDaysQuantity = addLeadingZero(days);
    refs.secondsdaysQuantitySpanEl.textContent = remainingSecondsQuantity;
    refs.minutesQuantitySpanEl.textContent = remainingMinutesQuantity;
    refs.hoursQuantitySpanEl.textContent = remainingHoursQuantity;
    refs.daysQuantitySpanEl.textContent = remainingDaysQuantity;

    if (endtime <= 0) {
      clearInterval(timeinterval);
    }
  }, 1000);
  endtime -= 1000;
  initializeClock(endtime);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  // let ms = 1661539500000 - currentDate.getTime();
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  // console.log({ days, hours, minutes, seconds });

  return { days, hours, minutes, seconds };
}
// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
