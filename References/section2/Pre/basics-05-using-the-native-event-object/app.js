const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullName: '',
      name2: '',
      lastName2: '',
      fullName2: ''
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
      this.fullName = this.name + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      // document.querySelector('input').value = '';  // Not Good
      this.name = '';
      this.fullName = '';
    },
    resetInput2() {
      this.name2 = '';
      this.lastName2 = '';
    },
    outputFullName() {
      console.log('run outputFullName');
      if( this.name2 === '') return '';
      return this.name2 + ' ' + 'Kim';
    }
  },
  computed: {
    computedFullName() {
      console.log('run fullName');
      // if( this.name2 === '') return '';
      // return this.name2 + ' ' + 'Kim';
      if( this.name2 === '' || this.lastName2 === '' ) return '';
      return this.name2 + ' ' + this.lastName2;
    }
  },
  watch: {
    name2(value) {
      console.log('run watch name2',value);
      if(value === '') this.fullName2 = '';
      else this.fullName2 = value + ' ' + this.lastName2;
    },
    lastName2(value) {
      console.log('run watch lastName2',value);
      if(value === '') this.fullName2 = '';
      else this.fullName2 = this.name2 + ' ' + value;
    },
    counter(value) {
      const that = this;
			if(value > 50) {
        setTimeout(function() {
          that.counter = 0;
        },2000)
      }
		}
  }
});

app.mount('#events');
