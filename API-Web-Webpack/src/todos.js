/**
 * @param {object} todos
 * @param {number} todos.id
 * @param {string} todos.title
 * @param {boolean} todos.completed
 */
export function addTodos(todos, containerEl) {
  const divEl = document.createElement('div');
  divEl.className = 'todos-item';
  divEl.title =  todos.title;

  const spanEl = document.createElement('span');
  spanEl.innerText = todos.title;

  divEl.appendChild(spanEl);

  containerEl.appendChild(divEl);
}

/*
<div class="todos-item" title="Acheter du pain">
      <span>Acheter du pain</span>
    </div>
*/
