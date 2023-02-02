<template>
  <nav class="navbar">
    <router-link tag="li" :to="{ name: 'home' }" class="navbar__item" exact
      ><a>Home</a></router-link
    >
    <router-link
      tag="li"
      :to="{ name: 'social-media-app' }"
      class="navbar__item"
      ><a>Social media app</a></router-link
    >
  </nav>
</template>

<script>
import router from "../routes";
export default {
  name: "Navbar"
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  background-color: rgb(226, 226, 226);
}

.navbar__item {
  list-style: none;
  padding: 0 15px;
}

.navbar__item a {
  color: black;
  text-decoration: none;
}
</style>
