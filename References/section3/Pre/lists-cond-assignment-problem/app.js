const app = Vue.createApp({
  data() {
    return { 
      tasks: [
      ],
      enteredTaskValue: '',
      tasksShow: true
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTaskValue);
      this.enteredTaskValue = '';
    },
    removeTask(idx) {
      this.tasks.splice(idx, 1);
    },
    tasksShoworHide() {
      this.tasksShow = !this.tasksShow
    }
  },
  computed: {
    buttonCaption() {
      return this.tasksShow ? 'Hide' : 'Show'
    }
  }
});

app.mount('#assignment');
