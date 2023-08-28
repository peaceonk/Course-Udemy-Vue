const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  methods: {
    boxSelected(box) {
      if (box === "A") {
        // this.boxASelected = true;
        this.boxASelected = !this.boxASelected;
      } else if (box === "B") {
        // this.boxBSelected = true;
        this.boxBSelected = !this.boxBSelected;
      } else if (box === "C") {
        // this.boxCSelected = true;
        this.boxCSelected = !this.boxCSelected;
      }
    },
  },
  computed: {
    boxAClasses() {
      return { active: this.boxASelected };
    }
  }
});

app.mount("#styling");
