import { defineStore } from 'pinia'
import axios from 'axios'
import VueCookies from 'vue-cookies'

export const useUserStore = defineStore('user', () => {

  const login = async () => {
    try {
      const params = new URLSearchParams();
      params.append('username', "gijs.rommers@gmail.com");
      params.append('password', "qwerty");

      const response = await axios.post('http://localhost:5173/api/login', params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        withCredentials: true
      });
      if (response.status === 200) {
        const userInfo = await getUserInfo();
        VueCookies.set('userInfo', JSON.stringify(userInfo));
      }

      return response.status
    } catch (error) {
      return error.response.status
    }
  }

  const getUserInfo = async () => {
    try {
      const response = await axios.get('http://localhost:5173/api/user', { withCredentials: true })
      return response.data
  } catch (error) {
      console.log('Error: ', error)
    }
  }



    return { login, getUserInfo};
  });