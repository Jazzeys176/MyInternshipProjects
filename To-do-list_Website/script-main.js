window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    // Load tasks from local storage on page load
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(savedTask => {
        createTaskElement(savedTask);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;
        if (!task){
            alert('Please enter a task.');
            return;
        } else {

       
        createTaskElement(task);

        // Save tasks to local storage
        saveTasksToLocalStorage();
        }
        input.value = '';
    });

    // Event delegation for edit and delete buttons
    list_el.addEventListener('click', (e) => {
        const task_el = e.target.closest('.task');
        if (task_el) {
            const task_input_el = task_el.querySelector('.text');

            if (e.target.classList.contains('edit')) {
                toggleEdit(task_input_el);
                saveTasksToLocalStorage();
            } else if (e.target.classList.contains('delete')) {
                list_el.removeChild(task_el);

                // Save tasks to local storage after deletion
                saveTasksToLocalStorage();
            }
            else if (e.target.classList.contains('checked')) {
                // Toggle strikethrough when clicking on task content or task name
                task_el.classList.toggle('checked');
                toggleStrikethrough(task_input_el);
                // Save tasks to local storage after completion
                saveTasksToLocalStorage();
            }
        }
    });

    function createTaskElement(task) {
        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');

        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerText = 'Edit';

        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerText = 'Delete';

        const task_done_el = document.createElement('button');
        task_done_el.classList.add('checked');
        task_done_el.innerText = 'Completed';

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);
        task_actions_el.appendChild(task_done_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);
    }

    function toggleEdit(task_input_el) {
        if (task_input_el.getAttribute('readonly')) {
            task_input_el.removeAttribute('readonly');
            task_input_el.focus();
        } else {
            task_input_el.setAttribute('readonly', 'readonly');
        }
    }

    function saveTasksToLocalStorage() {
        const tasks = Array.from(list_el.querySelectorAll('.text')).map(task_input_el => task_input_el.value);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        
    }
    function toggleStrikethrough(task_input_el) {
        task_input_el.classList.toggle('strikethrough');
    }
});

