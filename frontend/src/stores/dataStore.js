import { defineStore } from 'pinia'

import axios from 'axios'

export const dataStore = defineStore('horse', () => {

  const fetchUser = async () => {
    try {

      const response = await axios.get('http://localhost:5173/api/horses', { withCredentials: true })


      if ('user' in window) {
        const cache = await caches.open('user-store');
        await cache.put('http://localhost:5173/api/horses', new Response(JSON.stringify(response.data)));
      }

      return response.data
    } catch (error) {
      console.error('Error while fetching all stallions: ', error)
      throw error;
    }
  }



  const addUser = async (horse) => {
    try {
      const response = await axios.post('http://localhost:5173/api/horses', horse , { withCredentials: true });
      if ('caches' in window) {
        const cache = await caches.open('horse-store');
        await cache.put('http://localhost:5173/api/horses', new Response(JSON.stringify(response.data)));
      }

      return {
        status: response.status,
        data: response.data
      };
    } catch (error) {
      console.error('Error adding horse:', error);
      throw error;
    }
  }
  const getUserById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5173/api/horses/${id}` , { withCredentials: true } )
      if ('caches' in window) {
        const cache = await caches.open('horse-store');
        await cache.put('http://localhost:5173/api/horses', new Response(JSON.stringify(response.data)));
      }

      return response.data
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }


  return {  fetchUser,  addUser, getUserById};

});
