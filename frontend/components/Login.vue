<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="email" type="email" placeholder="Correo" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <button type="submit">Entrar</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '../store'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')
const userStore = useUserStore()
const router = useRouter()

async function handleLogin() {
  try {
    await userStore.login(email.value, password.value)
    router.push('/dashboard')
  } catch (e) {
    error.value = 'Credenciales inválidas'
  }
}
</script>
