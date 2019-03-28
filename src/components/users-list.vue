<template>
  <div>
    <md-card v-for="user in users" :key="user.id">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{user.firstName + ' ' + user.lastName}}</div>
          <div class="md-subhead">{{ user.email }}</div>
        </md-card-header-text>

        <md-card-media>
          <img src="https://vuematerial.io/assets/examples/avatar-2.jpg" alt="People">
        </md-card-media>
      </md-card-header>

      <md-card-actions>
        <md-button @click="$refs.addUserModal.editMode(true, user)">{{ $t('edit') }}</md-button>
        <md-button @click="deleteUser(user.id)">{{ $t('delete') }}</md-button>
      </md-card-actions>
    </md-card>
    <b-button @click="$refs.addUserModal.addMode()">{{ $t('addUser') }}</b-button>
    <add-user-modal ref="addUserModal"></add-user-modal>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AddUserModal from "./add-user-modal";
import router from "../router";
import ApiService from "../api-services/api-sevice.js";

export default {
  name: "users-list",
  components: { AddUserModal },
  computed: {
    ...mapState(["users"])
  },
  created() {
    ApiService.getAll()
      .then(response => {
        this.$store.commit("updateUsers", { users: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    saveList() {
      ApiService.create(this.users)
        .then(response => {
          this.$store.commit("updateUsers", { users: response.data });
        })
        .catch(error => {
          console.log(error);
        });
    },
    navigateToAboutUser(id) {
      router.push({ name: "User info", params: { id } });
    },
    deleteUser(id) {
      ApiService.delete(id).then(() => {
        this.$store.commit("deleteUser", { id });
      });
    }
  }
};
</script>

<style scoped>
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>
