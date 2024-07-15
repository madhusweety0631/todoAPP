let inputEl = document.getElementById("inputBar");
let btnEl = document.getElementById("btnBar");
let unOrderListContainer = document.getElementById("todoItemsContainer");


function createTodo(){
let newTodoText = inputEl.value; 
newTodoText.value=""; 
  
let todoElement = document.createElement("li");
unOrderListContainer.appendChild(todoElement);

let checkBoxEl = document.createElement("input");
checkBoxEl.type = "checkbox";
checkBoxEl.id = "myCheckBox";
todoElement.appendChild(checkBoxEl);

let labelEl = document.createElement("label");
labelEl.setAttribute("for", "myCheckBox");
labelEl.textContent =newTodoText;
todoElement.appendChild(labelEl);

labelEl.addEventListener("change",function(){
    if(checkBoxEl.checked){
        todoElement.classList.add("completed");
    }else{
        todoElement.classList.remove("completed")
    }
})

let buttonEl = document.createElement("button");
buttonEl.textContent = "Delete";
todoElement.appendChild(buttonEl);


buttonEl.addEventListener("click",function(){
    unOrderListContainer.removeChild(todoElement);
})

}


btnEl.addEventListener("click",createTodo);




