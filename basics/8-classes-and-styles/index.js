const vm = new Vue({
  el: '#app',
  data: {
    isActive: true,
    hasError: false,
    error: null,
  },
  computed: {
    classObject() {
      return {
        active: this.isActive && !this.error,
        danger: this.error && this.error.type === 'fatal',
      };
    },
  },
});

// try to vm.error = { type: 'fatal' } and see how classes changes
