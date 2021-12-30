const addForm = document.querySelector('.add');
const todos = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
    const html = `
      <li class="list-group-item d-flex justify-content-between align-items-center text-light"> 
        <span>${todo}</span>
        <i class="fas fa-trash-alt delete"></i>
      </li>
    `;

    todos.innerHTML += html;
};

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if(todo.length)
       generateTemplate(todo);

    addForm.reset();
});

todos.addEventListener('click', e => {
   if(e.target.classList.contains('delete')) {
     e.target.parentElement.remove();
   }
});

const searchTodos = (str) => {
  Array.from(todos.children).filter(todo => !todo.textContent.toLowerCase().includes(str)).forEach(todo => todo.classList.add('filtered'));
  Array.from(todos.children).filter(todo => todo.textContent.toLowerCase().includes(str)).forEach(todo => todo.classList.remove('filtered'));
};

search.addEventListener('keyup', () => {
   const str = search.value.trim().toLowerCase();
   searchTodos(str);
});