const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
    setText2() {
      console.log(this.$refs.userText);
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.log('beforeCreate()');
  },
  created() {
    console.log('created()');
  },
  beforeMount() {
    console.log('beforeMount()');
  },
  mounted() {
    console.log('mounted()');
  },
  beforeUpdate() {
    console.log('beforeUpdate()');
  },
  updated() {
    console.log('updated()');
  },
  beforeUnmount() {
    console.log('beforeUnmount()');
  },
  unmounted() {
    console.log('unmounted()');
  },
});

app.mount('#app');

setTimeout(() => {
  app.unmount('#app');
}, 3000);

const app2 = Vue.createApp({
  template: `
      <h2>Favorites</h2>
      <!-- <p>{{ message }}</p>  --> <!-- does not work : message is app's data property -->
      <p>{{ favoriteMeal }}</p>
  `,  
  data() {
    return {
      favoriteMeal: 'Pizza'
    }
  }
});

app2.mount('#app2');

// .... JS Proxy
/*
let message = 'Hello';
let longMessage = message + ' World!';

console.log(longMessage);

message = 'Hello!!!';

console.log(longMessage); // JS는 기본적으로 변화를 감지하지 않음

const data = {
  message: 'Hello!',
  longMessage: 'Hello! world!'
}

const handler = {
  set(target, key, value) {
    // console.log("target : ",target);
    // console.log("key : ",key);
    // console.log("value : ",value);

    if( key === 'message') {
      target.longMessage = value + ' World!';
    }
    target.message = value;
  }
}

const proxy = new Proxy(data, handler);

proxy.message = 'Hello!!!!';

console.log(proxy.longMessage);

*/