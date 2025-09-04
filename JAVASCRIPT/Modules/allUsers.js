// import {allUsers} from "./allUsers.js"

async function allUsers(){
    let data =await fetch('./index.json')
    let result =await data.json()
    return result
}
let username="user 1"
export {allUsers,username}