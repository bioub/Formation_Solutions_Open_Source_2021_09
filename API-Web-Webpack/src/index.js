import { fetchTodos } from "./api.js";
import { addTodos } from "./todos.js";

/** @type {HTMLFormElement} */
const todosFormEl = document.querySelector('.todos-form')

/** @type {HTMLInputElement} */
const todosInputEl = document.querySelector('.todos-input')

/** @type {HTMLDivElement} */
const todosListEl = document.querySelector('.todos-list')

todosFormEl.addEventListener('submit', (event) => {
  event.preventDefault();

  addTodos({
    id: Math.random(),
    title: todosInputEl.value,
    completed: false,
  }, todosListEl);
});

fetchTodos().then((todos) => {
  for (const t of todos) {
    addTodos(t, todosListEl);
  }
})
