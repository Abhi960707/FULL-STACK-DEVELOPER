let employeeList = [];


let createBtn = document.querySelector('#crtBtn')
let updateBtn = document.querySelector('#uptBtn')
let tbody = document.querySelector('tbody')


function showAllEmployees() {
    if (employeeList.length <= 0) {
        document.querySelector('.emptyBox').style.display = 'block'
        document.querySelector('.tableBox').style.display = 'none'
    } else {
        document.querySelector('.emptyBox').style.display = 'none'
        document.querySelector('.tableBox').style.display = 'block'
        tbody.innerHTML = ''
        for (let i = 0; i < employeeList.length; i++) {
            tbody.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${employeeList[i].empName}</td>
                <td>${employeeList[i].empEmail}</td>
                <td>${employeeList[i].empPhone}</td>
                <td>${employeeList[i].empCity}</td>
                <td align="center">
                    <button class="edit">Edit</button>
                    <button class="del" onclick="deleteRow(${i})">Delete</button>
                </td>
            </tr>
            `
        }
    }
}


createBtn.addEventListener('click', function () {
    let name = document.querySelector('#crtName')
    let email = document.querySelector('#crtEmail')
    let phone = document.querySelector('#crtPhone')
    let city = document.querySelector('#crtCity')


    let empObj = {
        empName: name.value,
        empEmail: email.value,
        empPhone: phone.value,
        empCity: city.value
    }


    employeeList.push(empObj)
    // console.log(employeeList)
    showAllEmployees()


    name.value = ''
    email.value = ''
    phone.value = ''
    city.value = ''
})


showAllEmployees()


function deleteRow(index) {
    employeeList.splice(index, 1)
    showAllEmployees()
}
