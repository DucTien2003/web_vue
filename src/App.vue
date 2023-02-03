<template>
  <div class="container">
    <comp-header />
    <hr />
    <navbar />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import CompHeader from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";
export default {
  components: { CompHeader, Navbar }
};
</script>

<style></style>
