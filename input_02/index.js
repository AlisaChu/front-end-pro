let btn = document.getElementById('msgButton');
let input = document.getElementById('msgInput');
let todoList = document.getElementById('todoList');

btn.addEventListener('click', addTodoItem);
input.addEventListener('keydown', handleEnterKey);
todoList.addEventListener('click', handleTodoListClick);

function addTodoItem() {
  let text = sanitizeInput(input.value.trim());

  if(text === "") {
    alert("Input cannot be empty");
    return;
  }

  let li = createTodoItem(text);
  todoList.prepend(li);
  input.value = "";
}

function handleEnterKey(e) {
  if(e.key === 'Enter') {
    addTodoItem();
  }
}

function handleTodoListClick(e) {
  if(e.target.className === 'deleteBtn') {
    deleteTodoItem(e.target);
  } else if(e.target.tagName === 'LI') {
    toggleTodoItemColor(e.target);
  }
}

function createTodoItem(text) {
  let li = document.createElement('li');
  li.innerText = text;

  let deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete';
  deleteBtn.className = 'deleteBtn';

  li.append(deleteBtn);

  return li;
}

function deleteTodoItem(button) {
  todoList.removeChild(button.parentElement);
}

function toggleTodoItemColor(li) {
  li.classList.toggle('green');
}

function sanitizeInput(input) {
  let tempDiv = document.createElement('div');
  tempDiv.textContent = input;
  return tempDiv.innerHTML;
}
