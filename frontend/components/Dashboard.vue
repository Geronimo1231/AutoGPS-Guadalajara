<template>
  <div>
    <h2>Dashboard</h2>
    <p>Bienvenido, {{ user?.nombre }}</p>
    <nav>
      <router-link to="/perfil">Perfil</router-link> |
      <router-link to="/vehiculos">Vehículos</router-link> |
      <button @click="logout">Cerrar sesión</button>
    </nav>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useUserStore } from '../store'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()
const user = computed(() => userStore.user)

function logout() {
  userStore.logout()
  router.push('/login')
}
</script>

