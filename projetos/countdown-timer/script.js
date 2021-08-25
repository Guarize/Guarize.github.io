const days = document.getElementById("day");
const hours = document.getElementById("hour");
const minutes = document.getElementById("minute");
const seconds = document.getElementById("second");

const countdown = () => {
  const countDate = new Date("January 11, 2024 00:00:00").getTime();
  const now = new Date().getTime();
  const difference = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const totalDays = Math.floor(difference / day);
  const totalHours = Math.floor((difference % day) / hour);
  const totalMinutes = Math.floor((difference % hour) / minute);
  const totalSeconds = Math.floor((difference % minute) / second);

  days.innerText = totalDays;
  hours.innerText = totalHours;
  minutes.innerText = totalMinutes;
  seconds.innerText = totalSeconds;
};

setInterval(countdown, 1000);
