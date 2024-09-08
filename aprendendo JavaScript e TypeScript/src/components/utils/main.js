// Classe Task para representar cada tarefa
var Task = /** @class */ (function () {
    function Task(description, done) {
        if (done === void 0) { done = false; }
        this.description = description;
        this.done = done;
    }
    Task.prototype.toggleDone = function () {
        this.done = !this.done;
    };
    return Task;
}());
// Array para armazenar as tarefas
var tasks = [];
// Função para adicionar uma nova tarefa
function addTask(description) {
    var newTask = new Task(description);
    tasks.push(newTask);
    renderTasks();
}
// Função para renderizar as tarefas na tela
function renderTasks() {
    var taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Limpa a lista antes de renderizar
    tasks.forEach(function (task, index) {
        var taskItem = document.createElement('li');
        taskItem.textContent = task.description;
        taskItem.style.textDecoration = task.done ? 'line-through' : 'none';
        taskItem.onclick = function () { return toggleTask(index); };
        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Excluir';
        deleteBtn.onclick = function () { return deleteTask(index); };
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);
    });
}
// Função para marcar/desmarcar tarefa como concluída
function toggleTask(index) {
    tasks[index].toggleDone();
    renderTasks();
}
// Função para excluir uma tarefa
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
// Event listener para o botão de adicionar tarefa
document.getElementById('addTaskBtn').addEventListener('click', function () {
    var taskInput = document.getElementById('taskInput');
    var taskDescription = taskInput.value.trim();
    if (taskDescription) {
        addTask(taskDescription);
        taskInput.value = ''; // Limpa o campo de input
    }
});
