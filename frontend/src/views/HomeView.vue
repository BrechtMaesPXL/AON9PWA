<script>
import { dataStore } from '@/stores/dataStore.js'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { useUserStore } from '@/stores/userStore.js'

let allUser



export default {
  name: 'HomeView',
  components: { HeaderComponent, FooterComponent },
  data() {
    return {
      allUsers: allUser,
      user: null
    }
  },
  async setup() {

    if (navigator.onLine) {

      const responseStatus = await useUserStore().login()

      if (responseStatus === 200) {
        console.log('T')

      }else {
        console.log(responseStatus)
      }
      const horses = await dataStore().fetchUser()
      allUser = horses
      console.log(horses)


      localStorage.setItem('user', JSON.stringify(allUser))

    } else if (!navigator.onLine) {
      const storedHorses = localStorage.getItem('user')

      if (storedHorses) {
        allUser = JSON.parse(storedHorses)

      } else {
        console.log("error: network offline")
      }
    }

    return allUser
  },
  methods: {

    goToDetailPage(id) {
      this.$router.push({ name: 'detailUser', params: { id } })
    }
  }
}

</script>

<template>
  <header-component />
  <div class="wrapper">
    <v-container class="container">

      <v-sheet>
        <h1 class="text-center font-weight-high">User's:</h1>
      </v-sheet>
      <v-list v-for="user in allUsers" :key="user" cols="6" sm="6">
        <v-hover v-slot="{ isHovering, props }">
          <v-sheet :class="{ 'on-hover': isHovering }" :elevation="isHovering ? 16 : 2" v-bind="props"
                   class="container-sheet" @click="goToDetailPage(user.id)" style="position: relative;">
            <h1 class="text-center font-weight-medium">{{ user.name }}</h1>
          </v-sheet>
        </v-hover>
      </v-list>


    </v-container>
    <v-col cols="auto">
      <v-btn class="d-flex addIcon text-center" icon="mdi-calendar" size="x-large" to="/AddData"><span
        style="font-size: 40px;margin-bottom: 5px;">+</span></v-btn>
    </v-col>
  </div>
  <footer-component />
</template>

<style scoped>
.wrapper {
  position: relative;
  top: 78px;
}

.container {
  margin-top: -5px;
}

.container-sheet {
  background-color: white;
  height: auto;
  padding: 5px;
  margin: 5px;
  border-style: groove;

}


.addIcon {
  align-content: baseline;
  position: fixed;
  bottom: 95px;
  right: 9px;
  background-color: black;
  color: white;
}


</style>
