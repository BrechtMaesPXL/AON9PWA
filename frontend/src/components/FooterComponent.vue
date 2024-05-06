<script>

import {RouterView} from "vue-router";
export default {
  name: "FooterComponent",
  components: {RouterView,}
}
</script>

<template>
  <footer>
    <div class="wrapper">
      <nav>
<!--        <RouterLink to="/">-->
<!--          <IconHome />-->
<!--        </RouterLink>-->
<!--        <RouterLink to="/notifications">-->
<!--          <IconNotification />-->
<!--        </RouterLink>-->
<!--        <RouterLink to="/account">-->
<!--          <IconAccount />-->
<!--        </RouterLink>-->
      </nav>
    </div>
  </footer>
  <div class="router"><Suspense><RouterView /></Suspense></div>
</template>

<style scoped>
footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 1000;
}

.router {
  padding-top: 75px;
  padding-bottom: 65px;
}

nav {
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  text-align: center;
  padding: 1rem 0;
  justify-content: center;
  background: white;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1.5rem;
}

nav a svg {
  width: 2.5rem;
  height: 2.5rem;
}

nav a:first-of-type {
  border: 0;
}
</style>
