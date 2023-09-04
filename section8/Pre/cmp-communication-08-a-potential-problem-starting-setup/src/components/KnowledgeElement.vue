<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <!-- <button @click="$emit('select-topic', id)">Learn More</button> -->
    <button @click="selectTopic(id)">Learn More</button>  <!-- app.vue에서 provide한 selectTopic -->
  </li>
</template>

<script>
export default {
  props: ['id', 'topicName', 'description'],
  emits: ['select-topic'],
  inject: ['selectTopic']
};
</script>