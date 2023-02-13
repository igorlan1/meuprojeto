import Controls from "./controls.js";
import { minutesDisplay, secondsDisplay } from "./elements.js";

const controls = Controls();

export default function () {
  let timerTimeOut;

  let minutes = Number(minutesDisplay.textContent);

  function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  //timer
  function countdown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);
      let isFinished = minutes <= 0 && seconds <= 0;

      updateTimerDisplay(minutes, 0);

      if (isFinished) {
        controls.resetControls();
        clearTimeout(countdown);
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }
      updateTimerDisplay(minutes, seconds - 1);

      countdown();
    }, 1000);
  }

  function hold() {
    clearTimeout(timerTimeOut);
  }

  function resetTimer() {
    clearTimeout(timerTimeOut);
    updateTimerDisplay(minutes, 0);
  }

  return {
    updateTimerDisplay,
    resetTimer,
    countdown,
    hold
  };
}
