<template>
  <ul>
    <TransitionGroup tag="ul">
      <li v-for="(user) in users" :key="user" @click="removeUser(user)"> {{ user }}</li>
    </TransitionGroup>
  </ul>

  <div>
    <input type="text" ref="userNameInput">
    <button @click="addUser">Add User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users:  ['평화', '승훈', '조형', '종현', '다레']
    }
  },
  methods: {
    addUser() {
      const enteredUserName = this.$refs.userNameInput.value;
      // this.users.push(enteredUserName);
      this.users.unshift(enteredUserName);
    },
    removeUser(user) {
      this.users = this.users.filter(u => u !== user)
    }
  },
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}
</style>