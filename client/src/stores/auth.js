import { defineStore } from 'pinia'
import axios from 'axios'
export const useAuthStore = defineStore('auth', {
  state: () => ({
    // baseUrl: 'http://localhost:3000/auth/',
    baseUrl: 'https://facultydigital.flixy.online/auth/',
    hasLogin: false
  }),
  actions: {
    async register(data) {
      try {
        await axios.post(this.baseUrl + 'register', data)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Successfully Registered!',
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
        const access_token = data.access_token
        localStorage.setItem('access_token', access_token)
        this.router.push('/')
        this.hasLogin = true
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
      }
    },
    async handleGoogleLogin(response) {
      try {
        const { data } = await axios.post(
          this.baseUrl + 'google-login',
          {},
          { headers: { google_token: response.credential } }
        )
        const access_token = data.access_token
        localStorage.setItem('access_token', access_token)
        this.router.push('/')
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
          text: 'Oops, something went wrong'
        })
        console.log(error)
      }
    }
  }
})
