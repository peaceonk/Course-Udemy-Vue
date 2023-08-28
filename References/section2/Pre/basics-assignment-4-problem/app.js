const app = Vue.createApp({
  data() {
    return {
      classesP1: '',
      isVisibleP1: true,
      backgroundColorP2: ''
    };
  },
  methods: {
    toggleP(){
      this.isVisibleP1 = !this.isVisibleP1;
      // console.log('isVisibleP1',this.isVisibleP1);
    }
  },
  computed: {
    defineClassesP1() {
      // console.log('classesP1 : , isVisibleP1 :',this.classesP1, this.isVisibleP1);
      return {
        user1: this.classesP1 === 'user1',
        user2: this.classesP1 === 'user2',
        visible: this.isVisibleP1,
        hidden: !this.isVisibleP1
      };
    }
  }
});

app.mount("#assignment");
