<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import "../public/style.scss";
import Header from "./components/header.vue";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>
