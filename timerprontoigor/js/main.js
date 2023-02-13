import Controls from "./controls.js";
import Timer from "./timer.js";
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonPlus,
  buttonReduce,
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

Timer();

const controls = Controls({
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
});

buttonPlay.addEventListener("click", controls.play);
buttonPause.addEventListener("click", controls.pause);
buttonStop.addEventListener("click", controls.stop);
buttonPlus.addEventListener("click", controls.plus);
buttonReduce.addEventListener("click", controls.reduce);

buttonFlorestOn.addEventListener("click", controls.florestOn);
buttonFlorestOff.addEventListener("click", controls.florestOff);

buttonRainOn.addEventListener("click", controls.rainOn);
buttonRainOff.addEventListener("click", controls.rainOff);

buttonCoffeShopOn.addEventListener("click", controls.coffeOn);
buttonCoffeShopOff.addEventListener("click", controls.coffeOff);

buttonFirePlaceOn.addEventListener("click", controls.fireOn);
buttonFirePlaceOff.addEventListener("click", controls.fireOff);
