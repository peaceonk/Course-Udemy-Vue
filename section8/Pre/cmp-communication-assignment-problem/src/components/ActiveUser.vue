<template>
  <section>
    <div>
      <h2 > {{ outputUserName === '' ? 'User Name' : outputUserName}} </h2>
      <h3> {{ outputUserAge === '' ? 'User Age' : outputUserAge}} </h3>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    outputUserName: {
      type: String,
      required: true
    },
    outputUserAge: {
      type : String,
      required: true
    }
  }
}
</script>