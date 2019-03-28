<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand>
        <router-link to="/">{{ $t('home') }}</router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav_collapse"/>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" :placeholder="$t('search')"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">{{ $t('search') }}</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Language" right>
            <b-dropdown-item
              v-for="entry in languages"
              :key="entry.title"
              @click="changeLocale(entry.language)"
            >
              <flag :iso="entry.flag" v-bind:squared="false"/>
              {{entry.title}}
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import i18n from "../i18n";
export default {
  name: "my-header",
  data() {
    return {
      languages: [
        { flag: "us", language: "en", title: "English" },
        { flag: "es", language: "es", title: "Español" }
      ]
    };
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    }
  }
};
</script>

<style scoped>
</style>
