const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete",
}

var totalCount = 0;
var todoCount = 0;
const list = document.getElementById("todo-list")
const itemCountSpan = document.getElementById("item-count")
const uncheckedCountSpan = document.getElementById("unchecked-count")
const todos = document.getElementsByClassName("checkbox")

function newTodo() {
  //Crear contenedor de la tarea
  var div = document.createElement("div");
  div.setAttribute("class", "divTodo");
  //Crear checkbox
  var checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class", "checkbox");
  checkbox.setAttribute("onClick","updateUncheked(this)");
  div.appendChild(checkbox);
  //Crear text area
  var textarea = document.createElement("input");
  textarea.setAttribute("type", "textarea");
  textarea.setAttribute("placeholder", "Escribe aqui tu tarea");
  div.appendChild(textarea);
  //Crear boton de borrado
  var button = document.createElement("button");
  button.setAttribute("onClick", "deleteTodo(this)");
  button.innerHTML = "Borrar tarea";
  div.appendChild(button);
  //Añadir tarea a la lista
  list.appendChild(div);
  //Sumar tarea al contador
  totalCount++;
  todoCount++;
  updateList();
}

//Actualiza el label que muestra el numero de tareas
function updateList() {
  itemCountSpan.innerHTML = totalCount;
  uncheckedCountSpan.innerHTML = todoCount;
}

//Borrar una tarea
function deleteTodo(element) {
  var div = element.parentElement;
  list .removeChild(div);
  totalCount--;
  aux = div.childNodes;
  //Si la tarea no esta realizada resta una al contador de tareas desmarcadas
  if (!aux[0].checked) {
    todoCount--;
  }
  updateList();
}

//Actualizar contador de tareas desmarcadas
function updateUncheked(checkbox) {
  if(checkbox.checked) {
    todoCount--;
  } else {
    todoCount++;
  }
  updateList();
}

//Borrar tareas marcadas
function deleteCheckedTodo() {
  for (inc = 0; inc < totalCount; inc++) {
    if (todos[inc].checked) {
      deleteTodo(todos[inc]);
      inc--;
    }
  } 
}