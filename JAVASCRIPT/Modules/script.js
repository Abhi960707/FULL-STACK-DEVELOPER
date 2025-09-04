

import {allUsers,username} from "./allUsers.js";
import {fruits} from './fruits.js'
// import {fruit1} from './fruits.js'

// import {allUsers} from "./allUsers.js"
console.log(username)
console.log(fruits)

allUsers().then(res=>console.log(res))
fruits.forEach(element => {
    document.querySelector('body'.innerHTML +=`
        <h1>${element}</h1> `)
});