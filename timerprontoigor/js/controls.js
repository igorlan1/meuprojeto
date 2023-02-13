import Timer from "./timer.js";

import {
  buttonPlay,
  buttonPause,
  buttonFlorestOn,
  buttonFlorestOff,
  buttonRainOn,
  buttonRainOff,
  buttonCoffeShopOn,
  buttonCoffeShopOff,
  buttonFirePlaceOn,
  buttonFirePlaceOff,
  minutesDisplay
} from "./elements.js";

import { audioFlorest, audioRain, audioCoffe, audioFire } from "./sounds.js";

const timer = Timer();

export default function () {
  function resetControls() {
    buttonPause.classList.add("hide");
    buttonPlay.classList.remove("hide");
    florestOff();
    rainOff();
    coffeOff();
    fireOff();
  }

  function play() {
    buttonPlay.classList.add("hide");
    buttonPause.classList.remove("hide");
    timer.countdown();
  }

  function pause() {
    resetControls();
    timer.hold();
  }

  function stop() {
    resetControls();
    let newMinutes = Number(prompt("quantos minutos ?"));
    if (!newMinutes) {
      alert("Só leio numero porra ! Tenta denovo com numero");
      stop();
      return;
    }
    pause();

    timer.minutes = newMinutes;
    timer.updateTimerDisplay(timer.minutes, 0);
  }

  function plus() {
    timer.updateTimerDisplay(Number(minutesDisplay.textContent) + 5, 0);
  }

  function reduce() {
    if (minutesDisplay.textContent <= 5) {
      return timer.updateTimerDisplay(0, 0);
    }
    timer.updateTimerDisplay(Number(minutesDisplay.textContent) - 5, 0);
  }

  function florestOn() {
    buttonFlorestOn.classList.add("hide");
    buttonFlorestOff.classList.remove("hide");
    rainOff();
    coffeOff();
    fireOff();
    audioFlorest.play();
  }

  function florestOff() {
    buttonFlorestOn.classList.remove("hide");
    buttonFlorestOff.classList.add("hide");
    audioFlorest.pause();
  }

  function rainOn() {
    buttonRainOn.classList.add("hide");
    buttonRainOff.classList.remove("hide");
    florestOff();
    coffeOff();
    fireOff();
    audioRain.play();
  }

  function rainOff() {
    buttonRainOn.classList.remove("hide");
    buttonRainOff.classList.add("hide");
    audioRain.pause();
  }

  function coffeOn() {
    buttonCoffeShopOn.classList.add("hide");
    buttonCoffeShopOff.classList.remove("hide");
    florestOff();
    rainOff();
    fireOff();
    audioCoffe.play();
  }

  function coffeOff() {
    buttonCoffeShopOn.classList.remove("hide");
    buttonCoffeShopOff.classList.add("hide");
    audioCoffe.pause();
  }

  function fireOn() {
    buttonFirePlaceOn.classList.add("hide");
    buttonFirePlaceOff.classList.remove("hide");
    florestOff();
    rainOff();
    coffeOff();
    audioFire.play();
  }

  function fireOff() {
    buttonFirePlaceOn.classList.remove("hide");
    buttonFirePlaceOff.classList.add("hide");
    audioFire.pause();
  }
  return {
    resetControls,
    play,
    pause,
    plus,
    reduce,
    stop,
    florestOn,
    rainOn,
    coffeOn,
    fireOn,
    florestOff,
    rainOff,
    coffeOff,
    fireOff
  };
}
