<template>
  <HeaderComponent />
  <div class="container">
    <router-view></router-view>
  </div>
  <InfoComponent/>
  <FooterComponent/>
</template>

<script lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import InfoComponent from './components/InfoComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  components: {
    HeaderComponent,
    InfoComponent,
    FooterComponent
  }
}
</script>

<style scoped>
</style>
