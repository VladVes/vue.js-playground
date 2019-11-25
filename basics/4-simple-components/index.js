Vue.component('todo-item', {
  props: ['todo'],  
  template: '<li>{{ todo.text }}</li>',
});

const App = new Vue({
  el: '#app',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetable' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Meat' },
    ],
  },
});
