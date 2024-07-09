document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Placeholder JavaScript is running.');

    document.getElementById('add-todo').addEventListener('click', () => {
        const todoColumn = document.querySelector('.trello-column:nth-child(1)');
        const newTodo = document.createElement('div');
        newTodo.className = 'todo-item';
        newTodo.textContent = 'New Todo';
        todoColumn.appendChild(newTodo);
    });

    document.querySelectorAll('.move-left').forEach(button => {
        button.addEventListener('click', (event) => {
            const todoItem = event.target.parentElement;
            const prevColumn = todoItem.previousElementSibling;
            if (prevColumn && prevColumn.classList.contains('trello-column')) {
                prevColumn.appendChild(todoItem);
            }
        });
    });

    document.querySelectorAll('.move-right').forEach(button => {
        button.addEventListener('click', (event) => {
            const todoItem = event.target.parentElement;
            const nextColumn = todoItem.nextElementSibling;
            if (nextColumn && nextColumn.classList.contains('trello-column')) {
                nextColumn.appendChild(todoItem);
            }
        });
    });

    document.querySelectorAll('.remove').forEach(button => {
        button.addEventListener('click', (event) => {
            const todoItem = event.target.parentElement;
            todoItem.remove();
        });
    });
});

function buttonClicked() {
    console.log('Button was clicked!');
}
});