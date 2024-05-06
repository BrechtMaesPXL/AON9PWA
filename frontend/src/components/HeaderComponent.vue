<script>
export default {
  name: "HeaderComponent"
}
</script>

<template>
  <header>
    <div class="logo">
      <v-icon icon="$vuetify-outline" />
      <h2 class="ml-5"><strong>Home PWA</strong></h2>
    </div>
  </header>
</template>

<style scoped>
header {
  background: white;
  border-style: groove;
  height: 78px;
  position: fixed;
  width: 100%;
  z-index: 1000;
}
h1 {
  padding-left: 15px;
}
.logo {
  display: flex;
  padding: 0.5rem;
  align-items: center;
}
img {
  height: 60px;
}
</style>
