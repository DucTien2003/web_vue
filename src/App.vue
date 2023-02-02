<template>
  <div class="container">
    <comp-header />
    <hr />
    <navbar />
    <router-view />
  </div>
</template>

<script>
import CompHeader from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";
import Home from "./views/Home.vue";
export default {
  components: { CompHeader, Navbar, Home }
};
</script>

<style></style>
