<template>
  <div class="container">
    <HeaderComponent />
    <router-view></router-view>
    <InfoComponent/>
  </div>
</template>

<script lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import InfoComponent from './components/InfoComponent.vue'

export default {
  components: {
    HeaderComponent,
    InfoComponent
  }
}
</script>

<style scoped>
</style>
