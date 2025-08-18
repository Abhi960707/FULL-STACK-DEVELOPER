let hr = document.querySelector('.hr h1')
let sec = document.querySelector('.sec h1')
let min = document.querySelector('.min h1')
let date = document.querySelector('.currentDate')
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


let week = document.querySelector('.week')


for (let i = 0; i < weekday.length; i++) {
    week.innerHTML += `
    <span>${weekday[i].slice(0,3)}</span>
    `
}


setInterval(function () {
    // console.log(hr)
    let currentDate = new Date()
    hr.innerText = currentDate.getHours() < 10 ? ('0' + currentDate.getHours()) : currentDate.getHours()
    min.innerText = currentDate.getMinutes() < 10 ? ('0' + currentDate.getMinutes()) : currentDate.getMinutes()
    sec.innerText = currentDate.getSeconds() < 10 ? ('0' + currentDate.getSeconds()) : currentDate.getSeconds()


    date.innerText = `${currentDate.getDate()} - ${monthNames[currentDate.getMonth()]} - ${currentDate.getFullYear()}`


    // console.log(currentDate.getDate())
    // console.log(currentDate.getFullYear())
}, 1000)
