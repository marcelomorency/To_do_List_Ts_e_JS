// Classe Task para representar cada tarefa
class Task {
    constructor(public description: string, public done: boolean = false) {}

    toggleDone() {
        this.done = !this.done;
    }
}

// Array para armazenar as tarefas
let tasks: Task[] = [];

// Função para adicionar uma nova tarefa
function addTask(description: string): void {
    const newTask = new Task(description);
    tasks.push(newTask);
    renderTasks();
}

// Função para renderizar as tarefas na tela
function renderTasks(): void {
    const taskList = document.getElementById('taskList')!;
    taskList.innerHTML = ''; // Limpa a lista antes de renderizar

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.textContent = task.description;
        taskItem.style.textDecoration = task.done ? 'line-through' : 'none';
        taskItem.onclick = () => toggleTask(index);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Excluir';
        deleteBtn.onclick = () => deleteTask(index);

        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);
    });
}

// Função para marcar/desmarcar tarefa como concluída
function toggleTask(index: number): void {
    tasks[index].toggleDone();
    renderTasks();
}

// Função para excluir uma tarefa
function deleteTask(index: number): void {
    tasks.splice(index, 1);
    renderTasks();
}

// Event listener para o botão de adicionar tarefa
document.getElementById('addTaskBtn')!.addEventListener('click', () => {
    const taskInput = document.getElementById('taskInput') as HTMLInputElement;
    const taskDescription = taskInput.value.trim();
    if (taskDescription) {
        addTask(taskDescription);
        taskInput.value = ''; // Limpa o campo de input
    }
});
