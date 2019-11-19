var container = document.querySelector(".container")
var listwork = container.querySelector("#listwork")
var ul = container.querySelector("ul")
var form = container.querySelector("form")
var workItem = form.querySelector("#work")
var addButton = form.querySelector("input[type=button]")


addButton.onclick = addItem

const name_list = "todo_list"

class Item {

    constructor(name, st){
        this.text =  name
        this.status = st
    }
}

var itemList = localStorage.getItem(name_list) != null ? JSON.parse(localStorage.getItem(name_list)) : []

for(it of itemList){
    add(instanceLi(it))
}

function add(li){
    workItem.value = ""
    ul.appendChild(li)
}

function instanceLi(it){

    let li = document.createElement("li")
    li.setAttribute("class", "list-group-item")
    
    let inputR = document.createElement("input")
        inputR.setAttribute("type", "radio")
        inputR.setAttribute("style", "margin-right: 1em;")
        li.appendChild(inputR)
        inputR.onchange = ()=>{
            completedWork(li)
        }

    let value = document.createTextNode(it.text)
    li.append(value)
    return  li
}

function instanceItem(){
    var item
    if(workItem.value != ""){
        item = new Item(workItem.value, false)
        itemList.push(item)
    }
 return item
}

function addItem(){
    var it = instanceItem()
    if(it){
        add(instanceLi(it))
        save()
    }
}

function removerItem(li){
    ul.removeChild(li)
    itemList.splice(li, 1)
    save()
}

function save(){
    localStorage.setItem(name_list, JSON.stringify(itemList));
}

function completedWork(li){
    li.setAttribute("style", "text-decoration-line: line-through")
    setTimeout(()=>{
        removerItem(li)
    }, 5000)
}