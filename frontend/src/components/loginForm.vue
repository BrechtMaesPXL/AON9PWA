<template>
  <body class="fill-height">
  <div>
    <img src="../assets/logoTinkerstal.png" alt="logo">
    <form class="mx-auto pa-5 pb-8" @submit.prevent="submitForm">
      <v-alert v-if="error" type="error">{{errorMessage}}</v-alert>
      <div class="mt-1 text-subtitle-1 text-medium-emphasis">E-mailadres</div>

      <v-text-field
          density="compact"
          placeholder="E-mailadres"
          prepend-inner-icon="mdi-email-outline"
          v-model="username"
          required
          class="text-field"
          hide-details
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Wachtwoord
      </div>

      <v-text-field
          v-model="password"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"

          placeholder="Voer je wachtwoord in"
          prepend-inner-icon="mdi-lock-outline"
          required
          class="text-field password"
          hide-details
          @click:append-inner="visible = !visible"
      ></v-text-field>


      <v-btn class="mb-8" size="large" variant="tonal" type="submit" block> Log In</v-btn>
    </form>
  </div>
  </body>
</template>

<script>
import {useUserStore} from '@/stores/userStore'

export default {
  data() {
    return {
      username: '',
      password: '',
      visible: false,
      error: false,
      errorMessage: ''
    }
  },
  methods: {
    async submitForm() {
      const responseStatus = await useUserStore().login(this.username, this.password)
      if (responseStatus === 200) {
        this.error = false
        // this.$router.go(-1);
        this.$router.push({name: 'account'})
      } else if (responseStatus === 401) {
          this.errorMessage = 'Email of wachtwoord is onjuist'
          this.error = true
      } else {
        this.errorMessage = 'Er is iets misgegaan, probeer het later opnieuw'
        this.error = true
      }
    }
  }
}
</script>
<style scoped>
body {
  background-color: #e5dcc9;
  height: 100%;
}

img {
  height: 250px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-top: 125px;
}

h1 {
  margin-left: 20px;
  margin-top: 40px;
}

.text-field {
  border: 1px solid black;
  border-radius: 5px;
  background-color: #f5ecbd;
  margin-bottom: 15px;
}

.text-subtitle-1 {
  font-weight: bolder;
}

.password {
  margin-bottom: 20px;
}

.mb-8 {
  border: 1px solid black;
  background-color: white;
  font-weight: bold;
}
</style>
