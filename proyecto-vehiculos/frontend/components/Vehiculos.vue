<template>
  <div>
    <h2>Vehículos asignados</h2>
    <ul>
      <li v-for="vehiculo in vehiculos" :key="vehiculo.id">
        {{ vehiculo.marca }} {{ vehiculo.modelo }} - Año: {{ vehiculo.anio }} - Estado: {{ vehiculo.estado }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useUserStore } from '../store'

const vehiculos = ref([])
const userStore = useUserStore()

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/vehiculos', {
      headers: { Authorization: `Bearer ${userStore.token}` }
    })
    vehiculos.value = res.data
  } catch (e) {
    console.error('Error al cargar vehículos:', e)
  }
})
</script>
