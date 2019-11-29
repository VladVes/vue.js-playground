const vm = new Vue({
  el: '#app',
  data: {
    isActive: true,
    hasError: false,
    error: null,

    activeClass: 'active',
    errorClass: 'danger',

    activeColor: 'red',
    fontSize: 30,

    styelObject: {
      color: 'green',
      fontSize: '13px',
    },
    baseStyles: { /*some styles..*/ },
    overridingStyles: { /*some styles..*/  },
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
