
const vm = new Vue({
  el: '#app',
  data: {
    title: 'Alpha todo',
    todoList: [],
    newTodo: '',
  },
  methods: {
    generateId() { return `f${(~~(Math.random()*1e8)).toString(16)}`; },
    addTodo() { this.todoList = [...this.todoList, { id: this.generateId(), name: this.newTodo }] },
    removeTodo() {},
  }
});
