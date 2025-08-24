let userInfo = [
    {
        username: "Jaydeep",
        email: 'jaydeep@gmail.com',
        pswd: 'jaydeep@123',
        active: false
    },
    {
        username: "Pawan",
        email: 'pawan@gmail.com',
        pswd: 'pawan@123',
        active: false
    },
    {
        username: "Aniket",
        email: 'aniket@gmail.com',
        pswd: 'aniket@123',
        active: false
    },
      {
        username: "Abhijeet",
        email: 'abhijeet@gmail.com',
        pswd: 'abhi@123',
        active: false
    },

]


localStorage.setItem('all-users', JSON.stringify(userInfo))


let email = document.querySelector('[placeholder="Email"]')
let password = document.querySelector('[placeholder="Password"]')


let loginBtn = document.querySelector('[value="Log In"]')
loginBtn.addEventListener('click', function () {
    // console.log(email.value, password.value)
    let isUserActive = false;
    let allUser = JSON.parse(localStorage.getItem('all-users'))
    for (let i = 0; i < allUser.length; i++) {
        if (allUser[i].email == email.value) {
            if (allUser[i].pswd == password.value) {
                isUserActive = true;
                localStorage.setItem('active-user', JSON.stringify(allUser[i]))
            }
        }
    }


    if (isUserActive) {
        alert('User Login Successfully...')
        window.open('http://127.0.0.1:5500/JAVASCRIPT/Two%20Application%20Linking/profile/profile.html','_top')
    } else {
        alert('User Not Found')
    }
})