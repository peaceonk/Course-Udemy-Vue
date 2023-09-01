<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <ul>
      <new-friend @add-contact="onAddContact"></new-friend>
      <!--
      <friend-contact
        name="name1"
        phone-number="phoneNumber1"
        email-address="email1@email1.email1"
        is-favorite="1"
      ></friend-contact> 
      <friend-contact
        name="name2"
        phone-number="phoneNumber2"
        email-address="email2@email2.email2"
      ></friend-contact>
      -->

      <friend-contact
        v-for="(friend, index) in friends"
        :index="index"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favorite="friend.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
        @delete="deleteContact"
      ></friend-contact>
      
    </ul>
  </section>
</template>

<script>

// const app = {
export default {
  data() {
    return {
      friends: [
        {
          id: 'peace',
          name: 'peace kim',
          phone: '01011112222',
          email: 'peace@peace.kim',
          isFavorite: true
        },
        {
          id: 'mijeong',
          name: 'mijoeng kang',
          phone: '01033334444',
          email: 'mijeong@mijoeng.kang',
          isFavorite: false
        },
        {
          id: 'junghoon',
          name: 'junghoon kim',
          phone: '01055556666',
          email: 'junghoon@junghoon.kim'
        },
      ]
    }
  },
  methods: {
    toggleFavoriteStatus(friendId) {
      const identifiedFriend = this.friends.find(friend => friend.id == friendId);
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    },
    onAddContact(data) {
      const newFriendContact = {
        id: new Date().toISOString(),
        name: data.enteredName,
        phone: data.enteredPhone,
        email: data.enteredEmail,
        isFavorite : false
      }
      this.friends.push(newFriendContact);
    },
    deleteContact(friendId) {
      console.log('delete', friendId);
      this.friends = this.friends.filter((friend) => friend.id !== friendId);
      console.log(this.friends);
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    font-family: 'Jost', sans-serif;
  }

  body {
    margin: 0;
  }

  header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1rem;
    background-color: #58004d;
    color: white;
    text-align: center;
    width: 90%;
    max-width: 40rem;
  }

  #app ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  #app li {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 1rem auto;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    width: 90%;
    max-width: 40rem;
  }

  #app h2 {
    font-size: 2rem;
    border-bottom: 4px solid #ccc;
    color: #58004d;
    margin: 0 0 1rem 0;
  }

  #app button {
    font: inherit;
    cursor: pointer;
    border: 1px solid #ff0077;
    background-color: #ff0077;
    color: white;
    padding: 0.05rem 1rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  }

  #app button:hover,
  #app button:active {
    background-color: #ec3169;
    border-color: #ec3169;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
  }

  #app form {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 1rem auto;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    width: 90%;
    max-width: 40rem;
  }

  #app input {
  font: inherit;
  padding: 0.15rem;
  }

  #app label {
    font-weight: bold;
    margin-right: 1rem;
    width: 7rem;
    display: inline-block;
  }

  #app form div {
    margin: 1rem 0;
  }
</style>