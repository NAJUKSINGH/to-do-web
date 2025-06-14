let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");


const saveLocalTodos = (todo) => {
  let todos;
  if(localStorage.getItem("todos") === null){
    todos = [];
  }
  else{
    todos = JSON.parse(localStorage.getItem("todos"));

  }
  todos.push(todo);
  localStorage.setItem("todos" , JSON.stringify(todos));

}


const getLocalTodos = () => {
  let todos;
    let ul = document.querySelector("ul");
  if(localStorage.getItem("todos") === null){
    todos = [];
  }
  else{
    todos = JSON.parse(localStorage.getItem("todos"));
    todos.forEach(todoText => {
    let item = document.createElement("li");
    let p = document.createElement("P");
    p.innerText = todoText;

    item.appendChild(p);
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.className = "delete-btn";
    
 
    let markBtn = document.createElement("button");
    markBtn.innerText = "mark";
    markBtn.className = "mark-btn";

  
    item.appendChild(markBtn); 

    item.appendChild(delBtn);
    ul.appendChild(item);
    
    });
  }
}

document.addEventListener("DOMContentLoaded", getLocalTodos);

const deleteLocalTodos = (todo) => {
  let todos;
  if(localStorage.getItem("todos") === null){
    todos = [];
  }
  else{
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  let todoText = todo.children[0].innerHTMl;
  let todoIndex = todos.indexOf(todoText);
  todos.splice(todoIndex, 1);
  localStorage.setItem("todos", JSON.stringify(todos));

}
btn.addEventListener('click', () => {
  const inputText = inp.value.trim();
    if(inp.value === ""){
      alert("input box should not be empty");
    }
    if (inp.value.trim() !== ""){
    let item = document.createElement("li");
    let p = document.createElement("P");
    p.innerText = inp.value;

    item.appendChild(p);
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.className = "delete-btn";
    
 
    let markBtn = document.createElement("button");
    markBtn.innerText = "mark";
    markBtn.className = "mark-btn";

    item.appendChild(markBtn); 

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
    }
    saveLocalTodos(inputText);
    
});


 ul.addEventListener("click", (event) => {
    const target = event.target;

    // Check if delete button was clicked
    if (target.classList.contains("delete-btn")) {
        let listItem = target.parentElement;
        listItem.remove();
        deleteLocalTodos(target.parentElement);
    }

    // Check if mark button was clicked
    if (target.classList.contains("mark-btn")) {
        let listItem = target.parentElement;
     handleMarkButtonClick(target.parentElement, target);
    }
    
});

function handleMarkButtonClick(listItem, markBtn) {
  listItem.classList.toggle("completed");

  if (listItem.classList.contains("completed")) {
    markBtn.innerText = "completed";
    listItem.style.backgroundColor = "#d3ffd3";

  } 
  else {
    markBtn.innerText = "mark";
    listItem.style.backgroundColor = "";
    
  }
}



