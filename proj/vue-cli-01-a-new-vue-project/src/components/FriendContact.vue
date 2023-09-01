<template>
  <li>
    <!-- <h2> {{ friend.name }}</h2> -->
    <!-- <h2> {{ name }} {{ friendIsFavorite ? '(Favorite)' : '' }}</h2> -->
    <h2> {{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
    <!-- <button @click="toggleFavorite">{{ friendIsFavorite ? 'disfavorite' : 'favorite' }} </button> -->
    <button @click="toggleFavorite">{{ isFavorite ? 'disfavorite' : 'favorite' }} </button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-show="detailsAreVisible">
      <li>
        <!-- <strong>Phone : </strong> {{ friend.phone }} -->
        <strong>Phone : </strong> {{ phoneNumber }}
      </li>
      <li>
        <!-- <strong>Email : </strong> {{ friend.email }} -->
        <strong>Email : </strong> {{ emailAddress }}
      </li>
    </ul>

    <button @click="deleteFriend">Delete</button>
  </li>
</template>

<script>
export default {
  /* props: [
    'name',
    'phoneNumber',
    'emailAddress',
    'isFavorite'
  ], */
  /* props: {
    name: String,
    phoneNumber: String,
    emailAddress: String,
    isFavorite: String
  }, */
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required : true,
      default : ''
    },
    phoneNumber: {
      type: String,
      required : true,
      default : ''
    },
    emailAddress: {
      type: String,
      required : true,
      default : ''
    },
    /* isFavorite: {
      type: String,
      required : false,
      default : '0',
      validator : function(value) {
				return value === '1' || value === '0';
			} */
    isFavorite: {
      type: Boolean,
      required : false,
      default : false
    },
  },
  // emits: ['toggle-favorite'],
  emits: {
    'toggle-favorite': function(id) {
      // 유효성 검사
      if(id) return true;
      else {
        console.warn('Id is missing!');
        return false;
      }
    },
    'delete': function(id) {
      if(id) return true;
      else {
        console.warn('Id is missing! you can\'t delete.');
        return false;
      }
    }
  },
  /* beforeMount() {
    this.isFavorite === '1' ? this.friendIsFavorite = true : this.friendIsFavorite = false;
    console.log(this.friendName + " : " + this.friendIsFavorite);
  }, */
  data() {
    return {
      detailsAreVisible: false,
      // friendIsFavorite: false,
      // friendIsFavorite: this.isFavorite,
      /* friend: {
        id: 'peace',
        name: 'peace kim',
        phone: '01011112222',
        email: 'peace@peace.kim'
      }, */
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      // this.friendIsFavorite = !this.friendIsFavorite;
      this.$emit('toggle-favorite', this.id);
    },
    deleteFriend() {
      this.$emit('delete', this.id);
    }
  }
}
</script>