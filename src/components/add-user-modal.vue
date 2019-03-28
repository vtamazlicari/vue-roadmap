<template>
  <b-modal ref="modal" title="Submit your user" @ok.prevent="onSubmit">
    <b-form @submit.stop.prevent="onSubmit" v-if="user">
      <b-form-group id="firstName" label-for="firstNameInput">
        <b-form-input
          id="firstNameInput"
          v-validate="'required'"
          name="firstName"
          type="text"
          placeholder="Enter your first name"
          v-model="user.firstName"
          :value="'dasdada'"
        />
        <span
          v-show="fields.firstName && (isError || fields.firstName.touched)"
        >{{ errors.first('firstName') }}</span>
      </b-form-group>
      <b-form-group id="lastName" label-for="exampleInput1">
        <b-form-input
          id="lastNameInput"
          v-validate="'required'"
          name="lastName"
          type="text"
          placeholder="Enter your last name"
          v-model="user.lastName"
        />
        <span
          v-show="fields.lastName && (isError || fields.lastName.touched)"
        >{{ errors.first('lastName') }}</span>
      </b-form-group>
      <b-form-group id="email" label-for="emailInput">
        <b-form-input
          id="emailInput"
          v-validate="'required|email'"
          name="email"
          type="email"
          placeholder="Enter your email"
          v-model="user.email"
        />
        <span v-show="fields.email && (isError || fields.email.touched)">{{ errors.first('email') }}</span>
      </b-form-group>
    </b-form>
  </b-modal>
</template>

<script>
import ApiService from "../api-services/api-sevice.js";

export default {
  name: "add-user-modal",
  computed: {
    users() {
      return this.$store.state.users;
    }
  },
  data() {
    return {
      isError: false,
      user: null,
      isEdit: false
    };
  },
  methods: {
    clearName() {
      this.isError = false;
      this.user = {
        id: null,
        firstName: null,
        lastName: null,
        email: null
      };
    },
    onSubmit() {
      this.$validator.validate().then(valid => {
        if (valid) {
          if (this.isEdit) {
            ApiService.update(this.user.id, this.user).then(response => {
              this.$store.commit("editUser", { user: response.data });
            });
          } else {
            ApiService.create(this.user).then(response => {
              this.$store.commit("addUser", { newUser: response.data });
            });
          }
          this.isError = false;
          this.$nextTick().then(() => {
            this.$refs.modal.hide();
          });
        } else {
          this.isError = true;
        }
      });
    },
    editMode(isEdit, userForEdit) {
      const { ...data } = userForEdit;
      this.user = { ...data };
      this.isEdit = isEdit;
      this.$refs.modal.show();
    },
    addMode() {
      this.user = {
        id: null,
        firstName: null,
        lastName: null,
        email: null
      };
      this.$refs.modal.show();
    }
  }
};
</script>
