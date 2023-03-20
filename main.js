const add = document.getElementById('add-btn')
const body = document.getElementById('maindiv-body')
const headtxt = document.getElementById('maindiv-head-txt')

add.addEventListener('click',function(){
if(headtxt.value.trim() !=0){
    let localitems=JSON.parse(localStorage.getItem('localitem'))
    if(localitems===null){
        tasklist=[]
    }else{
        tasklist=localitems
    }
    tasklist.push(headtxt.value)
    localStorage.setItem('localitem',JSON.stringify(tasklist))
    showlist()
}
})

function showlist(){

    let output=''

    let localitems=JSON.parse(localStorage.getItem('localitem'))
    if(localitems===null){
        tasklist=[]
    }else{
        tasklist=localitems
    }
    tasklist.forEach((data,index) => {
        output +=`
        <div class="todolist">
        <p class="ptext">${data}</p>
    <button class="deletetask" onCliCk="deleteitem(${index})">delete</button>
        </div>
        `
        
    });
    body.innerHTML=output;
}
showlist()

function deleteitem(index){
    tasklist.splice(index, 1)
    localStorage.setItem('localitem',JSON.stringify(tasklist))
    showlist()
}
function cleartask(){
    localStorage.clear()
    showlist()
}


