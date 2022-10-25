function Clock(clockPlace) {
  let clockContent = document.querySelector(clockPlace);
  this.showTime = function () {
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
    clockContent.innerHTML = `${hours}:${minutes}:${seconds}`;
  };
  this.timer = setInterval(this.showTime, 1000);
}
Clock.prototype.stopClock = function (stopClockBtn) {
  this.stopClockBtn = document.querySelector(stopClockBtn);
  this.stopClockBtn.addEventListener("click", () => {
    clearInterval(this.timer);
  });
};
let clock = new Clock(".js--clock");
clock.stopClock(".js--stopBtn");
