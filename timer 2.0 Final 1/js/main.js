// variables 
const buttonPlay = document.querySelector(".button-play")
const buttonPause = document.querySelector(".button-pause")
const buttonStop = document.querySelector(".button-stop")
const buttonPlus = document.querySelector(".button-plus")
const buttonReduce = document.querySelector(".button-reduce")

const buttonFlorestOn = document.querySelector(".button-florest-on")
const buttonFlorestOff = document.querySelector(".button-florest-off")
const buttonRainOn = document.querySelector(".button-rain-on")
const buttonRainOff = document.querySelector(".button-rain-off")

const buttonCoffeShopOn = document.querySelector(".button-coffe-shop-on")
const buttonCoffeShopOff = document.querySelector(".button-coffe-shop-off")
const buttonFirePlaceOn = document.querySelector(".button-fire-place-on")
const buttonFirePlaceOff = document.querySelector(".button-fire-place-off")

const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")

let timerTimeOut

let minutes = Number(minutesDisplay.textContent)

//sounds
const audioFlorest = new Audio("sounds/floresta.wav")
const audioRain = new Audio("sounds/rain.wav")
const audioCoffe = new Audio("sounds/coffe.wav")
const audioFire = new Audio("sounds/fire.wav")

//events

buttonPlay.addEventListener("click", play)
buttonPause.addEventListener("click", pause)
buttonStop.addEventListener("click", stop)
buttonPlus.addEventListener("click", plus)
buttonReduce.addEventListener("click", reduce)

buttonFlorestOn.addEventListener("click", florestOn)
buttonFlorestOff.addEventListener("click", florestOff)

buttonRainOn.addEventListener("click", rainOn)
buttonRainOff.addEventListener("click", rainOff)

buttonCoffeShopOn.addEventListener("click", coffeOn)
buttonCoffeShopOff.addEventListener("click", coffeOff)

buttonFirePlaceOn.addEventListener("click", fireOn)
buttonFirePlaceOff.addEventListener("click", fireOff)



//functions

function play() {
    buttonPlay.classList.add("hide");
    buttonPause.classList.remove("hide");
    countdown()
}

function pause() {
    resetControls()
    clearTimeout(timerTimeOut)
}

function stop() {
    resetControls()
    let newMinutes = Number(prompt("quantos minutos ?"))
    if (!newMinutes) {
        alert("Só leio numero porra ! Tenta denovo com numero")
        stop()
        return
    }
    pause()

    minutes = newMinutes
    updateTimerDisplay(minutes, 0)
}

function plus() {
updateTimerDisplay((Number(minutesDisplay.textContent) + 5), 0)
}

function reduce() {
    if(minutesDisplay.textContent <= 5) {
       return updateTimerDisplay(0 , 0)
    }
    updateTimerDisplay((Number(minutesDisplay.textContent) - 5), 0)
}

function florestOn() {
    buttonFlorestOn.classList.add("hide")
    buttonFlorestOff.classList.remove("hide")
    rainOff()
    coffeOff()
    fireOff()
    audioFlorest.play()


}

function florestOff() {
    buttonFlorestOn.classList.remove("hide")
    buttonFlorestOff.classList.add("hide")
    audioFlorest.pause()

}

function rainOn() {
    buttonRainOn.classList.add("hide")
    buttonRainOff.classList.remove("hide")
    florestOff()
    coffeOff()
    fireOff()
    audioRain.play()
}

function rainOff() {
    buttonRainOn.classList.remove("hide")
    buttonRainOff.classList.add("hide")
    audioRain.pause()
}

function coffeOn() {
    buttonCoffeShopOn.classList.add("hide")
    buttonCoffeShopOff.classList.remove("hide")
    florestOff()
    rainOff()
    fireOff()
    audioCoffe.play()
}

function coffeOff() {
    buttonCoffeShopOn.classList.remove("hide")
    buttonCoffeShopOff.classList.add("hide")
    audioCoffe.pause()
}

function fireOn() {
    buttonFirePlaceOn.classList.add("hide")
    buttonFirePlaceOff.classList.remove("hide")
    florestOff()
    rainOff()
    coffeOff()
    audioFire.play()
}

function fireOff() {
    buttonFirePlaceOn.classList.remove("hide")
    buttonFirePlaceOff.classList.add("hide")
    audioFire.pause()
}

function resetControls() {
    buttonPause.classList.add("hide")
    buttonPlay.classList.remove("hide")
    florestOff()
    rainOff()
    coffeOff()
    fireOff()
}

function resetTimer() {
    clearTimeout(timerTimeOut)
    updateTimerDisplay(minutes, 0)
}

function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0");

}



//timer
function countdown() {
    timerTimeOut = setTimeout(function () {
        let seconds = Number(secondsDisplay.textContent);
        let minutes = Number(minutesDisplay.textContent);
        let isFinished = minutes <= 0 && seconds <= 0

        updateTimerDisplay(minutes, 0)

        if (isFinished) {
            resetControls()
            clearTimeout(countdown)
            return
        }

        if (seconds <= 0) {
            seconds = 3;
            --minutes
        }
        updateTimerDisplay(minutes, seconds - 1)

        countdown()
    }, 1000)
}




