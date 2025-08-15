// let Addbutton=document.querySelector('#Btn')
// Addbutton.addEventListener('click',function()
// {
// console.log('click')
// })

function Addbutton(){
    // document.querySelector('Input')
    let Input=document.getElementById('Input');
    let list=document.getElementById('list');
    let data=Input.value;

    list.innerHTML +=`<li> ${data} </li> `;
        Input.value = '';

}