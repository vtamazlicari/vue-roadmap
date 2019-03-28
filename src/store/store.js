import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    users: []
  },
  getters: {
    getById: state => id => {
      return state.users.find(user => user.id === id);
    }
  },
  mutations: {
    editUser: (state, edit) => {
      const index = state.users.findIndex((e) => e.id === edit.user.id);
      state.users[index] = Object.assign(state.users[index], edit.user);
    },
    updateUsers: (state, update) => {
      state.users = update.users;
    },
    addUser: (state, add) => {
      state.users.push(add.newUser);
    },
    deleteUser: (state, deleteUser) => {
      state.users = state.users.filter(obj => {
        return obj.id !== deleteUser.id;
      });
    }
  }
});
