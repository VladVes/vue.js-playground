const vm = new Vue({
  el: '#app',
  data: {
    parentMessage: 'Paren message',
    items: [
      { id: 'uniq1', message: 'alpha messgae' },
      { id: 'uniq2', message: 'beta messgae' },
      { id: 'uniq3', message: 'gamma messgae' },
    ],
    object: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10'
    },
    // !!! vm.userProfile.age = 27 - NOTE REATIVE! here we should use Vue.set() like this: Vue.set(vm.userProfile, 'age', 27);
    userProfile: {
      name: 'Anika'
    },
    // to add a few new properties to existing object use: 
    // vm.userProfile = Object.assign({}, vm.userProfile, {
    //   age: 27,
    //   favoriteColor: 'Vue Green'
    // })
    numbers: [10, 12, 33, 47, 45],
  },
  
  computed: {
    filteredNumbers() {
      return this.numbers.filter(n => n > 33);
    }, 
  },
});

// !!! 
// vm.items[indexOfItem] = newValue - NOT REATIVITY in this case it will be better to use 
// Vue.set(vm.items, indexOfItem, newValue) or vm.$set(vm.items, indexOfItem, newValue);