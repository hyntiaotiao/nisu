<template>
  <nav-bar />
  <router-view />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
export default {
  components: {
    NavBar,
  },
  setup() {},
};
</script>

<style>
div {
  width: 100%;
  height: 100%;
}
</style>
