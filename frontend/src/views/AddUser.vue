<script>
import { dataStore } from '@/stores/dataStore.js'
import VueCookies from 'vue-cookies'

export default {
  name: 'AddHorse',
  data() {
    return {
      name: '',
      gsm: '',
      birthYear: '',
      log: '',
      birthDate: '',
      error: null,
      user: VueCookies.get('userInfo'),
      selectedGender: 'Merrie'
    }
  },
  methods: {
    goToHomePage() {
      return this.$router.push({ name: 'home' })
    },
    async clickAddHorse() {
      try {
        const size = parseFloat(this.gsm.replace(',', '.'))

        if (isNaN(size) || size <= 0) {
          throw new TypeError('Invalid value for GSM')
        }

        if (this.name === '' || this.birthYear === '') {
          throw new TypeError('Please fill in all required fields')
        }
        const birthDate = new Date(this.birthYear, 0, 1)

        const loging = {
          year: new Date().getFullYear(),
          log: this.Log
        }

        const user = {
          name: this.name,
          gsm: size,
          birthDate: birthDate,
          log: JSON.stringify(loging)
        }

        const response = await dataStore().addUser(user)

        if (response) {
          this.$router.push('/')
        }
      } catch (error) {
        this.error = error.message || 'An error occurred while adding the horse.'
      }
    },

    async startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const videoElement = this.$refs.video;
        videoElement.srcObject = stream;
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    },
    stopCamera() {
      const videoElement = this.$refs.video;
      const stream = videoElement.srcObject;
      const tracks = stream.getTracks();

      tracks.forEach(track => track.stop());
      videoElement.srcObject = null;
    }
  }
}
</script>

<template>
  <header>
    <div class="header-content">
      <img src="../assets/arrow_back_FILL0_wght400_GRAD0_opsz24.png" alt="go back" class="go-back" @click="goToHomePage" />
      <h1><strong>Data adding</strong></h1>
    </div>
  </header>

  <v-form class="ma-5 mt-16 d-flex flex-column">
    <br />
    <v-text-field
      variant="outlined"
      v-model="name"
      label="Name"
      required
      class="mt-5"
    ></v-text-field>
    <v-text-field
      variant="outlined"
      v-model="gsm"
      label="gsm-nummer"
      required
      type="number"
    ></v-text-field>
    <v-text-field
      variant="outlined"
      v-model="birthYear"
      label="Geboortejaar"
      required
      type="number"
    ></v-text-field>
    <v-btn class="mt-5 blue"  @click="clickAddHorse">
      <a>Voeg Toe</a>
    </v-btn>
  </v-form>


  <div>
    <h1>Camera Access Demo</h1>
    <video ref="video" autoplay></video>
    <v-btn class="mt-5 blue"   @click="startCamera">Start Camera</v-btn>
    <v-btn class="mt-5 blue"   @click="stopCamera">Stop Camera</v-btn>
  </div>


  <div>
    <v-alert title="Oops something went wrong!" v-show="error" type="error" class="mx-5">
      {{ error }}
    </v-alert>
  </div>
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
.header-content {
  display: flex;
  align-items: center;
}

.go-back {
  height: 50px;
  margin: 14px;
  padding: 5px;
}

h1 {
  flex: 1;
  text-align: center;
  position: relative;
  left: 10px;
}
.blue {
  background-color: cornflowerblue;
}

a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}
</style>
