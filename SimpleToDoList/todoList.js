// todoList.js
export function addTask() {
    const inputField = document.getElementById('taskInput');
    const taskText = inputField.value;

    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const taskList = document.getElementById('taskList');
    taskList.appendChild(listItem);

    inputField.value = '';
}
