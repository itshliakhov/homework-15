class Clock {
  constructor({ clockContent, clockStopBtn }) {
    this.clockPlace = document.querySelector(clockContent);
    this.clockStopBtn = document.querySelector(clockStopBtn);
  }
  showTime = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    this.clockPlace.innerHTML = `${hours}:${minutes}:${seconds}`;
  };
  timer = setInterval(this.showTime, 1000);
  stopClock() {
    this.clockStopBtn.addEventListener("click", () => {
      clearInterval(this.timer);
    });
  }
}
let clock = new Clock({
  clockContent: ".js--clock",
  clockStopBtn: ".js--stopBtn",
});
clock.stopClock();
