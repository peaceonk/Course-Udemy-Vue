<template>
  <li>
    <h2> {{ friend.name }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-show="detailsAreVisible">
      <li>
        <strong>Phone : </strong> {{ friend.phone }}
      </li>
      <li>
        <strong>Email : </strong> {{ friend.email }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 'peace',
        name: 'peace kim',
        phone: '01011112222',
        email: 'peace@peace.kim'
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  },
}
</script>