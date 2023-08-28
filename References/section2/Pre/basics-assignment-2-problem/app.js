const app = Vue.createApp({
  data() {
    return {
      alertMsg: "Show me what you got",
      inputText: "OUTPUT",
    };
  },
  methods: {
    showAlert() {
      alert(this.alertMsg);
    },
    showInputText(event) {
      this.inputText = event.target.value;
    },
  },
});

app.mount("#assignment");
