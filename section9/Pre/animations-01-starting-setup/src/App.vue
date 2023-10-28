<template>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock" v-show="!animatedBlock">Animate</button>
    <button @click="animateBlock2" v-show="animatedBlock">초기화</button>
  </div>
  <div class="container">
    <transition
      @before-enter="beforeEnter"
      @before-leave="beforeLeave"
      @enter="enter"
      @leave="leave"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
      @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled"

      :css="false"
    >
      <p v-show="paraIsVisible">This is only sometimes visible..</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <div class="container">
    <transition enter-active-class="para-enter-active">
      <p v-show="paraIsVisible2">This is only sometimes visible..</p>
    </transition>
    <button @click="toggleParagraph2">Toggle Paragraph2</button>
  </div>
  <div class="container">
    <transition name="para">
      <p v-show="paraIsVisible3">This is only sometimes visible..</p>
    </transition>
    <button @click="toggleParagraph3">Toggle Paragraph3</button>
  </div>
  <!-- <transition> -->
  <!--
  여기에서 주는 transition은 작동하지 않음
  transition은 하나의 직속 자식만 가져야 작동하는데 base-modal 하나의 자식을 갖는것 처럼 보이지만 식제 base-modal 컴포넌트를 보면 
  2개의 div 지속 자식을 가지고 있음
  -->
  <!-- <base-modal @close="hideDialog" v-if="dialogIsVisible"> -->
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <!-- </transition> -->
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>

  <div class="container">
    <transition name="fade-button" mode="out-in">
      <button @click="showUsers" v-if="!userAreVisible">Show Users</button>
      <button @click="hideUsers" v-else>Hide Users</button>
    </transition>
  </div>

  <div class="container">
    <users-list></users-list>
  </div>
</template>

<script>
import UsersList from './components/UsersList.vue'

export default {
  components: {
    UsersList
  },
  data() {
    return {
      dialogIsVisible: false,

      animatedBlock: false,
      paraIsVisible: false,
      paraIsVisible2: false,
      paraIsVisible3: false,

      userAreVisible: false,

      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },

    animateBlock() {
      this.animatedBlock = true;
    },
    animateBlock2() {
      this.animatedBlock = false;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    toggleParagraph2() {
      this.paraIsVisible2 = !this.paraIsVisible2;
    },
    toggleParagraph3() {
      this.paraIsVisible3 = !this.paraIsVisible3;
    },

    showUsers() {
      this.userAreVisible = true;
    },
    hideUsers() {
      this.userAreVisible = false;
    },

    beforeEnter(el) {
      console.log("beforeEnter", el);

      el.style.opacity = 0;
    },
    beforeLeave(el) {
      console.log("beforeLeave", el);

      el.style.opacity = 1;
    },
    enter(el, done) {
      console.log("enter", el);

      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if( round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },
    leave(el, done) {
      console.log("leave", el);

      let round = 100;
      this.leaveInterval =setInterval(() => {
        el.style.opacity = round / 100;
        round--;
        if( round < 1) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log("afterEnter", el);
    },
    afterLeave(el) {
      console.log("afterLeave", el);
    },
    enterCancelled(el) {
      console.log("enterCancelled", el);
      clearInterval(this.enterInterval);
    },
    leaveCancelled(el) {
      console.log("leaveCancelled", el);
      clearInterval(this.leaveInterval);
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;

  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-150px); */
  animation: slide-scale 0.3s ease-out forwards;
}
@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}

/* .v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease-out;
}
.v-enter-to,
.v-leave-from {
  opacity: 1;
  transform: translateY(0);
} */

.para-enter-active {
  animation: slide-scale 0.5s ease-in;
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}
.fade-button-enter-active {
  transition: opacity 0.5s ease-out;
}
.fade-button-leave-active {
  transition: opacity 0.5s ease-in reverse;
}
.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}
</style>
