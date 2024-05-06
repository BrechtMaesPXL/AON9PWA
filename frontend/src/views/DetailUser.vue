<script>
import { dataStore } from '@/stores/dataStore.js'
import { useRouter } from 'vue-router'



export default {
  name: 'DetailHorseView',
  data() {
    return {
      name: '',
      gsmNumber: '',
      birthYear: '',
      isRecording: false,
      mediaRecorder: null,
      recordedChunks: [],
    }
  },
  async setup() {
    const router = useRouter()
    const userId = router.currentRoute.value.params.id
    const User = await dataStore().getUserById(parseInt(userId))
    const coverDates = User.coverDates


    return {

      user: User,
      coverDates,
    }
  },
  computed: {

  },

  methods: {
    goToHomepage() {
      this.$router.push({ name: 'home' })
    },
    async startRecording() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        this.mediaRecorder = new MediaRecorder(stream);
        this.mediaRecorder.ondataavailable = event => {
          if (event.data.size > 0) {
            this.recordedChunks.push({ blob: event.data, date: new Date() });
          }
        };
        this.mediaRecorder.start();
        this.isRecording = true;
      } catch (error) {
        console.error('Error accessing microphone:', error);
      }
    },
    stopRecording() {

      if (this.mediaRecorder && this.isRecording) {
        this.mediaRecorder.stop();
        this.isRecording = false;
        console.log('Recording stopped');
      }
    },
    async replayRecording(blob) {
      const audioUrl = URL.createObjectURL(blob);
      const audio = new Audio(audioUrl);
      audio.play();
    }
  }
}
</script>

<template>
  <header>
    <div class="header-content">
      <img src="../assets/arrow_back_FILL0_wght400_GRAD0_opsz24.png" alt="go back" class="go-back" @click="goToHomepage"/>
      <h1>
        <strong>{{ user.name }}</strong>
      </h1>
    </div>
  </header>

  <v-container class="container ">
    <v-col class="columLayout">
      <div>Geboortejaar</div>
      <div class="userLayout">{{ new Date(user.birthDate).getFullYear() }}</div>
    </v-col>

    <v-col class="columLayout">
      <div>gsm number</div>
      <div class="userLayout">+{{ user.seize }}</div>
    </v-col>

    <v-col class="columLayout d-flex flex-column">

      <div>
        <h1>Voice Recording Demo</h1>
        <v-btn @click="startRecording()" :disabled="isRecording">Start Recording</v-btn>
        <v-btn @click="stopRecording()" :disabled="!isRecording">Stop Recording</v-btn>
      </div>
      <div class="logbook">
        <div v-for="(entry, index) in recordedChunks" :key="index" class="logbook-entry">
          <span>{{ entry.date }}</span>
          <v-btn v-show="entry" @click="replayRecording(entry.blob)">Replay</v-btn>
        </div>
      </div>
      <br/>
    </v-col>

    <br/>
    <hr/>
    <br/>




  </v-container>

</template>

<style scoped>
.container {
  position: relative;
  top: 78px;
}

header {
  background: white;
  border-style: groove;
  height: 78px;
  position: fixed;
  width: 100%;
  z-index: 1000;
}

.header-content {
  width: 100%;
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
  margin-right: 98px;
}
.columLayout{
  text-align: center;


  border-style: groove;
  padding: 5px;
  margin-top: 10px;
}

.userLayout {
  border-style: groove;

  background-color: white;
  width: 100px;
  text-align: center;
  margin-left: auto;
  margin-right: 45%;
}



</style>
