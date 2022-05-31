"use strict";

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;
    this.refs = {
      dayCounters: this.selector.querySelector('[data-value="days"]'),
      hoursCounters: this.selector.querySelector('[data-value="hours"]'),
      minsCounters: this.selector.querySelector('[data-value="mins"]'),
      secsCounters: this.selector.querySelector('[data-value="secs"]'),
    };
  }

  timerValues(days, hours, mins, secs) {
    (this.refs.dayCounters.textContent = days),
      (this.refs.hoursCounters.textContent = hours),
      (this.refs.minsCounters.textContent = mins),
      (this.refs.secsCounters.textContent = secs);
  }

  changeTimerValues() {
    setInterval(() => {
      const time = this.targetDate - Date.now();
      this.days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      this.secs = Math.floor((time % (1000 * 60)) / 1000);

      this.timerValues(this.days, this.hours, this.mins, this.secs);
    }, 1000);
  }
}

const timer1 = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("2022, 05, 10"),
});

timer1.changeTimerValues();

const timer2 = new CountdownTimer({
  selector: "#timer-2",
  targetDate: new Date("2023, 07, 17"),
});

timer2.changeTimerValues();
