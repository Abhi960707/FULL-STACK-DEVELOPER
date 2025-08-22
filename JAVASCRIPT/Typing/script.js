

let setTime = document.querySelector('#setTime')
let startBtn = document.querySelector('#startBtn')
let typeText = document.querySelector('#type')
let text = document.querySelector('#text')
let showTime = document.querySelector('#timer')


let timeCounter;


function couter(time) {
    timeCounter = setInterval(function () {
        let couterTimeForSet = time--
        showTime.innerText = `00:${couterTimeForSet < 10 ? ('0' + couterTimeForSet) : couterTimeForSet}`
        console.log(showTime.innerText)
        if (showTime.innerText == '00:00') {
            stopCounter()
        }
    }, 1000)
}


startBtn.addEventListener('click', function () {
    if (setTime.value == '-- select time --') {
        alert('Select Time')
        setTime.focus()
    } else {
        couter(setTime.value)
    }
})


function stopCounter() {
    clearInterval(timeCounter)
    if (typeText.value == text.innerText) {
        alert('👍')
    } else {
        alert('👎')
    }
}
