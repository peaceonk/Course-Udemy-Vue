<template>
  <form @submit.prevent="submitUserInfo">
    <div>
      <label for=""> User Name </label>
      <input type="text" name="" id="" v-model="inputUserName">
    </div>
    <div>
      <label for=""> User Age </label>
      <input type="text" name="" id="" v-model="inputUserAge">
    </div>

    <button> Show UserInfo </button>
  </form>
</template>

<script>
export default {
  emits: {
    'show-user-info': function(userInfo) {
      if(userInfo.inputUserName !=='' && userInfo.inputUserAge !=='') return true;
      else {
        console.warn('please check input!');
        return false;
      }
    }
  },
  data() {
    return {
      inputUserName: '',
      inputUserAge: ''
    }
  },
  methods: {
    submitUserInfo() {
      const userInfo = {
        inputUserName : this.inputUserName,
        inputUserAge : this.inputUserAge
      }

      this.$emit('show-user-info', userInfo);

      this.inputUserName= '';
      this.inputUserAge= '';
    }
  },
}
</script>