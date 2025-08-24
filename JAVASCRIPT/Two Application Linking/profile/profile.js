let activeUser = JSON.parse(localStorage.getItem('active-user'))
let name = document.querySelector('#name')
name.innerText = `Hii ${activeUser.username} 👑`


let logOut = document.querySelector('#logOut')
logOut.addEventListener('click',function(){
    window.open('http://127.0.0.1:5500/JAVASCRIPT/Two%20Application%20Linking/login/login.html','_top')
    localStorage.removeItem('active-user')
})