<template>
  <div class="Todos">
    <form class="todos-form" @submit="addTodo">
      <input name="newtodo" class="todos-input" v-model="inputValue" />
      <button>+</button>
    </form>
    <div class="todos-list">
      <div v-for="t in todos" :key="t.id">
        <span>{{ t.title }}</span>
        <button @click="deleteTodo(t)">-</button>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchTodos } from '../api'

export default {
  name: 'Todos',
  data() {
    return {
      inputValue: 'Beurre',
      todos: [
        { id: Math.random(), title: 'Pain', completed: true },
        { id: Math.random(), title: 'Lait', completed: false },
      ],
    };
  },
  mounted() {
    fetchTodos().then((newTodos) => {
        this.todos = [
          ...this.todos, ...newTodos,
          ];
      })
  },
  methods: {
    addTodo(event) {
      event.preventDefault();
      this.todos = [
        ...this.todos,
        { id: Math.random(), title: this.inputValue, completed: false },
      ];
      this.inputValue = '';
    },
    deleteTodo(todo) {
      this.todos = this.todos.filter(t => t.id !== todo.id);
    },
  },
};
</script>
