<template>
  <div class="container">
    <comp-header />
    <hr />
    <!-- <navbar /> -->
    <social-media-app />
  </div>
</template>

<script>
import CompHeader from "./components/header.vue";
import Navbar from "./components/Navbar.vue";
import SocialMediaApp from "./pages/social_media_app.vue";
export default {
  components: {
    CompHeader,
    Navbar,
    SocialMediaApp
  }
};
</script>
<style></style>
