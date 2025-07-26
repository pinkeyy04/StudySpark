function addTask() {
  const taskInput = document.getElementById('taskInput');
  const dueDate = document.getElementById('dueDate');
  const priority = document.getElementById('priority');

  const taskText = taskInput.value.trim();
  const date = dueDate.value;
  const prio = priority.value;

  if (taskText === '' || date === '' || prio === '') {
    alert("Please fill out all fields!");
    return;
  }

  const li = document.createElement('li');

  const taskDetails = document.createElement('div');
  taskDetails.className = 'task-details';
  taskDetails.innerHTML = `
    <strong>${taskText}</strong><br/>
    📅 ${date} <span class="priority-badge priority-${prio}">${prio}</span>
  `;

  const actions = document.createElement('div');
  actions.className = 'actions';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.onclick = () => {
    li.classList.toggle('completed');
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '🗑️';
  deleteBtn.onclick = () => li.remove();

  actions.appendChild(checkbox);
  actions.appendChild(deleteBtn);

  li.appendChild(taskDetails);
  li.appendChild(actions);

  document.getElementById('taskList').appendChild(li);

  // Reset input
  taskInput.value = '';
  dueDate.value = '';
  priority.value = '';
}
