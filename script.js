document.getElementById('addButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        
        // Add click event to mark as complete
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        document.getElementById('taskList').appendChild(li);
        taskInput.value = ''; // Clear input field
    }
});
