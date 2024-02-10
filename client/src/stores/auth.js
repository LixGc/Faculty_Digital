import { defineStore } from 'pinia'
import axios from 'axios'
export const useAuthStore = defineStore('auth', {
  state: () => ({
    baseUrl: 'http://localhost:3000/auth/',
    hasLogin: false
  }),
  actions: {
    async register(data) {
      try {
        const { data } = await axios.post(this.baseUrl + 'register', data)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: data.message,
          showConfirmButton: false,
          timer: 3000
        })
        this.router.push('/login')
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message
        })
        console.log(error)
      }
    },
    async login(value) {
      try {
        const { data } = await axios.post(this.baseUrl + 'login', value)
        console.log(data)
        const access_token = data.access_token
        localStorage.setItem('access_token', access_token)
        this.router.push('/')
        this.hasLogin = true
        const role = data.role
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Successfully Logged In!',
          showConfirmButton: false,
          timer: 3000
        })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message
        })
        console.log(error)
      }
    },
    async handleGoogleLogin(response) {
      try {
        const { data } = await axios.post(
          this.baseUrl + 'google-login',
          {},
          { headers: { google_token: response.credential } }
        )
        localStorage.setItem('access_token', data.access_token)
        this.router.push('/')
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Successfully Logged In!',
          showConfirmButton: false,
          timer: 3000
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
})
