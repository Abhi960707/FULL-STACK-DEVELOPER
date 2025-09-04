

import {allUsers,username} from "./allUsers.js";
import {fruits} from './fruits.js'
import {fruit1} from './fruits.js'
import{car,car1} from './car.js'


console.log(username)
console.log(fruits,fruit1)
console.log(car,car1)
console.log(fruit1)

allUsers().then(res=>console.log(res))
fruits.forEach(element => {
    document.querySelector('body'.innerHTML +=`
        <h1>${element}</h1> `)
});