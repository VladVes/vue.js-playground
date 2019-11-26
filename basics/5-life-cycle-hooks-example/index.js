Vue.component('vue-component', {
  props: ['tag'],
  template: '<div>Lifecycles!</div>',
});

const vm = new Vue({
  el: '#app',
  data: {
    message: 'super message',
    tags: [
      { id: 0, name: 'alpha' },
      { id: 0, name: 'beta' },
      { id: 0, name: 'gamma' },
    ],
  }, 
  // lifecycle hooks:
  created() {
    // this === vm !
    console.log('CREATED! Tags: ', this.tags);
  },
  beforeMount() {
    console.log('BEFORE MOUNT:', this.tags);
  },
  mounted() {
    console.log('MOUNTED! ', this.tags)
  },
  beforeDestroy() {
    console.log('BEFORE DESTROY: ', this.tags);
  },

});