const vm = new Vue({
  el: '#app',
  data: {
    message1: 'super message',
    message2: 'using v-once this message will never changes',
    rawHtml: '<h4>This is the raw HTML</h4>',
    dynamicAttribute: 1231231123,
    isButtonDisabled: false,
    someId: '3#$ee%DD24@fs3294',
    seen: true,
    doSomething: () => console.log('Handle on click!'),
  },
});

setInterval(() => vm.dynamicAttribute = Math.random() * (100000 - 1000) + 1000, 1000);