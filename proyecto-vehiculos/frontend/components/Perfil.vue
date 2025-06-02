<template>
  <div>
    <h2>Perfil</h2>
    <div v-if="user">
      <p>Nombre: {{ user.nombre }}</p>
      <p>Apellido: {{ user.apellido }}</p>
      <p>Correo: {{ user.email }}</p>
      <p>Teléfono: {{ user.telefono }}</p>
      <p>Rol: {{ user.rol }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useUserStore } from '../store'

const userStore = useUserStore()
const user = computed(() => userStore.user)

onMounted(async () => {
  if (!userStore.user) {
    await userStore.fetchUser()
  }
})
</script>
