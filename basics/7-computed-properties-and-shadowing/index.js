const vm = new Vue({
  el: '#app',
  data: {
    message: 'Reverted message',
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: { // update the fullName when lastName or firstName will chages
    // but it's not so convenient like as with computed props
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    },
  },
  computed: { // computed properties works like getters
    fullNameComp: function () {
      return this.firstName + ' ' + this.lastName
    },
    reversedString: function() {
      return this.message.split('').reverse().join(''); // the interesting thing is that vue konws that this computed props 
      // depends on message and will update this reversedString every time the message will changes
      // Also it's better when use methods like reversStrig() cause this props is going to be cashed and a method is not
    },
   // also we can use setter for computed props like this:
    anotherCalcProp: {
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }, // it means that is when we try to do this: vm.anotherCalcPro = 'John Doe' the firsName and lastName will be updated
    },
  },
});
