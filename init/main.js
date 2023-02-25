const createTaskInput = document.querySelector('.create-task');
const taskUl = document.querySelector('.tasks');

function addTaskToUl(task, i) {
    const li = `<li data-index="${i}" class="${task.taskStatus}"><input type="checkbox" ${task.taskStatus === 'complite' ? 'disabled' : 'false'} >${task.task}<span></span></li>`;
    taskUl.insertAdjacentHTML('beforeend', li);
};

function deleteTask(parent) {
    const allTasks = JSON.parse(window.localStorage.getItem('tasks'));
    allTasks.forEach(task => {
        if (parent.textContent === task.task) {
            allTasks.splice(allTasks.indexOf(task), 1)
        }
    });
    window.localStorage.setItem('tasks', JSON.stringify(allTasks));

    parent.remove();
};

function completeTask(parent) {
    parent.classList.add('complite')
    event.target.disabled = true

    let allTasks = JSON.parse(window.localStorage.getItem('tasks'));
    allTasks.forEach(task => {
        if (parent.textContent === task.task) {
            task.taskStatus = 'complite'
        }
    });
    window.localStorage.setItem('tasks', JSON.stringify(allTasks));
};

if (window.localStorage.getItem('tasks')) {
    const allTasks = JSON.parse(window.localStorage.getItem('tasks'));
    for (let i = 0; i < allTasks.length; i++) {
        addTaskToUl(allTasks[i], i);
    }
} else {
    window.localStorage.setItem('tasks', JSON.stringify([]));
};

taskUl.addEventListener('click', (e) => {
    const parent = e.target.parentElement
    if (e.target.tagName === 'SPAN') {
        deleteTask(parent);
    } else if (e.target.tagName === 'INPUT') {
        completeTask(parent);
    }
});


createTaskInput.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        let allTasks = JSON.parse(window.localStorage.getItem('tasks'));
        
        const task = {
            task: e.target.value,
            taskStatus: 'active'
        };

        addTaskToUl(task, allTasks.length);

        allTasks.push(task);
        window.localStorage.setItem('tasks', JSON.stringify(allTasks));

        e.target.value = '';
    }
});
