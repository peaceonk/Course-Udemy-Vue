<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="">Name</label>
      <input type="text" name="" id="" v-model="enteredName">
    </div>
    <div>
      <label for="">Phone</label>
      <input type="tel" name="" id="" v-model="enteredPhone">
    </div>
    <div>
      <label for="">E-mail</label>
      <input type="email" name="" id="" v-model="enteredEmail">
    </div>
    
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: {
    'add-contact': function(data) {
      if(data) return true;
      else return false;
    }
  },
  data() {
    return {
      enteredName: '',
      enteredPhone: '',
      enteredEmail: '',
    }
  },
  methods: {
    submitData() {
      const data = {
        enteredName : this.enteredName,
        enteredPhone : this.enteredPhone,
        enteredEmail : this.enteredEmail,
      }
      this.$emit('add-contact', data);

      this.enteredName = '';
      this.enteredPhone= '';
      this.enteredEmail= '';
    }
  },
}
</script>