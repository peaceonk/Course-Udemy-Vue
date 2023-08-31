const app = Vue.createApp({
  data() {
    return {
      detailsIsAreVisible: false,
      /* 
      detailIsVisibleA: false
      detailIsVisibleB: false
      detailIsVisibleC: false
      */
      friends: [
        {
          id: 'peace',
          name: 'peace kim',
          phone: '01011112222',
          email: 'peace@peace.kim',
          detailsIsVisible: false
        },
        {
          id: 'mijeong',
          name: 'mijoeng kang',
          phone: '01033334444',
          email: 'mijeong@mijoeng.kang',
          detailsIsVisible: false
        },
        {
          id: 'junghoon',
          name: 'junghoon kim',
          phone: '01055556666',
          email: 'junghoon@junghoon.kim',
          detailsIsVisible: false
        },
      ]
    }
  },
  methods: {
    toggleAllDetails() {
      this.detailsIsAreVisible = !this.detailsIsAreVisible;
      this.friends.forEach(friend => {
        friend.detailsIsVisible = this.detailsIsAreVisible;
      })
    },
    toggleDetails(id) {
      let allVisible = true;

      this.friends.forEach(friend => {
        if(friend.id === id) {
          friend.detailsIsVisible = !friend.detailsIsVisible;
        }
        if(!friend.detailsIsVisible) {
          allVisible = false;
        }

      });
      
      this.detailsIsAreVisible = allVisible;
    }
  }
});

app.mount('#app');


// document.querySelector('#app').style = 'display:none';

/* app2 */

const app2 = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'peace',
          name: 'peace kim',
          phone: '01011112222',
          email: 'peace@peace.kim',
        },
        {
          id: 'mijeong',
          name: 'mijoeng kang',
          phone: '01033334444',
          email: 'mijeong@mijoeng.kang',
        },
        {
          id: 'junghoon',
          name: 'junghoon kim',
          phone: '01055556666',
          email: 'junghoon@junghoon.kim',
        },
      ]
    }
  }
})

app2.component('friend-contact',{
  template: `
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails()">{{ detailsAreVisible ? 'hide' : 'show' }} Details</button>
    <ul v-show="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      detailsAreVisible:false,
      friend: {
        id: 'peace',
        name: 'peace kim',
        phone: '01011112222',
        email: 'peace@peace.kim'
      }
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  },
});

app2.mount('#app2');