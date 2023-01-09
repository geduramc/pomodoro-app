<template>
  <HeaderComponent />
  <div class="container">
    <router-view></router-view>
  </div>
  <InfoComponentVue/>
</template>

<script lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import InfoComponentVue from './components/InfoComponent.vue'

export default {
  components: {
    HeaderComponent,
    InfoComponentVue
  }
}
</script>

<style scoped>
</style>
