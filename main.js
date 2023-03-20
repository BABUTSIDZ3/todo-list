const add = document.getElementById('add-btn')
const body = document.getElementById('maindiv-body')
const headtxt = document.getElementById('maindiv-head-txt')
add.addEventListener('click', function () {

if(headtxt.value==''){
headtxt.style.border='2px solid red'
alert('Please fill in the field')
}else{
    headtxt.style.border='1px solid aqua'
    const element = document.createElement('div')
    body.appendChild(element)
    element.setAttribute('id', 'maindiv-body-div')
    const txtdiv = document.createElement('div')
    txtdiv.setAttribute('id', 'maindiv-body-div-txt')
    const del = document.createElement('div')
    del.setAttribute('id', 'maindiv-body-div-del')
    txtdiv.textContent =headtxt.value
        del.textContent = 'delete'
    element.append(txtdiv, del)
    del.addEventListener('click', function () {
        del.parentElement.remove()
    })}
})
