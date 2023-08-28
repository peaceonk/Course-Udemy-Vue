// document.querySelector('button').addEventListener();

// function add() {
//   counter = counter + 1;
// }

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      number: 5,
      name: '',
      pullName: '',
      confirmedName: ''
    };
  },
  methods: {
    add() {
      this.counter++;
    },
    reduce() {
      this.counter--;
    },
    addNum(num) {
      this.counter = this.counter + num;
    },
    reduceNum(num) {
      this.counter = this.counter - num;
    },

    setName(event){
      this.name = event.target.value;
    },
    setPullName(event, lastName){
      this.pullName = event.target.value + ' ' + lastName;
    },

    submitForm(event) {
      event.preventDefault();
      alert('Submitted!!');
    },
    submitForm2(event) {
      alert('Submitted!!');
    },
    setConfirmedName() {
      this.confirmedName = this.pullName;
    },
    rightClick() {
      alert('rightClicked!!')
    }

  }
});

app.mount('#events');
