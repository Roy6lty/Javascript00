const todoList = [];


function renderTodoList(){
    let todoListHTML ='';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        //const dueDate = todoObject.dueDate; // value of duedate from dict
        const { name, dueDate } = todoObject; // shortform assigning a constant  of 
        const html = `<div>${name}</div>
                      <div>${dueDate}</div>
                        <button onclick="
                        todoList.splice(${i}, 1);
                        renderTodoList();
                        " class='delete-todo'>Delete</button>
                    `;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}



function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const dateInputElement = document.querySelector('.js-due-date');
    const name = inputElement.value;
    const dueDate = dateInputElement.value;
    todoList.push({name, dueDate});
    console.log(todoList);

    inputElement.value = '';

    renderTodoList()
}