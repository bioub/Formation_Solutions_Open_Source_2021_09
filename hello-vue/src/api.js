// export function fetchTodos() {
//   return fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((res) => res.json())
//     .then((todos) => todos.slice(0, 10));
// }

export async function fetchTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await res.json();
  return todos.slice(0, 10);
}
