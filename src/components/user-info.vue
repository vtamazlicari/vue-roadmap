<template>
  <div v-if="isLoaded">
    <b-card
      :title="user.firstName + ' ' +  user.lastName"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>Email: {{user.email}}</b-card-text>

      <b-button @click="goBack()" variant="primary">Go back</b-button>
    </b-card>
  </div>
</template>

<script>
import ApiService from "../api-services/api-sevice.js";
import router from "../router";

export default {
  name: "user-info",
  data() {
    return {
      user: null,
      isLoaded: false
    };
  },
  methods: {
    goBack() {
      router.push({ name: "User list" });
    }
  },
  beforeMount() {
    ApiService.get(this.$route.params.id).then(response => {
      this.user = response.data;
      this.isLoaded = true;
    });
  }
};
</script>
