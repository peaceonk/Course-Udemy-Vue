<template>
  <div>
    <active-user 
      :output-user-name="userInfo.userName"
      :output-user-age="userInfo.userAge"
    ></active-user>
    <user-data @show-user-info="onShowUserInfo"></user-data>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        userName: '',
        userAge: ''
      }
    }
  },
  methods: {
    onShowUserInfo(inputUserInfo) {
      this.userInfo.userName = inputUserInfo.inputUserName;
      this.userInfo.userAge = inputUserInfo.inputUserAge;
    }
  },
}
</script>