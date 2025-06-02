import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: localStorage.getItem('token') || '',
    user: null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.token,
    isAdminGlobal: (state) => state.user?.rol === 'Administrador Global',
    isAdminNormal: (state) => state.user?.rol === 'Administrador Normal',
    isUser: (state) => state.user?.rol === 'Usuario',
  },
  actions: {
    async login(email, password) {
      const res = await axios.post('http://localhost:3000/api/auth/login', { email, password })
      this.token = res.data.token
      localStorage.setItem('token', this.token)
      await this.fetchUser()
    },
    async fetchUser() {
      const res = await axios.get('http://localhost:3000/api/usuarios/perfil', {
        headers: { Authorization: `Bearer ${this.token}` }
      })
      this.user = res.data
    },
    logout() {
      this.token = ''
      this.user = null
      localStorage.removeItem('token')
    }
  }
})
