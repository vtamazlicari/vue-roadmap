import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  'en': {
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email',
    delete: 'Delete',
    edit: 'Edit',
    addUser: 'Add user',
    home: 'Home',
    search: 'Search'
  },
  'es': {
    firstName: 'Nombre de pila',
    lastName: 'Apellido',
    email: 'Correo electrónico',
    delete: 'Borrar',
    edit: 'Editar',
    addUser: 'Agregar usuario',
    home: 'Casa',
    search: 'Buscar'
  }
};

export default new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'es', // set fallback locale
  messages, // set locale messages
});
